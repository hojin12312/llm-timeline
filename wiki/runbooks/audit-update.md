---
title: Audit Update
type: runbook
status: current
updated: 2026-09-30
---

# Runbook: Audit Update

## Purpose

주기적으로 신규 LLM/MLLM 릴리스를 조사해 카탈로그를 최신 상태로 갱신하고 GitHub에 푸시하는 반복 절차.

## Preconditions

- `main` 브랜치가 clean하고 `origin`과 동기화돼 있을 것.
- `.playwright-mcp/` 등 미추적 산출물은 커밋 대상에서 제외.
- 완료 알림용 Telegram Notice 봇 설정(머신 로컬 개인 구성 파일 — 경로·자격은 이 레포에 기록하지 않음).

## Procedure

1. **조사**: 공식 1차 자료만 사용 — 개발사 발표 블로그, 모델 카드(HF), 공식 문서. 릴리스 날짜·파라미터·컨텍스트·공식 점수를 원문 그대로 확보한다.
2. **중복 판정**: `models_catalog.json`의 `models[]`와 `excluded[]`에 이미 있는지 확인. 제외 원장에 있으면 되돌림 이관 여부를 판단.
3. **수록 판정**: `scope.excluded` 기준에 걸리면 `excluded[]`에 `id`(`excluded-YYYY-MM-DD-N`)·사유·공식 출처로 기록. 독립 API 제품·별도 모델 ID로 출시된 비전형 모델은 예외 수록 선례가 있다(System One/structured decision — `components/catalog-pipeline.md` 참조).
4. **카탈로그 편집**: `models_catalog.json`만 수정.
   - 신규 레코드: 다음 `model-###` ID, 필드 순서는 기존 레코드와 동일하게.
   - 파라미터: 공식 명시값 + `parameter_status`; 미공개는 `정확한 수치 미공개` + `undisclosed`.
   - 점수: 공식 인쇄분만 `benchmarks{}`에, 각각 `benchmark_sources{}`에 출처 URL. 없으면 빈 객체 + `benchmark_note`에 사유.
   - `release_date_source`·`parameter_source`는 반드시 `official_sources`에도 나열.
   - 신규 조직은 `company_meta`에 `country`/`flag`/`color`/`badge` 추가(뒤에 append 관례). 검색 별칭이 필요하면 `app.js`의 한국어 alias 맵도 갱신.
   - 패밀리 세대 진전이 있으면 `family_flows` 갱신. `as_of`, `scope.reviewed_on` 갱신.
5. **호스트 등록**: 새로 인용하는 발행사 도메인이 `validate_data.py`의 `OFFICIAL_HOSTS`에 없으면 추가.
6. **재생성·검증**: `python3 build_data.py` → `python3 validate_data.py`. 가능하면 `python3 validate_data.py --check-urls`까지.
7. **README 갱신**: 헤더 통계(모델 수·조직 수), 감사 추가분 절, 제외 원장 카운트, 조직 목록, 되돌림 각주.
8. **커밋·푸시**: `git diff --check` 후 기존 커밋 스타일(`feat: ... (총 N개 / M개 조직)`)로 커밋, `git push origin main`. **CI 검증 게이트를 신뢰하지 말 것** — `deploy-pages.yml`의 `validate_data.py` 실행이 멈춘 상태일 수 있으므로(사실에서 `current.md` 확인) 푸시 전에 로컬에서 통과시킨다. 라이브 반영 여부는 `gh run list`로 확인한다.
9. **알림**: 로컬 Telegram Notice 봇으로 완료 보고(머신 로컬 설정 문서의 절차를 따른다).

## Expected Output

- `validate_data.py` 출력: `OK: N models, M excluded, K with official scores`.
- push 후 `git status -sb`가 `## main...origin/main` 동기 상태.

## Verification

- `python3 validate_data.py` PASS가 배포 게이트와 동일 조건.
- `--check-urls` 실패 시 해당 URL을 수동으로 열어 실제 사망(404/410)인지 봇 챌린지인지 구분.

## Failure Modes

- **JS 셸 문서 페이지**(Upstage Console 등): 정적 HTML이 비어 있으면 Next.js/RSC 페이로드에서 본문을 추출한다. 2026-09-30에 확인된 두 케이스:
  - **openai.com `/index/*` 발표문**: `curl`·일반 GET에 403이므로 본문은 미러 렌더링으로 읽는다. 본문에 절대값이 없는 발표문(개선폭만 서술)도 RSC 페이로드의 `\"data\":{\"values\":[...]}` 차트 데이터를 파싱하면 effort별 점수를 얻을 수 있다 — OpenAI 발표문은 매 감사 반복 패턴이므로 기본 가정할 것.
  - **자체 조직 GitHub Pages 사이트(`*.github.io`)**: 정적 HTML이 React 셸이면 본문이 `assets/App-*.js` 번들에 있다. HF 모델 카드가 같은 표를 이미지로만 주는 경우가 많아 텍스트 인용 출처로 프로젝트 사이트를 쓴다. `OFFICIAL_HOSTS`에 `github.io`가 있어야 통과한다.
- **봇 챌린지 403**: `BOT_PROTECTED_HOSTS` 등록 호스트는 경고로 통과. 미등록 호스트의 지속 403은 실패 — 다른 공식 출처로 교체하거나 수동 확인 후 호스트 추가.
- **차트만 있고 인쇄 표가 없음**: 벤치마크가 차트 이미지로만 제공되면 점수를 추측하지 말고 빈 점수 + `benchmark_note` 사유로 남긴다. 반대로 차트 JSON이 텍스트로 있으면 그 값을 1차 출처로 인용한다.
- **금지 지표**: `FORBIDDEN_BENCHMARK_TERMS`에 걸리는 벤치마크명은 점수 표에 넣지 않고 `note`/`benchmark_note`에 서술. 고정 평가 스위트면 `ALLOWED_BENCHMARK_NAMES`에 정확 명칭 예외를 추가.
- **검증 실패 커밋**: 워크플로는 배포 차단으로 선언돼 있으나 실제 게이트가 멈춘 적이 있다(2026-09-30 기준, 사실은 `current.md` 참조) — 무조건 push 전에 로컬 검증을 통과시킨다. 검증 실패를 CI에 맡기지 않는다.

## Relevant Files

- `models_catalog.json`, `build_data.py`, `validate_data.py`, `README.md`
