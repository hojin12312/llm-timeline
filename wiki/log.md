# Wiki Log

## [2026-09-23] init | initial project memory

Source HEAD: 72e89df7888fbc3e8b05d725277cb5d1e4121a1b
Wiki:
- created SCHEMA.md, index.md, overview.md, current.md, components/catalog-pipeline.md, components/web-dashboard.md, runbooks/audit-update.md, AGENTS.md
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)

## [2026-09-27] update | 9/24~9/27 감사 반영

Source HEAD: b2cbe6261685adc1694b55970f86c5b2f5ed037a
Wiki:
- updated current.md — 활성 모델 175→177, 조직 42→46, 공식 점수 160→161개 모델·2,992→2,994점, as_of 2026-09-27, 최근 수록 갱신
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)

## [2026-09-29] update | 9/29 감사 반영 (신규 10종 수록)

Source HEAD: 1dab227c9914a26f85d89407ae7e0ba48e82aa44
Wiki:
- updated current.md — 활성 모델 177→187, 조직 46→51, 제외 원장 21→24, 공식 점수 161→168개 모델·2,994→3,030점, as_of·리스크·다음 작업 갱신
- updated components/catalog-pipeline.md — System One 예외 목록에 Laya·JEV 추가, gated/삭제 출처 제한을 Known Limitations에 기록
- updated overview.md — 제외 원장 되돌림 선례·System One 부류 예시에 Laya·JEV 반영
Validation:
- python3 /Users/studio/.claude/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0 — 선택적 마이그레이션)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) 제안 — 승인 대기

## [2026-09-30] update | 9/30 감사 반영 (GPT-6.1 Sol·IQuest-Q1 신규 2종)

Source HEAD: b0c0b49911faf43f9df2395a540112d1f9d600ce
Wiki:
- updated current.md — 활성 모델 187→189, 조직 51→52, 공식 점수 168→170개 모델·3,030→3,049점, as_of 2026-09-30, 최근 수록·리스크·다음 작업 갱신
- updated components/catalog-pipeline.md — openai.com RSC 차트 페이로드와 `*.github.io` React 셸의 JS 번해 추출 방법을 Important Invariants에, 고속 서빙 티어 재판정과 국적 미공개 `company_meta` 관례를 Known Limitations에 기록
Validation:
- python3 validate_data.py — PASS (OK: 189 models, 24 excluded, 170 with official scores)
- python3 validate_data.py --check-urls — PASS (257 URL, HF 429·ifm.ai 403 경고만, 실패 없음)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)
- 1차 출처 미확보 후보 재조사: Ling 3.1 Flash · Kimi K3.1 · GPT-6.1 Astra
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) 제안 — 승인 대기

## [2026-09-30] update | 9/30 감사 wiki 정합 점검 (CI 게이트 이상 발견)

Source HEAD: a4d3652ad7b29ce2f1fba396ae3d8242672781eb
Wiki:
- updated current.md — CI 검증 게이트가 2026-09-20 이후 실행되지 않는 사실을 Active Risks에 기록(관측 근거 포함), 배포 관측(라이브 data.js 바이트 동일) 추가, Working·Next Logical Work 재분류
- updated components/catalog-pipeline.md — CI 불변식이 "선언"과 "실제 실행"을 구분하도록 qualify
- updated runbooks/audit-update.md — openai.com RSC 차트 페이로드·`*.github.io` React 번들 추출 절차와 차트 전용 벤치마크 처리, 푸시 전 로컬 검증 강의를 Failure Modes와 절차 8단계에 추가
- reviewed the hand-written 2026-09-30 log entry above (left as written)
- reviewed wiki/overview.md as changed in `1b1fd1a` inside this range — Laya·JEV-9B/27B 관련 편집이 카탈로그의 `type: System One / structured decision`과 일치해 그대로 유지
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
- python3 <skill-dir>/core/scripts/wiki_state.py budget . — current 1903/2000, bootstrap 3314/6000 (추정치, 모델 토크나이저 기준 아님)
Open:
- `deploy-pages.yml`의 `deploy` job이 2026-09-23T13:56Z부터 `waiting`인 원인은 미확인(환경 승인/규칙 추정). 게이트 복구 전까지 푸시 전 로컬 `validate_data.py`가 유일한 게이트
- 1차 출처 미확보 후보 재조사: Ling 3.1 Flash · Kimi K3.1 · GPT-6.1 Astra
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지
