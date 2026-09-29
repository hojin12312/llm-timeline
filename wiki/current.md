---
title: Current State
type: current
status: current
updated: 2026-09-29
---

# Current State

## Working

- 카탈로그: 활성 모델 187개, 제외 원장 24개, 표기 조직 51개, `as_of` 2026-09-29, 범위 2026-01-01 ~ 2026-09-29. 공식 점수 보유 모델 168개·누적 3,030점 (`models_catalog.json`; 확인 2026-09-29, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 187 models, 24 excluded, 168 with official scores` (확인 2026-09-29, host local, 실행 결과 PASS)
- 생성물 일치: `data.js`·`조사 자료`가 SSOT와 동기화됨 — validate_data.py의 `validate_generated` 일치 검사 통과 (확인 2026-09-29, 동일 실행)
- 배포: `main` push 시 `deploy-pages.yml`이 validate 후 Pages 배포. 라이브 URL은 README 기재 (코드 읽음; 배포 상태 자체는 이번 런에서 미확인)
- 최근 수록: 9/29 감사로 신규 10종(Claude Sonnet 5.5·Holo4-27B/35B-A3B·Holotron4-30B-A3B·VeriLoop E2·JEV-9B/27B·MiniMax M3.1-Flash-Preview·Perceptron Mk1.5·Laya 되돌림)과 제외 원장 4건(Aion 3.5·Ember-1·Jev Router·Space Bunny Alpha)을 `1dab227`로 푸시됨 (확인 2026-09-29, `git log`)
- OFFICIAL_HOSTS: `minimax.io`·`perceptron.inc` 추가 (2026-09-29; 신규 발행사 도메인 인용분)

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`(20개 플로우 — JEV 신규)는 데이터만 존재하고 이를 그리는 UI 뷰가 없음 — README가 스스로 문서화한 상태 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)는 `--check-urls`에서 간헐 403 → 경고 처리됨. 수동 확인일: ifm.ai 2026-09-08, openai.com 2026-09-16 (이번 런에서 재확인 안 함)
- `--check-urls` 전수 스윕에서 HF는 다수 429 rate-limit 경고를 냄 — 실패 아님 (확인 2026-09-29). 반면 gated(401)·삭제(404) HF 자원은 출처 불가 — VeriLoop E2에서 포럼 공지/데이터셋 출처를 모델 카드로 교체한 사례
- 월 칩이 `index.html`의 버튼과 `app.js`의 `months` 배열에 2026-01~09로 하드코딩됨 — 2026-10 이후 모델 수록 시 월 내비게이션 갱신 필요 (코드 읽음)
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-09-29, `git status`)
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language` 문장·§5 언어 마이그레이션 절) 문단 이전을 제안, 승인 대기

## Next Logical Work

- 다음 감사 주기: 2026-09-30 이후 공식 신규 릴리스 조사 → `models_catalog.json` 수록/제외 판정 → `build_data.py` 재생성 → `validate_data.py`(+`--check-urls`) → README 통계 갱신 → 커밋·푸시. 절차 상세는 `runbooks/audit-update.md`.
- 스텔스 보류분 재검토: Space Bunny Alpha(9/23, MiniMax 연계 추정)·Union Alpha/Pareto 26.9(9/16, 개발사 발표 10/10 예고) — 공식 확인 시 수록 판정
- 10월 도래 시 `index.html` 월 버튼과 `app.js` `months` 배열에 `2026-10` 추가 필요.
