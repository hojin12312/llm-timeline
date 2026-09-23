---
title: Web Dashboard
type: component
status: current
updated: 2026-09-23
---

# Web Dashboard

## Responsibility

`data.js`의 카탈로그 데이터를 월별·일자별 인터랙티브 타임라인으로 렌더링하고, 검색·월 필터·정렬·모델 상세·두 모델 비교를 제공하는 순수 정적 프론트엔드.

## Interface

- 입력: `data.js`가 선언하는 전역 상수 `TIMELINE_DATA`(모델 배열), `COMPANY_META`, `FAMILY_FLOWS`, `UNCONFIRMED_DATA`, `SCOPE_DATA`, `AUDIT_EXCLUDED`.
- 출력: 없음(읽기 전용 뷰). URL 해시로 모델 모달(`#model=<id>`)과 비교(`#compare=<idA>,<idB>`) 딥링크를 지원.
- 로컬 실행: `python3 -m http.server 8000` — 빌드 도구 없음. Tailwind는 CDN이 아니라 `style.css`에 정적 작성(README 표현과 무관하게 실제 CSS 파일 사용).

## Current Implementation

- `index.html`: 헤더(검색·비교·정렬·스크롤 버튼·GitHub 링크), 월 내비게이션 subbar(2026-01~09 버튼 하드코딩), `.timeline-viewport` 스크롤 컨테이너, 비교 dock, 모델 모달·비교 모달, 모바일 하단 nav.
- `app.js`: 전역 상태(`searchQuery`, `sortOrder`, `compareList` 등) + 렌더 함수.
  - `renderTimeline`: 날짜별 그룹핑 → 수평 시간축 + 일자 컬럼 + 모델 카드. `SCOPE_DATA.period`에서 헤더 기준 기간을 파생(`auditPeriodLabel`).
  - `getFilteredModels`: 검색어를 모델명·제공사·패밀리 + 한국어 별칭(회사별 수동 alias 맵)과 매칭.
  - 카드 태그는 `m.category || m.type`, `status !== 'GA'`일 때 상태 표시, `COMPANY_META`의 `flag`/`badge`/`color`로 조직 스타일링.
  - 모달: 스펙(`parameter_status` 한국어 라벨), 공식 점수+출처 링크, Markdown 인용 복사.
  - 비교: 최대 2개 모델의 스펙·공식 벤치마크 병합표 + Markdown 복사.
  - 스크롤: 마우스 위치로 축 분리 — 시간축 라인 위에서 휠=좌우, 그 아래=카드 세로. `content-visibility`로 렌더 비용 절감.
- `style.css`: 시간축 스파인, sticky 헤더, 카드·모달, 모바일(세로 스트림 전환, safe area, 44px 터치 영역).

## Important Invariants

- 프론트엔드는 `data.js` 전역 상수만 읽는다. 카탈로그 스키마를 바꾸면 `build_data.py`의 생성 형태와 `app.js`의 참조를 함께 맞춰야 한다.
- `SCOPE_DATA.period`가 헤더 문구의 기준이므로 카탈로그 `scope.period` 갱신이 곧 UI 갱신이다.

## Relevant Paths

- `index.html`, `app.js`, `style.css`, `data.js`

## Tests / Validation

- 전용 프론트엔드 테스트 없음. 검증은 `validate_data.py`(데이터 일치) + 수동 브라우저 확인.
- 모바일 레이아웃은 `isMobileLayout()` 분기로 별도 확인 필요.

## Known Limitations

- `FAMILY_FLOWS` 데이터는 주입되지만 그리는 뷰가 없다(README도 미구현으로 명시). Generational Flow/Grid/Matrix 뷰, CSV 내보내기, 기업/유형/상태/오픈웨이트 필터 미구현.
- 월 목록이 `index.html` 버튼과 `app.js` `months` 배열에 2026-01~09로 하드코딩 — 기간 외 월 추가 시 두 곳 수정 필요.
- 한국어 별칭 검색은 회사별 수동 맵이라 신규 조직 추가 시 alias를 손으로 넣어야 검색이 걸린다.

## Related Pages

- [Catalog Pipeline](catalog-pipeline.md)
