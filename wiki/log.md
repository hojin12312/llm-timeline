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
