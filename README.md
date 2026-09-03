# ⚡ 2026 LLM & MLLM Release Timeline

> **2026년 주요 LLM / MLLM 파운데이션 모델 출시 타임라인 및 세대별 진화 계보**  
> 기준 기간: **2026-01-01 ~ 2026-09-04** | 수록 모델: **115개** | 참가 조직: **27개사**

본 레포지토리는 2026년에 발표된 전 세계 주요 LLM, MLLM, Omni 파운데이션 모델의 릴리즈 내역을 체계적으로 구조화하여 인터랙티브한 웹 타임라인으로 제공하는 **GitHub Pages** 프로젝트입니다.

---

## 🌐 라이브 데모 (GitHub Pages)

- **URL:** [https://hojin12312.github.io/llm-timeline/](https://hojin12312.github.io/llm-timeline/)
*(GitHub 레포지토리 Settings > Pages에서 배포 소스를 `main` 브랜치 또는 `GitHub Actions`로 설정 시 활성화됩니다)*

---

## ✨ 핵심 기능

1. **⏱️ 인터랙티브 타임라인 (Timeline View)**
   - 2026년 1월부터 9월 4일까지의 출시 내역을 월별/일자별 수직 스파인으로 시각화
   - 각 모델의 기업 태그(국가 플래그), 아키텍처, 파라미터, 모달리티, 타겟 포커스 표시
2. **🧬 세대별 진화 계보 (Generational Flow View)**
   - 18개 대표 패밀리(Qwen, DeepSeek, Claude, GPT, Gemini, GLM, Kimi 등)의 2026년 세대 교체 및 분기 경로 시각화
   - 각 노드 클릭 시 해당 모델 사양 및 필터 연동
3. **🗂️ 모델 카탈로그 (Card Grid View)**
   - 최신순, 과거순, 모델명순, 기업명순 정렬을 지원하는 반응형 3열 카드 뷰
4. **📊 데이터 매트릭스 (Matrix Table View)**
   - 115개 모델 전수 사양 비교 테이블
   - 출시일, 모델명, 기업, 파라미터, 오픈 여부 정렬 및 **CSV 내보내기** 기능 제공
5. **🔍 정밀 실시간 검색 및 다차원 필터링**
   - 실시간 통합 검색 (단축키 `/`)
   - 월별 칩 선택 (1월 ~ 9월 전수 카운트 연동)
   - 27개 기업/연구소별 필터
   - 모델 유형 (MLLM, Omni, LLM, Reasoning) 및 상태(GA, Preview, Beta, Exp) 필터
   - 오픈 웨이트(Open Weights) 전용 토글
6. **📋 모델 상세 인스펙터 모달**
   - 세부 아키텍처(MoE, MLA, GDLA, MTP 등), 총/활성 파라미터, 지원 모달리티, 컨텍스트 윈도우 상세
   - 원클릭 **마크다운 인용 복사** 및 **JSON 데이터 복사** 지원

---

## 📊 데이터 수집 기준 (Scope & Methodology)

- **포함 대상:**
  - 대규모 언어 모델 (LLM)
  - 멀티모달 / 비전-언어 / 텍스트·이미지·음성·영상 통합 옴니 모델 (MLLM / VLM / Omni)
- **제외 기준:**
  - 이미지 단독 생성 모델
  - 비디오 단독 생성 모델 (예: ByteDance Seedance)
  - OCR 전용 / ASR·TTS 음성 전용 모델
  - 임베딩 및 리랭커 모델
  - 보상/가드레일 전용 모델
  - 단순 양자화 체크포인트 (FP8, NVFP4, INT4, GGUF 등)
  - 독립 제품을 대표하지 않는 중간/베이스 체크포인트
- **포함 기업 (27개사):**
  - **미국 (US):** OpenAI, Anthropic, Google DeepMind, Meta, xAI, NVIDIA, IBM, Poolside, Thinking Machines Lab, Arcee AI, Motif Technologies
  - **한국 (KR):** NAVER Cloud (HyperCLOVA X SEED 4B), Upstage (Solar Open 2)
  - **중국 (CN):** Alibaba (Qwen), DeepSeek, Baidu (ERNIE), ByteDance (Seed), Moonshot AI (Kimi), Z.ai (GLM), MiniMax, StepFun, Meituan (LongCat), Xiaomi (MiMo), Ant Group (Ling/Ring), Tencent (Hy)
  - **유럽/기타:** Mistral AI (프랑스), Cohere (캐나다), Sarvam AI (인도)

---

## 💻 로컬에서 실행하기

별도의 빌드 도구(`npm`, `node_modules` 등)가 전혀 필요하지 않으며, 순수 웹 표준(HTML5 + Vanilla JS + Tailwind CSS CDN)으로 동작합니다.

```bash
# 1. 레포지토리 클론
git clone https://github.com/hojin12312/llm-timeline.git
cd llm-timeline

# 2. 로컬 웹서버 실행 (Python 내장 서버)
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속하시면 즉시 확인하실 수 있습니다.

---

## 🚀 GitHub Pages 배포 설정 방법

본 레포지토리의 웹 페이지를 온라인에 배포하려면:

1. **GitHub 레포지토리** (`hojin12312/llm-timeline`) 방문
2. 상단 메뉴의 **Settings** 클릭
3. 좌측 메뉴의 **Pages** 클릭
4. **Build and deployment** 섹션의 **Source**에서:
   - **Deploy from a branch** 선택 후, Branch를 `main` / `/ (root)` 로 지정하고 **Save**  
   *(또는 **GitHub Actions**를 선택하면 내장된 `.github/workflows/deploy-pages.yml`을 통해 자동 배포됩니다)*
5. 잠시 후 상단에 생성된 `https://hojin12312.github.io/llm-timeline/` 주소로 접속 가능합니다.

---

## 📁 프로젝트 구조

```
llm-timeline/
├── index.html                       # 메인 인터랙티브 대시보드 웹 애플리케이션
├── data.js                          # 구조화된 115개 모델 데이터셋 및 패밀리 계보
├── app.js                           # 검색, 다차원 필터, 뷰 전환, 모달 동작 로직
├── style.css                        # 글래스모피즘, 타임라인 스파인, 펄스 애니메이션
├── build_data.py                    # 조사 자료 원문 파싱 및 data.js 자동 생성기
├── .nojekyll                        # GitHub Pages 정적 자산 로딩 보장
├── .github/workflows/
│   └── deploy-pages.yml             # GitHub Actions 자동 배포 워크플로우
├── 조사 자료                         # 원본 수집 데이터 문서 (Markdown)
└── README.md                        # 프로젝트 설명 및 배포 안내 문서
```
