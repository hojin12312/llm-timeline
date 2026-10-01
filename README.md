# ⚡ 2026 LLM & MLLM Release Timeline

> **2026년 주요 LLM / MLLM 파운데이션 모델 출시 타임라인 및 세대별 진화 계보**  
> 기준 기간: **2026-01-01 ~ 2026-10-01** | 수록 모델: **192개** | 표기 조직: **54개**

본 레포지토리는 2026년에 발표된 전 세계 주요 LLM, MLLM, Omni 파운데이션 모델의 릴리즈 내역을 공식 1차 자료와 함께 구조화하여 인터랙티브한 웹 타임라인으로 제공하는 **GitHub Pages** 프로젝트입니다.

**2026-10-01 감사 추가분 (3개):**
- 신규 릴리스(3): Google DeepMind **Gemini 4 Argon**(9/30, Gemini 4 세대 첫 프론티어 모델 — Fairwind Program 신뢰 사이버 방어자 한정 단계적 배포·미국 정부 사전 접근 절차 참여, 출력 상한 64K→1M 토큰, 도입가 $2/$10 per 1M(이후 $4/$20), DeepSWE v1.1 77.9%·AutomationBench 51.3%·LVBench 91.7%·CWE-bench v1 68%), Bilibili **Index-Translate**(9/30, 150개 언어 번역 특화 패밀리 — 2B·9B dense + 35B-A3B preview MoE, Apache 2.0, 음성·더빙·장문 체크포인트 동시 공개 — 신규 조직 🇨🇳), VIDRAFT **Darwin-180B-RSI**(9/28, Qwen3.8-Flash-Next 기반 180B MoE(512 experts 중 10 활성)·262,144 컨텍스트·검증된 자체 답 재학습 RSI + ZTC 신뢰도 프러브 — 신규 조직 🇰🇷, 9/30 감사 누락분 소급)
- 벤치마크: 공식 카드·발표문 인쇄 점수만 수록해 **신규 16개 점수**를 반영했습니다(누적 173개 모델·3,065개 점수). Gemini 4 Argon은 발표문 본문에 수치로 인쇄된 4개만 기록하고 Vals Index·Harvey Legal Agent Benchmark·Gray Swan IPI(차트 이미지 한정)와 제3자 보도 수치는 제외했으며, Index-Translate는 0~1 척도 COMET-22 계열을 점수 표에서 빼고 0~100 척도 WMT26 Judge와 일반 능력 정답률만 수록했고, Darwin-180B-RSI는 다수결·thinking budget 등 평가 조건을 원장 메모에 보존했습니다.
- 제외 원장 신규 기록(5): **Ling-3.1-flash**(약 560B-A25B·1M 컨텍스트 공개 보도 — Ant Ling 공식 문서·모델 카드·가중치 미등재로 1차 출처 미확보, 보류), **OpenCSG Agentic-27B**(27.36B dense LoRA DPO — 모델 카드에 날짜 표기 없음·저장소 생성일(9/11)과 발표일(9/30) 불일치로 보류), **Heimr 570M**(Sevren 실험 모델 연구 공지 — 가중치·API 미공개), **NVIDIA Kumo Tabular**(표 형식 데이터 파운데이션 모델 3종 — 범위 밖), **EEVE ROSETTA**(2025-10·11 공개분의 재보도 — 기간 외)
- 재조사 확인: **ZGCM-1**(중관춘학원 7B 완전 오픈 — arXiv v1 2026-09-11로 이번 창구 밖, 차기 감사 재검토), **Solar Mini 4**(10/1 국내 보도 — 기존 model-183의 재보도, AAII 지수는 인용 불가 지표), **TypeSafe AI Jev**(10/1 InfoQ 보도 — 기존 model-184의 재보도), **Meta-SecAlign-8B/70B**(2026-07 공개 — 기간 외), **OpenAI Dots**(DevDay 개인 에이전트 제품 — 모델 아님)

**2026-09-30 감사 추가분 (2개):**
- 신규 릴리스(2): OpenAI **GPT-6.1 Sol**(9/29, DevDay 2026 발표 — GPT-6 Sol 대비 에이전틱 코딩·컴퓨터 유스·전문 업무 성능 격상, Astra 표준 토큰 가격의 1/5 수준($2/$10 per 1M, 캐시 읽기 $0.10 — GPT-6 Sol 대비 50% 추가 인하), 1,050,000 컨텍스트·지식 컷오프 2026-04-30), IQuest **IQuest-Q1**(9/28, 320B-A15B 스파스 MoE CLI 에이전트 파운데이션 모델·524,288 컨텍스트·MOPD+모델 머징 후학습 — 신규 조직 🌐 국가 미공개)
- 벤치마크: 공식 발표문 차트·시스템 카드 애드endum·프로젝트 사이트 차트의 인쇄 점수만 수록해 **신규 19개 점수**를 반영했습니다(누적 170개 모델·3,049개 점수). GPT-6.1 Sol의 발표문 본문은 절대값 대신 개선폭만 서술하므로 effort별 수치는 발표문 차트 데이터에서, HealthBench 4종은 시스템 카드 애드endum Table 7에서 확인했습니다. 사실 오류 응답 비율(Low effort 7.7% vs GPT-6 Sol 11.4%)·작업당 실행 비용은 % 척도 성능 지표가 아니므로 제외했습니다. IQuest-Q1의 8개 점수는 프로젝트 사이트(React 셸)를 `assets/App-*.js` 번들에서 추출해 확인했으며, 비교 모델 점수는 '공개 보고값·자체 측정' 혼용 표기라 인용하지 않았습니다.
- 재조사 확인: **GLM-5.3-FlashX**(docs.z.ai에 별도 모델 코드로 등재되나 동일 가중치 고속 서빙 티어 — 2026-09-23 감사 원장 판정 유지), **Qwen3.8-Max-Prime**(동일 패턴), **Ling 3.1 Flash**(API 게이트웨이 목록에만 등장, InclusionAI 1차 발표·모델 카드 미확보), **Kimi K3.1**(API 레지스트리 식별자 유출 — 공식 발표 없음), **Qwen-Audio-3.1 / Gemini 3.8 Flash TTS**(ASR·TTS 음성 전용 — 범위 제외 기준), **Bongard-Mini**(T5-Gemma 2 4B 기반 분류 체크포인트, 독립 API 제품 아님 — 범위 제외 기준), **GPT-6.1 Astra**(안전성 검토 연기 보도만 있고 공식 발표 없음)
- 1차 도메인 추가: `github.io`(IQuest 공식 프로젝트 사이트 — 기술 보고서·평가 차트)

**2026-09-29 감사 추가분 (10개):**
- 신규 릴리스(10): Anthropic **Claude Sonnet 5.5**(9/28, Claude 5.5 패밀리 두 번째 — Sonnet 5 대비 출력 30%+ 고속·사이버 세이프가드 첫 탑재), H Company **Holo4-27B · Holo4-35B-A3B · Holotron4-30B-A3B**(9/28, 컴퓨터유스 VLM 패밀리 — 신규 조직 🇫🇷), Tsinghua SIGS Robot Lab **VeriLoop E2**(9/22, Qwen3.8-27B 포스트트레인 27B — 신규 조직 🇨🇳), AutoTrust AI **JEV-9B · JEV-27B**(9/23·9/28, System One 부류 — 신규 조직 🇸🇬), MiniMax **M3.1-Flash-Preview**(9/27, 1M 컨텍스트·멀티모달 입력 프리뷰), Perceptron **Mk1.5**(9/25, embodied agent 제어 MLLM — 신규 조직 🇺🇸), Convai Innovations **Laya**(9/18 — 제외 원장 되돌림 이관, 신규 조직 🇮🇳)
- 벤치마크: 공식 카드·발표문 인쇄 점수만 수록해 **신규 36개 점수**를 반영했습니다(누적 168개 모델·3,030개 점수). Perceptron Mk1.5(차트 이미지 한정)·MiniMax M3.1-Flash-Preview(문서 사양만)·Laya(0~1 분율 표기)는 빈 점수로 두고 원장에 사유를 기록했습니다. Sonnet 5.5의 GDPval-AA·AA-Briefcase(Artificial Analysis 비% 지표)와 Holo4·JEV의 비% 지표(태스크당 비용·KL·지연)는 점수 표에서 제외했습니다.
- 제외 원장 신규 기록(4): **Aion 3.5 / 3.5 Mini**(GLM 기반 멀티모델 협업 롤플레잉 시스템 — 단일 가중치 아님), **Ember-1**(Kimi K3 포스트트레인 연구 프리뷰 — 2주 한정 서빙 옵션), **Jev Router**(기존 model-184 Jev의 라우팅 엔드포인트), **Space Bunny Alpha**(스텔스 — MiniMax M3.1-Flash-Preview 연계 추정만 있어 보류)
- 1차 도메인 추가: `minimax.io`(MiniMax 개발자 문서 — M3.1-Flash-Preview 사양), `perceptron.inc`(Perceptron 공식 블로그 — Mk1.5 발표)

**2026-09-27 감사 추가분 (2개):**
- 신규 릴리스(2): Contrastive-LM **CLM-8B**(9/23, Stanford·NVIDIA Research의 System One 모델 — 텍스트 생성 없이 state+action 임베딩 유사도로 행동 선택, frozen Qwen3-8B backbone + 20M projection head ×2, Apache 2.0 — 신규 조직 🇺🇸), Apple **LensVLM-9B**(9/22, 9B VLM — 렌더링된 텍스트 이미지 스캔 후 학습된 도구로 관련 페이지만 선택적 확장, Qwen3.5-9B-Base 기반 — 신규 조직 🇺🇸)
- 벤치마크: CLM-8B의 공식 GitHub README에 인쇄된 **신규 2개 점수**를 반영했습니다(누적 161개 모델·2,994개 점수). 두 점수 모두 lightweight fine-tuning된 projection head 기반 verifier 결과(38 held-out DeepSWE·30 held-out Terminal-Bench 2.1 tasks, H100 측정)이며 zero-shot CLM v0.1은 각각 79.78%·85.39%. LensVLM-9B는 공식 모델 카드·논문에 % 단위 공개 벤치마크 점수가 없어 빈 점수로 두고 원장에 사유를 기록했습니다.
- 재조사 확인: Kimi K2.6(9/24 보도 기사 — 실제 출시 2026-04-20, 기존 model-044와 동일 모델의 재보도), Tencent Hy4-preview(9/25 보도 — 실제 출시 2026-08-28, 기존 model-112와 동일), DeepSeek-V3.1-Terminus(9/26 보도 — 실제 출시 2025-09-22, 기간 외), MiniMax-M1(9/26 보도 — 실제 출시 2025-06-16, 기간 외), Gemini 3.8 Live GA(9/24 — 기존 model-158의 배포 확장), Qwen 4 preview(9/22 알리바바 아프살라 컨퍼런스 — 미출시, 학습 중), Qwen3.8-Max-Prime(9/23 — 동일 가중치의 고속 서빙 티어, GLM-5.3-FlashX와 동일 패턴으로 제외)
- 1차 도메인 추가: `github.com`(Contrastive-LM CLM-8B 공식 저장소), `machinelearning.apple.com`(Apple ML Research — LensVLM-9B 논문 페이지)

**2026-09-23 감사 추가분 (14개):**
- 신규 릴리스(8): xAI **Grok 4.7**(9/21, 더 큰 베이스+장기 RL, 500K 컨텍스트), Yandex **AliceAI-Foundation-80B-A3B-Base**(9/21, 80B-A3B 오픈가중치 파운데이션 — 신규 조직 🇷🇺), Anthropic **Claude Opus 5.5**(9/22, Claude 5.5 패밀리 첫 모델), OpenAI **GPT-6 Sol · GPT-6 Luna**(9/22, GPT-6 범용·고효율 티어 — API 가격 50% 인하), Xiaomi **MiMo-V2.6-Pro · MiMo-V2.6-Flash**(9/22, 1.02T-A42B / 309B-A15B 네이티브 옴니모달·1M 컨텍스트·MIT), Upstage **Solar Mini 4**(9/22, 35B-A3B·512K)
- 기간 내 누락 정정(4): Upstage **Solar Pro 4**(8/6, `solar-pro4` 상용 에이전틱 플래그십 — 이전 감사 누락분 소급), Nex-AGI **Nex-N2.5-mini · Nex-N2.5-Pro · Nex-N2.5-Max**(9/8, 35B-A3B/397B-A17B 멀티모달 + 1.6T 텍스트 MoE 에이전틱 패밀리 — 신규 조직 🇨🇳, Apache 2.0)
- 범위 재검토 수록(2): TypeSafe AI **Jev**(9/15, 최초의 System One 모델 — 얼리 액세스, `jev-latest`, 신규 조직 🇺🇸), Upstage **Solar Jev**(9/22, Solar Mini 4 기반 `/v1/systemone` 엔드포인트 — 베타, 512K). 산문을 생성하지 않고 choice/score/noul 결정+교정 확률만 반환하는 구조화 결정 모델이지만, 독립 API 제품·별도 모델 ID로 공식 출시되어 재검토 끝에 수록했습니다(되돌림 경위는 하단 각주 참조).
- 벤치마크: 공식 카드·발표문에 인쇄된 점수만 수록해 **신규 127개 점수**를 반영했습니다(누적 160개 모델·2,992개 점수). Solar Mini 4·Jev·Solar Jev는 공식 문서에 % 수치가 없어 빈 점수로 두고 원장에 사유를 기록했습니다. Solar Pro 4 표에서 * 표시가 없는 값(Terminal-Bench v2.1·AA-LCR·τ³-Banking·GDPval-AA·GPQA)은 Artificial Analysis 등 외부 측정분이라 제외했고, GDPval-AA Elo 계열(Opus 5.5 1846, Nex·MiMo·Grok의 AA Briefcase류)과 Grok 4.7의 점수 척도 지표도 점수 표에서 제외했습니다.
- 제외 원장 신규 기록(4): **GLM-5.3-FlashX**(GLM-5.3-Flash와 동일 가중치의 고속 서빙 티어), **Laya**(텍스트를 생성하지 않는 비LLM 결정 모델), **Apollo**(고대그리스어 도메인 특화 프로젝트), **gpt-oss-120b/20b**(2025-08-05 출시 — 기간 외)
- 1차 도메인 추가: `upstage.ai`(Upstage 공식 블로그·Console 문서 — Solar Pro 4/Solar Mini 4/Solar Jev), `nex-agi.com`(Nex-N2.5 패밀리 파라미터 공표), `typesafe.ai`(TypeSafe AI 공식 블로그·문서 — Jev/System One)

**2026-09-19 감사 추가분 (6개):**
- 신규 릴리스(4): Ant Group/InclusionAI **Realtime-Venus-Omni · Realtime-Venus-Audio**(9/16, 풀듀플렉스 옴니·오디오 9B 체크포인트 2종, Apache 2.0), GenON **Hunmin-397B-A17B-CUA**(9/18, 397B-A17B 컴퓨터 사용 특화 VLM — 신규 조직 🇰🇷), Alibaba **Qwen3.8-Omni-Flash**(9/18, 네이티브 옴니·1M 컨텍스트·에이전틱 툴콜, API 전용)
- 기간 내 누락 정정(2): Sber **GigaChat 3.5 Reasoning**(9/10, 432B-A28B 하이브리드 MoE·MIT — 신규 조직 🇷🇺), Moonshot AI **Kimi K2.8 Preview**(9/11, `kimi-for-coding` 라우트·이미지/비디오 입력)
- 벤치마크: 공식 카드·기술 보고서·발표문에 인쇄된 점수만 수록해 **신규 148개 점수**를 반영했습니다(누적 149개 모델·2,865개 점수). Kimi K2.8 Preview는 공식 문서에 수치가 없어 빈 점수로 두고 원장에 사유를 기록했습니다. GigaChat 카드의 Arena 블록은 MiniMax-M2.7 심판·GPT-5.2 베이스라인으로 개발사가 직접 계산한 지표라 수록했고, 합산 'Average' 행·토큰 효율 표는 제외했습니다.
- 제외 원장 신규 기록(9): **Bonsai 2 27B**·**DeepSeek-V4.1-Flash-NVFP4**(단순 양자화), **Grok Voice Transcribe 2.0**(ASR 전용), **Jev**(텍스트를 생성하지 않는 비LLM 결정 모델), **Odyssey-3**·**Astronex-World 1.0**(월드/비디오 생성 모델), **NASA-IBM Lunar FM**(도메인 특화), **Kimi K3 on Amazon Bedrock**(기존 모델 배포 확장), **Union Alpha/Pareto 26.9**(스텔스 출시 — 개발사 공식 발표 예정일 전이라 보류)
- 1차 도메인 추가: `kimi.com`(Kimi Code 공식 문서 — 출시 노트·모델 구성)

**2026-09-16 감사 추가분 (13개):**
- 신규 릴리스(11): Tencent **Gander**(9/9, 9B 옴니 인터랙션), DeepSeek **DeepSeek-V4.1-Flash**(9/10, 552B CED MoE·1M 컨텍스트), Ant Group/InclusionAI **Ling-3.0-flash-VL**(9/10, 124B-A5.5B), Cohere **North Small Translate**(9/10, 218B-A25B 번역 특화), Cognition **SWE-2**(9/10, Kimi K3 포스트트레인 코딩 모델), Shanghai AI Lab **Atria-Dawn-Preview**(9/11, 744B MoE), Google DeepMind **Gemini 3.8 Live · 3.8 Live Extended Thinking**(9/15), Salesforce **Koa**(9/15, Nemotron 3 Super 포스트트레인 CRM 추론), Accio-Lab **Occamy-1.0**(9/15, 35B-A3B co-work), Gensyn **open-1b**(9/15, 전 학습 과정 검증 가능 1.61B)
- 기간 내 누락 정정(2): ByteDance **Seed2.1 Pro · Seed2.1 Turbo**(6/23) — 이전 감사에서 누락된 플래그십 패밀리를 소급 수록
- 이번 감사는 각 모델이 공식 카드·기술 보고서·발표문에 인쇄한 벤치마크 점수를 전부 수록하는 것을 기준으로 했습니다(신규 124개 점수 포함, 누적 444개). Elo·달러·레이팅 등 % 척도가 아닌 지표와 제3자 지표(AA 지수, Arena 순위)는 감사 원장 메모에 기록만 하고 점수 표에는 넣지 않았습니다.
- 제외 원장 신규 기록(3): **Gemini Omni 1.1 Flash**(비디오 생성 전용), **GPT-Live-1 API 확장**(기존 모델의 배포 확장), **Gemini 3.5 Transcribe**(전사 전용)
- **벤치마크 전면 감사(9/16):** 공식 점수가 비어 있던 모델의 1차 출처(모델 카드 표·기술 보고서·발표문 차트·SVG/이미지 표·arXiv 논문)를 일제 재확인해 **42개 모델에 1,400여 개 점수를 추가 수록**했습니다 — 누적 **128개 모델·1,854개 점수**. 대상: Anthropic 전 플래그십(Fable 5/5.1, Mythos 5, Opus 5/4.8/4.7, Sonnet 5), OpenAI(GPT-5.4/Pro), Meta Muse Spark 전 세대(1.1~1.3), Qwen3.5 전 변형·Qwen3.6-Max-Preview·Qwen3.8-2.4T-A95B, GLM-5.3/Flash, Granite 4.1/4.2, EXAONE 4.5·K-EXAONE 2.0, Motif-3, LongCat-Flash-Omni, Nemotron-3-Nano-Omni, Kimi K2.7 Code, MiniMax-M2.7/M3, MiMo-V2.5, Ling-2.6-1T/3.0-tiny/3.0-flash, Tencent Hy3/Hy3-preview/Hy4-preview, Mistral Small 4, North Mini Code, Tiny Aya 변형군, ERNIE 5.0/5.1, Grok 4.6, Inkling, Gemini 3.5/3.6/3.7 Flash·Flash-Lite, A.X K1. 수치가 아예 미공개이거나 출처가 사망·게이트·이미지 한정 판독 불가인 모델은 빈 점수 사유를 각 원장 메모에 기록했습니다.
- **빈 벤치마크 전수 재조사(9/16, 2차):** 1차 감사 후 남은 빈 점수 26개 레코드를 모두 재검증해 **16개 모델에 860여 개 점수를 추가**하고 **GPT-5.4 nano**(3/17, `model-165`)를 신규 수록했습니다 — 누적 **144개 모델·2,717개 점수**. 대상: Seed 2.0(공식 모델카드 PDF 전체 표 — 기존 404 링크 대신 ByteDance CDN 카드로 대체), GPT-5.3 Instant·GPT-Live-1/mini(배포 안전 문서의 공식 안전·HealthBench 표), GLM-5-Turbo/GLM-5V-Turbo(GLM-5V 문서 비교 표), Qwen3.5-Omni-Flash(기술 보고서 Flash 열), Qwen3.6-Plus/3.7-Max/3.7-Plus(qwen.ai 3.7 발표 표), DeepSeek-V4-Flash/Pro(HF 카드 기반·instruct 표), HyperCLOVA X SEED 4B(CLOVA 기술 블로그), Gemini 3.5 Flash Cyber(datavis 인코딩 차트 데이터), Qwen3.8-Max(qwen.ai 8/3 발표 전체 표), Gemini 3.8 Live(τ-Voice 평가 차트), GPT-5.6·GPT-6 Astra(발표 표 누락분 보강). Qwen3.8-Max-Preview/0902 스냅샷, Command A+, Motif-3-Beta, GPT-6 Astra Pro, GPT-5.6 Sol Pro, Koa, Gensyn open-1b, Tiny Aya base는 1차 출처에 수치가 없음을 재확인하고 사유를 원장에 기록했습니다.

**2026-09-08 감사 추가분 (18개):**
- 신규 릴리스(5): OpenAI **GPT-6 Astra · GPT-6 Astra Pro**(9/3), Google DeepMind **Gemini 3.8 Flash · 3.8 Flash Cyber**(9/2), Meta **Muse Spark 1.3**(9/2)
- 기간 내 누락 정정(7): OpenAI **GPT-Live-1 · GPT-Live-1 mini**(7/8), **GPT-5.6 Sol Pro**(7/9), **GPT-5.6-Cyber**(8/10), Meta **Muse Spark 1.2**(8/5), **Muse Glimmer**(8/10), NVIDIA **Nemotron-3.5-Lightning-30B-A3B**(8/11)
- 신규 조직 수록(6): **Institute of Foundation Models(IFM · MBZUAI, UAE)** 의 **K2 Horizon** 함대 6종(9/3) — 0.9B · 3.7B · 7B · 32B · MoVA-36B-A4B · 375B-A23B, Apache 2.0으로 가중치+코드+학습 데이터(+레시피)까지 공개

모델명·파라미터·벤치마크는 [`models_catalog.json`](models_catalog.json)을 단일 진실 공급원(SSOT)으로 사용합니다. 예를 들어 공식 GLM-5.3-Flash 모델 카드는 이 모델을 **총 320B / 활성 18B**로 명시하므로, 과거의 약 30B 표기는 제거했습니다. ([공식 모델 카드](https://huggingface.co/zai-org/GLM-5.3-Flash))

---

## 🌐 라이브 데모 (GitHub Pages)

- **URL:** [https://hojin12312.github.io/llm-timeline/](https://hojin12312.github.io/llm-timeline/)
*(GitHub 레포지토리 Settings > Pages에서 배포 소스를 `main` 브랜치 또는 `GitHub Actions`로 설정 시 활성화됩니다)*

---

## ✨ 핵심 기능

1. **⏱️ 인터랙티브 타임라인 (단일 뷰)**
   - 2026년 1월부터 9월 30일까지의 출시 내역을 월별·일자별 수직 스파인으로 시각화
   - 날짜 노드(원)·날짜·모델 수는 sticky 헤더로 상단에 고정되고, 모델 카드만 세로로 스크롤 — 화면 밖 모델을 볼 때도 시간축이 그대로 유지
   - 마우스 위치로 스크롤 축을 분리: 가로 시간축 라인 위/부근에서 휠 = 좌우 시간축 스크롤, 그 아래에서 휠 = 모델 카드 세로 스크롤
   - 각 모델의 기업 태그(국가 플래그), 아키텍처, 파라미터, 모달리티, 타겟 포커스 표시
   - 모바일에서는 고정 폭 수평 캔버스 대신 터치 친화적인 세로 릴리즈 스트림으로 자동 전환
2. **🔎 실시간 검색 · 월 필터 · 정렬 전환**
   - 단축키 `/`로 통합 검색 (모델명·제공사·패밀리·한국어 별칭 매칭)
   - `전체 (N)` 카운트 칩 + 1~9월 월 칩, `좌우 이동` 스크롤 버튼
   - 최신순 ⇄ 과거순 토글 (월 칩 순서도 함께 반전)
3. **📋 모델 상세 인스펙터 모달**
   - 세부 아키텍처(MoE, MLA, GDLA, MTP 등), 총/활성 파라미터, 지원 모달리티, 컨텍스트 윈도우, 라이선스·오픈웨이트·변형·가용성 상세
   - 공식 발표 점수를 각 공식 출처 링크와 함께 표시, **인용 복사**로 Markdown 인용(모델명·제공사·출시일·유형·파라미터·공식 출처·점수+출처)을 클립보드에 복사
4. **⚖️ 두 모델 상호 비교 모달**
   - 카드·모달에서 최대 2개 선택, 스펙과 공식 벤치마크를 병합한 비교표 제공, 비교 결과를 Markdown으로 복사
5. **🧬 패밀리 계보 데이터 (UI 미구현)**
   - `data.js`의 `FAMILY_FLOWS`와 감사 원장에 20개 대표 패밀리(Qwen, DeepSeek, Claude, GPT, Gemini, GLM, Kimi, Muse Spark, K2 Horizon, Seed/Doubao, Ling 3.0, Grok, Solar, Nex, JEV 등)의 세대 교체·분기 경로(step)가 데이터로 들어 있습니다
   - 다만 현재 `index.html`·`app.js`에는 이 데이터를 그리는 뷰가 없습니다. 이 절에 이전 버전에서 적혀 있던 **Generational Flow View · Card Grid View · Matrix Table View · CSV 내보내기 · 기업/유형/상태/오픈웨이트 필터**는 실제 구현과 다르므로 정리했습니다 — 해당 뷰와 필터는 구현 과제 목록으로 남겨 둡니다. 타임라인·카드·모달에서는 `family`·`company` 필드로 패밀리 정보를 표시합니다.

### 📱 모바일 UI

- 검색창·월 필터·정렬·GitHub 링크를 모바일 전용 툴바로 재배치
- 화면 하단에 전체 보기·검색·비교 빠른 메뉴를 고정하고 안전 영역(safe area)을 반영
- 모델 상세 및 비교 화면은 바텀시트로 열리며, 비교표는 표 내부에서만 가로 스크롤
- 주요 버튼과 입력 컨트롤은 최소 44px 터치 영역을 사용하고, 세로 페이지 스크롤을 가로 휠 처리기가 가로채지 않도록 분리

---

## 📊 데이터 수집·검증 기준 (Scope & Methodology)

- **모델명:** 모델 카드·기술 보고서·공식 제품 문서·개발사 발표문에 적힌 공식 표시명을 사용합니다. 비공식 별칭이나 체크포인트 이름을 제품명으로 합치지 않습니다.
- **파라미터 수:** 공식 자료가 직접 명시한 총/활성 파라미터만 기록합니다. 미공개 값은 `정확한 수치 미공개`로 표시하며, 가중치 파일 용량·모델 등급·양자화 크기·제3자 추정치를 파라미터 수로 대체하지 않습니다.
- **공식 벤치마크:** 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 공개한 점수만 기록합니다. Chatbot Arena/ELO, Artificial Analysis, 제3자 리더보드, 역산·추정 점수는 표시하지 않습니다.
- **조건 보존:** benchmark 버전, 데이터셋, 모드, 평가 조건이 공식 자료에 기재된 경우 모델별 감사 원장의 메모에 보존합니다. 서로 다른 프로토콜의 점수는 동일 순위로 비교하지 않습니다.
- **출처 연결:** 출시일·파라미터·각 점수에 공식 1차 출처 URL을 따로 연결합니다. 공식 URL에 해당 수치가 직접 기재되지 않은 경우 그 수치는 넣지 않습니다.
- **1차 도메인 목록:** `validate_data.py`의 `OFFICIAL_HOSTS`에 등록된 개발사 자체 도메인만 공식 출처로 인정합니다. 2026-09-08에 Meta AI Research 블로그(`research.meta.ai`)와 Google 공식 블로그(`blog.google`)를 추가했습니다 — Muse Spark 1.3과 Gemini 3.8 Flash Cyber는 `ai.meta.com`·`deepmind.google`이 아니라 그곳에만 1차 발표문이 있습니다. 같은 날 IFM(MBZUAI) 편입으로 `ifm.ai`를 추가했습니다. 2026-09-16에는 `cognition.com`(SWE-2), `salesforce.com`(Koa), `gensyn.ai`(open-1b 검증 레코드), `ai.google.dev`(Gemini Live API 모델 ID), 그리고 `arxiv.org`(개발사가 직접 게재한 공식 기술 보고서 — ERNIE 5.0, Tiny Aya)를 추가했습니다. 2026-09-19에는 `kimi.com`(Kimi Code 문서), 2026-09-23에는 `upstage.ai`(Solar Pro 4/Solar Mini 4 블로그·Console 문서)와 `nex-agi.com`(Nex-N2.5 파라미터 공표)을, 2026-09-29에는 `minimax.io`(MiniMax 개발자 문서)와 `perceptron.inc`(Perceptron 공식 블로그)를, 2026-09-30에는 `github.io`(자체 조직의 GitHub Pages 프로젝트 사이트 — IQuest-Q1 기술 보고서)를 추가했습니다.
- **재현 가능한 검증:** `validate_data.py`가 모든 점수의 출처·범위·금지된 제3자 지표·생성 파일의 SSOT 일치를 검사합니다.

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
- **포함 기업 (54개 표기 조직):**
   - **미국 (US):** OpenAI, Anthropic, Google DeepMind, Meta, xAI, NVIDIA, IBM, Poolside, Thinking Machines Lab, Arcee AI, Motif Technologies, Cognition (SWE), Salesforce (Koa), Gensyn (open-1b), Accio-Lab (Occamy), TypeSafe AI (Jev), Contrastive-LM (CLM), Apple (LensVLM), Perceptron (Mk1.5)
   - **한국 (KR):** NAVER Cloud (HyperCLOVA X SEED 4B), Upstage (Solar), LG AI Research (EXAONE / K-EXAONE), SK Telecom (A.X), GenON (Hunmin), VIDRAFT (Darwin)
  - **중국 (CN):** Alibaba (Qwen), DeepSeek, Baidu (ERNIE), ByteDance (Seed), Moonshot AI (Kimi), Z.ai (GLM), MiniMax, StepFun, Meituan (LongCat), Xiaomi (MiMo), Ant Group (Ling/Ring), Tencent (Hy), Shanghai Artificial Intelligence Laboratory (Atria), Nex-AGI (Nex), Tsinghua SIGS Robot Lab (VeriLoop), Bilibili (Index-Translate)
   - **중동 (AE):** Institute of Foundation Models / MBZUAI (K2 Horizon)
   - **유럽/기타:** Mistral AI (프랑스), H Company (프랑스, Holo4), Cohere/Cohere Labs (캐나다), Sarvam AI (인도), Convai Innovations (인도, Laya), AutoTrust AI (싱가포르, JEV), Sber (러시아, GigaChat), Yandex (러시아, AliceAI)
   - **국적 미공개:** IQuest (IQuest-Q1) — 모델 카드 언어가 영어·중국어이고 공식 출처에 본사·국적 표기가 없어 추정하지 않고 미상으로 두었습니다.

공식 점수가 확인되지 않은 모델은 빈 점수로 표시합니다. 이는 누락이 아니라 공식 발표 점수만 제공한다는 감사 정책의 결과입니다. 원래 목록에서 공식 출시 시점·공식 제품명·별도 모델 ID가 확인되지 않거나 중복인 5개 항목과, 2026-09-08 감사에서 1차 출처 미확보로 보류한 1개 항목(iFLYTEK Spark X2.5), 2026-09-16 감사에서 범위 제외로 판정한 3개 항목(Gemini Omni 1.1 Flash · GPT-Live-1 API 확장 · Gemini 3.5 Transcribe)과, 2026-09-19 감사에서 범위 제외·보류로 판정한 8개 항목(단순 양자화 2 · ASR 전용 1 · 도메인 특화/월드모델 3 · 배포 확장 1 · 스텔스 보류 1), 2026-09-23 감사에서 범위 제외로 판정해 원장에 남은 3개 항목(동일 가중치 서빙 티어 1 · 도메인 특화 1 · 기간 외 1 — 비LLM 결정 모델로 분류됐던 Laya는 09-29 되돌림으로 이관)과, 2026-09-29 감사에서 범위 제외·보류로 판정한 4개 항목(멀티모델 협업 시스템 1 · 포스트트레인 연구 프리뷰 1 · 라우팅 엔드포인트 1 · 스텔스 보류 1), 2026-10-01 감사에서 1차 출처 미확보·날짜 근거 미확보·범위 제외로 판정한 5개 항목(1차 출처 미확보 1 · 날짜 근거 미확보 1 · 비공개 연구 모델 1 · 범위 밖 1 · 기간 외 1)까지 **29개 항목**은 [`조사 자료`](조사%20자료)의 제외 원장에 보존했습니다.

> **2026-09-08 제외 원장 되돌림:** 2026-09-04 감사에서 "공식 발표문을 확인하지 못했다"며 보류했던 **Muse Spark 1.2**(구 `model-098`)와 **Muse Spark 1.3**(구 `model-115`)은, Meta의 1차 발표문이 `ai.meta.com`이 아니라 **Meta AI Research 블로그(`research.meta.ai`)** 에 있음을 확인하고 활성 레코드(`model-136`, `model-131`)로 이관했습니다. 제외 원장에서 두 항목을 삭제했고, 그 경위는 각 모델의 감사 원장 메모에 남아 있습니다.
>
> **2026-09-23 제외 원장 되돌림:** 2026-09-19·09-23 감사에서 "텍스트를 생성하지 않는 비LLM 결정 모델"로 제외했던 **Jev**(TypeSafe AI, 9/15)와 **Solar Jev**(Upstage, 9/22)를 재검토 끝에 활성 레코드(`model-184`, `model-185`)로 이관했습니다. 두 모델은 산문 생성 없이 choice/score/noul 결정+교정 확률만 반환하지만, 독립 API 제품·별도 모델 ID로 공식 출시된 신종 파운데이션 모델 부류(System One / structured decision)라는 판단입니다. 같은 부류로 제외 원장에 남은 **Laya**는 공식 출시 상세가 더 제한적이라 일단 원장에 유지했습니다.
>
> **2026-09-29 제외 원장 되돌림:** 위 판정으로 원장에 남겨 뒀던 **Laya**(Convai Innovations, 9/18)를 재검토해 활성 레코드(`model-188`)로 이관했습니다. pip/npm 배포·self-host HTTP 서버·3종 공개 체크포인트를 갖춘 독립 제품으로 Jev·Solar Jev와 같은 System One 부류라는 판단입니다. 같은 날 AutoTrust AI의 **JEV-9B**·**JEV-27B**도 같은 부류로 신규 수록했습니다.

> **2026-09-08 신규 조직 편입 & 보류 각주:** IFM(MBZUAI) **K2 Horizon**은 "가장 큰 완전 오픈소스 릴리스"를 내건 신규 프론티어 랩이라 추적 조직에 편입했습니다(1차 출처: `ifm.ai`, `huggingface.co/IFM/*`). 반대로 **iFLYTEK Spark X2.5**(9/7, 보도 기준 293B-A30B MoE·256K)는 讯飞 공식 API 카탈로그 페이지가 JavaScript 셸만 응답해 파라미터·출시일을 1차 출처에서 인용할 수 없고, Hugging Face `XHToken`("SparkLLM Team")이 科大讯飞의 공식 조직인지도 확인하지 못해 제외 원장에 보류 기록으로 남겼습니다.

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
├── models_catalog.json               # 모델명·파라미터·공식 점수·출처 SSOT
├── data.js                          # SSOT에서 생성된 192개 모델 데이터셋
├── app.js                           # 검색, 다차원 필터, 뷰 전환, 모달 동작 로직
├── style.css                        # 타임라인 스파인, sticky 시간축 헤더, 반응형 모바일 레이아웃
├── build_data.py                    # models_catalog.json → data.js 생성기
├── validate_data.py                 # 구조·출처·점수·생성물 일치 검증기
├── .nojekyll                        # GitHub Pages 정적 자산 로딩 보장
├── .github/workflows/
│   └── deploy-pages.yml             # GitHub Actions 자동 배포 워크플로우
├── 조사 자료                         # 192개 모델별 공식 출처 감사 원장 (Markdown)
└── README.md                        # 프로젝트 설명 및 배포 안내 문서
```

### 데이터 갱신

```bash
python3 build_data.py
python3 validate_data.py
python3 validate_data.py --check-urls
```

`data.js`는 직접 편집하지 않습니다. 새 모델이나 정정 사항은 `models_catalog.json`과 감사 원장에 반영하고, 구조 검증을 통과한 뒤 생성 파일을 커밋합니다.

`--check-urls`는 출처 서버에 예의를 지키도록 발행사(host) 단위로 직렬화하고 짧게 대기한 뒤 재시도합니다. 그리고 결과를 두 갈래로 나눕니다.
- **경고(실패 아님):** 429·503 같은 rate limit, 그리고 `BOT_PROTECTED_HOSTS`(현재 `ifm.ai`, `openai.com`)의 지속 403 — 자동 요청에 간헐적으로 JavaScript 챌린지를 돌려보내는 사이트로, 해당 페이지는 각각 2026-09-08·2026-09-16에 내용을 직접 열어 확인했습니다.
- **실패:** 404·410 등 실제로 사라진 출처, 그리고 보호 목록에 없는 호스트의 지속 403.
