---
title: Catalog Pipeline
type: component
status: current
updated: 2026-09-23
---

# Catalog Pipeline

## Responsibility

모델 데이터의 단일 진실 공급원(SSOT) 유지, 브라우저 데이터셋·감사 원장 생성, 그리고 공식 출처 정책의 기계적 검증을 담당한다.

## Interface

- `models_catalog.json` 최상위 키: `schema_version`, `as_of`, `benchmark_policy`, `parameter_policy`, `models[]`, `excluded[]`, `company_meta`, `family_flows[]`, `unconfirmed[]`, `scope`.
- 모델 레코드 주요 필드: `id`(`model-###`), `name`, `date`/`sortDate`(`YYYY-MM-DD`, `~DD` 접미 허용), `company`, `family`, `type`, `category`, `status`, `parameters` + `parameter_status`, `architecture`, `modalities[]`, `focus[]`, `open_weights`, `license`, `context`, `languages`, `variants[]`, `reasoning_effort[]`, `availability`, `note`, `benchmarks{}` + `benchmark_sources{}` + `benchmark_note`, `official_id`, `official_sources[]`(`{label,url}`), `release_date_source`, `parameter_source`, `verification{status,reviewed_on,policy}`.
- `build_data.py`: 카탈로그 → `data.js`(`TIMELINE_DATA`, `COMPANY_META`, `FAMILY_FLOWS`, `UNCONFIRMED_DATA`, `SCOPE_DATA`, `AUDIT_EXCLUDED` 전역 상수)와 `조사 자료`(모델별 감사 원장 + 제외 원장 + 패밀리 흐름) 생성.
- `validate_data.py`: 구조·출처·점수 검증 + `data.js`와 SSOT의 일치 검사. `--check-urls`로 전 출처 URL 실측 가능.

## Current Implementation

- `models_catalog.json`을 수작업으로 편집 → `python3 build_data.py` 재생성 → `python3 validate_data.py` 검증의 3단 흐름.
- `validate_catalog`: ID·이름 중복, 날짜 형식(`2026-\d{2}-\d{2}(~\d{2})?`), `parameter_status` 어휘, `release_date_source`·`parameter_source`가 `official_sources`에도 나열됐는지, HF `official_id`와 출처 일치, 점수 0~100 숫자·출처 존재 여부를 검사.
- `is_official_url`: `OFFICIAL_HOSTS`의 정확 호스트 또는 서브도메인 + `https`만 허용.
- `FORBIDDEN_BENCHMARK_TERMS`(`arena`, `elo`, `artificial analysis`, `aaii`, `codearena` 등)가 벤치마크명에 포함되면 `ALLOWED_BENCHMARK_NAMES` 정확 명칭 예외가 없는 한 오류.
- `STALE_TEXT`: 과거 정정된 잘못된 표기(예: `~30B`, `MiMo-V2-Pro`)가 활성 레코드/생성물에 재등장하면 오류.
- `check_urls`: 호스트별 직렬화 + 재시도. 429·503은 경고, `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)의 지속 403도 경고, 그 외 호스트의 지속 403과 404/410은 실패.
- CI: `deploy-pages.yml`이 push마다 `python3 validate_data.py`를 실행.

## Important Invariants

- `data.js`·`조사 자료`는 절대 수작업 편집하지 않는다 — 반드시 카탈로그를 수정하고 `build_data.py`로 재생성.
- 공식 자료가 직접 명시하지 않은 파라미터·점수는 넣지 않는다. 미공개 파라미터는 `정확한 수치 미공개` + `parameter_status: "undisclosed"`, 빈 점수는 `benchmark_note`에 사유를 기록.
- 신규 발행사 도메인을 출처로 쓰기 전에 `OFFICIAL_HOSTS`에 추가한다(서브도메인은 접미 일치로 자동 허용).
- 제외 판정 항목은 삭제하지 않고 `excluded` 원장에 사유·공식 출처와 함께 보존한다. 되돌림 시 활성 레코드로 이관 + README 되돌림 각주.
- 점수는 % 척도만. Elo·가격·속도 같은 비% 지표는 `note`/`benchmark_note`에 서술형으로만 기록.
- **System One / structured decision 예외(2026-09-23 선례)**: 산문을 생성하지 않는 결정 모델도 독립 API 제품·별도 모델 ID로 공식 출시되면 수록 대상이다(Jev `model-184`, Solar Jev `model-185`). `type`에 `System One / structured decision`, `category: LLM`으로 분류했고, 같은 부류라도 출시 정보가 제한적인 모델(Laya)은 원장에 유지한다.

## Relevant Paths

- `models_catalog.json`, `build_data.py`, `validate_data.py`, `data.js`, `조사 자료`
- `.github/workflows/deploy-pages.yml`

## Tests / Validation

- `python3 validate_data.py` — 전수 구조·출처·일치 검증(배포 게이트와 동일).
- `python3 validate_data.py --check-urls` — 전 출처 URL 실측(호스트당 직렬화로 시간 소요).

## Known Limitations

- `--check-urls`는 봇 챌린지를 쓰는 발행사 사이트에서 간헐 403을 낸다(경고 목록 참조). 자동 판정과 실제 링크 사망을 구분하려면 수동 확인이 필요하다.
- Upstage Console 문서처럼 JS 셸만 응답하는 공식 페이지는 정적 HTML에 내용이 없어, 페이지의 RSC/Next.js 페이로드를 파싱해야 실제 스펙을 읽을 수 있다(2026-09-23 Solar Jev 조사에서 사용).

## Related Pages

- [Audit Update runbook](../runbooks/audit-update.md)
- [Web Dashboard](web-dashboard.md)
