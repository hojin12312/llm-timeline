# Project Wiki

## Start Here

- [Overview](overview.md) — 프로젝트 목적, 수록 범위, 감사 제약, 상위 아키텍처.
- [Current State](current.md) — 현재 카탈로그 상태, 미구현 항목, 리스크, 다음 작업.

## Components

- [Catalog Pipeline](components/catalog-pipeline.md) — `models_catalog.json` SSOT, `build_data.py` 생성, `validate_data.py` 검증, 감사 정책과 제외 원장.
- [Web Dashboard](components/web-dashboard.md) — `index.html`/`app.js`/`style.css` 타임라인 UI 구조와 데이터 바인딩.

## Runbooks

- [Audit Update](runbooks/audit-update.md) — 신규 모델 조사 → 카탈로그 수록 → 재생성·검증 → 커밋·푸시 반복 절차.
