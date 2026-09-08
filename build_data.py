"""Build the browser dataset and human-readable audit ledger.

``models_catalog.json`` is the SSOT for model names, release dates,
parameters, benchmark values, and their primary sources. The old build step
parsed a prose research note and then allowed a separate hand-edited
``data.js`` benchmark object to drift. Keeping both generated artifacts tied
to the catalog makes that class of error visible to ``validate_data.py``.
"""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent
CATALOG_PATH = ROOT / "models_catalog.json"
DATA_PATH = ROOT / "data.js"
AUDIT_PATH = ROOT / "조사 자료"

catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
models = catalog["models"]
company_meta = catalog["company_meta"]
family_flows = catalog.get("family_flows", [])
unconfirmed = catalog.get("unconfirmed", [])
scope_data = catalog["scope"]


def markdown_link(label: str, url: str) -> str:
    return f"[{label}]({url})"


def source_list(sources: list[dict]) -> str:
    seen: set[str] = set()
    links: list[str] = []
    for source in sources or []:
        url = source.get("url", "")
        if not url or url in seen:
            continue
        seen.add(url)
        links.append(markdown_link(source.get("label", "공식 1차 출처"), url))
    return ", ".join(links) if links else "없음"


PARAMETER_STATUS_LABEL = {
    "verified": "공식 수치 확인",
    "publisher-approximate": "개발사 공식 근사치",
    "publisher-partial": "개발사 공식 부분 공개",
    "undisclosed": "공식 수치 미공개",
}


def render_audit_ledger() -> str:
    lines = [
        "# 조사 자료 — 2026 LLM / MLLM 공개 기록 감사 원장",
        "",
        f"> 최종 감사일: **{catalog['as_of']}** | 활성 레코드: **{len(models)}개** | 제외 원장: **{len(catalog.get('excluded', []))}개** | 공식 점수가 확인된 모델: **{sum(bool(model.get('benchmarks')) for model in models)}개** | 공식 점수: **{sum(len(model.get('benchmarks', {})) for model in models)}개**",
        ">",
        "> 이 문서는 `models_catalog.json`에서 생성된 사람 검토용 감사 원장입니다. 브라우저용 `data.js`를 직접 수정하지 말고 SSOT를 수정한 뒤 `python3 build_data.py`로 재생성하세요.",
        "",
        "## 조사 원칙",
        "",
        "- **모델명:** 개발사가 모델 카드, 기술 보고서, 공식 제품 문서 또는 공식 발표문에서 사용한 표시명을 유지했습니다. 임의의 별칭·번역명·체크포인트명을 제품명으로 합치지 않았습니다.",
        "- **파라미터 수:** 공식 자료가 명시한 총 파라미터와 활성 파라미터만 기록했습니다. 공개하지 않은 경우 `정확한 수치 미공개`로 표시했으며, 가중치 파일 용량·모델 등급·제3자 추정치를 파라미터 수로 바꾸지 않았습니다. `~`와 `model size`는 원문이 근사치·모델 크기로 표현한 경우에만 그대로 남겼습니다.",
        "- **벤치마크:** 모델 제공자가 공식 모델 카드·기술 보고서·개발사 공식 발표문에 직접 공개한 점수만 기록했습니다. Chatbot Arena/ELO, Artificial Analysis, 제3자 리더보드, 역산·추정치는 제외했습니다.",
        "- **점수 조건:** 점수명·버전·모드·데이터셋이 원문에 있는 경우 모델별 메모에 보존했습니다. 서로 다른 평가 프로토콜의 수치를 순위나 동일 기준 점수로 해석하지 않습니다.",
        "- **출처:** 각 모델명·출시일·파라미터·점수에 연결된 공식 1차 URL을 개별적으로 기록했습니다. URL이 공식이어도 해당 모델의 수치가 직접 확인되지 않으면 수치를 넣지 않았습니다.",
        "",
        "## 모델별 검증 기록",
        "",
    ]

    for index, model in enumerate(models, start=1):
        verification = model.get("verification", {})
        lines.extend(
            [
                f"### {index:03d}. {model['date']} — {model['name']}",
                "",
                f"- 레코드 ID: `{model['id']}`",
                f"- **공식 모델명:** `{model['name']}`",
                f"- 제공사 / 패밀리: `{model['company']}` / `{model.get('family', '') or '미분류'}`",
                f"- 모델 유형 / 상태: `{model.get('type', '')}` / `{model.get('status', '')}`",
                f"- 공개일(레포 기준): `{model['date']}` — {markdown_link('출시일 공식 출처', model['release_date_source'])}",
                f"- **파라미터:** `{model['parameters']}` — {PARAMETER_STATUS_LABEL.get(model.get('parameter_status'), model.get('parameter_status', '미확인'))}",
                f"- 파라미터 출처: {markdown_link('공식 파라미터 출처', model['parameter_source'])}",
                f"- 아키텍처: `{model.get('architecture', '') or '미기재'}`",
                f"- 공식 모델 ID: `{model.get('official_id', '') or '미기재'}`",
                f"- 오픈 웨이트: `{'예' if model.get('open_weights') else '아니오/호스팅'}`",
                f"- 공식 모델 출처: {source_list(model.get('official_sources'))}",
                "",
                "#### 공식 발표 벤치마크 점수",
                "",
            ]
        )

        benchmarks = model.get("benchmarks") or {}
        if benchmarks:
            for benchmark, value in benchmarks.items():
                url = model.get("benchmark_sources", {}).get(benchmark)
                source = markdown_link("공식 출처", url) if url else "출처 누락"
                lines.append(f"- `{benchmark}`: **{value}%** — {source}")
        else:
            lines.append("- 이 감사 원장에 기록한 공식 1차 출처 공개 점수 없음. 추정치·제3자 점수는 표시하지 않음.")
        if model.get("benchmark_note"):
            lines.append(f"- 점수 메모: {model['benchmark_note']}")
        if model.get("note"):
            lines.append(f"- 모델 메모: {model['note']}")
        lines.extend(
            [
                f"- 검증 상태: `{verification.get('status', '미확인')}` / 정책 `{verification.get('policy', '')}` / 검토일 `{verification.get('reviewed_on', '')}`",
                "",
            ]
        )

    lines.extend(["## 제외·보류한 기존 레코드", ""])
    for entry in catalog.get("excluded", []):
        lines.extend(
            [
                f"### `{entry['id']}` — {entry['name']}",
                "",
                f"- 원래 이름: `{entry.get('original_name', entry['name'])}`",
                f"- 제외 사유: {entry['reason']}",
                f"- 확인 출처: {markdown_link('공식 1차 출처', entry['source'])}",
                "",
            ]
        )

    lines.extend(["## 패밀리 흐름", ""])
    for flow in catalog.get("family_flows", []):
        lines.append(f"- **{flow['family']}:** " + " → ".join(f"`{step}`" for step in flow["steps"]))
    lines.extend(
        [
            "",
            "## 재현 명령",
            "",
            "```bash",
            "python3 build_data.py",
            "python3 validate_data.py",
            "python3 validate_data.py --check-urls",
            "```",
            "",
        ]
    )
    return "\n".join(lines)


js_content = """// 2026 Major LLM / MLLM Release Timeline Dataset
// Auto-generated from models_catalog.json. Do not hand-edit data.js.

const TIMELINE_DATA = %s;

const COMPANY_META = %s;

const FAMILY_FLOWS = %s;

const UNCONFIRMED_DATA = %s;

const SCOPE_DATA = %s;

const AUDIT_EXCLUDED = %s;
""" % (
    json.dumps(models, ensure_ascii=False, indent=2),
    json.dumps(company_meta, ensure_ascii=False, indent=2),
    json.dumps(family_flows, ensure_ascii=False, indent=2),
    json.dumps(unconfirmed, ensure_ascii=False, indent=2),
    json.dumps(scope_data, ensure_ascii=False, indent=2),
    json.dumps(catalog.get("excluded", []), ensure_ascii=False, indent=2),
)

DATA_PATH.write_text(js_content, encoding="utf-8")
AUDIT_PATH.write_text(render_audit_ledger(), encoding="utf-8")
print(
    f"data.js and 조사 자료 successfully written! Total models: {len(models)}, "
    f"excluded: {len(catalog.get('excluded', []))}, "
    f"models with official scores: "
    f"{sum(bool(model.get('benchmarks')) for model in models)}"
)
