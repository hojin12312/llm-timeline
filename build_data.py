import re
import json

with open('조사 자료', 'r', encoding='utf-8') as f:
    text = f.read()

parts = re.split(r'# ========================================================================', text)
part3 = parts[3]
part5 = parts[5]
part7 = parts[7]
part9 = parts[9]

# 1. Company Metadata Dictionary
company_meta = {
    "Alibaba": {"country": "CN", "flag": "🇨🇳", "color": "from-orange-500 to-amber-500", "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"},
    "Anthropic": {"country": "US", "flag": "🇺🇸", "color": "from-amber-600 to-yellow-500", "badge": "bg-amber-500/10 text-amber-400 border-amber-500/30"},
    "Ant Group / InclusionAI": {"country": "CN", "flag": "🇨🇳", "color": "from-blue-600 to-indigo-500", "badge": "bg-blue-500/10 text-blue-400 border-blue-500/30"},
    "Arcee AI": {"country": "US", "flag": "🇺🇸", "color": "from-teal-500 to-emerald-500", "badge": "bg-teal-500/10 text-teal-400 border-teal-500/30"},
    "Baidu": {"country": "CN", "flag": "🇨🇳", "color": "from-blue-500 to-sky-400", "badge": "bg-sky-500/10 text-sky-400 border-sky-500/30"},
    "ByteDance": {"country": "CN", "flag": "🇨🇳", "color": "from-cyan-500 to-blue-500", "badge": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"},
    "Cohere": {"country": "CA", "flag": "🇨🇦", "color": "from-emerald-500 to-teal-400", "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"},
    "Cohere Labs": {"country": "CA", "flag": "🇨🇦", "color": "from-emerald-500 to-teal-400", "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"},
    "DeepSeek": {"country": "CN", "flag": "🇨🇳", "color": "from-cyan-400 to-blue-600", "badge": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"},
    "Google DeepMind": {"country": "US", "flag": "🇺🇸", "color": "from-blue-400 via-indigo-400 to-purple-500", "badge": "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"},
    "IBM": {"country": "US", "flag": "🇺🇸", "color": "from-blue-700 to-indigo-600", "badge": "bg-blue-700/10 text-blue-300 border-blue-700/30"},
    "Meituan": {"country": "CN", "flag": "🇨🇳", "color": "from-yellow-400 to-amber-500", "badge": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"},
    "Meta": {"country": "US", "flag": "🇺🇸", "color": "from-blue-600 to-sky-400", "badge": "bg-blue-600/10 text-blue-400 border-blue-500/30"},
    "MiniMax": {"country": "CN", "flag": "🇨🇳", "color": "from-violet-500 to-purple-600", "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"},
    "Mistral AI": {"country": "FR", "flag": "🇫🇷", "color": "from-orange-600 to-amber-500", "badge": "bg-orange-600/10 text-orange-300 border-orange-600/30"},
    "Moonshot AI": {"country": "CN", "flag": "🇨🇳", "color": "from-purple-500 to-pink-500", "badge": "bg-purple-500/10 text-purple-300 border-purple-500/30"},
    "Motif Technologies": {"country": "US", "flag": "🇺🇸", "color": "from-rose-500 to-pink-500", "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"},
    "NAVER Cloud": {"country": "KR", "flag": "🇰🇷", "color": "from-green-500 to-emerald-500", "badge": "bg-green-500/10 text-green-300 border-green-500/30"},
    "NVIDIA": {"country": "US", "flag": "🇺🇸", "color": "from-green-600 to-lime-500", "badge": "bg-lime-500/10 text-lime-400 border-lime-500/30"},
    "OpenAI": {"country": "US", "flag": "🇺🇸", "color": "from-emerald-500 to-teal-600", "badge": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"},
    "Poolside": {"country": "US", "flag": "🇺🇸", "color": "from-sky-400 to-cyan-500", "badge": "bg-sky-400/10 text-sky-300 border-sky-400/30"},
    "Sarvam AI": {"country": "IN", "flag": "🇮🇳", "color": "from-amber-500 to-orange-600", "badge": "bg-amber-600/10 text-amber-300 border-amber-600/30"},
    "StepFun": {"country": "CN", "flag": "🇨🇳", "color": "from-indigo-500 to-blue-600", "badge": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"},
    "Tencent": {"country": "CN", "flag": "🇨🇳", "color": "from-blue-500 to-teal-500", "badge": "bg-blue-500/10 text-blue-300 border-blue-500/30"},
    "Thinking Machines Lab": {"country": "US", "flag": "🇺🇸", "color": "from-fuchsia-500 to-purple-600", "badge": "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30"},
    "Upstage": {"country": "KR", "flag": "🇰🇷", "color": "from-amber-400 to-yellow-500", "badge": "bg-amber-400/10 text-amber-300 border-amber-400/30"},
    "Xiaomi": {"country": "CN", "flag": "🇨🇳", "color": "from-orange-500 to-amber-600", "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"},
    "Z.ai": {"country": "CN", "flag": "🇨🇳", "color": "from-rose-500 to-red-500", "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"},
    "xAI / SpaceXAI": {"country": "US", "flag": "🇺🇸", "color": "from-gray-300 to-slate-400", "badge": "bg-slate-400/10 text-slate-300 border-slate-400/30"}
}

# 2. Parse Timeline (Part 3)
date_sections = re.split(r'\n(?=2026-\d{2}-)', '\n' + part3)
models = []
entry_id = 1

for sec in date_sections:
    sec = sec.strip()
    if not sec.startswith('2026-'):
        continue
    lines = sec.split('\n')
    date_str = lines[0].strip()
    sub_lines = lines[1:]
    
    raw_chunks = []
    current = []
    for l in sub_lines:
        s = l.rstrip()
        if s.strip().startswith('#'):
            continue
        if not s.strip():
            if current:
                raw_chunks.append(current)
                current = []
        else:
            current.append(s)
    if current:
        raw_chunks.append(current)
        
    date_note = None
    for chunk in raw_chunks:
        first_line = chunk[0].strip()
        if first_line.startswith('Note:'):
            date_note = '\n'.join([c.strip() for c in chunk[1:]])
            continue
            
        model_names = []
        props = {}
        curr_key = None
        curr_list = []
        
        for cl in chunk:
            s = cl.strip()
            if s.startswith('- '):
                if curr_key and curr_list:
                    props[curr_key] = curr_list if len(curr_list) > 1 else curr_list[0]
                    curr_list = []
                
                rest = s[2:].strip()
                if ':' in rest:
                    k, v = rest.split(':', 1)
                    k = k.strip().lower().replace(' ', '_')
                    v = v.strip()
                    curr_key = k
                    if v:
                        curr_list.append(v)
                else:
                    curr_key = rest.lower().replace(' ', '_')
            elif curr_key is not None:
                curr_list.append(s)
            else:
                if s and not s.startswith('Note:'):
                    model_names.append(s)
                elif s.startswith('Note:'):
                    curr_key = 'note'
                    if ':' in s:
                        v = s.split(':', 1)[1].strip()
                        if v:
                            curr_list.append(v)
                            
        if curr_key and curr_list:
            props[curr_key] = curr_list if len(curr_list) > 1 else curr_list[0]
            
        for mname in model_names:
            company = props.get('company', '')
            family = props.get('family', '')
            m_type = props.get('type', 'LLM')
            status = props.get('status', 'GA')
            parameters = props.get('parameters', '')
            architecture = props.get('architecture', '')
            if isinstance(architecture, list):
                architecture = ', '.join(architecture)
            modalities = props.get('modalities', [])
            if isinstance(modalities, str):
                modalities = [modalities]
            focus = props.get('focus', [])
            if isinstance(focus, str):
                focus = [focus]
            capabilities = props.get('capabilities', [])
            if isinstance(capabilities, str):
                capabilities = [capabilities]
            all_focus = list(dict.fromkeys(focus + capabilities))
            
            open_weights = props.get('open_weights', None)
            if isinstance(open_weights, str):
                open_weights = open_weights.lower() in ['yes', 'true']
            
            license = props.get('license', '')
            context = props.get('context', '')
            languages = props.get('languages', '')
            variants = props.get('release_variants') or props.get('variants', [])
            if isinstance(variants, str):
                variants = [variants]
            availability = props.get('availability', '')
            reasoning_effort = props.get('reasoning_effort', [])
            if isinstance(reasoning_effort, str):
                reasoning_effort = [reasoning_effort]
            note = props.get('note', '') or date_note or ''
            if isinstance(note, list):
                note = ' '.join(note)
                
            # Compute category type badge
            type_lower = m_type.lower()
            if 'omni' in type_lower or 'unified omni' in type_lower:
                category = 'Omni'
            elif 'mllm' in type_lower or 'vlm' in type_lower or 'vision' in type_lower:
                category = 'MLLM'
            elif 'reasoning' in type_lower or 'thinking' in mname.lower():
                category = 'Reasoning'
            else:
                category = 'LLM'
                
            models.append({
                'id': f'model-{entry_id:03d}',
                'name': mname,
                'date': date_str,
                'sortDate': date_str.split('~')[0],
                'month': date_str[:7],
                'monthName': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'][int(date_str[5:7]) - 1],
                'company': company,
                'family': family,
                'type': m_type,
                'category': category,
                'status': status,
                'parameters': parameters,
                'architecture': architecture,
                'modalities': modalities,
                'focus': all_focus,
                'open_weights': open_weights,
                'license': license,
                'context': context,
                'languages': languages,
                'variants': variants,
                'reasoning_effort': reasoning_effort,
                'availability': availability,
                'note': note
            })
            entry_id += 1

# 3. Parse Generational Flow (Part 9)
family_flows = []
current_fam = None
current_steps = []
for line in part9.strip().split('\n'):
    line_s = line.strip()
    if not line_s:
        continue
    if line.endswith(':'):
        if current_fam:
            family_flows.append({'family': current_fam, 'steps': current_steps})
        current_fam = line[:-1].strip()
        current_steps = []
    elif current_fam:
        cleaned = line_s.lstrip('->').strip()
        if cleaned:
            current_steps.append(cleaned)
if current_fam:
    family_flows.append({'family': current_fam, 'steps': current_steps})

# 4. Parse Unconfirmed / Excluded (Part 7)
unconfirmed = []
current_unconf_title = None
current_unconf_desc = []
for line in part7.strip().split('\n'):
    line_s = line.strip()
    if not line_s or line_s.startswith('---'):
        continue
    if line_s.endswith(':') or line_s in ['Microsoft / Phi', 'Ai2 / OLMo', 'Nanbeige']:
        if current_unconf_title:
            unconfirmed.append({'name': current_unconf_title, 'description': ' '.join(current_unconf_desc)})
        current_unconf_title = line_s.rstrip(':')
        current_unconf_desc = []
    else:
        current_unconf_desc.append(line_s)
if current_unconf_title:
    unconfirmed.append({'name': current_unconf_title, 'description': ' '.join(current_unconf_desc)})

# 5. Scope details
scope_data = {
    "period": "2026-01-01 ~ 2026-09-04",
    "scope": [
        "LLM (Large Language Models)",
        "MLLM / VLM / Omni foundation models"
    ],
    "excluded": [
        "image-generation-only models",
        "video-generation-only models (e.g. Seedance)",
        "OCR-only models",
        "ASR/TTS-only models",
        "embedding / reranker models",
        "reward / guard-only models",
        "simple quantized variants (FP8, NVFP4, INT4, GGUF, etc.)",
        "intermediate / base checkpoints unless representing distinct products"
    ]
}

# Output as JavaScript file
js_content = f"""// 2026 Major LLM / MLLM Release Timeline Dataset
// Auto-generated from '조사 자료'

const TIMELINE_DATA = {json.dumps(models, ensure_ascii=False, indent=2)};

const COMPANY_META = {json.dumps(company_meta, ensure_ascii=False, indent=2)};

const FAMILY_FLOWS = {json.dumps(family_flows, ensure_ascii=False, indent=2)};

const UNCONFIRMED_DATA = {json.dumps(unconfirmed, ensure_ascii=False, indent=2)};

const SCOPE_DATA = {json.dumps(scope_data, ensure_ascii=False, indent=2)};
"""

with open('/Users/studio/Projects/llm-timeline/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"data.js successfully written! Total models: {len(models)}, Flows: {len(family_flows)}, Unconfirmed: {len(unconfirmed)}")
