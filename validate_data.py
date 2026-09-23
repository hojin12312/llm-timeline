"""Validate the audited model catalog and the generated browser dataset."""

from __future__ import annotations

import argparse
import json
import math
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse
from urllib.error import HTTPError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parent
CATALOG = ROOT / "models_catalog.json"
DATA_JS = ROOT / "data.js"

OFFICIAL_HOSTS = {
    "ai.google.dev",
    "ai.meta.com",
    "alibabagroup.com",
    "anthropic.com",
    # ByteDance static CDN — hosts the official Seed2.0 model-card PDF.
    "bytednsdoc.com",
    # NAVER CLOVA tech blog — official HyperCLOVA X SEED 4B benchmarks.
    "clova.ai",
    "api-docs.deepseek.com",
    # 1st-party vendor research/newsroom domains (Meta AI Research blog, Google
    # official blog). Added 2026-09-08 because Muse Spark 1.3 and Gemini 3.8
    # Flash Cyber are only announced there, not on ai.meta.com/deepmind.google.
    "blog.google",
    "cohere.com",
    # Cognition (SWE-2 launch post) — added 2026-09-16.
    "cognition.com",
    "deepai.google",
    "deepmind.google",
    "deepseek.com",
    "deploymentsafety.openai.com",
    "developers.openai.com",
    "docs.cloud.google.com",
    "docs.z.ai",
    "ernie.baidu.com",
    # Gensyn open-1b verification record. Added 2026-09-16.
    "gensyn.ai",
    "huggingface.co",
    "arxiv.org",
    # IFM / MBZUAI launch pages (K2 Horizon). Added 2026-09-08; the site serves a
    # JS challenge to HEAD requests but answers the validator's GET with HTTP 200.
    "ifm.ai",
    # Moonshot AI official Kimi Code documentation (K2.8 Preview release notes
    # and model configuration). Added 2026-09-19.
    "kimi.com",
    "lgresearch.ai",
    "mimo.xiaomi.com",
    # Nex-AGI official site — Nex-N2.5 family parameter/base-model disclosure.
    # Added 2026-09-23.
    "nex-agi.com",
    "navercorp.com",
    "news.sktelecom.com",
    "openai.com",
    "poolside.ai",
    "qwen.ai",
    "qwencloud.com",
    "research.meta.ai",
    # Salesforce newsroom (Koa reasoning model announcement). Added 2026-09-16.
    "salesforce.com",
    "sarvam.ai",
    "seed.bytedance.com",
    "static.stepfun.com",
    "tech.meituan.com",
    "thinkingmachines.ai",
    # TypeSafe AI official blog (typesafe.ai) and docs (docs.typesafe.ai)
    # — Jev / System One launch. Added 2026-09-23.
    "typesafe.ai",
    # Upstage official blog (upstage.ai) and Console docs (console.upstage.ai)
    # — Solar Pro 4 / Solar Mini 4 releases. Added 2026-09-23.
    "upstage.ai",
    "x.ai",
}

FORBIDDEN_BENCHMARK_TERMS = (
    "arena",
    "elo",
    "artificial analysis",
    "aaii",
    "aa intelligence",
    "codearena",
)

# Exact-name exceptions to the forbidden substrings. "MathArena Apex" and
# "WebArena-Verified" are fixed evaluation suites published as benchmarks (not
# crowdsourced leaderboards or ratings), so the bare "arena" substring must not
# block them. Added 2026-09-16 for DeepSeek-V4.1-Flash's model card and
# OpenAI's GPT-5.4 announcement respectively.
ALLOWED_BENCHMARK_NAMES = {
    "matharena apex (pass@1)",
    "webarena-verified",
    # 고정 평가 스위트(리더보드가 아닌 수치 평가) — 정확 명칭 예외
    "matharena apex",
    "matharena apex 2025",
    # MathArena Apex fixed-suite variants from the Seed2.0 card and the
    # DeepSeek-V4 tech report (shortlist split + per-thinking-mode columns).
    "matharena apex (shortlist)",
    "matharena apex (non-think)",
    "matharena apex (think-high)",
    "matharena apex (think-max)",
    "matharena apex shortlist (non-think)",
    "matharena apex shortlist (think-high)",
    "matharena apex shortlist (think-max)",
    "arena hard (instruct)",
    "arena hard (reasoning)",
    "arena-hard-v2 (3b)",
    "arena-hard-v2 (8b)",
    "arena-hard-v2 (30b)",
    "arenahard (3b)",
    "arenahard (8b)",
    "arenahard (30b)",
    "marenahard-v2 (66 langs)",
    "marenahard language-consistency pass rate",
    # GigaChat 3.5 Reasoning card (2026-09-10): publisher-run win-rate metrics
    # with a stated judge (MiniMax-M2.7) and baseline (GPT-5.2), not crowdsourced
    # leaderboards — the card footnote defines them as first-party evals.
    "arena hard logs v3",
    "arena hard ru",
    "ru llm arena",
    # WindowsAgentArena is a fixed Microsoft evaluation suite (like WebArena),
    # not a crowdsourced leaderboard — Hunmin-397B-A17B-CUA card.
    "windowsagentarena (153)",
    # Solar Pro 4 official blog (2026-09-23): the asterisked table footnote marks
    # these as in-house evaluations under Upstage's internal harness, i.e.
    # publisher-run fixed-suite scores, not the crowdsourced Chatbot Arena.
    "arena-hard v2 (japanese)",
}

STALE_TEXT = (
    "~30B",
    "LongCat-Flash-Omni-2603",
    "MiMo-V2-Pro",
    "MiMo-V2-Omni",
)

# Publishers whose pages answer an automated GET inconsistently because of a
# JavaScript bot challenge. ifm.ai returned HTTP 200 for 6/6 sequential requests on
# 2026-09-08 yet 403s partway through a 158-URL sweep, and its launch post and press
# release were opened and read manually the same day. openai.com began answering
# the audit UA with Cloudflare 403 challenges on 2026-09-16 (the same URLs verified
# manually in a browser). A persistent 403 from these hosts is reported as a
# warning so the sweep stays deterministic while the URL remains in the catalog as
# evidence; every other host still fails on a persistent 403, and any host fails
# on 404/410.
BOT_PROTECTED_HOSTS = {"ifm.ai", "openai.com"}


def error(errors: list[str], message: str) -> None:
    errors.append(message)


def is_official_url(url: str) -> bool:
    parsed = urlparse(url)
    host = (parsed.hostname or "").lower().rstrip(".")
    return parsed.scheme == "https" and any(
        host == allowed or host.endswith("." + allowed)
        for allowed in OFFICIAL_HOSTS
    )


def extract_generated(name: str, text: str) -> object:
    match = re.search(
        rf"const {name} = (.*?);\n\nconst ",
        text,
        flags=re.DOTALL,
    )
    if not match:
        raise ValueError(f"generated data.js is missing {name}")
    return json.loads(match.group(1))


def validate_catalog(catalog: dict) -> list[str]:
    errors: list[str] = []
    models = catalog.get("models")
    if not isinstance(models, list) or not models:
        error(errors, "catalog.models must be a non-empty list")
        return errors

    ids: set[str] = set()
    names: set[str] = set()
    official_keys: set[tuple[str, str]] = set()
    for index, model in enumerate(models, start=1):
        prefix = f"models[{index}]"
        model_id = model.get("id")
        name = model.get("name")
        if not model_id or model_id in ids:
            error(errors, f"{prefix}: duplicate or empty id: {model_id!r}")
        ids.add(model_id)
        if not name:
            error(errors, f"{prefix}: empty official display name")
        names.add(name)

        official_id = model.get("official_id")
        if not isinstance(official_id, str) or not official_id.strip():
            error(errors, f"{prefix} {name}: missing official_id")
        else:
            official_key = (official_id, name)
            if official_key in official_keys:
                error(errors, f"{prefix} {name}: duplicate official_id/display-name pair")
            official_keys.add(official_key)

        date = model.get("date", "")
        if not re.fullmatch(r"2026-\d{2}-\d{2}(?:~\d{2})?", date):
            error(errors, f"{prefix} {name}: invalid release date {date!r}")

        parameters = model.get("parameters")
        if not isinstance(parameters, str) or not parameters.strip():
            error(errors, f"{prefix} {name}: parameters must be explicit or marked undisclosed")
        parameter_status = model.get("parameter_status")
        if parameter_status not in {
            "verified",
            "publisher-approximate",
            "publisher-partial",
            "undisclosed",
        }:
            error(errors, f"{prefix} {name}: invalid parameter_status {parameter_status!r}")
        if parameter_status == "undisclosed" and "미공개" not in parameters:
            error(errors, f"{prefix} {name}: undisclosed parameters need an explicit label")
        if parameter_status != "undisclosed" and re.search(r"\bmodel size\b", parameters, re.IGNORECASE):
            error(errors, f"{prefix} {name}: model-size metadata cannot be presented as a parameter count")

        official_sources = model.get("official_sources")
        if not isinstance(official_sources, list) or not official_sources:
            error(errors, f"{prefix} {name}: missing official_sources")
        source_urls: set[str] = set()
        for source in official_sources or []:
            url = source.get("url") if isinstance(source, dict) else None
            if not isinstance(url, str) or not is_official_url(url):
                error(errors, f"{prefix} {name}: non-primary or invalid source URL {url!r}")
            else:
                source_urls.add(url)
        for source_field in ("release_date_source", "parameter_source"):
            url = model.get(source_field)
            if not isinstance(url, str) or not is_official_url(url):
                error(errors, f"{prefix} {name}: invalid {source_field} {url!r}")
            elif url not in source_urls:
                error(errors, f"{prefix} {name}: {source_field} must also be listed in official_sources")

        if official_id and "/" in official_id:
            expected_hf_url = f"https://huggingface.co/{official_id}"
            if expected_hf_url not in source_urls and any(
                url.startswith("https://huggingface.co/") for url in source_urls
            ):
                error(errors, f"{prefix} {name}: official_id does not match its Hugging Face source")

        benchmarks = model.get("benchmarks", {})
        benchmark_sources = model.get("benchmark_sources", {})
        if not isinstance(benchmarks, dict) or not isinstance(benchmark_sources, dict):
            error(errors, f"{prefix} {name}: benchmarks and benchmark_sources must be objects")
            continue
        for benchmark, value in benchmarks.items():
            if (
                benchmark.lower() not in ALLOWED_BENCHMARK_NAMES
                and any(term in benchmark.lower() for term in FORBIDDEN_BENCHMARK_TERMS)
            ):
                error(errors, f"{prefix} {name}: prohibited non-publisher metric {benchmark!r}")
            if not isinstance(value, (int, float)) or isinstance(value, bool) or not math.isfinite(value):
                error(errors, f"{prefix} {name}: non-numeric score for {benchmark!r}")
            elif value < 0 or value > 100:
                error(errors, f"{prefix} {name}: score out of percentage range for {benchmark!r}: {value}")
            score_url = benchmark_sources.get(benchmark)
            if not isinstance(score_url, str) or not is_official_url(score_url):
                error(errors, f"{prefix} {name}: missing primary source for {benchmark!r}")
            elif score_url not in source_urls:
                error(errors, f"{prefix} {name}: benchmark source is not in official_sources for {benchmark!r}")
        extra_sources = set(benchmark_sources) - set(benchmarks)
        if extra_sources:
            error(errors, f"{prefix} {name}: benchmark_sources has unused keys {sorted(extra_sources)}")

    excluded_ids = {entry.get("id") for entry in catalog.get("excluded", [])}
    overlap = ids & excluded_ids
    if overlap:
        error(errors, f"ids appear in both models and excluded ledger: {sorted(overlap)}")
    if len(names) != len(models):
        # Duplicate display names are usually a sign that a hosted snapshot
        # was collapsed into an existing model. Make the exception explicit.
        allowed_duplicate_names = {"Hy3"}
        duplicates = sorted(
            name for name in names if sum(model.get("name") == name for model in models) > 1
        )
        if any(name not in allowed_duplicate_names for name in duplicates):
            error(errors, f"duplicate display names need explicit review: {duplicates}")

    # The excluded ledger and correction notes intentionally preserve some
    # legacy labels so a reviewer can see what was removed. Only active model
    # identity/parameter/score fields must be free of those values.
    active_catalog_text = json.dumps(
        [
            {
                "name": model.get("name"),
                "parameters": model.get("parameters"),
                "benchmarks": model.get("benchmarks"),
            }
            for model in models
        ],
        ensure_ascii=False,
    )
    for stale in STALE_TEXT:
        if stale in active_catalog_text:
            error(errors, f"stale incorrect value remains in catalog: {stale}")
    return errors


def validate_generated(catalog: dict) -> list[str]:
    errors: list[str] = []
    try:
        generated_text = DATA_JS.read_text(encoding="utf-8")
        generated_models = extract_generated("TIMELINE_DATA", generated_text)
        generated_scope = extract_generated("SCOPE_DATA", generated_text)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        return [f"cannot parse generated data.js: {exc}"]

    if generated_models != catalog["models"]:
        error(errors, "data.js TIMELINE_DATA differs from models_catalog.json; run build_data.py")
    if generated_scope != catalog["scope"]:
        error(errors, "data.js SCOPE_DATA differs from models_catalog.json")
    generated_identity_text = json.dumps(
        [
            {
                "name": model.get("name"),
                "parameters": model.get("parameters"),
                "benchmarks": model.get("benchmarks"),
            }
            for model in generated_models
        ],
        ensure_ascii=False,
    )
    for stale in STALE_TEXT:
        if stale in generated_identity_text:
            error(errors, f"stale incorrect value remains in data.js: {stale}")
    return errors


def check_urls(catalog: dict) -> list[str]:
    errors: list[str] = []
    urls: set[str] = set()
    for model in catalog["models"]:
        urls.add(model["parameter_source"])
        urls.add(model["release_date_source"])
        urls.update(source["url"] for source in model["official_sources"])
        urls.update(model.get("benchmark_sources", {}).values())
    for entry in catalog.get("excluded", []):
        if entry.get("source"):
            urls.add(entry["source"])

    # Bot-challenge codes: some first-party sites sit behind Cloudflare-style
    # checks that answer a single GET with HTTP 200 but 403 the burst produced by
    # a parallel pool (observed 2026-09-08 for ifm.ai), and Hugging Face answers
    # 429 once a run walks its ~60 cards quickly. Serialize requests per host with
    # a short pause, so politeness is per publisher and different publishers still
    # run in parallel. A truly missing URL (404/410) still fails immediately; 429
    # stays a warning because it reflects our load, not the source.
    challenge_codes = {403, 425, 429, 503}
    rate_limit_codes = {429, 503}
    host_locks: dict[str, threading.Lock] = {}
    host_locks_guard = threading.Lock()

    def lock_for(url: str) -> threading.Lock:
        host = urlparse(url).hostname or url
        with host_locks_guard:
            return host_locks.setdefault(host, threading.Lock())

    def check_one(url: str) -> str | None:
        last_error: str | None = None
        last_code = 0
        lock = lock_for(url)
        for attempt in range(3):
            try:
                with lock:
                    request = Request(url, headers={"User-Agent": "llm-timeline-audit/1.0"})
                    with urlopen(request, timeout=10) as response:
                        status = response.status
                        response.read(2048)
                    time.sleep(0.4)
                if status < 400:
                    return None
                last_error, last_code = f"{url}: HTTP {status}", status
            except HTTPError as exc:  # pragma: no cover - network is optional
                if exc.code not in challenge_codes:
                    return f"{url}: HTTP {exc.code}"
                last_error, last_code = f"{url}: HTTP {exc.code}", exc.code
            except Exception as exc:  # pragma: no cover - network is optional
                return f"{url}: {exc}"
            if attempt < 2:
                time.sleep(2.0 * (attempt + 1))
        if last_code in rate_limit_codes:
            print(f"WARN: rate-limited while checking {url} (not counted as a failure)", file=sys.stderr)
            return None
        if last_code == 403 and (urlparse(url).hostname or "") in BOT_PROTECTED_HOSTS:
            print(
                f"WARN: {url} is bot-protected; HTTP 403 for the automated sweep. "
                "Page content was verified manually (ifm.ai 2026-09-08, openai.com "
                "2026-09-16) - re-check in a browser if this record is audited again.",
                file=sys.stderr,
            )
            return None
        print(f"WARN: still challenged after retries - {last_error}", file=sys.stderr)
        return last_error

    sorted_urls = sorted(urls)
    with ThreadPoolExecutor(max_workers=6) as executor:
        futures = {executor.submit(check_one, url): url for url in sorted_urls}
        for index, future in enumerate(as_completed(futures), start=1):
            result = future.result()
            if result:
                error(errors, result)
            if index % 20 == 0:
                print(f"checked {index}/{len(sorted_urls)} source URLs", file=sys.stderr)
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--check-urls",
        action="store_true",
        help="also perform live HTTP checks for every cited source",
    )
    args = parser.parse_args()

    try:
        catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"FAIL: cannot read catalog: {exc}")
        return 1

    errors = validate_catalog(catalog)
    if not errors:
        errors.extend(validate_generated(catalog))
    if args.check_urls and not errors:
        errors.extend(check_urls(catalog))

    if errors:
        print("FAIL")
        for item in errors:
            print(f"- {item}")
        return 1
    print(
        f"OK: {len(catalog['models'])} models, "
        f"{len(catalog.get('excluded', []))} excluded, "
        f"{sum(bool(model.get('benchmarks')) for model in catalog['models'])} with official scores"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
