---
title: Current State
type: current
status: current
updated: 2026-09-30
---

# Current State

## Working

- 카탈로그: 활성 모델 189개, 제외 원장 24개, 표기 조직 52개, `as_of` 2026-09-30, 범위 2026-01-01 ~ 2026-09-30. 공식 점수 보유 모델 170개·누적 3,049점 (`models_catalog.json`; 확인 2026-09-30, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 189 models, 24 excluded, 170 with official scores` (확인 2026-09-30, host local, 실행 결과 PASS)
- 생성물 일치: `data.js`·`조사 자료`가 SSOT와 동기화됨 — validate_data.py의 `validate_generated` 일치 검사 통과 (확인 2026-09-30, 동일 실행)
- URL 실측: `python3 validate_data.py --check-urls` → 257개 URL 전수 스윕 PASS (확인 2026-09-30). 경고는 HF 429 rate-limit과 `ifm.ai` 봇 보호 403뿐이고 실패 없음.
- 배포: `main` push 시 `deploy-pages.yml`이 validate 후 Pages 배포. 라이브 URL은 README 기재 (코드 읽음; 배포 상태 자체는 이번 런에서 미확인)
- 최근 수록: 9/30 감사로 신규 2종(GPT-6.1 Sol `model-198` 9/29 · IQuest-Q1 `model-199` 9/28)을 `b0c0b49`로 푸시됨 (확인 2026-09-30, `git log`)
- OFFICIAL_HOSTS: `github.io` 추가 (2026-09-30; IQuest 공식 프로젝트 사이트 `iquestlab.github.io`가 기술 보고서·평가 차트의 1차 출처)
- `company_meta`의 국적 미공개 관례: `IQuest`는 `country: "미공개"`, `flag: "🌐"` — 모델 카드 언어가 en·zh이고 1차 출처에 본사 표기가 없어 추정하지 않았다(`app.js`의 미등록 조직 기본값도 `🌐`)

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`(20개 플로우)는 데이터만 존재하고 이를 그리는 UI 뷰가 없음 — README가 스스로 문서화한 상태 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)는 `--check-urls`에서 간헐 403 → 경고 처리됨. 수동 확인일: ifm.ai 2026-09-08, openai.com 2026-09-16. 이번 9/30 감사에서 openai.com은 기존과 달리 403 없이 통과했고, GPT-6.1 Sol의 openai.com 발표문 본문은 미러 렌더링으로 읽었다.
- openai.com `/index/*` 발표문은 `curl`·일반 fetch에 403을 주지만 페이지 HTML의 RSC 페이로드에 차트 데이터(`\"data\":{\"values\":[...]}`)가 JSON으로 박혀 있다 — 본문에 절대값이 없는 발표문도 effort별 점수를 거기서 추출할 수 있다 (2026-09-30 GPT-6.1 Sol 조사)
- GitHub Pages 프로젝트 사이트(`*.github.io`)도 정적 HTML이 React 셸이면 본문이 `assets/App-*.js` 번들에 들어 있다 (2026-09-30 IQuest-Q1 조사). HF 모델 카드는 같은 표를 이미지로만 제공하므로 텍스트 인용 출처로 프로젝트 사이트를 쓴다.
- `--check-urls` 전수 스윕에서 HF는 다수 429 rate-limit 경고를 냄 → 실패 아님 (확인 2026-09-30). gated(401)·삭제(404) HF 자원은 출처 불가 — VeriLoop E2에서 포럼 공지/데이터셋 출처를 모델 카드로 교체한 사례
- 월 칩이 `index.html`의 버튼과 `app.js`의 `months` 배열에 2026-01~09로 하드코딩됨 — 2026-10 이후 모델 수록 시 월 내비게이션 갱신 필요 (코드 읽음)
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-09-30, `git status`)
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language` 문장·§5 언어 마이그레이션 절) 문단 이전을 제안, 승인 대기

## Next Logical Work

- 다음 감사 주기: 2026-10-01 이후 공식 신규 릴리스 조사 → `models_catalog.json` 수록/제외 판정 → `build_data.py` 재생성 → `validate_data.py`(+`--check-urls`) → README 통계 갱신 → 커밋·푸시. 절차 상세는 `runbooks/audit-update.md`.
- 스텔스 보류분 재검토: Space Bunny Alpha(9/23, MiniMax 연계 추정)·Union Alpha/Pareto 26.9(9/16, 개발사 발표 10/10 예고) — 공식 확인 시 수록 판정
- 9/30 감사에서 1차 출처를 확보하지 못한 후보: **Ling 3.1 Flash**(API 게이트웨이 목록에만 등장), **Kimi K3.1**(API 레지스트리 식별자 유출, 공식 발표 없음), **GPT-6.1 Astra**(안전성 검토 연기 보도만). 공식 발표·모델 카드가 나오면 재조사 대상.
- 10월 도래 시 `index.html` 월 버튼과 `app.js` `months` 배열에 `2026-10` 추가 필요.
