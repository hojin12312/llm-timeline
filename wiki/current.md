---
title: Current State
type: current
status: current
updated: 2026-10-01
---

# Current State

## Working

- 카탈로그: 활성 모델 192개, 제외 원장 29개, 표기 조직 54개, `as_of` 2026-10-01, 범위 2026-01-01 ~ 2026-10-01. 공식 점수 보유 173개 모델·누적 3,065점 (확인 2026-10-01, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 192 models, 29 excluded, 173 with official scores`, 같은 실행에서 `validate_generated` 일치 검사도 PASS (2026-10-01, host local)
- URL 실측: `python3 validate_data.py --check-urls` → 268개 출처 URL 스윕 PASS (2026-10-01, host local). 경고는 HF 429 rate-limit 25건과 `ifm.ai` 봇 보호 403 2건뿐, 실패 없음
- 10/1 감사 수록(커밋 `02bfe54`): **Gemini 4 Argon**(`model-202`, 9/30 — Gemini 4 세대 첫 모델, Fairwind Program 한정 배포·출력 상한 64K→1M, 발표문이 유일한 1차 출처), **Index-Translate**(`model-201`, 9/30, Bilibili 150개 언어 번역 특화 — 신규 조직 🇨🇳), **Darwin-180B-RSI**(`model-200`, 9/28, VIDRAFT 180B MoE RSI·ZTC — 신규 조직 🇰🇷, 9/30 감사 누락분 소급)
- 제외 원장 신규 5건: Ling-3.1-flash(1차 출처 미확보) · OpenCSG Agentic-27B(날짜 근거 불일치) · Heimr 570M(가중치·API 미공개) · NVIDIA Kumo Tabular(범위 밖) · EEVE ROSETTA(기간 외)
- 배포 관측 (2026-10-01, host local, `gh run list` + 라이브 `data.js` GET·바이트 비교): `02bfe54` 푸시 후 라이브 `data.js`가 로컬과 바이트 동일(192개 모델) — 반영 경로는 GitHub 네이티브 `pages build and deployment`
- 배포 파이프라인(코드 읽음): `deploy-pages.yml`은 push마다 `validate_data.py`를 돌리고 Pages를 배포하도록 선언돼 있다(워크플로 파일은 `c2de7f5`(9/8) 이후 변경 없음). 실제 실행 여부는 아래 Active Risks

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`(20개 플로우)는 데이터만 존재하고 그리는 UI 뷰가 없음 — Gemini 플로우 끝에 `Gemini 4 Argon` 추가 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- **CI 검증 게이트 정지 지속** (관측 2026-10-01, host local, `gh run list`): 마지막 성공은 `95caed4`(2026-09-19T16:02Z)이고 이후 커스텀 `Deploy GitHub Pages` 실행은 job 0개이거나 `pending`. `02bfe54` 푸시도 `36849962668`이 `pending` — 동시성 그룹 `pages`를 `35870582922`(2026-09-23)의 `waiting` job이 붙잡고 있다는 추정은 미확인. 게이트가 돌지 않으므로 **푸시 전 로컬 `validate_data.py`가 유일한 게이트**이고 사이트 반영은 네이티브 워크플로가 처리한다
- **월 칩 하드코딩**: `index.html` 버튼과 `app.js` `months` 배열이 2026-01~09. 10/1 감사는 2026-10 날짜 모델이 없어 의도적으로 추가하지 않았다 — 빈 월 칩은 `jumpToMonth`가 대상 컬럼을 못 찾아 active 표시만 남는다. 첫 2026-10 날짜 모델 수록 시 두 곳을 함께 갱신
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-10-01, `git status`)
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language`·§5 마이그레이션 문단) 이전 제안, 승인 대기
- 출처 함정 상세(openai.com RSC 차트 페이로드·`*.github.io` React 셸·HF 429/gated·봇 403 호스트)는 `components/catalog-pipeline.md`의 Important Invariants·Known Limitations가 canonical

## Next Logical Work

- 보류 3종 재조사(공식 자료 확보 시 수록 판정): **Ling-3.1-flash**(Ant Ling 문서·가격표 미등재) · **OpenCSG Agentic-27B**(카드에 날짜 표기 없음, 저장소 2026-09-11 vs 발표 9/30 불일치) · **Heimr 570M**(가중치·API 미공개)
- 미등록 후보: **ZGCM-1**(중관춘학원 7B 완전 오픈, arXiv v1 2026-09-11 — 이번 창구 밖) · **Kimi K3.1**(API 식별자 유출만) · **GPT-6.1 Astra**(공식 발표 없음) · 스텔스 **Space Bunny Alpha**·**Union Alpha/Pareto 26.9**(개발사 발표 2026-10-10 예고)
- 다음 감사 주기(2026-10-02 이후): 신규 릴리스 조사 → 수록/제외 판정 → `build_data.py` → `validate_data.py`(+`--check-urls`) → README 통계 → 커밋·푸시. 절차는 `runbooks/audit-update.md`
- CI 게이트 복구: `github-pages` environment 규칙/승인에서 `deploy` job `waiting` 원인을 확인해 막힌 실행을 정리한 뒤 워크플로가 실제로 도는지 재확인