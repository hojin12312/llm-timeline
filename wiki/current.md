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
- 배포 파이프라인(코드 읽음): `.github/workflows/deploy-pages.yml`은 push마다 `python3 validate_data.py`를 돌리고 Pages를 배포하도록 선언돼 있다(워크플로 파일은 `c2de7f5`(9/8) 이후 변경 없음). 실제 게이트가 돌고 있는지는 아래 Active Risks를 볼 것.
- 배포 관측 (2026-09-30, host local, `gh run list`·`gh run view` + 라이브 `data.js` GET): 9/30 변경이 라이브에 반영됐다 — `hojin12312.github.io/llm-timeline/data.js`가 로컬과 바이트 동일(697,083 B, 189개 모델). 반영 경로는 GitHub 네이티브 `pages build and deployment`(2026-09-30T11:02Z, 44초·success)이며, 커스텀 워크플로의 deploy job은 실행되지 않았다.
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

- **CI 검증 게이트가 11일간 동작하지 않음** (관측 2026-09-30, host local, `gh run list`·`gh run view --json jobs`): `deploy-pages.yml`의 마지막 성공은 `95caed4`(2026-09-19T16:02Z)이고, 그 뒤 7개 실행은 모두 job이 0개다. `35870582922`(head `2d37afd`, 2026-09-23T13:56Z)의 `deploy` job이 `waiting`(0 steps) 상태로 `concurrency: group: "pages"`, `cancel-in-progress: false` 때문에 그룹을 붙잡고 있고, 이후 실행은 대기하다 다음 푸시에 취소된다. 워크플로 파일은 이(orig)인이 아니다 — 추정 원인은 `github-pages` environment 쪽 승인/규칙이지만 **미확인**. 결과적으로 `validate_data.py`는 푸시 게이트로 실행되지 않으므로 **푸시 전 로컬 검증이 유일한 게이트**다. 해결하지 않은 상태에서 푸시해도 사이트 반영은 네이티브 워크플로가 처리한다.
- `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)는 `--check-urls`에서 간헐 403 → 경고 처리됨. 수동 확인일: ifm.ai 2026-09-08, openai.com 2026-09-16. 이번 9/30 감사에서 openai.com은 기존과 달리 403 없이 통과했고, GPT-6.1 Sol의 openai.com 발표문 본문은 미러 렌더링으로 읽었다.
- openai.com `/index/*` 발표문은 `curl`·일반 fetch에 403을 주지만 페이지 HTML의 RSC 페이로드에 차트 데이터(`\"data\":{\"values\":[...]}`)가 JSON으로 박혀 있다 — 본문에 절대값을 적지 않는 발표문도 effort별 점수를 거기서 추출할 수 있다 (2026-09-30 GPT-6.1 Sol 조사)
- GitHub Pages 프로젝트 사이트(`*.github.io`)도 정적 HTML이 React 셸이면 본문이 `assets/App-*.js` 번들에 들어 있다 (2026-09-30 IQuest-Q1 조사). HF 모델 카드는 같은 표를 이미지로만 제공하므로 텍스트 인용 출처로 프로젝트 사이트를 쓴다.
- `--check-urls` 전수 스윕에서 HF는 다수 429 rate-limit 경고를 냄 → 실패 아님 (확인 2026-09-30). gated(401)·삭제(404) HF 자원은 출처 불가 — VeriLoop E2에서 포럼 공지/데이터셋 출처를 모델 카드로 교체한 사례
- 월 칩이 `index.html`의 버튼과 `app.js`의 `months` 배열에 2026-01~09로 하드코딩됨 — 2026-10 이후 모델 수록 시 월 내비게이션 갱신 필요 (코드 읽음)
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-09-30, `git status`)
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language` 문장·§5 언어 마이그레이션 절) 문단 이전을 제안, 승인 대기

## Next Logical Work

- CI 게이트 복구(새 사실): `35870582922`의 `deploy` job이 `waiting`인 원인을 규칙/`github-pages` environment 승인 설정에서 확인하고 막힌 실행을 정리한 뒤, `deploy-pages.yml`이 실제로 도는지 재확인한다. 그전까지는 모든 푸시를 로컬 `validate_data.py`로 막는다.
- 다음 감사 주기: 2026-10-01 이후 공식 신규 릴리스 조사 → `models_catalog.json` 수록/제외 판정 → `build_data.py` 재생성 → `validate_data.py`(+`--check-urls`) → README 통계 갱신 → 커밋·푸시. 절차 상세는 `runbooks/audit-update.md`.
- 스텔스 보류분 재검토: Space Bunny Alpha(9/23, MiniMax 연계 추정)·Union Alpha/Pareto 26.9(9/16, 개발사 발표 10/10 예고) — 공식 확인 시 수록 판정
- 9/30 감사에서 1차 출처를 확보하지 못한 후보: **Ling 3.1 Flash**(API 게이트웨이 목록에만 등장), **Kimi K3.1**(API 레지스트리 식별자 유출, 공식 발표 없음), **GPT-6.1 Astra**(안전성 검토 연기 보도만). 공식 발표·모델 카드가 나오면 재조사 대상.
- 10월 도래 시 `index.html` 월 버튼과 `app.js` `months` 배열에 `2026-10` 추가 필요.
