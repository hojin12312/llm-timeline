---
title: Current State
type: current
status: current
updated: 2026-09-23
---

# Current State

## Working

- 카탈로그: 활성 모델 175개, 제외 원장 21개, 표기 조직 42개, `as_of` 2026-09-23, 범위 2026-01-01 ~ 2026-09-23. 공식 점수 보유 모델 160개·누적 2,992점 (`models_catalog.json`; 확인 2026-09-23, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 175 models, 21 excluded, 160 with official scores` (확인 2026-09-23, host local, 실행 결과 PASS)
- 생성물 일치: `data.js`·`조사 자료`가 SSOT와 동기화됨 — validate_data.py의 `validate_generated` 일치 검사 통과 (확인 2026-09-23, 동일 실행)
- 배포: `main` push 시 `deploy-pages.yml`이 validate 후 Pages 배포. 라이브 URL은 README 기재 (코드 읽음; 배포 상태 자체는 이번 런에서 미확인)
- 최근 수록: 9/19~9/23 감사로 신규 12종 + Jev·Solar Jev 2종(제외 원장 되돌림, `model-184`/`model-185`)을 수록해 `72e89df`로 푸시됨 (확인 2026-09-23, `git log`)

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`(19개 플로우)는 데이터만 존재하고 이를 그리는 UI 뷰가 없음 — README가 스스로 문서화한 상태 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 내보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)는 `--check-urls`에서 간헐 403 → 경고 처리됨. 수동 확인일: ifm.ai 2026-09-08, openai.com 2026-09-16 (이번 런에서 재확인 안 함)
- 월 칩이 `index.html`의 버튼과 `app.js`의 `months` 배열에 2026-01~09로 하드코딩됨 — 2026-10 이후 모델 수록 시 월 내비게이션 갱신 필요 (코드 읽음)
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-09-23, `git status`)

## Next Logical Work

- 다음 감사 주기: 2026-09-24 이후 공식 신규 릴리스 조사 → `models_catalog.json` 수록/제외 판정 → `build_data.py` 재생성 → `validate_data.py`(+`--check-urls`) → README 통계 갱신 → 커밋·푸시. 절차 상세는 `runbooks/audit-update.md`.
- 10월 도래 시 `index.html` 월 버튼과 `app.js` `months` 배열에 `2026-10` 추가 필요.
