// 2026 Major LLM / MLLM Release Timeline Dataset
// Auto-generated from models_catalog.json. Do not hand-edit data.js.

const TIMELINE_DATA = [
  {
    "id": "model-034",
    "name": "MiMo-V2-Flash",
    "date": "2026-01-06",
    "sortDate": "2026-01-06",
    "month": "2026-01",
    "monthName": "January",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "309B total / 15B active (MoE)",
    "architecture": "Sparse MoE with hybrid attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Corrected from the repository’s non-official “MiMo-V2-Pro” label to Xiaomi’s official MiMo-V2-Flash release.",
    "benchmarks": {
      "MMLU-Pro": 84.9,
      "GPQA Diamond": 83.7,
      "LiveCodeBench v6": 80.6,
      "SWE-bench AgentLess": 30.8,
      "SWE-bench Verified": 73.4,
      "SWE-bench Multilingual": 71.7,
      "Terminal-Bench 2.0": 38.5,
      "BrowseComp": 45.4,
      "τ²-Bench": 80.3
    },
    "official_id": "XiaomiMiMo/MiMo-V2-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://huggingface.co/papers/2601.02780"
      }
    ],
    "release_date_source": "https://huggingface.co/papers/2601.02780",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "GPQA Diamond": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "LiveCodeBench v6": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench AgentLess": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench Multilingual": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "Terminal-Bench 2.0": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "BrowseComp": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "τ²-Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash"
    },
    "benchmark_note": "Xiaomi MiMo 공식 기술 보고서/모델 카드 수치입니다. AgentLess와 일반 agent benchmark는 설정이 다릅니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-125",
    "name": "A.X K1",
    "date": "2026-01-07",
    "sortDate": "2026-01-07",
    "month": "2026-01",
    "monthName": "January",
    "company": "SK Telecom",
    "family": "A.X",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "519B total / 33B active (MoE)",
    "architecture": "Decoder-only Transformer + sparse MoE (MLA)",
    "modalities": [
      "language",
      "code"
    ],
    "focus": [
      "Sovereign AI",
      "Korean public administration",
      "enterprise AX",
      "agent workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "131,072",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official SK Telecom model card reports 519B total / 33B active parameters; the model card is released under Apache 2.0.",
    "benchmarks": {},
    "official_id": "skt/A.X-K1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/skt/A.X-K1"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://news.sktelecom.com/218112"
      }
    ],
    "release_date_source": "https://news.sktelecom.com/218112",
    "parameter_source": "https://huggingface.co/skt/A.X-K1",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-001",
    "name": "LongCat-Flash-Thinking-2601",
    "date": "2026-01-20",
    "sortDate": "2026-01-20",
    "month": "2026-01",
    "monthName": "January",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "560B total / 27B average active (MoE; 18.6–31.3B dynamic)",
    "architecture": "Sparse MoE with dynamic activation",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "MoE; publisher reports 560B total and dynamic activation of 18.6–31.3B (about 27B average).",
    "benchmarks": {
      "LiveCodeBench": 82.8,
      "AIME 2025": 100.0,
      "IMOAnswerBench": 86.8,
      "τ²-Bench": 88.2,
      "BrowseComp": 73.1
    },
    "official_id": "meituan-longcat/LongCat-Flash-Thinking-2601",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Thinking-2601"
      },
      {
        "label": "공식 벤치마크 발표",
        "url": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html"
      }
    ],
    "release_date_source": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
    "parameter_source": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
    "benchmark_sources": {
      "LiveCodeBench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "AIME 2025": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "IMOAnswerBench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "τ²-Bench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "BrowseComp": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html"
    },
    "benchmark_note": "AIME-25는 Heavy Thinking Mode 결과(공식 발표 표의 Avg@16 계열)이며, LCB/BrowseComp 등은 발표문 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-002",
    "name": "Kimi K2.5",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1T total / 32B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Native multimodal MoE; publisher reports 1T total and 32B active.",
    "benchmarks": {
      "SWE-bench Verified": 76.8,
      "SWE-bench Pro": 50.7,
      "SWE-bench Multilingual": 73.0,
      "Terminal-Bench 2.0": 50.8,
      "LiveCodeBench v6": 85.0,
      "AIME 2025": 96.1,
      "GPQA Diamond": 87.6,
      "MMLU-Pro": 87.1,
      "MMMU-Pro": 78.5
    },
    "official_id": "moonshotai/Kimi-K2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.5",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "SWE-bench Pro": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "SWE-bench Multilingual": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "Terminal-Bench 2.0": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "LiveCodeBench v6": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "AIME 2025": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "MMLU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "MMMU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.5"
    },
    "benchmark_note": "공식 모델 카드 자기 보고 수치. 도구 사용 여부와 reasoning 설정은 원문 조건이 benchmark마다 다릅니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-003",
    "name": "Trinity-Large-Preview",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "398B total / ~13B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [
      "Trinity-Large-Preview",
      "Trinity-Large-Base",
      "Trinity-Large-TrueBase"
    ],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; the publisher describes the active count as approximately 13B.",
    "benchmarks": {
      "MMLU": 87.2,
      "MMLU-Pro": 75.2,
      "GPQA Diamond": 63.3,
      "AIME 2025": 24.0
    },
    "official_id": "arcee-ai/Trinity-Large-Preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-Preview"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
    "benchmark_sources": {
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "AIME 2025": "https://huggingface.co/arcee-ai/Trinity-Large-Preview"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-01",
    "name": "Trinity-Large-Base",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "Base",
    "parameters": "398B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "open_weights": true,
    "note": "Sparse MoE pretraining checkpoint.",
    "benchmarks": {
      "MATH-500": 65.2,
      "MMLU": 82.58,
      "MMLU-Pro": 66.02,
      "GPQA Diamond": 43.94
    },
    "official_id": "arcee-ai/Trinity-Large-Base",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-Base"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-Base"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-02",
    "name": "Trinity-Large-TrueBase",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "TrueBase",
    "parameters": "398B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "open_weights": true,
    "note": "Sparse MoE pre-anneal pretraining checkpoint.",
    "benchmarks": {
      "MATH-500": 48.2,
      "MMLU": 78.45,
      "MMLU-Pro": 51.6,
      "GPQA Diamond": 40.91
    },
    "official_id": "arcee-ai/Trinity-Large-TrueBase",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-004",
    "name": "Claude Opus 4.6",
    "date": "2026-02-05",
    "sortDate": "2026-02-05",
    "month": "2026-02",
    "monthName": "February",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.8,
      "Terminal-Bench 2.0": 65.4,
      "GPQA Diamond": 91.3,
      "MMLU": 91.1
    },
    "official_id": "6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "Terminal-Bench 2.0": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "MMLU": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf"
    },
    "benchmark_note": "Anthropic System Card의 제공자 측 평가 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-005",
    "name": "LongCat-Flash-Lite",
    "date": "2026-02-05",
    "sortDate": "2026-02-05",
    "month": "2026-02",
    "monthName": "February",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "68.5B total / 2.9–4.5B active (MoE + N-gram embedding; >30B embedding)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 활성 파라미터 표기 범위(2.9B~4.5B)를 보존했습니다.",
    "benchmarks": {
      "SWE-bench Verified": 54.4,
      "Terminal-Bench 2.0": 33.75,
      "SWE-bench Multilingual": 38.1,
      "GPQA Diamond": 66.78,
      "MMLU": 85.52,
      "MMLU-Pro": 78.29,
      "MATH-500": 96.8
    },
    "official_id": "meituan-longcat/LongCat-Flash-Lite",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite"
      }
    ],
    "release_date_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
    "parameter_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "Terminal-Bench 2.0": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "SWE-bench Multilingual": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "GPQA Diamond": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MMLU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MMLU-Pro": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MATH-500": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite"
    },
    "benchmark_note": "공식 모델 카드 자기 보고 수치이며, 각 benchmark의 shot/tool 조건은 카드 원문을 따릅니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-006",
    "name": "GPT-5.3-Codex",
    "date": "2026-02-06",
    "sortDate": "2026-02-06",
    "month": "2026-02",
    "monthName": "February",
    "company": "OpenAI",
    "family": "GPT",
    "type": "LLM / agentic coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 56.8,
      "Terminal-Bench 2.0": 77.3,
      "OSWorld-Verified": 64.7,
      "Cyber CTF": 77.6
    },
    "official_id": "introducing-gpt-5-3-codex",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-3-codex/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-3-codex/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-3-codex/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "Cyber CTF": "https://openai.com/index/introducing-gpt-5-3-codex/"
    },
    "benchmark_note": "OpenAI 공식 발표의 공개 평가 표 수치입니다. SWE-Bench Pro는 Public Dataset 조건입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-007",
    "name": "ERNIE 5.0",
    "date": "2026-02-06",
    "sortDate": "2026-02-06",
    "month": "2026-02",
    "monthName": "February",
    "company": "Baidu",
    "family": "ERNIE",
    "type": "MLLM / unified omni model",
    "category": "Omni",
    "status": "GA",
    "parameters": "2.4T total",
    "architecture": "Unified Omni Model",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "ernie5.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ernie.baidu.com/blog/posts/ernie5.0/"
      }
    ],
    "release_date_source": "https://ernie.baidu.com/blog/posts/ernie5.0/",
    "parameter_source": "https://ernie.baidu.com/blog/posts/ernie5.0/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-008",
    "name": "GLM-5",
    "date": "2026-02-11",
    "sortDate": "2026-02-11",
    "month": "2026-02",
    "monthName": "February",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "744B total / 40B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; publisher model card reports 744B total and 40B active.",
    "benchmarks": {
      "SWE-bench Verified": 77.8,
      "SWE-bench Multilingual": 73.3,
      "Terminal-Bench 2.0": 60.7,
      "GPQA Diamond": 86.0,
      "AIME 2026": 92.7,
      "HLE": 30.5,
      "BrowseComp": 62.0
    },
    "official_id": "zai-org/GLM-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/zai-org/GLM-5",
      "SWE-bench Multilingual": "https://huggingface.co/zai-org/GLM-5",
      "Terminal-Bench 2.0": "https://huggingface.co/zai-org/GLM-5",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5",
      "AIME 2026": "https://huggingface.co/zai-org/GLM-5",
      "HLE": "https://huggingface.co/zai-org/GLM-5",
      "BrowseComp": "https://huggingface.co/zai-org/GLM-5"
    },
    "benchmark_note": "Z.ai 공식 모델 카드의 자기 보고 수치입니다. GLM-5.2/5.3의 수치를 이 레코드에 섞지 않았습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-009",
    "name": "MiniMax-M2.5",
    "date": "2026-02-12",
    "sortDate": "2026-02-12",
    "month": "2026-02",
    "monthName": "February",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "BrowseComp": 76.3,
      "AIME 2025": 86.3,
      "GPQA Diamond": 85.2
    },
    "official_id": "MiniMaxAI/MiniMax-M2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "BrowseComp": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "AIME 2025": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "GPQA Diamond": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
    },
    "benchmark_note": "MiniMax 공식 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-010",
    "name": "Step 3.5 Flash",
    "date": "2026-02-12",
    "sortDate": "2026-02-12",
    "month": "2026-02",
    "monthName": "February",
    "company": "StepFun",
    "family": "Step",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "196.81B total / ~11B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; official model card reports 196.81B total and about 11B active.",
    "benchmarks": {
      "AIME 2025": 97.3,
      "IMOAnswerBench": 85.4,
      "LiveCodeBench v6": 86.4,
      "SWE-bench Verified": 74.4,
      "Terminal-Bench 2.0": 51.0
    },
    "official_id": "stepfun-ai/Step-3.5-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/stepfun-ai/Step-3.5-Flash"
      },
      {
        "label": "공식 벤치마크 발표",
        "url": "https://static.stepfun.com/blog/step-3.5-flash/"
      }
    ],
    "release_date_source": "https://huggingface.co/stepfun-ai/Step-3.5-Flash",
    "parameter_source": "https://huggingface.co/stepfun-ai/Step-3.5-Flash",
    "benchmark_sources": {
      "AIME 2025": "https://static.stepfun.com/blog/step-3.5-flash/",
      "IMOAnswerBench": "https://static.stepfun.com/blog/step-3.5-flash/",
      "LiveCodeBench v6": "https://static.stepfun.com/blog/step-3.5-flash/",
      "SWE-bench Verified": "https://static.stepfun.com/blog/step-3.5-flash/",
      "Terminal-Bench 2.0": "https://static.stepfun.com/blog/step-3.5-flash/"
    },
    "benchmark_note": "StepFun 공식 발표/모델 카드 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-011",
    "name": "Seed 2.0",
    "date": "2026-02-14",
    "sortDate": "2026-02-14",
    "month": "2026-02",
    "monthName": "February",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "seed2-0-%25E6%25AD%25A3%25E5%BC%258F%25E5%25B8%2583",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/blog/seed2-0-%25E6%25AD%25A3%25E5%BC%258F%25E5%25B8%2583"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/en/blog/seed2-0-%25E6%25AD%25A3%25E5%BC%258F%25E5%25B8%2583",
    "parameter_source": "https://seed.bytedance.com/en/blog/seed2-0-%25E6%25AD%25A3%25E5%BC%258F%25E5%25B8%2583",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-012",
    "name": "Qwen3.5-397B-A17B",
    "date": "2026-02-16",
    "sortDate": "2026-02-16",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "397B total / 17B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 87.8,
      "MMLU-Redux": 94.9,
      "SuperGPQA": 70.4,
      "IFEval": 92.6
    },
    "official_id": "Qwen/Qwen3.5-397B-A17B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "MMLU-Redux": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "SuperGPQA": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "IFEval": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B"
    },
    "benchmark_note": "Qwen 공식 모델 카드의 Qwen3.5-397B-A17B 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-013",
    "name": "Claude Sonnet 4.6",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 79.6,
      "SWE-bench Multilingual": 75.9,
      "Terminal-Bench 2.0": 59.1,
      "GPQA Diamond": 89.9,
      "MMLU": 89.3
    },
    "official_id": "78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "SWE-bench Multilingual": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "Terminal-Bench 2.0": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "MMLU": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf"
    },
    "benchmark_note": "Anthropic System Card의 제공자 측 평가 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-014",
    "name": "Tiny Aya",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Multilingual Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "70+",
    "variants": [
      "Tiny Aya Global",
      "Tiny Aya Earth",
      "Tiny Aya Fire",
      "Tiny Aya Water"
    ],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-base",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-base"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-base",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-base",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-03",
    "name": "Tiny Aya Global",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Multilingual Dense Transformer (70+ Languages)",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-global",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-global"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-global",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-global",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-04",
    "name": "Tiny Aya Earth",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-earth",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-earth"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-earth",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-earth",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-05",
    "name": "Tiny Aya Fire",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-fire",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-fire"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-fire",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-fire",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-06",
    "name": "Tiny Aya Water",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-water",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-water"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-water",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-water",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-015",
    "name": "Qwen3.5-122B-A10B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "122B total / 10B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 86.7,
      "GPQA Diamond": 86.6,
      "SWE-bench Verified": 72.0,
      "Terminal-Bench 2.0": 49.4
    },
    "official_id": "Qwen/Qwen3.5-122B-A10B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "SWE-bench Verified": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "Terminal-Bench 2.0": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B"
    },
    "benchmark_note": "Qwen 공식 모델 카드의 122B 모델 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-016",
    "name": "Qwen3.5-35B-A3B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 69.2,
      "SWE-bench Multilingual": 60.3,
      "SWE-bench Pro": 44.6,
      "Terminal-Bench 2.0": 40.5
    },
    "official_id": "Qwen/Qwen3.5-35B-A3B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "SWE-bench Multilingual": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "Terminal-Bench 2.0": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B"
    },
    "benchmark_note": "Qwen 공식 Qwen3.5-35B-A3B 발표/카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-017",
    "name": "Qwen3.5-27B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.5-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-27B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-27B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-27B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-018",
    "name": "Qwen3.5-9B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "9B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.5-9B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-9B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-9B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-9B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-019",
    "name": "Qwen3.5-4B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "4B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.5-4B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-4B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-4B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-4B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-020",
    "name": "Qwen3.5-2B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.5-2B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-2B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-2B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-2B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-021",
    "name": "Qwen3.5-0.8B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "0.8B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.5-0.8B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-0.8B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-022",
    "name": "GPT-5.3 Instant",
    "date": "2026-03-03",
    "sortDate": "2026-03-03",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gpt-5-3-instant.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf"
      }
    ],
    "release_date_source": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
    "parameter_source": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-023",
    "name": "GPT-5.4",
    "date": "2026-03-05",
    "sortDate": "2026-03-05",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "introducing-gpt-5-4",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-4/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-4/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-024",
    "name": "GPT-5.4 Pro",
    "date": "2026-03-05",
    "sortDate": "2026-03-05",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "introducing-gpt-5-4",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-4/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-4/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-025",
    "name": "Sarvam-30B",
    "date": "2026-03-06",
    "sortDate": "2026-03-06",
    "month": "2026-03",
    "monthName": "March",
    "company": "Sarvam AI",
    "family": "Sarvam",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "30B total / 2.4B active (non-embedding)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official card distinguishes non-embedding active parameters.",
    "benchmarks": {
      "MATH-500": 97.0,
      "HumanEval": 92.1,
      "MBPP": 92.7,
      "LiveCodeBench": 70.0,
      "MMLU": 85.1,
      "MMLU-Pro": 80.0,
      "GPQA Diamond": 66.5,
      "SWE-bench Verified": 34.0,
      "BrowseComp": 35.5
    },
    "official_id": "sarvamai/sarvam-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/sarvamai/sarvam-30b"
      }
    ],
    "release_date_source": "https://huggingface.co/sarvamai/sarvam-30b",
    "parameter_source": "https://huggingface.co/sarvamai/sarvam-30b",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/sarvamai/sarvam-30b",
      "HumanEval": "https://huggingface.co/sarvamai/sarvam-30b",
      "MBPP": "https://huggingface.co/sarvamai/sarvam-30b",
      "LiveCodeBench": "https://huggingface.co/sarvamai/sarvam-30b",
      "MMLU": "https://huggingface.co/sarvamai/sarvam-30b",
      "MMLU-Pro": "https://huggingface.co/sarvamai/sarvam-30b",
      "GPQA Diamond": "https://huggingface.co/sarvamai/sarvam-30b",
      "SWE-bench Verified": "https://huggingface.co/sarvamai/sarvam-30b",
      "BrowseComp": "https://huggingface.co/sarvamai/sarvam-30b"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-026",
    "name": "Sarvam-105B",
    "date": "2026-03-06",
    "sortDate": "2026-03-06",
    "month": "2026-03",
    "monthName": "March",
    "company": "Sarvam AI",
    "family": "Sarvam",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "105B total / 10.3B active",
    "architecture": "Indic Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MATH-500": 98.6,
      "LiveCodeBench": 71.7,
      "MMLU": 90.6,
      "MMLU-Pro": 81.7,
      "IFEval": 84.8,
      "GPQA Diamond": 78.7,
      "SWE-bench Verified": 45.0,
      "BrowseComp": 49.5
    },
    "official_id": "sarvamai/sarvam-105b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/sarvamai/sarvam-105b"
      }
    ],
    "release_date_source": "https://huggingface.co/sarvamai/sarvam-105b",
    "parameter_source": "https://huggingface.co/sarvamai/sarvam-105b",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/sarvamai/sarvam-105b",
      "LiveCodeBench": "https://huggingface.co/sarvamai/sarvam-105b",
      "MMLU": "https://huggingface.co/sarvamai/sarvam-105b",
      "MMLU-Pro": "https://huggingface.co/sarvamai/sarvam-105b",
      "IFEval": "https://huggingface.co/sarvamai/sarvam-105b",
      "GPQA Diamond": "https://huggingface.co/sarvamai/sarvam-105b",
      "SWE-bench Verified": "https://huggingface.co/sarvamai/sarvam-105b",
      "BrowseComp": "https://huggingface.co/sarvamai/sarvam-105b"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-027",
    "name": "Nemotron 3 Super",
    "date": "2026-03-10",
    "sortDate": "2026-03-10",
    "month": "2026-03",
    "monthName": "March",
    "company": "NVIDIA",
    "family": "Nemotron 3",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "120B total / 12B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title is Nemotron-3-Super-120B-A12B.",
    "benchmarks": {
      "MMLU-Pro": 83.73,
      "GPQA Diamond": 79.23,
      "LiveCodeBench": 81.19,
      "Terminal-Bench Core 2.0": 31.0
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "LiveCodeBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "Terminal-Bench Core 2.0": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-028",
    "name": "LongCat-Flash-Omni",
    "date": "2026-03-11",
    "sortDate": "2026-03-11",
    "month": "2026-03",
    "monthName": "March",
    "company": "Meituan",
    "family": "LongCat",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "560B total / 27B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "LongCat-Flash-Omni official card; do not confuse with an unofficial “2603” suffix.",
    "benchmarks": {},
    "official_id": "meituan-longcat/LongCat-Flash-Omni",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni"
      }
    ],
    "release_date_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
    "parameter_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-030",
    "name": "GLM-5-Turbo",
    "date": "2026-03-15",
    "sortDate": "2026-03-15",
    "month": "2026-03",
    "monthName": "March",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "glm-5-turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://docs.z.ai/guides/llm/glm-5-turbo"
      }
    ],
    "release_date_source": "https://docs.z.ai/guides/llm/glm-5-turbo",
    "parameter_source": "https://docs.z.ai/guides/llm/glm-5-turbo",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-031",
    "name": "Mistral Small 4 119B A6B",
    "date": "2026-03-16",
    "sortDate": "2026-03-16",
    "month": "2026-03",
    "monthName": "March",
    "company": "Mistral AI",
    "family": "Mistral Small",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "119B total / 6.5B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [
      "general chat",
      "configurable reasoning",
      "coding",
      "agents",
      "text + image input"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title includes 119B A6B; 6.5B is the activated count.",
    "benchmarks": {},
    "official_id": "mistralai/Mistral-Small-4-119B-2603",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603"
      }
    ],
    "release_date_source": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
    "parameter_source": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-032",
    "name": "GPT-5.4 Mini",
    "date": "2026-03-18",
    "sortDate": "2026-03-18",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gpt-5.4-mini",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://developers.openai.com/api/docs/models/gpt-5.4-mini"
      }
    ],
    "release_date_source": "https://developers.openai.com/api/docs/models/gpt-5.4-mini",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-5.4-mini",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-033",
    "name": "MiniMax-M2.7",
    "date": "2026-03-18",
    "sortDate": "2026-03-18",
    "month": "2026-03",
    "monthName": "March",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "MiniMaxAI/MiniMax-M2.7",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-036",
    "name": "Qwen3.5-Omni-Flash",
    "date": "2026-03-30",
    "sortDate": "2026-03-30",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM / omni",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 기술 보고서: 수백B급)",
    "architecture": "Multimodal Omni MoE",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "QwenCloud and the technical report identify the product, but do not disclose an exact count.",
    "benchmarks": {},
    "official_id": "qwen3.5-omni-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.5-omni-flash"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.5-omni-flash",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.5-omni-flash",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-037",
    "name": "GLM-5V-Turbo",
    "date": "2026-04-01",
    "sortDate": "2026-04-01",
    "month": "2026-04",
    "monthName": "April",
    "company": "Z.ai",
    "family": "GLM",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Vision-Language MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "glm-5v-turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://docs.z.ai/guides/vlm/glm-5v-turbo"
      }
    ],
    "release_date_source": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
    "parameter_source": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-038",
    "name": "Qwen3.6-Plus",
    "date": "2026-04-02",
    "sortDate": "2026-04-02",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.6-plus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.6-plus"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.6-plus",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.6-plus",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-039",
    "name": "GLM-5.1",
    "date": "2026-04-07",
    "sortDate": "2026-04-07",
    "month": "2026-04",
    "monthName": "April",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 754B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 model size를 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {
      "SWE-bench Pro": 58.4,
      "NL2Repo": 42.7,
      "Terminal-Bench 2.0": 63.5,
      "BrowseComp": 68.0,
      "GPQA Diamond": 86.2,
      "AIME 2025": 95.3
    },
    "official_id": "zai-org/GLM-5.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.1"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.1",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.1",
    "benchmark_sources": {
      "SWE-bench Pro": "https://huggingface.co/zai-org/GLM-5.1",
      "NL2Repo": "https://huggingface.co/zai-org/GLM-5.1",
      "Terminal-Bench 2.0": "https://huggingface.co/zai-org/GLM-5.1",
      "BrowseComp": "https://huggingface.co/zai-org/GLM-5.1",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5.1",
      "AIME 2025": "https://huggingface.co/zai-org/GLM-5.1"
    },
    "benchmark_note": "GLM-5.1 공식 카드 수치이며, active parameter 미공개 사실을 유지했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-040",
    "name": "Muse Spark",
    "date": "2026-04-08",
    "sortDate": "2026-04-08",
    "month": "2026-04",
    "monthName": "April",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "introducing-muse-spark-msl",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-msl/"
      }
    ],
    "release_date_source": "https://ai.meta.com/blog/introducing-muse-spark-msl/",
    "parameter_source": "https://ai.meta.com/blog/introducing-muse-spark-msl/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-126",
    "name": "EXAONE 4.5",
    "date": "2026-04-09",
    "sortDate": "2026-04-09",
    "month": "2026-04",
    "monthName": "April",
    "company": "LG AI Research",
    "family": "EXAONE",
    "type": "MLLM",
    "category": "Multimodal",
    "status": "GA",
    "parameters": "33B total / 33B active (31.7B language + 1.29B vision)",
    "architecture": "Unified vision-language model",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Document understanding",
      "visual reasoning",
      "STEM & scientific intelligence"
    ],
    "open_weights": true,
    "license": "EXAONE AI Model License",
    "context": "128K",
    "languages": "Korean, English",
    "variants": [
      "32B VLM"
    ],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official model card and LG AI Research materials call this model EXAONE 4.5; the 33B designation is retained in the official model ID and parameter specification.",
    "benchmarks": {},
    "official_id": "LGAI-EXAONE/EXAONE-4.5-33B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B"
      }
    ],
    "release_date_source": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
    "parameter_source": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-041",
    "name": "Qwen3.6-35B-A3B",
    "date": "2026-04-16",
    "sortDate": "2026-04-16",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 73.4,
      "SWE-bench Multilingual": 67.2,
      "SWE-bench Pro": 49.5,
      "Terminal-Bench 2.0": 51.5,
      "NL2Repo": 29.4
    },
    "official_id": "Qwen/Qwen3.6-35B-A3B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-35b-a3b"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "SWE-bench Multilingual": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "Terminal-Bench 2.0": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.6-35b-a3b"
    },
    "benchmark_note": "Qwen 공식 발표 표 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-042",
    "name": "Claude Opus 4.7",
    "date": "2026-04-16",
    "sortDate": "2026-04-16",
    "month": "2026-04",
    "monthName": "April",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Claude%20Opus%204.7%20System%20Card.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-043",
    "name": "Qwen3.6-Max-Preview",
    "date": "2026-04-20",
    "sortDate": "2026-04-20",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.6-max-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.6-max-preview"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-max-preview"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-max-preview",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.6-max-preview",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-044",
    "name": "Kimi K2.6",
    "date": "2026-04-20",
    "sortDate": "2026-04-20",
    "month": "2026-04",
    "monthName": "April",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1T total / 32B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "SWE-bench Multilingual": 76.7,
      "SWE-bench Pro": 58.6,
      "Terminal-Bench 2.0": 66.7,
      "LiveCodeBench v6": 89.6,
      "AIME 2026": 96.4,
      "GPQA Diamond": 90.5,
      "MMMU-Pro": 79.4
    },
    "official_id": "moonshotai/Kimi-K2.6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.6"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.6",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.6",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "SWE-bench Multilingual": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "SWE-bench Pro": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "Terminal-Bench 2.0": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "LiveCodeBench v6": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "AIME 2026": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "MMMU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.6"
    },
    "benchmark_note": "Kimi K2.6 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-046",
    "name": "Qwen3.6-27B",
    "date": "2026-04-22",
    "sortDate": "2026-04-22",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 53.5,
      "SWE-bench Multilingual": 71.3,
      "Terminal-Bench 2.0": 59.3,
      "NL2Repo": 36.2,
      "MMLU-Pro": 86.2
    },
    "official_id": "Qwen/Qwen3.6-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.6-27B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-27b"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-27b",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.6-27B",
    "benchmark_sources": {
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.6-27b",
      "SWE-bench Multilingual": "https://qwen.ai/blog?id=qwen3.6-27b",
      "Terminal-Bench 2.0": "https://qwen.ai/blog?id=qwen3.6-27b",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.6-27b",
      "MMLU-Pro": "https://qwen.ai/blog?id=qwen3.6-27b"
    },
    "benchmark_note": "Qwen 공식 발표 표 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-047",
    "name": "MiMo-V2.5",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "310B total / 15B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "XiaomiMiMo/MiMo-V2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-048",
    "name": "MiMo-V2.5-Pro",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1.02T total / 42B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 68.5,
      "GPQA Diamond": 66.7,
      "AIME 2025": 37.3,
      "SWE-bench AgentLess": 35.7
    },
    "official_id": "XiaomiMiMo/MiMo-V2.5-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "GPQA Diamond": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "AIME 2025": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "SWE-bench AgentLess": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro"
    },
    "benchmark_note": "MiMo-V2.5-Pro 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-049",
    "name": "GPT-5.5",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 58.6,
      "Terminal-Bench 2.0": 82.7,
      "OSWorld-Verified": 78.7,
      "BrowseComp": 84.4,
      "CyberGym": 81.8
    },
    "official_id": "introducing-gpt-5-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-5/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-5/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/introducing-gpt-5-5/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-5/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-5/",
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-5/",
      "CyberGym": "https://openai.com/index/introducing-gpt-5-5/"
    },
    "benchmark_note": "OpenAI GPT-5.5 공식 발표의 자기 보고/공식 평가 표 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-050",
    "name": "GPT-5.5 Pro",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "BrowseComp": 90.1,
      "GDPval": 82.3
    },
    "official_id": "introducing-gpt-5-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-5/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-5/",
    "benchmark_sources": {
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-5/",
      "GDPval": "https://openai.com/index/introducing-gpt-5-5/"
    },
    "benchmark_note": "GPT-5.5 Pro 공식 발표에서 명시한 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-051",
    "name": "DeepSeek-V4 Preview",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "Pro 1.6T / 49B active; Flash 284B / 13B active (preview family)",
    "architecture": "Sparse MoE family",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "A family announcement, not an additional third checkpoint; the two published sizes are listed explicitly.",
    "benchmarks": {},
    "official_id": "v4-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepseek.com/en/news/v4-preview/"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://deepseek.com/en/news/v4-preview/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-052",
    "name": "DeepSeek-V4-Flash",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "284B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 68.3
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://deepseek.com/en/news/v4-preview/"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash"
    },
    "benchmark_note": "DeepSeek-V4 기술 보고서의 Flash preview base 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-053",
    "name": "DeepSeek-V4-Pro",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "1.6T total / 49B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 73.5
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://deepseek.com/en/news/v4-preview/"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
    },
    "benchmark_note": "DeepSeek-V4 기술 보고서의 Pro preview base 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-054",
    "name": "Hy3-preview",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "295B total / 21B active + 3.8B MTP (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "256K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "MTP is reported separately from the 295B backbone.",
    "benchmarks": {},
    "official_id": "tencent/Hy3-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy3-preview"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy3-preview",
    "parameter_source": "https://huggingface.co/tencent/Hy3-preview",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-055",
    "name": "Laguna M.1",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "225B total / 23B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 225B total / 23B activated.",
    "benchmarks": {
      "SWE-bench Verified": 74.6,
      "SWE-bench Multilingual": 63.1,
      "SWE-bench Pro": 49.2,
      "Terminal-Bench 2.0": 45.8
    },
    "official_id": "poolside/Laguna-M.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-M.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-M.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-M.1",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-M.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-M.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-M.1",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-M.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가(동일 harness/조건) 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-056",
    "name": "Laguna XS.2",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "33B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 69.9,
      "SWE-bench Multilingual": 57.7,
      "SWE-bench Pro": 46.3,
      "Terminal-Bench 2.0": 35.7
    },
    "official_id": "poolside/Laguna-XS.2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-XS.2"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-XS.2",
    "parameter_source": "https://huggingface.co/poolside/Laguna-XS.2",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-XS.2",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-XS.2",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-XS.2",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-XS.2"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가(동일 harness/조건) 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-057",
    "name": "Nemotron-3-Nano-Omni-30B-A3B-Reasoning",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "31B backbone / ~3B active (30B-A3B model class)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The official checkpoint title says 30B-A3B; the card’s backbone metadata is about 31B.",
    "benchmarks": {},
    "official_id": "nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "parameter_source": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-058",
    "name": "Granite 4.1",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM + MLLM family",
    "category": "MLLM",
    "status": "GA",
    "parameters": "Language: 3B, 8B, 30B dense; Vision: 4B (3.4B LLM + 0.6B vision encoder/projectors)",
    "architecture": "Mamba2 + Transformer Hybrid",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Family row intentionally lists the official language and vision sizes instead of inventing one size.",
    "benchmarks": {},
    "official_id": "ibm-granite/granite-4.1-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.1-30b"
      },
      {
        "label": "공식 비전 모델 카드",
        "url": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-41-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.1-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-41-language-models",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-07",
    "name": "Granite 4.1 Language",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3B, 8B, 30B dense language variants",
    "architecture": "Mamba2 + Transformer Hybrid",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "ibm-granite/granite-4.1-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.1-30b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-41-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.1-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-41-language-models",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-08",
    "name": "Granite-Vision-4.1-4B",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "4B total (3.4B LLM + 0.6B vision encoder/projectors)",
    "architecture": "Vision-language model",
    "open_weights": true,
    "note": "",
    "benchmarks": {},
    "official_id": "ibm-granite/granite-vision-4.1-4b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b",
    "parameter_source": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-059",
    "name": "ERNIE 5.1",
    "date": "2026-05-09",
    "sortDate": "2026-05-09",
    "month": "2026-05",
    "monthName": "May",
    "company": "Baidu",
    "family": "ERNIE",
    "type": "LLM / agentic foundation model",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 발표는 5.0 대비 상대 규모만 제시)",
    "architecture": "Agentic Foundation Model",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Relative size language is not converted into an invented absolute parameter count.",
    "benchmarks": {},
    "official_id": "ernie-5.1-0508-release",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/"
      }
    ],
    "release_date_source": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/",
    "parameter_source": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-060",
    "name": "Gemini 3.5 Flash",
    "date": "2026-05-19",
    "sortDate": "2026-05-19",
    "month": "2026-05",
    "monthName": "May",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "agents",
      "coding",
      "multimodal reasoning"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gemini-3-5-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-5-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-061",
    "name": "Qwen3.7-Max",
    "date": "2026-05-20",
    "sortDate": "2026-05-20",
    "month": "2026-05",
    "monthName": "May",
    "company": "Alibaba",
    "family": "Qwen3.7",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.7-max",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.7-max"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.7-max",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.7-max",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-062",
    "name": "Command A+",
    "date": "2026-05-20",
    "sortDate": "2026-05-20",
    "month": "2026-05",
    "monthName": "May",
    "company": "Cohere",
    "family": "Command",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "218B total / 25B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [
      "sovereign / agentic enterprise AI"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 218B total and 25B active.",
    "benchmarks": {},
    "official_id": "CohereLabs/command-a-plus-05-2026-bf16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16",
    "parameter_source": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-063",
    "name": "Mistral Medium 3.5 128B",
    "date": "2026-05-22",
    "sortDate": "2026-05-22",
    "month": "2026-05",
    "monthName": "May",
    "company": "Mistral AI",
    "family": "Mistral Medium",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "128B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [
      "agents",
      "coding",
      "knowledge work"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 77.6,
      "τ³-Telecom": 91.4
    },
    "official_id": "mistralai/Mistral-Medium-3.5-128B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B"
      }
    ],
    "release_date_source": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
    "parameter_source": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
      "τ³-Telecom": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B"
    },
    "benchmark_note": "Mistral 공식 모델 카드의 제공자 측 평가 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-064",
    "name": "Claude Opus 4.8",
    "date": "2026-05-28",
    "sortDate": "2026-05-28",
    "month": "2026-05",
    "monthName": "May",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-065",
    "name": "MiniMax-M3",
    "date": "2026-06-01",
    "sortDate": "2026-06-01",
    "month": "2026-06",
    "monthName": "June",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "428B total / ~23B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card uses approximately 23B for activation.",
    "benchmarks": {},
    "official_id": "MiniMaxAI/MiniMax-M3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-066",
    "name": "Qwen3.7-Plus",
    "date": "2026-06-02",
    "sortDate": "2026-06-02",
    "month": "2026-06",
    "monthName": "June",
    "company": "Alibaba",
    "family": "Qwen3.7",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.7-plus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.7-plus"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.7-plus",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.7-plus",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-067",
    "name": "Nemotron 3 Ultra",
    "date": "2026-06-04",
    "sortDate": "2026-06-04",
    "month": "2026-06",
    "monthName": "June",
    "company": "NVIDIA",
    "family": "Nemotron 3",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "550B total / 55B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title is Nemotron-3-Ultra-550B-A55B.",
    "benchmarks": {
      "Terminal-Bench 2.1": 56.4,
      "SWE-bench Verified": 70.7,
      "SWE-bench Multilingual": 67.7,
      "LiveCodeBench v6": 89.0,
      "GPQA Diamond": 87.0,
      "MMLU-Pro": 86.8
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "SWE-bench Multilingual": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "LiveCodeBench v6": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "MMLU-Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16"
    },
    "benchmark_note": "NVIDIA 공식 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-068",
    "name": "Claude Fable 5",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "claude-fable-5-mythos-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "parameter_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-069",
    "name": "Claude Mythos 5",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "restricted / vetted users",
    "note": "",
    "benchmarks": {},
    "official_id": "claude-fable-5-mythos-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "parameter_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-070",
    "name": "North Mini Code",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Cohere",
    "family": "North",
    "type": "LLM / coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "30B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/North-Mini-Code-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
    "parameter_source": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-071",
    "name": "Kimi K2.7 Code",
    "date": "2026-06-12",
    "sortDate": "2026-06-12",
    "month": "2026-06",
    "monthName": "June",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM / coding",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Code Multimodal MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "moonshotai/Kimi-K2.7-Code",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.7-Code"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-072",
    "name": "Ling-2.6-1T",
    "date": "2026-06-13~21",
    "sortDate": "2026-06-13",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ant Group / InclusionAI",
    "family": "Ling",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1T total (active count 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The official card names the 1T family but does not state active parameters.",
    "benchmarks": {},
    "official_id": "inclusionAI/Ling-2.6-1T",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-2.6-1T"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-073",
    "name": "Ring-2.6-1T",
    "date": "2026-06-13~21",
    "sortDate": "2026-06-13",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ant Group / InclusionAI",
    "family": "Ring",
    "type": "reasoning LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "1T total (active count 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "high",
      "xhigh"
    ],
    "availability": "",
    "note": "The official card names the 1T family but does not state active parameters.",
    "benchmarks": {
      "GPQA Diamond": 88.27,
      "AIME 2026": 95.83,
      "τ²-Telecom": 95.32
    },
    "official_id": "inclusionAI/Ring-2.6-1T",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ring-2.6-1T"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
    "parameter_source": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
    "benchmark_sources": {
      "GPQA Diamond": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
      "AIME 2026": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
      "τ²-Telecom": "https://huggingface.co/inclusionAI/Ring-2.6-1T"
    },
    "benchmark_note": "Ring-2.6-1T 공식 모델 카드 자기 보고 수치입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-074",
    "name": "HyperCLOVA X SEED 4B",
    "date": "2026-06-15",
    "sortDate": "2026-06-15",
    "month": "2026-06",
    "monthName": "June",
    "company": "NAVER Cloud",
    "family": "HyperCLOVA X SEED",
    "type": "MLLM / lightweight omni",
    "category": "Omni",
    "status": "GA",
    "parameters": "4B backbone (8B teacher에서 pruning/distillation)",
    "architecture": "Lightweight Omni (Edge/Defense)",
    "modalities": [
      "language",
      "vision",
      "audio"
    ],
    "focus": [
      "edge / on-device / defense environments"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The 8B figure is the teacher/reference model, not the released SEED checkpoint.",
    "benchmarks": {},
    "official_id": "pressReleasesDetail?seq=10034395",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395"
      }
    ],
    "release_date_source": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395",
    "parameter_source": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-075",
    "name": "GLM-5.2",
    "date": "2026-06-16",
    "sortDate": "2026-06-16",
    "month": "2026-06",
    "monthName": "June",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 753B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 model size를 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {
      "AIME 2026": 99.2,
      "GPQA Diamond": 91.2,
      "SWE-bench Pro": 62.1,
      "Terminal-Bench 2.1": 81.0,
      "NL2Repo": 48.9,
      "DeepSWE": 46.2
    },
    "official_id": "zai-org/GLM-5.2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.2"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.2",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.2",
    "benchmark_sources": {
      "AIME 2026": "https://huggingface.co/zai-org/GLM-5.2",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5.2",
      "SWE-bench Pro": "https://huggingface.co/zai-org/GLM-5.2",
      "Terminal-Bench 2.1": "https://huggingface.co/zai-org/GLM-5.2",
      "NL2Repo": "https://huggingface.co/zai-org/GLM-5.2",
      "DeepSWE": "https://huggingface.co/zai-org/GLM-5.2"
    },
    "benchmark_note": "GLM-5.2 공식 모델 카드 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-076",
    "name": "LongCat-2.0",
    "date": "2026-06-30",
    "sortDate": "2026-06-30",
    "month": "2026-06",
    "monthName": "June",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1.6T total / ~48B average active (MoE; 33–56B dynamic)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Multilingual": 77.3,
      "SWE-bench Pro": 59.5,
      "Terminal-Bench 2.1": 70.8,
      "BrowseComp": 79.9,
      "GPQA Diamond": 88.9
    },
    "official_id": "meituan-longcat/LongCat-2.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-2.0"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://tech.meituan.com/2026/06/30/LongCat2.0.html"
      }
    ],
    "release_date_source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html",
    "parameter_source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html",
    "benchmark_sources": {
      "SWE-bench Multilingual": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "SWE-bench Pro": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "Terminal-Bench 2.1": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "BrowseComp": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "GPQA Diamond": "https://huggingface.co/meituan-longcat/LongCat-2.0"
    },
    "benchmark_note": "LongCat-2.0 공식 모델 카드 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-077",
    "name": "Claude Sonnet 5",
    "date": "2026-06-30",
    "sortDate": "2026-06-30",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "claude-sonnet-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-sonnet-5",
    "parameter_source": "https://www.anthropic.com/news/claude-sonnet-5",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-078",
    "name": "Laguna XS 2.1",
    "date": "2026-07-02",
    "sortDate": "2026-07-02",
    "month": "2026-07",
    "monthName": "July",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "33B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 70.9,
      "SWE-bench Multilingual": 63.1,
      "SWE-bench Pro": 47.6,
      "Terminal-Bench 2.0": 37.5
    },
    "official_id": "poolside/Laguna-XS-2.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-XS-2.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-XS-2.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-XS-2.1",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-XS-2.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드에 기재된 자기 평가 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-079",
    "name": "Hy3",
    "date": "2026-07-06",
    "sortDate": "2026-07-06",
    "month": "2026-07",
    "monthName": "July",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Stable",
    "parameters": "295B total / 21B active + 3.8B MTP (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "256K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "",
    "benchmarks": {},
    "official_id": "tencent/Hy3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy3"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy3",
    "parameter_source": "https://huggingface.co/tencent/Hy3",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-137",
    "name": "GPT-Live-1",
    "date": "2026-07-08",
    "sortDate": "2026-07-08",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-Live",
    "type": "MLLM / omni (full-duplex voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Full-duplex voice model (continuous listen + speak), delegates search/reasoning to GPT-5.5",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "Realtime voice",
      "Full-duplex dialogue",
      "Delegated reasoning"
    ],
    "open_weights": false,
    "license": "Proprietary (ChatGPT Voice)",
    "context": "",
    "languages": "",
    "variants": [
      "GPT-Live-1 instant",
      "GPT-Live-1 Medium",
      "GPT-Live-1 High"
    ],
    "reasoning_effort": [
      "instant",
      "medium",
      "high (delegated GPT-5.5 effort)"
    ],
    "availability": "ChatGPT Voice 전 세계 롤아웃(Go/Plus/Pro 기본 음성), API는 발표 당시 예정",
    "note": "ASR→LLM→TTS 캐스케이드가 아닌 단일 full-duplex 음성 모델이라 'ASR/TTS 음성 전용 제외' 규정에 해당하지 않는다고 판단해 수록했습니다. 검색·추론은 백그라운드에서 GPT-5.5에 위임합니다. 공식 발표문·시스템 카드에 수치 점수는 없고 인간 평점 선호도(Advanced Voice Mode 대비)와 내부 τ3-Voice Telecom 결과만 텍스트로 명시되어 점수 칸은 비워 두었습니다.",
    "benchmarks": {},
    "official_id": "introducing-gpt-live",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-live/"
      },
      {
        "label": "GPT-Live System Card",
        "url": "https://deploymentsafety.openai.com/gpt-live"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-live/",
    "parameter_source": "https://openai.com/index/introducing-gpt-live/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-138",
    "name": "GPT-Live-1 mini",
    "date": "2026-07-08",
    "sortDate": "2026-07-08",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-Live",
    "type": "MLLM / omni (full-duplex voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Full-duplex voice model (small tier), delegates to GPT-5.5 Instant",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "Realtime voice",
      "Full-duplex dialogue"
    ],
    "open_weights": false,
    "license": "Proprietary (ChatGPT Voice)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ChatGPT Voice Free 사용자 기본 음성",
    "note": "GPT-Live-1과 같은 발표(2026-07-08)로 공개된 소형 티어이며 ChatGPT Voice Free 기본 모델입니다. GPT-Live-1 (instant)와 마찬가지로 백그라운드 추론에 GPT-5.5 Instant를 사용합니다. 공식 자료에 수치 점수가 없습니다.",
    "benchmarks": {},
    "official_id": "introducing-gpt-live",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-live/"
      },
      {
        "label": "GPT-Live System Card",
        "url": "https://deploymentsafety.openai.com/gpt-live"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-live/",
    "parameter_source": "https://openai.com/index/introducing-gpt-live/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-080",
    "name": "Muse Spark 1.1",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "introducing-muse-spark-meta-model-api",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
      }
    ],
    "release_date_source": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
    "parameter_source": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-081",
    "name": "GPT-5.6 Sol",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 64.6,
      "Terminal-Bench 2.1": 88.8,
      "BrowseComp": 90.4,
      "DeepSWE": 72.7
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "DeepSWE": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "OpenAI GPT-5.6 공식 발표의 Sol 열 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-082",
    "name": "GPT-5.6 Terra",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 63.4,
      "Terminal-Bench 2.1": 87.4,
      "BrowseComp": 87.5,
      "DeepSWE": 69.6
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "DeepSWE": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "OpenAI GPT-5.6 공식 발표의 Terra 열 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-083",
    "name": "GPT-5.6 Luna",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 62.7,
      "Terminal-Bench 2.1": 84.7,
      "BrowseComp": 83.3,
      "DeepSWE": 67.2
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "DeepSWE": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "OpenAI GPT-5.6 공식 발표의 Luna 열 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-139",
    "name": "GPT-5.6 Sol Pro",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ChatGPT Pro / Enterprise 전용",
    "note": "GPT-5.6 공식 발표문 Availability 절에 \"Pro and Enterprise users can also select GPT-5.6 Sol Pro\"로 명시된 상위 티어입니다. 발표문 벤치마크 표는 Sol / Sol Ultra / Terra / Luna 열로만 공개되어 Sol Pro 고유 점수는 기록하지 않았습니다. 표의 'Sol Ultra'는 별도 모델이 아니라 ultra effort(멀티에이전트) 설정으로 판단해 레코드로 만들지 않았습니다.",
    "benchmarks": {},
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "OpenAI GPT-5.6 공식 발표문",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-084",
    "name": "Motif-3-Beta",
    "date": "2026-07-14",
    "sortDate": "2026-07-14",
    "month": "2026-07",
    "monthName": "July",
    "company": "Motif Technologies",
    "family": "Motif",
    "type": "LLM",
    "category": "LLM",
    "status": "Beta",
    "parameters": "~314B total / ~13B active (MoE)",
    "architecture": "Sparse MoE with GDLA/MTP",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Motif-Technologies/Motif-3-Beta",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Motif-Technologies/Motif-3-Beta"
      }
    ],
    "release_date_source": "https://huggingface.co/Motif-Technologies/Motif-3-Beta",
    "parameter_source": "https://huggingface.co/Motif-Technologies/Motif-3-Beta",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-085",
    "name": "Inkling",
    "date": "2026-07-15",
    "sortDate": "2026-07-15",
    "month": "2026-07",
    "monthName": "July",
    "company": "Thinking Machines Lab",
    "family": "Inkling",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "975B total / 41B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "audio"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "inkling",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://thinkingmachines.ai/model-card/inkling/"
      }
    ],
    "release_date_source": "https://thinkingmachines.ai/model-card/inkling/",
    "parameter_source": "https://thinkingmachines.ai/model-card/inkling/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-086",
    "name": "Grok 4.5",
    "date": "2026-07-16",
    "sortDate": "2026-07-16",
    "month": "2026-07",
    "monthName": "July",
    "company": "xAI / SpaceXAI",
    "family": "Grok",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "coding",
      "agents",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 64.7,
      "Terminal-Bench 2.1": 83.3,
      "DeepSWE": 53.0,
      "SWE-Marathon": 29.0
    },
    "official_id": "grok-4-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://x.ai/news/grok-4-5"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-4-5",
    "parameter_source": "https://x.ai/news/grok-4-5",
    "benchmark_sources": {
      "SWE-bench Pro": "https://x.ai/news/grok-4-5",
      "Terminal-Bench 2.1": "https://x.ai/news/grok-4-5",
      "DeepSWE": "https://x.ai/news/grok-4-5",
      "SWE-Marathon": "https://x.ai/news/grok-4-5"
    },
    "benchmark_note": "xAI 공식 Grok 4.5 발표에서 Grok 열에 직접 제시한 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-087",
    "name": "Kimi K3",
    "date": "2026-07-17",
    "sortDate": "2026-07-17",
    "month": "2026-07",
    "monthName": "July",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.8T total / 104B active + 401M vision encoder (MoE)",
    "architecture": "Sparse MoE with KDA and gated MLA",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Long-Context Reasoning",
      "Multimodal",
      "Code & Math",
      "MoE Efficiency"
    ],
    "open_weights": true,
    "license": "Kimi K3 License (Open Weights)",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face (moonshotai/Kimi-K3), Kimi API",
    "note": "Official Kimi K3 model summary reports 2.8T total, 104B active, and a 401M vision encoder.",
    "benchmarks": {
      "GPQA Diamond": 93.5,
      "DeepSWE": 67.5,
      "Terminal-Bench 2.1": 88.3,
      "FrontierSWE": 81.2,
      "SWE-Marathon": 42.0
    },
    "official_id": "moonshotai/Kimi-K3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K3"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K3",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K3",
    "benchmark_sources": {
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K3",
      "DeepSWE": "https://huggingface.co/moonshotai/Kimi-K3",
      "Terminal-Bench 2.1": "https://huggingface.co/moonshotai/Kimi-K3",
      "FrontierSWE": "https://huggingface.co/moonshotai/Kimi-K3",
      "SWE-Marathon": "https://huggingface.co/moonshotai/Kimi-K3"
    },
    "benchmark_note": "Kimi K3 공식 모델 카드 수치입니다. 카드가 외부 leaderboard를 인용한 행은 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-088",
    "name": "Qwen3.8-Max-Preview",
    "date": "2026-07-19",
    "sortDate": "2026-07-19",
    "month": "2026-07",
    "monthName": "July",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개 (preview ID에 별도 파라미터 공개 없음)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.8-max-preview",
    "official_sources": [
      {
        "label": "공식 API 문서",
        "url": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview"
      }
    ],
    "release_date_source": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview",
    "parameter_source": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-089",
    "name": "Gemini 3.6 Flash",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gemini-3-6-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-6-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-090",
    "name": "Gemini 3.5 Flash-Lite",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gemini-3-5-flash-lite",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-091",
    "name": "Gemini 3.5 Flash Cyber",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "cybersecurity"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "introducing-gemini-3-5-flash-cyber",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/"
      }
    ],
    "release_date_source": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
    "parameter_source": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-092",
    "name": "Laguna S 2.1",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "118B total / ~8B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 118B total and about 8B activated.",
    "benchmarks": {
      "Terminal-Bench 2.1": 70.2,
      "SWE-bench Multilingual": 78.5,
      "SWE-bench Pro": 59.4,
      "DeepSWE": 40.4,
      "Toolathlon Verified": 49.7
    },
    "official_id": "poolside/Laguna-S-2.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-S-2.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-S-2.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-S-2.1",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/poolside/Laguna-S-2.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-S-2.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-S-2.1",
      "DeepSWE": "https://huggingface.co/poolside/Laguna-S-2.1",
      "Toolathlon Verified": "https://huggingface.co/poolside/Laguna-S-2.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-093",
    "name": "Solar Open 2",
    "date": "2026-07-22",
    "sortDate": "2026-07-22",
    "month": "2026-07",
    "monthName": "July",
    "company": "Upstage",
    "family": "Solar Open",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "250B total / 15B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "~1M",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card title is Solar Open 2; 250B-A15B is the official repository/model variant identifier.",
    "benchmarks": {
      "MMLU-Pro": 86.2,
      "GPQA Diamond": 86.3,
      "LiveCodeBench v6": 92.4,
      "AIME 2026": 95.7,
      "SWE-bench Verified": 70.4
    },
    "official_id": "upstage/Solar-Open2-250B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/upstage/Solar-Open2-250B"
      }
    ],
    "release_date_source": "https://huggingface.co/upstage/Solar-Open2-250B",
    "parameter_source": "https://huggingface.co/upstage/Solar-Open2-250B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/upstage/Solar-Open2-250B",
      "GPQA Diamond": "https://huggingface.co/upstage/Solar-Open2-250B",
      "LiveCodeBench v6": "https://huggingface.co/upstage/Solar-Open2-250B",
      "AIME 2026": "https://huggingface.co/upstage/Solar-Open2-250B",
      "SWE-bench Verified": "https://huggingface.co/upstage/Solar-Open2-250B"
    },
    "benchmark_note": "Upstage 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-094",
    "name": "Claude Opus 5",
    "date": "2026-07-24",
    "sortDate": "2026-07-24",
    "month": "2026-07",
    "monthName": "July",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "claude-opus-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-opus-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-opus-5",
    "parameter_source": "https://www.anthropic.com/news/claude-opus-5",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-128",
    "name": "A.X K2",
    "date": "2026-07-29",
    "sortDate": "2026-07-29",
    "month": "2026-07",
    "monthName": "July",
    "company": "SK Telecom",
    "family": "A.X",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "688B total / 33B active (MoE)",
    "architecture": "Decoder-only Transformer + sparse MoE (MLA/SGA)",
    "modalities": [
      "text"
    ],
    "focus": [
      "Agent workflows",
      "Korean language and culture",
      "Sovereign AI"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official SK Telecom model card reports 688B total / 33B active parameters. The related vision/audio models are separate releases.",
    "benchmarks": {
      "AIME 2026": 97.1
    },
    "official_id": "skt/A.X-K2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/skt/A.X-K2"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://news.sktelecom.com/228501"
      }
    ],
    "release_date_source": "https://news.sktelecom.com/228501",
    "parameter_source": "https://huggingface.co/skt/A.X-K2",
    "benchmark_sources": {
      "AIME 2026": "https://huggingface.co/skt/A.X-K2"
    },
    "benchmark_note": "SK Telecom 공식 A.X K2 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-095",
    "name": "Inkling-Small",
    "date": "2026-07-30",
    "sortDate": "2026-07-30",
    "month": "2026-07",
    "monthName": "July",
    "company": "Thinking Machines Lab",
    "family": "Inkling",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "276B total / 12B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "audio"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "SWE-bench Pro": 55.9
    },
    "official_id": "inkling-small",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://thinkingmachines.ai/model-card/inkling-small/"
      }
    ],
    "release_date_source": "https://thinkingmachines.ai/model-card/inkling-small/",
    "parameter_source": "https://thinkingmachines.ai/model-card/inkling-small/",
    "benchmark_sources": {
      "SWE-bench Verified": "https://thinkingmachines.ai/model-card/inkling-small/",
      "SWE-bench Pro": "https://thinkingmachines.ai/model-card/inkling-small/"
    },
    "benchmark_note": "Thinking Machines Lab 공식 model card의 Inkling-Small/자기 평가 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-096",
    "name": "DeepSeek-V4-Flash-0731",
    "date": "2026-07-31",
    "sortDate": "2026-07-31",
    "month": "2026-07",
    "monthName": "July",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Public beta / official Flash release",
    "parameters": "정확한 수치 미공개 (0731 snapshot 공식 카드에 총/활성 파라미터 별도 표기 없음)",
    "architecture": "Sparse MoE with CSA/HCA",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 2.1": 82.7,
      "NL2Repo": 54.2,
      "CyberGym": 76.7,
      "DeepSWE": 54.4,
      "Toolathlon Verified": 70.3
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash-0731",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731"
    },
    "benchmark_note": "DeepSeek 공식 0731 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-129",
    "name": "K-EXAONE 2.0",
    "date": "2026-07-31",
    "sortDate": "2026-07-31",
    "month": "2026-07",
    "monthName": "July",
    "company": "LG AI Research",
    "family": "EXAONE",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "750B total / 37B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [
      "language",
      "code"
    ],
    "focus": [
      "Sovereign AI",
      "Korean deep reasoning",
      "materials science / industrial AI"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / Sovereign AI)",
    "note": "Corrected from the unsupported ~260B/~28B estimate. The official model card reports 750B total / 37B active parameters.",
    "benchmarks": {},
    "official_id": "LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://www.lgresearch.ai/news/view?seq=678"
      }
    ],
    "release_date_source": "https://www.lgresearch.ai/news/view?seq=678",
    "parameter_source": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-097",
    "name": "Qwen3.8-Max",
    "date": "2026-08-03",
    "sortDate": "2026-08-03",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.4T total (active count 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "document-2021044032125272064",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.alibabagroup.com/en-US/document-2021044032125272064"
      }
    ],
    "release_date_source": "https://www.alibabagroup.com/en-US/document-2021044032125272064",
    "parameter_source": "https://www.alibabagroup.com/en-US/document-2021044032125272064",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-136",
    "name": "Muse Spark 1.2",
    "date": "2026-08-05",
    "sortDate": "2026-08-05",
    "month": "2026-08",
    "monthName": "August",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM / coding",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted coding-focused model (Muse Code beta의 구동 모델)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "Agentic Coding",
      "Complex debugging",
      "Codebase understanding"
    ],
    "open_weights": false,
    "license": "Proprietary (Muse Code / Meta Model API)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Muse Code (macOS/Linux beta), Meta Model API",
    "note": "2026-09-04 감사에서는 \"공식 발표문을 확인하지 못한다\"며 제외 원장(model-098)에 보류됐습니다. Meta AI Research 블로그(research.meta.ai)의 'Introducing Muse Code and Muse Spark 1.2'(2026-08-05)를 확인해 활성 레코드로 이관하고 구 model-098 제외 항목을 삭제했습니다. 모달리티 중 video는 Muse Code 데모(동영상 입력 해석) 근거이며, 파라미터는 1차 자료에 없습니다. 발표문 자체에 수치 점수가 없어 별도 평가 리포트의 값은 기록하지 않았습니다.",
    "benchmarks": {},
    "official_id": "introducing-muse-code-and-muse-spark-1-2",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2"
      },
      {
        "label": "Meta 평가·기술 포스트",
        "url": "https://research.meta.ai/blog/multimodal-intelligence-of-muse-spark-1-2"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
    "parameter_source": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-099",
    "name": "Motif-3",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "Motif Technologies",
    "family": "Motif",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "~314B total / ~13.2B active (MoE)",
    "architecture": "MoE, GDLA, MTP",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The technical report/model card uses approximate values.",
    "benchmarks": {},
    "official_id": "Motif-Technologies/Motif-3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Motif-Technologies/Motif-3"
      }
    ],
    "release_date_source": "https://huggingface.co/Motif-Technologies/Motif-3",
    "parameter_source": "https://huggingface.co/Motif-Technologies/Motif-3",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-140",
    "name": "GPT-5.6-Cyber",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "GPT-5.6 Sol 기반 사이버 업무 특화 파인튜닝",
    "modalities": [],
    "focus": [
      "Cybersecurity",
      "Zero-day discovery",
      "Exploit development"
    ],
    "open_weights": false,
    "license": "Proprietary (Daybreak Red 접근 제한)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Daybreak Red 승인 기관 전용",
    "note": "Daybreak Blue/Red 이원화 발표(2026-08-10)와 함께 공개된 방어자 전용 사이버 모델입니다. Preparedness Framework 사이버 평가에서 High(기존 GPT-5.5-Cyber·Sol과 동일한 수준)로 판단되어 Critical에는 도달하지 않았습니다. Gemini 3.5/3.8 Flash Cyber와 동일한 '제한 접근 사이버 전용 변형' 기준으로 수록했습니다.",
    "benchmarks": {
      "Advanced Cybersecurity Completion Rate (internal)": 95.0
    },
    "official_id": "expanding-daybreak-as-the-cyber-defense-window-narrows",
    "official_sources": [
      {
        "label": "OpenAI Daybreak 확장 공식 발표문",
        "url": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/"
      }
    ],
    "release_date_source": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
    "parameter_source": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
    "benchmark_sources": {
      "Advanced Cybersecurity Completion Rate (internal)": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/"
    },
    "benchmark_note": "OpenAI가 같은 발표문에 명시한 내부 평가 값입니다(고급 사이버 요청 완수율: GPT-5.6-Cyber 95.0%, GPT-5.6 Sol 1.5%, Daybreak Blue 2.0%, GPT-5.5-Cyber 57.3%). ExploitGym·ExploitBench는 'Sol 및 5.5-Cyber보다 우수'라는 서술만 있고 수치가 없어 기록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-141",
    "name": "Muse Glimmer",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "Meta",
    "family": "Muse Glimmer",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "총 29.6B dense (~1.8B ViT-G/14 perception encoder 포함)",
    "architecture": "Dense causal transformer + frozen ViT-G/14 perception encoder, Muse Spark logit distillation",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Local agents",
      "Tool use",
      "Agentic Coding",
      "On-device inference"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "131,072+",
    "languages": "100개 이상 언어",
    "variants": [
      "BF16",
      "K-Quant-Dynamic (32GB)",
      "K-Quant-17GB (24GB)",
      "DFlash drafter"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "availability": "Hugging Face meta-models/Muse-Glimmer-30B, llama.cpp / MLX / ExecuTorch / vLLM / SGLang / Ollama / LM Studio / OpenRouter 등",
    "note": "Meta가 Llama 4 이후 처음 공개한 오픈웨이트 모델이며 24/32GB 소비자 GPU 구동을 전제로 양자화·DFlash 스펙큘러 드코딩까지 함께 배포합니다. 벤치마크는 Hugging Face 공식 모델 카드의 Muse Glimmer-30B High Reasoning 열 값입니다. 카드에 함께 실린 AA 접미 지표(GPQA Diamond (AA), HLE Text (AA), AA-LCR, GDPVal-AA v2)는 제3자 지표 정책상 뺐고, audio 입출력은 미지원입니다.",
    "benchmarks": {
      "MCP Atlas (Public)": 75.5,
      "DeepSearch QA": 74.6,
      "SWE-Bench Pro": 51.2,
      "SWE-Bench Verified": 76.0,
      "TerminalBench 2.1": 51.7,
      "Charxiv Reasoning": 78.8,
      "IFBench": 77.0,
      "AIME 2026": 94.7,
      "WMDP (Bio)": 86.5
    },
    "official_id": "meta-models/Muse-Glimmer-30B",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/meta-models/Muse-Glimmer-30B"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model",
    "parameter_source": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
    "benchmark_sources": {
      "MCP Atlas (Public)": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "DeepSearch QA": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "SWE-Bench Pro": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "SWE-Bench Verified": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "TerminalBench 2.1": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "Charxiv Reasoning": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "IFBench": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "AIME 2026": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "WMDP (Bio)": "https://huggingface.co/meta-models/Muse-Glimmer-30B"
    },
    "benchmark_note": "Meta 공식 Hugging Face 모델 카드의 High Reasoning 설정 점수입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-142",
    "name": "Nemotron-3.5-Lightning-30B-A3B",
    "date": "2026-08-11",
    "sortDate": "2026-08-11",
    "month": "2026-08",
    "monthName": "August",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "LLM / reasoning",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "30B total / 3B active (MoE; BF16·NVFP4 체크포인트)",
    "architecture": "Hybrid MoE — interleaved Mamba-2 + MoE + Attention layers, MTP",
    "modalities": [
      "text"
    ],
    "focus": [
      "Long-running agents",
      "High-throughput execution",
      "Low latency"
    ],
    "open_weights": true,
    "license": "OpenMDW-1.1",
    "context": "Up to 1M tokens",
    "languages": "English (+coding), Spanish, French, German, Italian, Japanese",
    "variants": [
      "BF16",
      "NVFP4",
      "DSpark draft",
      "DFlash draft",
      "GGUF"
    ],
    "reasoning_effort": [
      "enable_thinking on/off (chat template)"
    ],
    "availability": "Hugging Face, ModelScope, OpenRouter, build.nvidia.com NIM, OCI 등",
    "note": "Nemotron 3 Nano 30B-A3B의 후속으로, 상시 실행 에이전트의 실행 레이어를 겨냥한 효율 모델입니다. 벤치마크는 NVFP4 공식 체크포인트 기준 값입니다. 카드의 AA-* 지표(AA-Omniscience, GDPval-AA-V2, AA-LCR)는 제3자 지표 정책상 제외했습니다.",
    "benchmarks": {
      "MMLU Pro": 81.62,
      "GPQA Diamond (no tools)": 75.57,
      "HLE (text-only, no tools)": 10.47,
      "SciCode": 31.38,
      "SWE-bench Verified": 52.8,
      "Terminal-Bench 2.1": 23.46,
      "PinchBench": 83.43,
      "BrowseComp": 36.81,
      "IFBench (loose)": 72.88
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "benchmark_sources": {
      "MMLU Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "GPQA Diamond (no tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "HLE (text-only, no tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "SciCode": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "PinchBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "BrowseComp": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "IFBench (loose)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4"
    },
    "benchmark_note": "NVIDIA가 NeMo Gym / NeMo Evaluator 하네스로 측정한 공식 표의 NVFP4 열 값입니다 (BF16 열은 별도).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-100",
    "name": "Qwen3.8-2.4T-A95B",
    "date": "2026-08-12",
    "sortDate": "2026-08-12",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.4T total / 95B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official open checkpoint is Qwen3.8-2.4T-A95B.",
    "benchmarks": {},
    "official_id": "Qwen/Qwen3.8-2.4T-A95B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-101",
    "name": "Grok 4.6",
    "date": "2026-08-12",
    "sortDate": "2026-08-12",
    "month": "2026-08",
    "monthName": "August",
    "company": "xAI / SpaceXAI",
    "family": "Grok",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "long-running agents",
      "coding",
      "visual work",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "grok-4-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://x.ai/news/grok-4-6"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-4-6",
    "parameter_source": "https://x.ai/news/grok-4-6",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-102",
    "name": "DeepSeek-V4-Pro-0813",
    "date": "2026-08-13",
    "sortDate": "2026-08-13",
    "month": "2026-08",
    "monthName": "August",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (0813 snapshot 공식 카드에 총/활성 파라미터 별도 표기 없음)",
    "architecture": "Sparse MoE with CSA/HCA",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 2.1": 87.9,
      "NL2Repo": 61.5,
      "CyberGym": 83.3,
      "DeepSWE": 62.7,
      "Toolathlon Verified": 74.1
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Pro-0813",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813"
    },
    "benchmark_note": "DeepSeek 공식 0813 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-103",
    "name": "Gemini 3.7 Flash",
    "date": "2026-08-13",
    "sortDate": "2026-08-13",
    "month": "2026-08",
    "monthName": "August",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "coding",
      "agents",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "gemini-3-7-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-7-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-104",
    "name": "Qwen3.8-27B",
    "date": "2026-08-14",
    "sortDate": "2026-08-14",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 61.7,
      "Terminal-Bench 2.1": 73.0,
      "DeepSWE": 42.2
    },
    "official_id": "Qwen/Qwen3.8-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-27B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "benchmark_sources": {
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "Terminal-Bench 2.1": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "DeepSWE": "https://huggingface.co/Qwen/Qwen3.8-27B"
    },
    "benchmark_note": "Qwen 공식 Qwen3.8-27B 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-105",
    "name": "GLM-5.3",
    "date": "2026-08-14",
    "sortDate": "2026-08-14",
    "month": "2026-08",
    "monthName": "August",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 753B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "GLM-5.2 계열이라는 이유로 GLM-5의 744B/40B 수치를 복사하지 않았습니다. 공식 카드의 model size도 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {},
    "official_id": "zai-org/GLM-5.3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.3"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.3",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.3",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-106",
    "name": "DeepSeek-V4-Flash-Vision-Exp",
    "date": "2026-08-21",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Experimental",
    "parameters": "정확한 수치 미공개 (Flash backbone·vision module을 합산한 총/활성 수치 공식 별도 표기 없음)",
    "architecture": "Vision-language sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Vision experiment is tracked against the V4 Flash backbone; vision modules are not folded into the backbone count.",
    "benchmarks": {
      "Terminal-Bench 2.1": 83.9,
      "NL2Repo": 57.7,
      "CyberGym": 75.3,
      "DeepSWE": 59.3,
      "Toolathlon Verified": 75.9
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp"
    },
    "benchmark_note": "DeepSeek 공식 vision experiment 모델 카드 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-107",
    "name": "Ling-3.0-tiny",
    "date": "2026-08-21~22",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "7.9B total / 1.3B active (MoE)",
    "architecture": "Dense Linear Attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "inclusionAI/Ling-3.0-tiny",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-tiny"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-108",
    "name": "Ling-3.0-flash",
    "date": "2026-08-21~22",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "124B total / 5.1B active (MoE)",
    "architecture": "Sparse MoE with KDA/MLA hybrid attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": [
      "256K native",
      "expandable toward 1M"
    ],
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "inclusionAI/Ling-3.0-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-flash"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-109",
    "name": "Granite 4.2",
    "date": "2026-08-25",
    "sortDate": "2026-08-25",
    "month": "2026-08",
    "monthName": "August",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM family",
    "category": "LLM",
    "status": "GA",
    "parameters": "3B, 8B, 30B dense language variants",
    "architecture": "Reasoning & Agentic Transformer",
    "modalities": [],
    "focus": [
      "native reasoning",
      "coding",
      "tool use",
      "agents"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "ibm-granite/granite-4.2-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.2-30b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-42-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.2-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-42-language-models",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-110",
    "name": "Qwen3.8-Flash-Next",
    "date": "2026-08-26",
    "sortDate": "2026-08-26",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "125B main / 6B active + 51B N-gram embedding + 4B MTP",
    "architecture": "Hybrid sparse architecture with N-gram embedding",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The N-gram embedding and MTP are reported separately by the official card.",
    "benchmarks": {
      "DeepSWE": 58.7,
      "SWE-bench Pro": 62.5,
      "SWE-bench Multilingual": 81.0,
      "NL2Repo": 48.1,
      "Toolathlon Verified": 73.5
    },
    "official_id": "Qwen/Qwen3.8-Flash-Next",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
    "benchmark_sources": {
      "DeepSWE": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "SWE-bench Multilingual": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "NL2Repo": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "Toolathlon Verified": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next"
    },
    "benchmark_note": "Qwen 공식 Qwen3.8-Flash-Next 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-111",
    "name": "GLM-5.3-Flash",
    "date": "2026-08-26",
    "sortDate": "2026-08-26",
    "month": "2026-08",
    "monthName": "August",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "320B total / 18B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Corrected from the erroneous ~30B/~3B entry: the official card reports 320B total / 18B active.",
    "benchmarks": {},
    "official_id": "zai-org/GLM-5.3-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.3-Flash"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.3-Flash",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.3-Flash",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-112",
    "name": "Hy4-preview",
    "date": "2026-08-28",
    "sortDate": "2026-08-28",
    "month": "2026-08",
    "monthName": "August",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "770B backbone / 49B active + 10B MTP total / 0.7B MTP active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": ">1M",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "Backbone and MTP counts are reported separately in the official model card.",
    "benchmarks": {},
    "official_id": "tencent/Hy4-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy4-preview"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy4-preview",
    "parameter_source": "https://huggingface.co/tencent/Hy4-preview",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-113",
    "name": "Claude Fable 5.1",
    "date": "2026-09-01",
    "sortDate": "2026-09-01",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "fable",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/claude/fable"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude/fable",
    "parameter_source": "https://www.anthropic.com/claude/fable",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-114",
    "name": "Claude Mythos 5.1",
    "date": "2026-09-01",
    "sortDate": "2026-09-01",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "restricted",
    "note": "",
    "benchmarks": {},
    "official_id": "mythos",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/claude/mythos"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude/mythos",
    "parameter_source": "https://www.anthropic.com/claude/mythos",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-130",
    "name": "Qwen3.8-Max-0902",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (0902 snapshot 페이지에 별도 파라미터 공개 없음)",
    "architecture": "Hosted multimodal model",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "Agentic Coding",
      "Cowork",
      "Multimodal",
      "Tool Use"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API (QwenCloud)",
    "context": "1M (1,000,000 tokens)",
    "languages": "Multilingual",
    "variants": [
      "qwen3.8-max-0902"
    ],
    "reasoning_effort": [],
    "availability": "QwenCloud API (qwen3.8-max-0902), DashScope",
    "note": "공식 QwenCloud 페이지의 0902 snapshot/API ID를 별도 레코드로 기록했습니다. Qwen3.8-Max 본체의 2.4T 수치를 이 snapshot에 자동 전이하지 않습니다.",
    "benchmarks": {},
    "official_id": "qwen3.8-max-0902",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.8-max-0902"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.8-max-0902",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.8-max-0902",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-131",
    "name": "Muse Spark 1.3",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted agentic/coding model (Muse Code, Meta Model API)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Agentic Coding",
      "Long-horizon agents",
      "Multitasking"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API (Meta Model API)",
    "context": "",
    "languages": "",
    "variants": [
      "muse-spark-1.3"
    ],
    "reasoning_effort": [
      "xhigh (max reasoning added 2026-09-04)"
    ],
    "availability": "Muse Code, Meta Model API",
    "note": "공식 발표문은 reasoning mode 중 max가 추가 안전 테스트 이후 제공된다고 명시했습니다 (max reasoning 실제 제공일은 2026-09-04). 총/활성 파라미터와 컨텍스트 윈도우는 1차 자료에 숫자로 명시되지 않아 비워 두었습니다. 이 모델은 2026-09-04 감사에서 '공식 발표문 미확인'으로 제외 원장(model-115)에 보류됐었으나, 2026-09-08에 Meta AI Research 블로그에서 1차 발표문을 확인해 활성 레코드로 되돌렸습니다 (구 model-115 제외 항목은 삭제).",
    "benchmarks": {},
    "official_id": "introducing-muse-spark-1-3",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
    "parameter_source": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-132",
    "name": "Gemini 3.8 Flash",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Based on Gemini 3.7 Flash (official model card)",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [
      "coding",
      "agents",
      "knowledge work",
      "cybersecurity-trained core"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API",
    "context": "1M 입력 / 64K 출력 (공식 모델 카드)",
    "languages": "",
    "variants": [
      "gemini-3-8-flash"
    ],
    "reasoning_effort": [
      "customizable effort levels"
    ],
    "availability": "Gemini app, AI Mode, Gemini API (gemini-3-8-flash), Vertex AI, introductory $0.75/$3.75 per 1M (2026-12-31까지)",
    "note": "3주 만의 3.7 Flash 후속이며 6주 사이 세 번째 Flash 릴리스입니다. 공식 모델 카드에는 벤치마크 수치 표가 채워져 있지 않아(2026-09-08 확인), 숫자는 공식 블로그에 텍스트로 명시된 값만 기록했습니다.",
    "benchmarks": {
      "HLE-Verified": 54.9
    },
    "official_id": "gemini-3-8-flash",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-flash/"
      },
      {
        "label": "Google 공식 발표문",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        "label": "Vertex AI 모델 문서",
        "url": "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-8-flash"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-8-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-flash/",
    "benchmark_sources": {
      "HLE-Verified": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    "benchmark_note": "Google 공식 발표문에 텍스트로 명시된 HLE-Verified 값입니다. 차트 이미지만 공개된 지표는 기록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-133",
    "name": "Gemini 3.8 Flash Cyber",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Same shared core as Gemini 3.8 Flash, cyber-permissive mitigations",
    "modalities": [],
    "focus": [
      "cybersecurity",
      "vulnerability discovery",
      "automated patching"
    ],
    "open_weights": false,
    "license": "Proprietary (Fairwind Program gated access)",
    "context": "",
    "languages": "",
    "variants": [
      "gemini-3-8-flash-cyber"
    ],
    "reasoning_effort": [],
    "availability": "Fairwind Program 승인 방어를 통한 제한 제공",
    "note": "Gemini 3.5 Flash Cyber와 같이 제한 접근 사이버 방어 전용 변형입니다. 2026-09-08 기준 deepmind.google 모델 카드가 없는 404이며, Google/Fairwind 페이지 기준으로 기록했습니다.",
    "benchmarks": {
      "CWE-Bench (pass@1)": 47.2
    },
    "official_id": "3-8-flash-and-3-8-flash-cyber",
    "official_sources": [
      {
        "label": "Google 공식 발표문",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        "label": "Fairwind Program",
        "url": "https://deepmind.google/fairwind-program/"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    "parameter_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    "benchmark_sources": {
      "CWE-Bench (pass@1)": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    "benchmark_note": "Google 공식 발표문에 텍스트로 명시된 CWE-Bench pass@1 값입니다(Collinear 운영 벤치마크).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-134",
    "name": "GPT-6 Astra",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted frontier multimodal model (text + image input, text output)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Computer Use",
      "Browsing",
      "Agentic Coding",
      "Cybersecurity",
      "Science",
      "Professional Work"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API",
    "context": "1,050,000 (max output 128,000)",
    "languages": "Multilingual",
    "variants": [
      "gpt-6-astra"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "2026-09-03 Daybreak 기관 대상 우선 출시 후 ChatGPT Plus/Pro/Business/Enterprise, OpenAI API(gpt-6-astra), Azure, AWS Bedrock으로 확대; $10/$50 per 1M",
    "note": "GPT-5.6(Sol/Terra/Luna)와 별도 세대인 GPT-6 계열 첫 모델이며 Pre-Preparedness Framework 사이버 Critical 임계점에 도달한 첫 모델입니다. API 모델 gpt-6-astra는 2026-09-04 공개. openai.com 발표문은 봇 차단(403)으로 미러 렌더링으로 전문을 확인했고, 수치는 전부 해당 발표문의 공식 평가 표에 인쇄된 값입니다.",
    "benchmarks": {
      "Terminal-Bench 4.0": 57.9,
      "DeepSWE v1.1": 74.1,
      "FrontierCode 1.1 Extended": 64.5,
      "FrontierMath Tier 4 (v2)": 97.6,
      "GPQA Diamond": 96.0,
      "Humanity's Last Exam (w/ tools)": 57.2,
      "ARC-AGI-3": 99.9,
      "ARC-AGI-2": 95.0,
      "BrowseComp": 91.5,
      "Agents' Last Exam": 59.3,
      "OSWorld 2.0": 72.6,
      "ScreenSpot-Pro": 92.7,
      "Terminal-Bench Science 0.1": 64.6,
      "BenchCAD": 95.9,
      "ExploitBench": 100.0,
      "ExploitGym": 42.4,
      "SRE-Bench": 88.0,
      "HealthBench Professional": 63.4
    },
    "official_id": "gpt-6-astra",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/gpt-6-astra/"
      },
      {
        "label": "OpenAI API 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-astra"
      },
      {
        "label": "GPT-6 Astra System Card",
        "url": "https://deploymentsafety.openai.com/gpt-6-astra"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-6-astra/",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-6-astra",
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://openai.com/index/gpt-6-astra/",
      "DeepSWE v1.1": "https://openai.com/index/gpt-6-astra/",
      "FrontierCode 1.1 Extended": "https://openai.com/index/gpt-6-astra/",
      "FrontierMath Tier 4 (v2)": "https://openai.com/index/gpt-6-astra/",
      "GPQA Diamond": "https://openai.com/index/gpt-6-astra/",
      "Humanity's Last Exam (w/ tools)": "https://openai.com/index/gpt-6-astra/",
      "ARC-AGI-3": "https://openai.com/index/gpt-6-astra/",
      "ARC-AGI-2": "https://openai.com/index/gpt-6-astra/",
      "BrowseComp": "https://openai.com/index/gpt-6-astra/",
      "Agents' Last Exam": "https://openai.com/index/gpt-6-astra/",
      "OSWorld 2.0": "https://openai.com/index/gpt-6-astra/",
      "ScreenSpot-Pro": "https://openai.com/index/gpt-6-astra/",
      "Terminal-Bench Science 0.1": "https://openai.com/index/gpt-6-astra/",
      "BenchCAD": "https://openai.com/index/gpt-6-astra/",
      "ExploitBench": "https://openai.com/index/gpt-6-astra/",
      "ExploitGym": "https://openai.com/index/gpt-6-astra/",
      "SRE-Bench": "https://openai.com/index/gpt-6-astra/",
      "HealthBench Professional": "https://openai.com/index/gpt-6-astra/"
    },
    "benchmark_note": "OpenAI GPT-6 Astra 공식 발표문의 공식 평가 표(Astra 열) 수치이며, 발표문 기준 '모든 effort 중 최대' 점수입니다. ARC-AGI-3는 OpenAI responses API 하네스, OSWorld 2.0/Agents' Last Exam/SRE-Bench/ExploitBench는 에이전트·하네스 포함 측정이고 ExploitBench·ExploitGym은 프로덕션 세이프가드 없이 측정했습니다. 발표문에 함께 실린 Artificial Analysis 지수 표는 제3자 지표 정책상 기록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-135",
    "name": "GPT-6 Astra Pro",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted frontier model (pro-tier reasoning)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Professional Work",
      "Agentic Coding",
      "Research"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial Subscription",
    "context": "",
    "languages": "",
    "variants": [
      "gpt-6-astra-pro (ChatGPT Pro/Business/Enterprise tier)"
    ],
    "reasoning_effort": [],
    "availability": "ChatGPT Pro / Business / Enterprise 전용",
    "note": "공식 발표문 Availability 절에 명시된 상위 변형입니다. 2026-09-08 기준으로 개발자 문서의 API 모델 목록에는 gpt-6-astra만 노출되어 개별 API 모델 ID와 고유 사양·점수는 기록하지 않았습니다.",
    "benchmarks": {},
    "official_id": "gpt-6-astra",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/gpt-6-astra/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-6-astra/",
    "parameter_source": "https://openai.com/index/gpt-6-astra/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-143",
    "name": "K2-Horizon-375B-A23B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "375B total / ~23B active (sparse MoE)",
    "architecture": "Sparse MoE, shared core architecture/vocabulary across the fleet",
    "modalities": [
      "text"
    ],
    "focus": [
      "Agentic tool use",
      "Terminal workflows",
      "Enterprise reasoning"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "K2 Horizon 함대의 플래그십. IFM(구 LLM360 계열)이 프리트레인~에이전틱 포스트트레인 전체 라이프사이클(중간 체크포인트·학습 데이터 또는 구성 레시피·혼합비·코드·설정·로그·평가)까지 공개한 완전 오픈 릴리스입니다. 공식 블로그 기준 프리트레인은 약 10조 합성 토큰 규모이며, 병렬 토큰 생성 'diffusion distillation'으로 응답 품질을 유지하면서 약 3배 가속했다고 명시했습니다.",
    "benchmarks": {
      "tau3-Banking": 34.0,
      "Toolathlon Verified": 65.3,
      "Automation Bench Public": 25.3,
      "Apex-Agents (pass@1)": 24.8,
      "MCPMark": 67.7,
      "BrowseComp": 72.8,
      "WildClawBench": 50.9,
      "Terminal-Bench 2.1": 70.2,
      "SciCode": 42.7,
      "SWE-Atlas-QnA (strict)": 48.4,
      "SWE Bench Pro (strict)": 42.6,
      "Humanity's Last Exam (without tools)": 32.0,
      "GPQA Diamond": 87.3,
      "CritPt": 8.6
    },
    "official_id": "IFM/K2-Horizon-375B-A23B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-375B-A23B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Toolathlon Verified": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Automation Bench Public": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Apex-Agents (pass@1)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "MCPMark": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "BrowseComp": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "WildClawBench": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SWE-Atlas-QnA (strict)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SWE Bench Pro (strict)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-375B-A23B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 K2-Horizon-375B-A23B 열 값(%)입니다. 카드에 함께 실린 GDPVal-AA(Elo)·AA-LCR·AA-Omniscience는 제3자 지표 정책상 제외했습니다. 단, Terminal-Bench 2.1 70.2는 IFM 스스로 공개한 보상 해킹 감사에서 712 트라이얼 중 24개가 플래그되어 이를 제외하면 **66.9%**로 낮아집니다(공식 블로그에 감사 절차와 함께 명시). 카드 주석: SWE-Atlas-QnA/SWE Bench Pro strict = 인터넷 없음, BrowseComp는 DeepSeek-V3.2 제안 Discard-all@95k 컨텍스트 프로토콜, WildClawBench·Apex-Agents는 영어 텍스트 모달리티 부분집합.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-144",
    "name": "K2-Horizon-MoVA-36B-A4B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "36B total / ~4B active (sparse MoE)",
    "architecture": "Sparse MoE + Mixture-of-Value Attention (MoVA), 신규 아키텍처",
    "modalities": [
      "text"
    ],
    "focus": [
      "Local hosting",
      "Cost-efficient agents",
      "Active-parameter efficiency"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 새로 공개한 Mixture-of-Value Attention(MoVA) 적용 모델로,attention 단계에 expert routing을 넣어 활성화 파라미터를 4B로 줄이면서 더 큰 모델을 넘보는 성능을 목표했습니다. 공식 발표문은 로컬 호스팅용 가성비 모델로 위치づけ했습니다.",
    "benchmarks": {
      "tau3-Banking": 26.8,
      "Terminal-Bench 2.1": 58.6,
      "SciCode": 38.9,
      "Humanity's Last Exam (without tools)": 25.2,
      "GPQA Diamond": 80.8,
      "CritPt": 2.1
    },
    "official_id": "IFM/K2-Horizon-MoVA-36B-A4B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 K2-Horizon-MoVA-36B-A4B 열 값(%)입니다. 카드 주석: \"Scores in %, Bold marks the best score in each row\". AA-* 계열 지표는 정책상 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-145",
    "name": "K2-Horizon-32B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "32B dense",
    "architecture": "Dense decoder-only, 공유 어휘·인터페이스",
    "modalities": [
      "text"
    ],
    "focus": [
      "Local hosting",
      "On-premise servers",
      "Laptop deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "공식 모델 카드가 본 문서를 **K2-Horizon-32B-Stage1**으로 표기하고 \"final checkpoint to be released\" 경고를 붉은 색으로 명시했습니다. 그래서 상태를 Preview로 두고, 이후 최종 체크포인트가 올라오면 상태를 GA로 올려야 합니다. Hugging Face 저장소 이름은 K2-Horizon-32B입니다.",
    "benchmarks": {
      "tau3-Banking": 22.5,
      "Terminal-Bench 2.1": 36.6,
      "SciCode": 30.2,
      "Humanity's Last Exam (without tools)": 22.8,
      "GPQA Diamond": 82.3,
      "CritPt": 1.4
    },
    "official_id": "IFM/K2-Horizon-32B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-32B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-32B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-32B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-32B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-32B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-32B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-32B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-32B"
    },
    "benchmark_note": "IFM 공식 모델 카드(Stage 1 체크포인트 기준) 표의 자기 열 값(%). 최종 체크포인트 기준이 아니므로 재확인 필요합니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-146",
    "name": "K2-Horizon-7B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "7B dense (7B-core)",
    "architecture": "Dense decoder-only",
    "modalities": [
      "text"
    ],
    "focus": [
      "On-device agents",
      "Software engineering",
      "Deep research"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF",
      "7B-Uno adapter"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 '10B 미만 최고 성능'을 주장한 온디바이스 모델로, 스마트폰 구동을 명시했습니다. 같은 발표에서 7B는 SWE-bench·BrowseComp 중심의 소프트웨어 엔지니어링·딥 리서치 강점을 강조됐습니다. 카드에 multimodal 어댑터(7B-Uno)가 함께 올라오지만 어댑터는 별도 레코드로 만들지 않았습니다.",
    "benchmarks": {
      "HMMT Feb 2026": 73.3,
      "SWE-bench Verified": 70.6,
      "HLE": 18.6,
      "SciCode": 31.6,
      "Terminal-Bench 2.1": 39.1,
      "tau3-Banking": 25.8,
      "BrowseComp": 59.0
    },
    "official_id": "IFM/K2-Horizon-7B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-7B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-7B",
    "benchmark_sources": {
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-7B",
      "SWE-bench Verified": "https://huggingface.co/IFM/K2-Horizon-7B",
      "HLE": "https://huggingface.co/IFM/K2-Horizon-7B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-7B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-7B",
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-7B",
      "BrowseComp": "https://huggingface.co/IFM/K2-Horizon-7B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: BrowseComp는 DeepSeek-V3.2 제안 Discard-all@95k 컨텍스트 프로토콜 기준이며 비교 모델은 다른 하네스를 쓸 수 있음.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-147",
    "name": "K2-Horizon-3.7B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.7B dense (3.7B-core)",
    "architecture": "Dense decoder-only",
    "modalities": [
      "text"
    ],
    "focus": [
      "Fine-tuning base",
      "On-device reasoning",
      "Phone deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 '4B 미만 최고 추론'을 주장한 파인튜닝 친화 사이즈. 프레스 릴리스는 개발자·연구자용 파인튜닝 베이스이며 더 큰 모델과 동등 이상의 추론을 낸다고 설명했습니다.",
    "benchmarks": {
      "HMMT Feb 2026": 70.5,
      "SWE-bench Verified": 68.6,
      "GPQA Diamond": 65.4,
      "HLE": 12.9,
      "SciCode": 25.9,
      "Terminal-Bench 2.1": 25.1,
      "tau3-Banking": 17.7,
      "BFCL v4": 50.9
    },
    "official_id": "IFM/K2-Horizon-3.7B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-3.7B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-3.7B",
    "benchmark_sources": {
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "SWE-bench Verified": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "HLE": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "BFCL v4": "https://huggingface.co/IFM/K2-Horizon-3.7B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: \"Baseline protocols may differ\".",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-148",
    "name": "K2-Horizon-0.9B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "~0.9B dense (0.9B-class)",
    "architecture": "Dense decoder-only, 함대 중 축약된 어휘 사용",
    "modalities": [
      "text"
    ],
    "focus": [
      "Wearables",
      "Edge",
      "Tool use on tiny models"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "131,072 (128K)",
    "languages": "영어 중심(카드 language: en), 0.9B는 축약 어휘",
    "variants": [
      "BF16",
      "GGUF",
      "0.9B-Uno adapter"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "시계·안경 같은 초저전력 디바이스를 겨냥한 함대 최 소형. IFM은 이 크기급에서 수학·추론·툴 유스 SOTA를 주장했습니다. 카드 기준 0.9B는 함대와 다른 축약 어휘를 사용합니다.",
    "benchmarks": {
      "AIME 2025": 41.7,
      "AIME 2026": 48.5,
      "HMMT Feb 2026": 25.8,
      "GPQA Diamond": 27.3,
      "HumanEval+": 79.9,
      "MBPP+": 68.0,
      "LiveCodeBench v6": 37.4,
      "BFCL v4": 28.0
    },
    "official_id": "IFM/K2-Horizon-0.9B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-0.9B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-0.9B",
    "benchmark_sources": {
      "AIME 2025": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "AIME 2026": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "HumanEval+": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "MBPP+": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "LiveCodeBench v6": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "BFCL v4": "https://huggingface.co/IFM/K2-Horizon-0.9B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: K2-Horizon-0.9B 강조, Qwen3.5-2B를 더 큰 참조 모델로 포함, 프로토콜·출처는 카드의 Technical Appendix.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-149",
    "name": "Seed2.1 Pro",
    "date": "2026-06-23",
    "sortDate": "2026-06-23",
    "month": "2026-06",
    "monthName": "June",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "차세대 에이전트 지향 모델(공식 카드에 구조 세부 미공개)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "고부가가치 오피스 에이전트",
      "코드 엔지니어링",
      "멀티모달·비디오 이해",
      "장문 컨텍스트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Doubao 앱·Volcano Engine(중국)·BytePlus ModelArk(국제)",
    "note": "Seed2.1 패밀리의 플래그십 Pro. 공식 페이지는 Pro와 Turbo 두 모델을 함께 공개했으며, 실세계 생산성(에이전트·코딩·멀티모달 이해)에 초점을 둡니다. 직전 감사 주기(9/8)에서 누락되어 이번에 소급 수록합니다.",
    "benchmarks": {
      "KINA": 48.3,
      "SuperGPQA": 70.8,
      "BeyondAIME": 87.0,
      "Workspace Bench": 53.0,
      "Agent Startup Bench": 68.8,
      "xDailyBench": 61.0,
      "NL2Repo-Bench": 47.0,
      "ProgramBench": 50.3,
      "Terminal Bench 2.1": 71.0,
      "SWE-Atlas": 35.2,
      "MathVision (w. Tool)": 92.6,
      "MMMU-Pro (w. Tool)": 81.6,
      "WorldVQA": 53.0,
      "ZEROBench (w. Tool)": 18.0,
      "BabyVision": 73.7,
      "CharXiv-RQ (w. Tool)": 85.4,
      "ERQA": 72.0,
      "MMLongBench-128K": 78.3,
      "VideoMME": 89.2,
      "TOMATO": 79.5,
      "Minerva": 70.7,
      "OVOBench": 80.7,
      "VideoSimpleQA": 76.4
    },
    "official_id": "Doubao-Seed-2.1-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/seed2_1"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity",
    "parameter_source": "https://seed.bytedance.com/en/seed2_1",
    "benchmark_sources": {
      "KINA": "https://seed.bytedance.com/en/seed2_1",
      "SuperGPQA": "https://seed.bytedance.com/en/seed2_1",
      "BeyondAIME": "https://seed.bytedance.com/en/seed2_1",
      "Workspace Bench": "https://seed.bytedance.com/en/seed2_1",
      "Agent Startup Bench": "https://seed.bytedance.com/en/seed2_1",
      "xDailyBench": "https://seed.bytedance.com/en/seed2_1",
      "NL2Repo-Bench": "https://seed.bytedance.com/en/seed2_1",
      "ProgramBench": "https://seed.bytedance.com/en/seed2_1",
      "Terminal Bench 2.1": "https://seed.bytedance.com/en/seed2_1",
      "SWE-Atlas": "https://seed.bytedance.com/en/seed2_1",
      "MathVision (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "MMMU-Pro (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "WorldVQA": "https://seed.bytedance.com/en/seed2_1",
      "ZEROBench (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "BabyVision": "https://seed.bytedance.com/en/seed2_1",
      "CharXiv-RQ (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "ERQA": "https://seed.bytedance.com/en/seed2_1",
      "MMLongBench-128K": "https://seed.bytedance.com/en/seed2_1",
      "VideoMME": "https://seed.bytedance.com/en/seed2_1",
      "TOMATO": "https://seed.bytedance.com/en/seed2_1",
      "Minerva": "https://seed.bytedance.com/en/seed2_1",
      "OVOBench": "https://seed.bytedance.com/en/seed2_1",
      "VideoSimpleQA": "https://seed.bytedance.com/en/seed2_1"
    },
    "benchmark_note": "Seed2.1 공식 페이지(seed.bytedance.com/en/seed2_1) 평가 표의 해당 모델 열 값(%)입니다. ProgramBench는 공식 표가 'All@1/Almost@1/Score' 형태의 3중 값(Pro '0/1/50.3', Turbo '0/0/49.4')으로 표기해 최종 Score만 수록했습니다. 괄호로 병기된 보조 수치(Pro: MathVision 94.5, MMMU-Pro 82.7, ZEROBench 22.0, CharXiv-RQ 86.4 / Turbo: 92.7, 82.2, 20.0, 83.6)는 별도 설정 값으로 기본값만 수록했습니다. 본문의 GDPVal 언급은 정량 점수 없이 질적 SOTA 주장이라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-150",
    "name": "Seed2.1 Turbo",
    "date": "2026-06-23",
    "sortDate": "2026-06-23",
    "month": "2026-06",
    "monthName": "June",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "차세대 에이전트 지향 모델(공식 카드에 구조 세부 미공개)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "고부가가치 오피스 에이전트",
      "코드 엔지니어링",
      "멀티모달·비디오 이해",
      "장문 컨텍스트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Doubao 앱·Volcano Engine(중국)·BytePlus ModelArk(국제, dola-seed-2-1-turbo-260628)",
    "note": "Seed2.1 패밀리의 경량 Turbo. Pro와 동일한 공식 평가 표로 발표되었으며 일부 항목(BeyondAIME, Workspace Bench)에서 Pro를 상회합니다.",
    "benchmarks": {
      "KINA": 46.6,
      "SuperGPQA": 67.4,
      "BeyondAIME": 88.0,
      "Workspace Bench": 54.7,
      "Agent Startup Bench": 54.0,
      "xDailyBench": 56.4,
      "NL2Repo-Bench": 43.7,
      "ProgramBench": 49.4,
      "Terminal Bench 2.1": 67.6,
      "SWE-Atlas": 30.6,
      "MathVision (w. Tool)": 90.1,
      "MMMU-Pro (w. Tool)": 80.1,
      "WorldVQA": 48.6,
      "ZEROBench (w. Tool)": 11.0,
      "BabyVision": 62.9,
      "CharXiv-RQ (w. Tool)": 82.5,
      "ERQA": 71.3,
      "MMLongBench-128K": 76.9,
      "VideoMME": 89.0,
      "TOMATO": 56.8,
      "Minerva": 65.9,
      "OVOBench": 79.2,
      "VideoSimpleQA": 71.4
    },
    "official_id": "Doubao-Seed-2.1-Turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/seed2_1"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity",
    "parameter_source": "https://seed.bytedance.com/en/seed2_1",
    "benchmark_sources": {
      "KINA": "https://seed.bytedance.com/en/seed2_1",
      "SuperGPQA": "https://seed.bytedance.com/en/seed2_1",
      "BeyondAIME": "https://seed.bytedance.com/en/seed2_1",
      "Workspace Bench": "https://seed.bytedance.com/en/seed2_1",
      "Agent Startup Bench": "https://seed.bytedance.com/en/seed2_1",
      "xDailyBench": "https://seed.bytedance.com/en/seed2_1",
      "NL2Repo-Bench": "https://seed.bytedance.com/en/seed2_1",
      "ProgramBench": "https://seed.bytedance.com/en/seed2_1",
      "Terminal Bench 2.1": "https://seed.bytedance.com/en/seed2_1",
      "SWE-Atlas": "https://seed.bytedance.com/en/seed2_1",
      "MathVision (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "MMMU-Pro (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "WorldVQA": "https://seed.bytedance.com/en/seed2_1",
      "ZEROBench (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "BabyVision": "https://seed.bytedance.com/en/seed2_1",
      "CharXiv-RQ (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "ERQA": "https://seed.bytedance.com/en/seed2_1",
      "MMLongBench-128K": "https://seed.bytedance.com/en/seed2_1",
      "VideoMME": "https://seed.bytedance.com/en/seed2_1",
      "TOMATO": "https://seed.bytedance.com/en/seed2_1",
      "Minerva": "https://seed.bytedance.com/en/seed2_1",
      "OVOBench": "https://seed.bytedance.com/en/seed2_1",
      "VideoSimpleQA": "https://seed.bytedance.com/en/seed2_1"
    },
    "benchmark_note": "Seed2.1 공식 페이지(seed.bytedance.com/en/seed2_1) 평가 표의 해당 모델 열 값(%)입니다. ProgramBench는 공식 표가 'All@1/Almost@1/Score' 형태의 3중 값(Pro '0/1/50.3', Turbo '0/0/49.4')으로 표기해 최종 Score만 수록했습니다. 괄호로 병기된 보조 수치(Pro: MathVision 94.5, MMMU-Pro 82.7, ZEROBench 22.0, CharXiv-RQ 86.4 / Turbo: 92.7, 82.2, 20.0, 83.6)는 별도 설정 값으로 기본값만 수록했습니다. 본문의 GDPVal 언급은 정량 점수 없이 질적 SOTA 주장이라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-151",
    "name": "Gander",
    "date": "2026-09-09",
    "sortDate": "2026-09-09",
    "month": "2026-09",
    "monthName": "September",
    "company": "Tencent",
    "family": "Gander",
    "type": "MLLM / omni (full-duplex audio-visual)",
    "category": "Omni",
    "status": "GA",
    "parameters": "9B",
    "architecture": "Brain–Cerebellum 프레임워크 + 스트리밍 Thinker-Talker(MiniCPM-o-4.5 기반), 1초 단위의 인과적 시간 유닛",
    "modalities": [
      "text",
      "audio",
      "image",
      "video"
    ],
    "focus": [
      "Full-duplex 음성 상호작용",
      "스트리밍 비디오 이해",
      "에이전트 태스크 오케스트레이션"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [
      "Thinker",
      "Talker"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face Gander-Omni/Gander(Thinker·Talker 체크포인트), Gander 런타임(GitHub)",
    "note": "Tencent Hunyuan Speech Team·Zhejiang Univ. 등의 옴니 인터랙션 에이전트(arXiv:2609.08977). 음성·영상 스트림을 1초 유닛으로 처리하며 장기 실행 태스크를 백그라운드 Brain(기본 Codex/GPT-5.6 워커)에 위임합니다. 모델 카드에는 총 파라미터 표기가 없고 기술 보고서 Table 4의 '9B' 표기를 따릅니다.",
    "benchmarks": {
      "Full-Duplex-Bench v3 (ToolSel F1)": 75.9,
      "Full-Duplex-Bench v3 (ArgAcc)": 50.3,
      "Full-Duplex-Bench v3 (RespQual)": 49.0,
      "Full-Duplex-Bench v3 (Pass@1)": 40.0,
      "Full-Duplex-Bench v3 (Take-turn)": 100.0,
      "Full-Duplex-Bench v3 (Interrupt)": 8.0,
      "Full-Duplex-Bench v3 (Filler)": 51.6,
      "SpokenQA Llama Questions": 75.6,
      "SpokenQA Web Questions": 59.3,
      "VoiceBench AlpacaEval (1-5)": 3.96,
      "VoiceBench SD-QA": 46.84,
      "WorldSense (AV)": 49.62,
      "Daily-Omni (AV)": 78.53
    },
    "official_id": "Gander-Omni/Gander",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Gander-Omni/Gander"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/papers/2609.08977"
      }
    ],
    "release_date_source": "https://huggingface.co/Gander-Omni/Gander",
    "parameter_source": "https://huggingface.co/papers/2609.08977",
    "benchmark_sources": {
      "Full-Duplex-Bench v3 (ToolSel F1)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (ArgAcc)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (RespQual)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Pass@1)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Take-turn)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Interrupt)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Filler)": "https://huggingface.co/papers/2609.08977",
      "SpokenQA Llama Questions": "https://huggingface.co/papers/2609.08977",
      "SpokenQA Web Questions": "https://huggingface.co/papers/2609.08977",
      "VoiceBench AlpacaEval (1-5)": "https://huggingface.co/papers/2609.08977",
      "VoiceBench SD-QA": "https://huggingface.co/papers/2609.08977",
      "WorldSense (AV)": "https://huggingface.co/papers/2609.08977",
      "Daily-Omni (AV)": "https://huggingface.co/papers/2609.08977"
    },
    "benchmark_note": "기술 보고서(arXiv:2609.08977, HF Papers 게재본) Table 3~5의 Gander 열 값입니다. Full-Duplex-Bench v3의 앞 4개 지표는 보고서 원문이 0~1 분수(ToolSel 0.759, ArgAcc 0.503, RespQual 0.490, Pass@1 0.400)로 표기해 %로 환산했습니다. Interrupt는 낮을수록 좋은 지표, Filler는 상호작용 특성 지표입니다. AlpacaEval은 1–5 척도. WorldSense/Daily-Omni는 audio-visual 조건 값이며, back-brain-only 행(Pass@1 0.520 등)은 프론트 체계가 아닌 별도 조건이라 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-152",
    "name": "DeepSeek-V4.1-Flash",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "552B backbone / 8B active(prefill)·16B active(decode), Engram 메모리 196B 별도 희소 접근",
    "architecture": "CED(20층 인과 인코더+20층 디코더) MoE — 384 routed+1 shared expert, 토큰당 6 routed 활성; CSA2+FP4 KV 캐시(토큰당 890B), DeepSeek-ViT 비전 인코더",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "에이전틱 코딩",
      "초장문(1M) 워크로드",
      "KV 캐시 압축 효율"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "1-100 연속 조절(평가는 100=max)"
    ],
    "availability": "Hugging Face deepseek-ai/DeepSeek-V4.1-Flash, deepseek-recipe 툴킷",
    "note": "V4-Flash 후속. CED 아키텍처로 prefill 8B/decode 16B 활성화, KV 캐시를 V4-Flash 대비 약 1/4로 축소. 45T 토큰 멀티모달 사전학습, 1M 컨텍스트. Jinja 채팅 템플릿 대신 encoding.py·deepseek-recipe 제공.",
    "benchmarks": {
      "GPQA Diamond (Pass@1)": 90.9,
      "HLE (Pass@1)": 36.8,
      "MathArena Apex (Pass@1)": 65.6,
      "Terminal-Bench 2.1 (Pass@1)": 90.6,
      "Terminal-Bench 3.0 (Pass@1)": 30.0,
      "Terminal-Bench 4.0 (Pass@1)": 31.2,
      "DeepSWE v1.1 (Resolved)": 74.2,
      "ProgramBench (Almost@1)": 20.3,
      "NL2Repo-Bench (Score)": 64.0,
      "CyberGym (Pass@1)": 88.1,
      "SEC-Bench Pro (Pass@1)": 62.8,
      "ExploitGym (Pass@1)": 15.3,
      "HLE w/ tools (Pass@1)": 63.9,
      "AutomationBench (Pass@1)": 54.8,
      "Agent's Last Exam (Pass@1)": 31.8,
      "Chartography w/ tools (Pass@1)": 78.9,
      "BabyVision w/ tools (Pass@1)": 89.6,
      "ZeroBench-main w/ tools (Pass@5)": 49.0
    },
    "official_id": "deepseek-ai/DeepSeek-V4.1-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
    "benchmark_sources": {
      "GPQA Diamond (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "HLE (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "MathArena Apex (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 2.1 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 3.0 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 4.0 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "DeepSWE v1.1 (Resolved)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ProgramBench (Almost@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "NL2Repo-Bench (Score)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "CyberGym (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "SEC-Bench Pro (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ExploitGym (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "HLE w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "AutomationBench (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Agent's Last Exam (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Chartography w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "BabyVision w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ZeroBench-main w/ tools (Pass@5)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
    },
    "benchmark_note": "공식 카드(기술 보고서)의 instruct 비교 표 DS-V4.1-Flash 열 값입니다(모두 reasoning_effort=100, temperature=1.0, top_p=0.95). HLE 36.8은 전체 세트이며 괄호의 39.1†은 텍스트 전용 부분집합입니다. Codeforces(3471 rating)는 % 척도가 아니라 제외했습니다. 별도 'Performance across agent scaffolds' 표(DeepSWE v1.1·Terminal-Bench 2.1을 8개 하니스로 측정)는 동일 벤치마크의 프로토콜 변형이라 수록하지 않고, DeepSWE v1.1 74.2는 mini-SWE 하니스, 기타 코드 에이전트 지표는 DSH Minimal 기준입니다. Base 모델 표는 미배포 DeepSeek-V4.1-Flash-Base 기준이라 이 레코드에 포함하지 않았습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-153",
    "name": "Ling-3.0-flash-VL",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "124B total / 5.5B active (MoE)",
    "architecture": "Sparse MoE + 42층 KDA/Gated-MLA 하이브리드(5:1), ViT 인코더 + 2층 MLP 프로젝터, VideoRoPE",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "비전-언어 추론",
      "GUI·에이전트 작업",
      "장문 컨텍스트"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "256K (YaRN 확장 레시피 제공)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "thinking on/off (기본 on)"
    ],
    "availability": "Hugging Face inclusionAI/Ling-3.0-flash-VL, SGLang·vLLM 공식 레시피",
    "note": "Ling-3.0-flash의 언어·추론·장문 능력에 네이티브 이미지/비디오 이해를 결합한 비전-언어 MoE. 카드가 명시한 컨텍스트는 최대 256K입니다.",
    "benchmarks": {
      "CountBench": 97.33,
      "WorldVQA": 45.67,
      "MMMU-Pro": 79.0,
      "MathVision": 84.87,
      "Humanity's Last Exam-MM": 19.88,
      "OmniDocBench1.5": 91.35,
      "CharXiv_RQ": 81.3,
      "MMSearch": 79.0,
      "ClawEval-MM": 59.9,
      "WebVoyager": 90.83,
      "Vision2Web": 57.69,
      "AntBench-Medical": 0.96
    },
    "official_id": "inclusionAI/Ling-3.0-flash-VL",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
    "benchmark_sources": {
      "CountBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "WorldVQA": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MMMU-Pro": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MathVision": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "Humanity's Last Exam-MM": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "OmniDocBench1.5": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "CharXiv_RQ": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MMSearch": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "ClawEval-MM": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "WebVoyager": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "Vision2Web": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "AntBench-Medical": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL"
    },
    "benchmark_note": "공식 모델 카드 벤치마크 표(이미지)의 Ling-3.0-flash-VL 열 값입니다. AntBench-Medical은 사내 벤치마크로 카드가 '0.96 / 0.93' 두 지표를 병기해 첫 값을 수록했습니다. Artificial Analysis Intelligence Index 42는 제3자 지표 정책상 제외했습니다. 카드 주석: *는 공식 테스트 설정의 API 수집 값, 밑줄은 Python 툴 호출 없는 환경 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-154",
    "name": "North Small Translate",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Cohere",
    "family": "North",
    "type": "LLM / translation-specialized",
    "category": "LLM",
    "status": "GA",
    "parameters": "218B total / 25B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [
      "text"
    ],
    "focus": [
      "기계 번역(50+ 언어)",
      "엔터프라이즈 번역"
    ],
    "open_weights": true,
    "license": "CC BY-NC 4.0",
    "context": "16K in / 16K out",
    "languages": "50+ 언어",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Cohere 플랫폼 + 오픈 웨이트",
    "note": "Cohere의 번역 특화 MoE. 단일 목적 모델이지만 LLM 계열로 분류해 수록합니다(범위 제외 항목에 해당하지 않음).",
    "benchmarks": {
      "WMT26 (all-language)": 83.6
    },
    "official_id": "North-Small-Translate-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://cohere.com/blog/north-small-translate"
      }
    ],
    "release_date_source": "https://cohere.com/blog/north-small-translate",
    "parameter_source": "https://cohere.com/blog/north-small-translate",
    "benchmark_sources": {
      "WMT26 (all-language)": "https://cohere.com/blog/north-small-translate"
    },
    "benchmark_note": "Cohere 공식 발표문에 명시된 유일한 정량 점수(WMT26 전체 언어 점수 83.6)입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-155",
    "name": "SWE-2",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Cognition",
    "family": "SWE",
    "type": "LLM / agentic coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "2.8T (Kimi K3 베이스 포스트트레인 — SWE-2 자체 수치는 별도 표기 없음)",
    "architecture": "Kimi K3(2.8T) 포스트트레인, 단일 RL 런으로 전 노력 수준 학습(비용 페널티 R=S−λe·C)",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "비용-성능 파레토 프런티어"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "medium",
      "high",
      "max"
    ],
    "availability": "Devin Desktop·CLI·Web·Fusion",
    "note": "Cognition의 최신 코딩 모델. SWE-1.7 인프라 위에서 멀티-조(兆) 파라미터 규모 RL을 처음 적용했고, FrontierCode 1.1 Main 50.0%로 Fable 5.1과 1pt 이내이면서 64% 저렴하다고 공식 발표했습니다. 호스티드 전용(가중치 미공개).",
    "benchmarks": {
      "FrontierCode 1.1 Main": 50.0,
      "DeepSWE 1.1": 73.0,
      "Terminal-Bench 2.1": 92.8,
      "Terminal-Bench 4": 27.3
    },
    "official_id": "swe-2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://cognition.com/blog/swe-2"
      }
    ],
    "release_date_source": "https://cognition.com/blog/swe-2",
    "parameter_source": "https://cognition.com/blog/swe-2",
    "benchmark_sources": {
      "FrontierCode 1.1 Main": "https://cognition.com/blog/swe-2",
      "DeepSWE 1.1": "https://cognition.com/blog/swe-2",
      "Terminal-Bench 2.1": "https://cognition.com/blog/swe-2",
      "Terminal-Bench 4": "https://cognition.com/blog/swe-2"
    },
    "benchmark_note": "Cognition 공식 발표의 코딩 벤치마크 표 SWE-2 열 값(%) 4개 전체를 수록했습니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-156",
    "name": "Atria-Dawn-Preview",
    "date": "2026-09-11",
    "sortDate": "2026-09-11",
    "month": "2026-09",
    "monthName": "September",
    "company": "Shanghai Artificial Intelligence Laboratory",
    "family": "Atria",
    "type": "LLM / agentic foundation model",
    "category": "LLM",
    "status": "Preview",
    "parameters": "744B (GLM-5.2 MoE 파운데이션 기반)",
    "architecture": "GLM-5.2 MoE 파운데이션 위 에이전틱 모델(glm_moe_dsa)",
    "modalities": [
      "text"
    ],
    "focus": [
      "딥리서치·탐색",
      "코딩·머신러닝 자동화",
      "문서 딜리버리",
      "사이버보안"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "256K",
    "languages": "",
    "variants": [
      "Atria-Dawn-Preview-FP8"
    ],
    "reasoning_effort": [
      "reasoning_effort high 지원"
    ],
    "availability": "Hugging Face internlm/Atria-Dawn-Preview, ModelScope, 지역별 API 콘솔",
    "note": "Shanghai AI Lab의 차세대 에이전틱 모델 프리뷰. Discovery·Creation·Delivery·Cybersecurity 4개 차원의 종단 간 딜리버리를 목표로 합니다.",
    "benchmarks": {
      "DeepSearchQA": 96.0,
      "BrowseComp": 92.5,
      "WideSearch": 81.9,
      "DeepResearch Bench II": 51.1,
      "MLE-bench Lite": 86.2,
      "SWE-bench Pro": 59.6,
      "Terminal-Bench 2.1": 78.3,
      "BFCL v4": 77.0,
      "AutomationBench": 53.8,
      "SkillsBench": 66.4,
      "τ³-Bench Banking": 41.2,
      "Workspace-Bench": 65.0,
      "Workspace-Bench-Lite": 68.2,
      "JobBench": 50.3,
      "CyberGym": 86.5
    },
    "official_id": "internlm/Atria-Dawn-Preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/internlm/Atria-Dawn-Preview"
      }
    ],
    "release_date_source": "https://huggingface.co/internlm/Atria-Dawn-Preview",
    "parameter_source": "https://huggingface.co/internlm/Atria-Dawn-Preview",
    "benchmark_sources": {
      "DeepSearchQA": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "BrowseComp": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "WideSearch": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "DeepResearch Bench II": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "MLE-bench Lite": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "SWE-bench Pro": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Terminal-Bench 2.1": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "BFCL v4": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "AutomationBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "SkillsBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "τ³-Bench Banking": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Workspace-Bench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Workspace-Bench-Lite": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "JobBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "CyberGym": "https://huggingface.co/internlm/Atria-Dawn-Preview"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Atria Dawn Preview 열 값 15개입니다. GDPval(1583)은 Elo 척도라 정책상 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-157",
    "name": "Occamy-1.0",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Accio-Lab",
    "family": "Occamy",
    "type": "MLLM / agentic",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Qwen3.6-35B-A3B 포스트트레인(40층, 256 experts·8 routed+1 shared, 비전 인코더 동결) — Marathon/Sprint 전문가 SFT+HDPO 후 uniform merge+SAO",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "장기 co-work 에이전트",
      "툴 호출",
      "터미널 코딩",
      "상태 추적·복구"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144 (SFT 시퀀스 131,072)",
    "languages": "",
    "variants": [
      "BF16",
      "FP8",
      "NVFP4",
      "GGUF (Q4_K_M/Q8_0)",
      "MTP(실험)"
    ],
    "reasoning_effort": [
      "enable_thinking on/off"
    ],
    "availability": "Hugging Face Accio-Lab/occamy-1.0, SGLang·vLLM, OpenAI 호환 API",
    "note": "Accio-Lab의 co-work 특화 에이전틱 모델(arXiv:2609.11977). 기술 보고서는 9/4 공개, HF 카드·체크포인트 공개와 보도는 9/15 기준이라 릴리스일을 9/15로 잡았습니다. RL 인프라 Dressage를 함께 오픈소스화했습니다.",
    "benchmarks": {
      "Claw-Eval (average)": 82.2,
      "Claw-Eval (Pass³)": 71.4,
      "WildClawBench": 49.16,
      "CommerceAgentBench": 37.38,
      "OfficeQA Pro": 48.1,
      "τ³-Bench (Banking)": 37.1,
      "AutomationBench (Pass¹)": 27.6,
      "AutomationBench (partial)": 69.1,
      "BFCL v4": 65.4,
      "VitaBench": 41.75,
      "Terminal-Bench 2.1": 59.0,
      "IFEval": 91.53
    },
    "official_id": "Accio-Lab/occamy-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Accio-Lab/occamy-1.0"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/papers/2609.11977"
      }
    ],
    "release_date_source": "https://huggingface.co/Accio-Lab/occamy-1.0",
    "parameter_source": "https://huggingface.co/Accio-Lab/occamy-1.0",
    "benchmark_sources": {
      "Claw-Eval (average)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "Claw-Eval (Pass³)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "WildClawBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "CommerceAgentBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "OfficeQA Pro": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "τ³-Bench (Banking)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "AutomationBench (Pass¹)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "AutomationBench (partial)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "BFCL v4": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "VitaBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "Terminal-Bench 2.1": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "IFEval": "https://huggingface.co/Accio-Lab/occamy-1.0"
    },
    "benchmark_note": "공식 모델 카드 Full Evaluation 표의 Occamy-1.0 열 값입니다. Business Arena($79,868, 통화 지표)와 GDPval(1,128, Elo)는 % 척도가 아니라 제외했습니다. 카드 주석상 * 표시는 공식 카드·제3자 인용 값, †는 공개 태스크 재현 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-158",
    "name": "Gemini 3.8 Live",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM / omni (live voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "라이브 대화 모델 — 근실시간 시각 입력, 백그라운드 툴 실행, 97개 언어 자동 전환",
    "modalities": [
      "audio",
      "text",
      "image"
    ],
    "focus": [
      "실시간 음성 대화",
      "보이스 에이전트",
      "백그라운드 태스크 실행"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "97개 언어 자동 감지·전환",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Gemini API·Google AI Studio(개발자), Gemini Enterprise(프라이빗 프리뷰), Search Live",
    "note": "규모·비용 효율에 초점을 둔 라이브 대화 모델. 공식 발표는 이 모델의 정량 벤치마크 수치를 제시하지 않았습니다(Speech Agent Arena 2위 언급만 있어 제3자 순위라 미수록). 오디오 출력에는 SynthID 워터마크.",
    "benchmarks": {},
    "official_id": "gemini-3.8-live",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-audio/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://ai.google.dev/gemini-api/docs/live-api"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-audio/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-159",
    "name": "Gemini 3.8 Live Extended Thinking",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM / omni (live voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "3.8 Live에 다단계 추론을 더한 상위 모델 — 말하면서 동시에 추론, 라이브 진행 상황 내레이션",
    "modalities": [
      "audio",
      "text",
      "image"
    ],
    "focus": [
      "복잡한 음성 태스크",
      "병렬 추론",
      "보이스 에이전트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "extended thinking"
    ],
    "availability": "Gemini API·Google AI Studio, Gemini Live, Workspace(Docs/Gmail/Keep Live)·Search Live",
    "note": "고복잡도 태스크용 라이브 대화 모델. EVA-Bench(ServiceNow) 파레토 개선은 차트만 제시되어 수치 미수록.",
    "benchmarks": {
      "τ-Voice": 68.6,
      "τ-Voice-banking": 35.1,
      "Big Bench Audio": 97.7
    },
    "official_id": "gemini-3.8-live-extended-thinking",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-audio/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://ai.google.dev/gemini-api/docs/live-api"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-audio/",
    "benchmark_sources": {
      "τ-Voice": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
      "τ-Voice-banking": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
      "Big Bench Audio": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
    },
    "benchmark_note": "Google 공식 발표문에 인쇄된 수치 3개(τ-Voice 68.6%, Sierra τ-Voice-banking 35.1%, Big Bench Audio 97.7%)입니다. 발표문이 인용한 Artificial Analysis Speech-to-Speech Quality Index(82.6)와 Speech Agent Arena 2위는 제3자 지표·순위라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-160",
    "name": "Koa",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Salesforce",
    "family": "Koa",
    "type": "LLM / reasoning (CRM)",
    "category": "Reasoning",
    "status": "Preview",
    "parameters": "정확한 수치 미공개 (NVIDIA Nemotron 3 Super 포스트트레인)",
    "architecture": "NVIDIA Nemotron 3 Super 포스트트레인 — 합성 CRM 시나리오 학습(고객 데이터 미사용)",
    "modalities": [
      "text"
    ],
    "focus": [
      "CRM 추론·툴 사용",
      "Agentforce 워크플로"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "선별 파일럿(2026년 겨울 GA 예정), 가중치·추론 모두 Salesforce 관리",
    "note": "Salesforce의 첫 자체 추론 모델. 기술 보고서는 arXiv:2609.15066(비공식 호스트라 출처 미등록). 공식 발표는 'Salesforce CRM 벤치마크에서 선도 모델과 동등 이상, 오류 1/3 수준'이라고만 명시하고 정량 점수를 공개하지 않아 benchmarks는 비워 둡니다.",
    "benchmarks": {},
    "official_id": "koa",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/"
      }
    ],
    "release_date_source": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/",
    "parameter_source": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-161",
    "name": "Gensyn open-1b",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Gensyn",
    "family": "open-1b",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1.61B total (1.08B non-embedding)",
    "architecture": "Decoder-only Transformer — 전 학습 과정 검증 가능(100스텝 간격 체크포인트·스텝별 상태 해시)",
    "modalities": [
      "text"
    ],
    "focus": [
      "검증 가능한 학습(Replayable training)",
      "레퍼런스/연구용 소형 LM"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "4,096",
    "languages": "영어(코드·STEM 텍스트 포함)",
    "variants": [
      "open-1b-base",
      "open-1b-midtrained-93B",
      "open-1b-sft"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face Gensyn org(3개 체크포인트), 검증 레코드 open1b.gensyn.ai",
    "note": "학습 과정 전체를 독립 검증할 수 있는 첫 LM — 400B 토큰·80,957 옵티마이저 스텝의 데이터·코드·중간 체크포인트·스텝별 해시를 공개했습니다. 수록 레코드는 채팅 가능한 SFT 제품 모델이며 base/midtrained 체크포인트는 변형으로 묶습니다. 공식 카드에 벤치마크 점수는 없습니다.",
    "benchmarks": {},
    "official_id": "Gensyn/open-1b-sft",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Gensyn/open-1b-sft"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://open1b.gensyn.ai"
      }
    ],
    "release_date_source": "https://huggingface.co/Gensyn/open-1b-sft",
    "parameter_source": "https://huggingface.co/Gensyn/open-1b-sft",
    "benchmark_sources": {},
    "benchmark_note": "",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  }
];

const COMPANY_META = {
  "Alibaba": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-orange-500 to-amber-500",
    "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"
  },
  "Anthropic": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-amber-600 to-yellow-500",
    "badge": "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  "Ant Group / InclusionAI": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-600 to-indigo-500",
    "badge": "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  "Arcee AI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-teal-500 to-emerald-500",
    "badge": "bg-teal-500/10 text-teal-400 border-teal-500/30"
  },
  "Baidu": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-500 to-sky-400",
    "badge": "bg-sky-500/10 text-sky-400 border-sky-500/30"
  },
  "ByteDance": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-cyan-500 to-blue-500",
    "badge": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  "Cohere": {
    "country": "CA",
    "flag": "🇨🇦",
    "color": "from-emerald-500 to-teal-400",
    "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  "Cohere Labs": {
    "country": "CA",
    "flag": "🇨🇦",
    "color": "from-emerald-500 to-teal-400",
    "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  "DeepSeek": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-cyan-400 to-blue-600",
    "badge": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
  },
  "Google DeepMind": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-400 via-indigo-400 to-purple-500",
    "badge": "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
  },
  "IBM": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-700 to-indigo-600",
    "badge": "bg-blue-700/10 text-blue-300 border-blue-700/30"
  },
  "Meituan": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-yellow-400 to-amber-500",
    "badge": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
  },
  "Meta": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-600 to-sky-400",
    "badge": "bg-blue-600/10 text-blue-400 border-blue-500/30"
  },
  "MiniMax": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-violet-500 to-purple-600",
    "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"
  },
  "Mistral AI": {
    "country": "FR",
    "flag": "🇫🇷",
    "color": "from-orange-600 to-amber-500",
    "badge": "bg-orange-600/10 text-orange-300 border-orange-600/30"
  },
  "Moonshot AI": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-purple-500 to-pink-500",
    "badge": "bg-purple-500/10 text-purple-300 border-purple-500/30"
  },
  "Motif Technologies": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-rose-500 to-pink-500",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "NAVER Cloud": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-green-500 to-emerald-500",
    "badge": "bg-green-500/10 text-green-300 border-green-500/30"
  },
  "NVIDIA": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-green-600 to-lime-500",
    "badge": "bg-lime-500/10 text-lime-400 border-lime-500/30"
  },
  "OpenAI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-emerald-500 to-teal-600",
    "badge": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
  },
  "Poolside": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-sky-400 to-cyan-500",
    "badge": "bg-sky-400/10 text-sky-300 border-sky-400/30"
  },
  "Sarvam AI": {
    "country": "IN",
    "flag": "🇮🇳",
    "color": "from-amber-500 to-orange-600",
    "badge": "bg-amber-600/10 text-amber-300 border-amber-600/30"
  },
  "StepFun": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-indigo-500 to-blue-600",
    "badge": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
  },
  "Tencent": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-500 to-teal-500",
    "badge": "bg-blue-500/10 text-blue-300 border-blue-500/30"
  },
  "Thinking Machines Lab": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-fuchsia-500 to-purple-600",
    "badge": "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30"
  },
  "Upstage": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-amber-400 to-yellow-500",
    "badge": "bg-amber-400/10 text-amber-300 border-amber-400/30"
  },
  "Xiaomi": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-orange-500 to-amber-600",
    "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"
  },
  "Z.ai": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-rose-500 to-red-500",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "xAI / SpaceXAI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-gray-300 to-slate-400",
    "badge": "bg-slate-400/10 text-slate-300 border-slate-400/30"
  },
  "LG AI Research": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-rose-500 to-red-600",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "LG": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-rose-500 to-red-600",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "SK Telecom": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-red-500 to-orange-500",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  },
  "SKT": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-red-500 to-orange-500",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  },
  "Institute of Foundation Models": {
    "country": "AE",
    "flag": "🇦🇪",
    "color": "from-teal-500 to-emerald-500",
    "badge": "bg-teal-500/10 text-teal-300 border-teal-500/30"
  },
  "Cognition": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-sky-500 to-indigo-500",
    "badge": "bg-sky-500/10 text-sky-300 border-sky-500/30"
  },
  "Salesforce": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-500 to-cyan-500",
    "badge": "bg-blue-500/10 text-blue-300 border-blue-500/30"
  },
  "Gensyn": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-lime-500 to-green-500",
    "badge": "bg-lime-500/10 text-lime-300 border-lime-500/30"
  },
  "Accio-Lab": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-violet-500 to-purple-500",
    "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"
  },
  "Shanghai Artificial Intelligence Laboratory": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-red-500 to-rose-600",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  }
};

const FAMILY_FLOWS = [
  {
    "family": "Qwen",
    "steps": [
      "Qwen3.5",
      "Qwen3.6",
      "Qwen3.7",
      "Qwen3.8",
      "Qwen3.8-Flash-Next"
    ]
  },
  {
    "family": "DeepSeek",
    "steps": [
      "DeepSeek-V4 Preview",
      "DeepSeek-V4-Flash-0731",
      "DeepSeek-V4-Pro-0813",
      "DeepSeek-V4-Flash-Vision-Exp",
      "DeepSeek-V4.1-Flash"
    ]
  },
  {
    "family": "Claude",
    "steps": [
      "Opus 4.6",
      "Sonnet 4.6",
      "Opus 4.7",
      "Opus 4.8",
      "Fable/Mythos 5",
      "Sonnet 5",
      "Opus 5",
      "Fable/Mythos 5.1"
    ]
  },
  {
    "family": "GPT",
    "steps": [
      "GPT-5.3",
      "GPT-5.4",
      "GPT-5.5",
      "GPT-5.6",
      "GPT-6 Astra",
      "GPT-6 Astra Pro"
    ]
  },
  {
    "family": "Gemini",
    "steps": [
      "Gemini 3.5 Flash",
      "Gemini 3.6 Flash",
      "Gemini 3.7 Flash",
      "Gemini 3.8 Flash",
      "Gemini 3.8 Live",
      "Gemini 3.8 Live Extended Thinking"
    ]
  },
  {
    "family": "GLM",
    "steps": [
      "GLM-5",
      "GLM-5.1",
      "GLM-5.2",
      "GLM-5.3",
      "GLM-5.3-Flash"
    ]
  },
  {
    "family": "Kimi",
    "steps": [
      "Kimi K2.5",
      "Kimi K2.6",
      "Kimi K2.7 Code",
      "Kimi K3"
    ]
  },
  {
    "family": "LongCat",
    "steps": [
      "LongCat-Flash-Thinking-2601",
      "LongCat-Flash-Lite",
      "LongCat-Flash-Omni",
      "LongCat-2.0"
    ]
  },
  {
    "family": "MiMo",
    "steps": [
      "MiMo-V2-Flash",
      "MiMo-V2.5",
      "MiMo-V2.5-Pro"
    ]
  },
  {
    "family": "Nemotron",
    "steps": [
      "Nemotron-3-Super-120B-A12B",
      "Nemotron-3-Nano-Omni-30B-A3B-Reasoning",
      "Nemotron-3-Ultra-550B-A55B",
      "Nemotron-3.5-Lightning-30B-A3B"
    ]
  },
  {
    "family": "Granite",
    "steps": [
      "Granite 4.1",
      "Granite 4.2"
    ]
  },
  {
    "family": "Laguna",
    "steps": [
      "Laguna M.1",
      "Laguna XS.2",
      "Laguna XS 2.1",
      "Laguna S 2.1"
    ]
  },
  {
    "family": "Muse Spark",
    "steps": [
      "Muse Spark",
      "Muse Spark 1.1",
      "Muse Spark 1.2",
      "Muse Spark 1.3"
    ]
  },
  {
    "family": "K2 Horizon",
    "steps": [
      "K2-Horizon-0.9B",
      "K2-Horizon-3.7B",
      "K2-Horizon-7B",
      "K2-Horizon-32B",
      "K2-Horizon-MoVA-36B-A4B",
      "K2-Horizon-375B-A23B"
    ]
  },
  {
    "family": "Seed / Doubao",
    "steps": [
      "Seed 2.0",
      "Seed2.1 Pro",
      "Seed2.1 Turbo"
    ]
  },
  {
    "family": "Ling 3.0",
    "steps": [
      "Ling-3.0-tiny",
      "Ling-3.0-flash",
      "Ling-3.0-flash-VL"
    ]
  }
];

const UNCONFIRMED_DATA = [];

const SCOPE_DATA = {
  "period": "2026-01-01 ~ 2026-09-16",
  "scope": [
    "LLM (Large Language Models)",
    "MLLM / VLM / Omni foundation models"
  ],
  "excluded": [
    "image-generation-only models",
    "video-generation-only models",
    "OCR-only models",
    "ASR/TTS-only models",
    "embedding / reranker models",
    "reward / guard-only models",
    "simple quantized variants",
    "intermediate/base checkpoints unless representing distinct products"
  ],
  "benchmark_policy": "공식 모델 카드·기술 보고서·개발사 공식 발표문에 모델 제공자가 직접 명시한 점수만 수록. Chatbot Arena/ELO, Artificial Analysis, 제3자 leaderboard, 추정·역산 점수는 제외.",
  "parameter_policy": "개발사가 명시한 총/활성 파라미터만 사용. 공개하지 않은 값은 정확한 수치 미공개로 표시하고, 모델 크기·가중치 파일 용량·양자화 크기를 파라미터 수로 대체하지 않음.",
  "reviewed_on": "2026-09-16"
};

const AUDIT_EXCLUDED = [
  {
    "id": "model-045",
    "name": "LongCat-2.0 Preview",
    "original_name": "LongCat-2.0 Preview",
    "reason": "공식 발표는 정식 LongCat-2.0 출시 전 preview 접근이 있었다고만 설명하며, 별도의 공식 모델 ID·출시일을 제시하지 않음. 정식 2026-06-30 모델과 같은 체크포인트를 별도 모델로 중복 집계하지 않음.",
    "source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html"
  },
  {
    "id": "model-124",
    "name": "EXAONE 3.5 32B",
    "original_name": "EXAONE 3.5 32B",
    "reason": "공식 자료상 2026 출시가 아니라 기존 2024/2025 세대 모델이며, 현재 타임라인의 2026-01-15 항목을 뒷받침하는 공식 발표를 확인할 수 없음.",
    "source": "https://huggingface.co/LGAI-EXAONE"
  },
  {
    "id": "model-029",
    "name": "LongCat-Flash-Thinking",
    "original_name": "LongCat-Flash-Thinking",
    "reason": "공식 출시 발표일이 2025-09-22인 이전 세대 모델. 2026 타임라인의 별도 신규 출시로 중복 집계하지 않음.",
    "source": "https://tech.meituan.com/2025/09/22/LongCat-Flash-Thinking.html"
  },
  {
    "id": "model-035",
    "name": "MiMo-V2-Omni",
    "original_name": "MiMo-V2-Omni",
    "reason": "Xiaomi MiMo 공식 모델 목록과 공식 모델 카드에서 해당 제품명을 확인하지 못함. 비공식 명칭을 다른 공식 모델로 추정해 대체하지 않음.",
    "source": "https://huggingface.co/XiaomiMiMo/models"
  },
  {
    "id": "model-127",
    "name": "A.X Telco LLM",
    "original_name": "A.X Telco LLM",
    "reason": "정확한 공식 제품명·모델 카드·출시 발표를 1차 자료에서 확인하지 못함.",
    "source": "https://news.sktelecom.com/"
  },
  {
    "id": "excluded-2026-09-08-1",
    "name": "Spark X2.5 (星火 X2.5)",
    "original_name": "iFLYTEK Spark X2.5 / Spark X2.5-4B / Spark X2.5-1.7B",
    "date": "2026-09-07",
    "company": "iFLYTEK",
    "reason": "2026-09-07 플래그십(호출 293B-A30B MoE·256K 컨텍스트)과 09-01 오픈웨이트로 공개된 엔드디바이스 모델 2종(Spark-X2.5-4B/1.7B, 1M 컨텍스트)이 보도됐으나 1차 출처에서 사양을 확정하지 못해 보류합니다. 讯飞의 공식 제품·API 카탈로그 페이지(xinghuo.xfyun.cn/sparkapi, xhspdup.xfyun.cn/sparkapi)는 서버에서 텍스트를 렌더링하지 않아(JavaScript 셸만 응답) 파라미터·컨텍스트·출시일을 인용할 수 없었고, 293B-A30B / 256K 수치는 IT之家·sina 등 2차 보도에서만 확인됐습니다. Hugging Face `XHToken`(표기 'SparkLLM Team') 저장소가 Apache 2.0으로 같은 사양(1M 컨텍스트·200+ 언어)을 공개했지만 해당 조직이 科大讯飞(iFLYTEK)의 공식 조직임을 카드 어디서도 확인하지 못해 '개발사 본인 페이지' 요건을 판정할 수 없었습니다. 조직 편입 여부와 함께 재검토할 항목입니다.",
    "source": "https://xinghuo.xfyun.cn/sparkapi",
    "reviewed_on": "2026-09-08"
  },
  {
    "id": "model-162",
    "name": "Gemini Omni 1.1 Flash",
    "original_name": "Gemini Omni 1.1 Flash",
    "reason": "영상 생성 전용 모델(씬 확장·4K 업스케일 등)로 수록 범위의 video-generation-only 제외 항목에 해당.",
    "source": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"
  },
  {
    "id": "model-163",
    "name": "GPT-Live-1 API 확장",
    "original_name": "GPT-Live-1 in the API",
    "reason": "2026-09-10 발표는 기존 model-137 GPT-Live-1의 API 배포 확장으로 신규 모델이 아니므로 중복 집계하지 않음.",
    "source": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
  },
  {
    "id": "model-164",
    "name": "Gemini 3.5 Transcribe",
    "original_name": "Gemini 3.5 Transcribe",
    "reason": "전사(transcription) 전용 모델로 ASR/TTS-only 제외 항목에 해당.",
    "source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/"
  }
];
