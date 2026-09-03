// LLM Timeline 2026 Application Logic

// App State
let state = {
  currentView: 'timeline',
  searchQuery: '',
  selectedCompany: 'all',
  selectedCategory: 'all',
  selectedStatus: 'all',
  selectedMonth: 'all',
  openWeightsOnly: false,
  gridSort: 'date-desc',
  matrixSort: { field: 'date', order: 'desc' },
  activeModalId: null
};

// Month Names mapping
const MONTH_NAMES_KO = {
  '2026-01': '1월 (January)',
  '2026-02': '2월 (February)',
  '2026-03': '3월 (March)',
  '2026-04': '4월 (April)',
  '2026-05': '5월 (May)',
  '2026-06': '6월 (June)',
  '2026-07': '7월 (July)',
  '2026-08': '8월 (August)',
  '2026-09': '9월 (September)'
};

// Month Highlights
const MONTH_HIGHLIGHTS = {
  '2026-01': 'Kimi K2.5 및 Arcee AI의 400B MoE Trinity Large 릴리즈로 2026년 타임라인 개막',
  '2026-02': 'OpenAI GPT-5.3-Codex, Claude 4.6 세대(Opus/Sonnet) 및 Baidu 2.4T ERNIE 5.0 Omni 격돌',
  '2026-03': 'GPT-5.4 및 GPT-5.4 Pro/mini 라인업 등장, Mistral Small 4(Apache 2.0) 및 MiMo V2 시리즈 출시',
  '2026-04': 'DeepSeek-V4 공개 및 Qwen 3.6 시리즈, Meta Muse Spark, Poolside Laguna M.1 출시',
  '2026-05': 'Google DeepMind Gemini 3.5 Flash 및 Qwen 3.7-Max, Claude Opus 4.8 출시',
  '2026-06': 'Claude 5 세대(Fable/Mythos/Sonnet 5), Ant Group 1T MoE(Ling/Ring) 및 NAVER Cloud HyperCLOVA X SEED 4B 공개',
  '2026-07': 'OpenAI GPT-5.6 삼총사(Sol/Terra/Luna), Claude Opus 5, Kimi K3(2.8T) 및 Upstage Solar Open 2 출시',
  '2026-08': 'DeepSeek-V4-Pro 정식 GA, Qwen 3.8 플래그십(2.4T) 및 Gemini 3.7 Flash, Granite 4.2 대거 릴리즈',
  '2026-09': 'Claude 5.1(Fable/Mythos) 및 Meta Muse Spark 1.3 릴리즈'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  populateCompanyFilter();
  renderAllViews();
  setupKeyboardShortcuts();
  checkUrlHash();
});

// Populate Company Select Dropdown
function populateCompanyFilter() {
  const select = document.getElementById('filter-company');
  const companies = [...new Set(TIMELINE_DATA.map(m => m.company))].sort((a, b) => a.localeCompare(b));
  
  companies.forEach(company => {
    const meta = COMPANY_META[company] || { flag: '🌐' };
    const count = TIMELINE_DATA.filter(m => m.company === company).length;
    const opt = document.createElement('option');
    opt.value = company;
    opt.textContent = `${meta.flag || '🌐'} ${company} (${count})`;
    select.appendChild(opt);
  });
}

// Filter Engine
function getFilteredModels() {
  return TIMELINE_DATA.filter(model => {
    // Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchText = [
        model.name,
        model.company,
        model.family,
        model.architecture,
        model.parameters,
        model.type,
        model.license,
        model.context,
        model.note,
        ...(model.focus || []),
        ...(model.modalities || [])
      ].join(' ').toLowerCase();
      if (!matchText.includes(q)) return false;
    }

    // Company Filter
    if (state.selectedCompany !== 'all' && model.company !== state.selectedCompany) {
      return false;
    }

    // Category Filter
    if (state.selectedCategory !== 'all') {
      if (state.selectedCategory === 'MLLM' && !['MLLM', 'Omni'].includes(model.category)) return false;
      if (state.selectedCategory === 'Omni' && model.category !== 'Omni') return false;
      if (state.selectedCategory === 'LLM' && model.category !== 'LLM') return false;
      if (state.selectedCategory === 'Reasoning' && model.category !== 'Reasoning') return false;
    }

    // Status Filter
    if (state.selectedStatus !== 'all') {
      const statusLower = (model.status || 'GA').toLowerCase();
      const filterLower = state.selectedStatus.toLowerCase();
      if (!statusLower.includes(filterLower)) return false;
    }

    // Month Filter
    if (state.selectedMonth !== 'all' && model.month !== state.selectedMonth) {
      return false;
    }

    // Open Weights Filter
    if (state.openWeightsOnly && !model.open_weights) {
      return false;
    }

    return true;
  });
}

// Switch View Tabs
function switchView(viewName) {
  state.currentView = viewName;
  
  // Update Tab Buttons (Desktop)
  document.querySelectorAll('.view-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'text-white', 'bg-indigo-600', 'shadow-sm');
    btn.classList.add('text-slate-400');
  });
  const activeBtn = document.getElementById(`tab-${viewName}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'text-white', 'bg-indigo-600', 'shadow-sm');
    activeBtn.classList.remove('text-slate-400');
  }

  // Update Tab Buttons (Mobile)
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-indigo-600', 'text-white');
    btn.classList.add('bg-slate-800', 'text-slate-300');
    if (btn.getAttribute('onclick')?.includes(viewName)) {
      btn.classList.add('active', 'bg-indigo-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    }
  });

  // Toggle View Containers
  document.querySelectorAll('.view-content').forEach(el => el.classList.add('hidden'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.remove('hidden');

  window.location.hash = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render All Views
function renderAllViews() {
  const filtered = getFilteredModels();
  updateResultCounter(filtered.length);
  renderTimelineView(filtered);
  renderFlowView();
  renderGridView(filtered);
  renderMatrixView(filtered);
  renderScopeView();
}

// Update Results Count & Reset Button
function updateResultCounter(count) {
  const counter = document.getElementById('count-number');
  if (counter) counter.textContent = count;

  const resetBtn = document.getElementById('btn-reset-filters');
  const isFiltered = (
    state.searchQuery !== '' ||
    state.selectedCompany !== 'all' ||
    state.selectedCategory !== 'all' ||
    state.selectedStatus !== 'all' ||
    state.selectedMonth !== 'all' ||
    state.openWeightsOnly
  );

  if (resetBtn) {
    if (isFiltered) {
      resetBtn.classList.remove('hidden');
      resetBtn.classList.add('inline-flex');
    } else {
      resetBtn.classList.add('hidden');
      resetBtn.classList.remove('inline-flex');
    }
  }
}

// ================= VIEW 1: TIMELINE VIEW =================
function renderTimelineView(models) {
  const container = document.getElementById('view-timeline');
  if (!container) return;

  if (models.length === 0) {
    container.innerHTML = `
      <div class="glass-panel p-12 text-center max-w-md mx-auto">
        <span class="text-4xl mb-3 block">🔍</span>
        <h3 class="text-base font-bold text-white mb-1">일치하는 모델이 없습니다</h3>
        <p class="text-xs text-slate-400 mb-4">선택하신 검색어나 필터 조건에 부합하는 출시 모델이 없습니다.</p>
        <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-500 transition-colors" onclick="resetAllFilters()">
          필터 초기화
        </button>
      </div>
    `;
    return;
  }

  // Group by Month
  const months = [...new Set(models.map(m => m.month))].sort();
  let html = '';

  months.forEach(month => {
    const monthModels = models.filter(m => m.month === month);
    const monthNameKo = MONTH_NAMES_KO[month] || month;
    const highlight = MONTH_HIGHLIGHTS[month] || '';

    html += `
      <section class="space-y-6">
        <!-- Month Header Banner -->
        <div class="sticky top-32 z-20 bg-[#090d16]/95 backdrop-blur-md py-3 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"></span>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">${monthNameKo}</h2>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${monthModels.length}개 모델</span>
          </div>
          ${highlight ? `<p class="text-xs text-slate-400 hidden lg:block italic max-w-xl truncate">💡 ${highlight}</p>` : ''}
        </div>

        <!-- Month Spine & Cards -->
        <div class="relative pl-8 sm:pl-12 space-y-6">
          <div class="timeline-spine"></div>
    `;

    // Group by Date within Month
    const dates = [...new Set(monthModels.map(m => m.date))];
    
    dates.forEach(date => {
      const dateModels = monthModels.filter(m => m.date === date);

      html += `
        <div class="relative pt-2">
          <!-- Date Node Marker -->
          <div class="absolute -left-8 sm:-left-12 top-3 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center node-pulse shadow-sm shadow-indigo-500/50 z-10">
            <div class="w-2 h-2 rounded-full bg-indigo-400"></div>
          </div>

          <!-- Date Label Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 mb-3 text-xs font-mono font-semibold text-indigo-300">
            <span>📅</span>
            <span>${date}</span>
            <span class="text-[10px] text-slate-500 font-sans">(${dateModels.length}개)</span>
          </div>

          <!-- Date Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      `;

      dateModels.forEach(model => {
        html += renderTimelineCard(model);
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

// Render Single Timeline Card
function renderTimelineCard(model) {
  const compMeta = COMPANY_META[model.company] || { flag: '🌐', badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30' };
  
  // Category badge styling
  let catBadge = 'bg-slate-800 text-slate-300 border-slate-700';
  if (model.category === 'Omni') catBadge = 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30';
  else if (model.category === 'MLLM') catBadge = 'bg-purple-500/15 text-purple-300 border-purple-500/30';
  else if (model.category === 'Reasoning') catBadge = 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
  else if (model.category === 'LLM') catBadge = 'bg-blue-500/15 text-blue-300 border-blue-500/30';

  // Status badge styling
  let statusBadge = '';
  if (model.status && model.status !== 'GA') {
    statusBadge = `<span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">${model.status}</span>`;
  }

  // Open weights tag
  let openBadge = '';
  if (model.open_weights) {
    openBadge = `<span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1"><span>🔓</span><span>오픈 웨이트</span></span>`;
  }

  // Modalities icons
  const modalIcons = (model.modalities || []).map(m => {
    if (m === 'text') return '📝 텍스트';
    if (m === 'image' || m === 'vision') return '🖼️ 비전';
    if (m === 'audio') return '🎙️ 오디오';
    if (m === 'video') return '🎬 비디오';
    return m;
  });

  return `
    <div class="glass-panel glass-panel-hover p-4 sm:p-5 flex flex-col justify-between border-slate-800/90 cursor-pointer group" onclick="openModelModal('${model.id}')">
      <div>
        <!-- Top Meta Row -->
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <!-- Company Chip -->
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${compMeta.badge}">
            <span>${compMeta.flag || '🌐'}</span>
            <span>${model.company}</span>
          </div>

          <div class="flex items-center gap-1.5 flex-wrap justify-end">
            ${openBadge}
            ${statusBadge}
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded border ${catBadge}">
              ${model.category}
            </span>
          </div>
        </div>

        <!-- Model Name -->
        <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
          <span>${model.name}</span>
        </h3>

        <!-- Family Subtitle -->
        <div class="text-xs text-slate-400 mt-1 flex items-center gap-2">
          <span>패밀리:</span>
          <span class="text-slate-300 font-medium">${model.family}</span>
        </div>

        <!-- Quick Spec Highlights -->
        <div class="mt-3 space-y-1.5 text-xs text-slate-300">
          ${model.parameters ? `
            <div class="flex items-start gap-1.5">
              <span class="text-slate-500 shrink-0">파라미터:</span>
              <span class="font-mono text-indigo-300 font-medium">${model.parameters}</span>
            </div>
          ` : ''}

          ${model.architecture ? `
            <div class="flex items-start gap-1.5">
              <span class="text-slate-500 shrink-0">아키텍처:</span>
              <span class="text-slate-300">${model.architecture}</span>
            </div>
          ` : ''}

          ${modalIcons.length > 0 ? `
            <div class="flex items-start gap-1.5">
              <span class="text-slate-500 shrink-0">모달리티:</span>
              <span class="text-slate-300">${modalIcons.join(' · ')}</span>
            </div>
          ` : ''}

          ${model.context ? `
            <div class="flex items-start gap-1.5">
              <span class="text-slate-500 shrink-0">컨텍스트:</span>
              <span class="font-mono text-emerald-400">${model.context}</span>
            </div>
          ` : ''}
        </div>

        <!-- Focus Tags -->
        ${(model.focus && model.focus.length > 0) ? `
          <div class="mt-3 flex flex-wrap gap-1">
            ${model.focus.slice(0, 4).map(f => `
              <span class="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">${f}</span>
            `).join('')}
            ${model.focus.length > 4 ? `<span class="px-1.5 py-0.5 text-[10px] text-slate-500">+${model.focus.length - 4}</span>` : ''}
          </div>
        ` : ''}
      </div>

      <!-- Bottom Action Link -->
      <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span class="text-slate-500 font-mono text-[11px]">${model.date}</span>
        <span class="text-indigo-400 group-hover:text-indigo-300 font-semibold flex items-center gap-1">
          <span>상세 사양 보기</span>
          <span class="group-hover:translate-x-0.5 transition-transform">→</span>
        </span>
      </div>
    </div>
  `;
}

// ================= VIEW 2: GENERATIONAL FLOW VIEW =================
function renderFlowView() {
  const container = document.getElementById('flow-cards-container');
  if (!container) return;

  let html = '';
  FAMILY_FLOWS.forEach(fam => {
    // Find representative company for this family
    const matchedModel = TIMELINE_DATA.find(m => m.family.toLowerCase().includes(fam.family.toLowerCase()) || m.name.toLowerCase().includes(fam.family.toLowerCase()));
    const company = matchedModel ? matchedModel.company : 'AI Lab';
    const compMeta = COMPANY_META[company] || { flag: '⚡', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' };

    html += `
      <div class="glass-panel p-5 sm:p-6 border-slate-800/90 space-y-4">
        <!-- Family Header -->
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${compMeta.flag || '⚡'}</span>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-white tracking-tight">${fam.family} 계열</h3>
                <span class="text-xs px-2 py-0.5 rounded border ${compMeta.badge}">${company}</span>
              </div>
              <p class="text-xs text-slate-400">2026년 공개된 세대 진화 단계: ${fam.steps.length}개 릴리즈 마일스톤</p>
            </div>
          </div>

          <button class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500/50 transition-all flex items-center gap-1.5" onclick="filterByFamily('${fam.family}', '${company}')">
            <span>🔍</span>
            <span>패밀리 모델 전체 보기</span>
          </button>
        </div>

        <!-- Evolutionary Step Flow -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          ${fam.steps.map((step, idx) => {
            // Find model id if matching
            const matchingModel = TIMELINE_DATA.find(m => m.name.toLowerCase().includes(step.toLowerCase()) || step.toLowerCase().includes(m.name.toLowerCase()));
            const onclickAttr = matchingModel ? `onclick="openModelModal('${matchingModel.id}')"` : '';
            const cursorAttr = matchingModel ? 'cursor-pointer hover:border-indigo-500' : '';

            return `
              <div class="flow-step-node flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 shadow-sm ${cursorAttr}" ${onclickAttr} title="클릭 시 모델 상세">
                <span class="w-5 h-5 rounded-full bg-indigo-600/30 border border-indigo-500/50 text-indigo-300 flex items-center justify-center font-bold text-[10px]">${idx + 1}</span>
                <span class="font-semibold text-white">${step}</span>
                ${matchingModel ? `<span class="text-[10px] text-slate-500">(${matchingModel.date.slice(5)})</span>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= VIEW 3: CATALOG (GRID) VIEW =================
function renderGridView(models) {
  const container = document.getElementById('grid-cards-container');
  if (!container) return;

  if (models.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400">일치하는 모델이 없습니다.</div>`;
    return;
  }

  // Sort
  const sorted = [...models].sort((a, b) => {
    if (state.gridSort === 'date-desc') return b.sortDate.localeCompare(a.sortDate);
    if (state.gridSort === 'date-asc') return a.sortDate.localeCompare(b.sortDate);
    if (state.gridSort === 'name-asc') return a.name.localeCompare(b.name);
    if (state.gridSort === 'company-asc') return a.company.localeCompare(b.company);
    return 0;
  });

  container.innerHTML = sorted.map(model => renderTimelineCard(model)).join('');
}

// ================= VIEW 4: DATA MATRIX VIEW =================
function renderMatrixView(models) {
  const tbody = document.getElementById('matrix-tbody');
  if (!tbody) return;

  if (models.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-8 text-slate-500">일치하는 데이터가 없습니다.</td></tr>`;
    return;
  }

  // Sort
  const { field, order } = state.matrixSort;
  const sorted = [...models].sort((a, b) => {
    let valA = a[field] || '';
    let valB = b[field] || '';
    if (field === 'date') {
      valA = a.sortDate;
      valB = b.sortDate;
    }
    const cmp = valA.toString().localeCompare(valB.toString());
    return order === 'asc' ? cmp : -cmp;
  });

  tbody.innerHTML = sorted.map(m => {
    const comp = COMPANY_META[m.company] || { flag: '🌐' };
    const isOpen = m.open_weights ? '<span class="text-emerald-400 font-semibold">오픈 (Open)</span>' : '<span class="text-slate-500">독점 (Proprietary)</span>';
    
    return `
      <tr class="hover:bg-slate-800/40 transition-colors cursor-pointer" onclick="openModelModal('${m.id}')">
        <td class="px-4 py-3 font-mono text-slate-400 whitespace-nowrap">${m.date}</td>
        <td class="px-4 py-3 font-bold text-white whitespace-nowrap">${m.name}</td>
        <td class="px-4 py-3 whitespace-nowrap">
          <span class="inline-flex items-center gap-1.5">
            <span>${comp.flag || '🌐'}</span>
            <span>${m.company}</span>
          </span>
        </td>
        <td class="px-4 py-3 text-slate-400 whitespace-nowrap">${m.family}</td>
        <td class="px-4 py-3 text-slate-300 whitespace-nowrap">${m.type}</td>
        <td class="px-4 py-3 text-slate-300 font-mono text-[11px]">${m.parameters || m.architecture || '-'}</td>
        <td class="px-4 py-3">
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${m.status === 'GA' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
            ${m.status || 'GA'}
          </span>
        </td>
        <td class="px-4 py-3">${isOpen}</td>
        <td class="px-4 py-3 text-right">
          <button class="text-indigo-400 hover:text-indigo-300 font-semibold">보기 →</button>
        </td>
      </tr>
    `;
  }).join('');
}

// ================= VIEW 5: SCOPE & UNCONFIRMED VIEW =================
function renderScopeView() {
  const container = document.getElementById('unconfirmed-container');
  if (!container) return;

  container.innerHTML = UNCONFIRMED_DATA.map(item => `
    <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
      <div class="flex items-center gap-2">
        <span class="text-amber-400 font-bold text-xs sm:text-sm">⚠️ ${item.name}</span>
      </div>
      <p class="text-xs text-slate-400 leading-relaxed">${item.description}</p>
    </div>
  `).join('');
}

// ================= MODEL INSPECTOR MODAL =================
function openModelModal(modelId) {
  const model = TIMELINE_DATA.find(m => m.id === modelId);
  if (!model) return;

  state.activeModalId = modelId;
  const modal = document.getElementById('model-modal');
  const card = document.getElementById('modal-content-card');
  const compMeta = COMPANY_META[model.company] || { flag: '🌐', badge: 'bg-slate-800 text-slate-300' };

  // Format modalities
  const modalTags = (model.modalities || []).map(m => `
    <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
      ${m === 'text' ? '📝 텍스트 (Text)' : m === 'image' || m === 'vision' ? '🖼️ 비전 (Image/Vision)' : m === 'audio' ? '🎙️ 오디오 (Audio)' : m === 'video' ? '🎬 비디오 (Video)' : m}
    </span>
  `).join('');

  // Format focus
  const focusTags = (model.focus || []).map(f => `
    <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/60">
      ${f}
    </span>
  `).join('');

  // Format variants
  const variantsHtml = (model.variants && model.variants.length > 0) ? `
    <div class="space-y-1">
      <span class="text-xs font-semibold text-slate-400 block">릴리즈 변형 (Variants):</span>
      <div class="flex flex-wrap gap-1.5">
        ${model.variants.map(v => `<span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700 font-mono">${v}</span>`).join('')}
      </div>
    </div>
  ` : '';

  card.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-1 rounded-md text-xs font-semibold border ${compMeta.badge}">
            ${compMeta.flag || '🌐'} ${model.company}
          </span>
          <span class="px-2 py-0.5 text-xs font-bold rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${model.category}
          </span>
          ${model.status && model.status !== 'GA' ? `
            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ${model.status}
            </span>
          ` : ''}
          ${model.open_weights ? `
            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              🔓 오픈 웨이트
            </span>
          ` : ''}
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${model.name}</h2>
        <div class="mt-1 flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span>📅 출시일: <strong class="text-slate-200">${model.date}</strong></span>
          <span>•</span>
          <span>계열: <strong class="text-slate-200">${model.family}</strong></span>
        </div>
      </div>
      <button class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors text-lg" onclick="closeModelModal()">✕</button>
    </div>

    <!-- Specifications Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
      
      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
        <span class="text-slate-500 font-medium block">파라미터 규격 (Parameters)</span>
        <span class="text-sm font-bold font-mono text-indigo-300">${model.parameters || '공식 세부 수치 미공개'}</span>
      </div>

      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
        <span class="text-slate-500 font-medium block">아키텍처 (Architecture)</span>
        <span class="text-sm font-semibold text-slate-200">${model.architecture || '트랜스포머 기반 파운데이션 모델'}</span>
      </div>

      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
        <span class="text-slate-500 font-medium block">컨텍스트 윈도우 (Context Window)</span>
        <span class="text-sm font-bold font-mono text-emerald-400">${model.context || '표준 컨텍스트 지원'}</span>
      </div>

      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
        <span class="text-slate-500 font-medium block">오픈 웨이트 & 라이선스</span>
        <span class="text-sm font-semibold text-slate-200">
          ${model.open_weights ? `Yes (${model.license || '오픈 소스 라이선스'})` : 'Proprietary (API / 서비스 전용)'}
        </span>
      </div>

      ${model.languages ? `
        <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 col-span-full">
          <span class="text-slate-500 font-medium block">지원 언어 (Languages)</span>
          <span class="text-sm font-medium text-slate-200">${model.languages}</span>
        </div>
      ` : ''}

      ${model.availability ? `
        <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 col-span-full">
          <span class="text-slate-500 font-medium block">접근 권한 (Availability)</span>
          <span class="text-sm font-medium text-amber-300">${model.availability}</span>
        </div>
      ` : ''}

    </div>

    <!-- Modalities Section -->
    ${modalTags ? `
      <div class="space-y-2">
        <span class="text-xs font-semibold text-slate-400 block">지원 모달리티 (Modalities):</span>
        <div class="flex flex-wrap gap-2">${modalTags}</div>
      </div>
    ` : ''}

    <!-- Capabilities / Focus Section -->
    ${focusTags ? `
      <div class="space-y-2">
        <span class="text-xs font-semibold text-slate-400 block">주요 핵심 역량 및 포커스 (Target Focus):</span>
        <div class="flex flex-wrap gap-1.5">${focusTags}</div>
      </div>
    ` : ''}

    <!-- Variants Section -->
    ${variantsHtml}

    <!-- Note Section -->
    ${model.note ? `
      <div class="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 leading-relaxed">
        <strong class="font-semibold text-indigo-300 block mb-1">💡 비고 및 특이사항 (Notes):</strong>
        <span>${model.note}</span>
      </div>
    ` : ''}

    <!-- Modal Footer Actions -->
    <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5" onclick="copyCitation('${model.id}')">
          <span>📋</span>
          <span id="copy-citation-text">마크다운 인용 복사</span>
        </button>
        <button class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5" onclick="copyJson('${model.id}')">
          <span>{ }</span>
          <span id="copy-json-text">JSON 복사</span>
        </button>
      </div>

      <button class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors" onclick="closeModelModal()">
        닫기
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModelModal() {
  const modal = document.getElementById('model-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  state.activeModalId = null;
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'model-modal') {
    closeModelModal();
  }
}

// Copy Citation / JSON
function copyCitation(modelId) {
  const model = TIMELINE_DATA.find(m => m.id === modelId);
  if (!model) return;
  const citation = `- **${model.name}** (${model.company}, ${model.date}) - ${model.type}${model.parameters ? ` [${model.parameters}]` : ''}`;
  navigator.clipboard.writeText(citation).then(() => {
    const el = document.getElementById('copy-citation-text');
    if (el) {
      el.textContent = '복사 완료!';
      setTimeout(() => el.textContent = '마크다운 인용 복사', 2000);
    }
  });
}

function copyJson(modelId) {
  const model = TIMELINE_DATA.find(m => m.id === modelId);
  if (!model) return;
  navigator.clipboard.writeText(JSON.stringify(model, null, 2)).then(() => {
    const el = document.getElementById('copy-json-text');
    if (el) {
      el.textContent = '복사 완료!';
      setTimeout(() => el.textContent = 'JSON 복사', 2000);
    }
  });
}

// ================= FILTER HANDLERS =================
function handleSearch(val) {
  state.searchQuery = val.trim();
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    if (state.searchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderAllViews();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  handleSearch('');
}

function handleFilterCompany(val) {
  state.selectedCompany = val;
  renderAllViews();
}

function handleFilterCategory(val) {
  state.selectedCategory = val;
  renderAllViews();
}

function handleFilterStatus(val) {
  state.selectedStatus = val;
  renderAllViews();
}

function handleFilterMonth(month) {
  state.selectedMonth = month;
  // Update month chips active state
  document.querySelectorAll('.month-chip').forEach(chip => {
    if (chip.getAttribute('data-month') === month) {
      chip.classList.add('active', 'bg-indigo-600', 'text-white');
      chip.classList.remove('bg-slate-900', 'text-slate-400');
    } else {
      chip.classList.remove('active', 'bg-indigo-600', 'text-white');
      chip.classList.add('bg-slate-900', 'text-slate-400');
    }
  });
  renderAllViews();
}

function toggleOpenWeights() {
  state.openWeightsOnly = !state.openWeightsOnly;
  const btn = document.getElementById('btn-open-weights');
  const dot = document.getElementById('open-weights-dot');
  if (state.openWeightsOnly) {
    btn.classList.add('border-emerald-500', 'text-emerald-300', 'bg-emerald-500/10');
    btn.classList.remove('border-slate-800', 'text-slate-400', 'bg-slate-900');
    dot.classList.add('bg-emerald-400');
    dot.classList.remove('bg-slate-600');
  } else {
    btn.classList.remove('border-emerald-500', 'text-emerald-300', 'bg-emerald-500/10');
    btn.classList.add('border-slate-800', 'text-slate-400', 'bg-slate-900');
    dot.classList.remove('bg-emerald-400');
    dot.classList.add('bg-slate-600');
  }
  renderAllViews();
}

function filterByFamily(family, company) {
  state.searchQuery = family;
  const input = document.getElementById('search-input');
  if (input) input.value = family;
  switchView('timeline');
  renderAllViews();
}

function resetAllFilters() {
  state.searchQuery = '';
  state.selectedCompany = 'all';
  state.selectedCategory = 'all';
  state.selectedStatus = 'all';
  state.selectedMonth = 'all';
  state.openWeightsOnly = false;

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.classList.add('hidden');

  const compSelect = document.getElementById('filter-company');
  if (compSelect) compSelect.value = 'all';

  const catSelect = document.getElementById('filter-category');
  if (catSelect) catSelect.value = 'all';

  const statusSelect = document.getElementById('filter-status');
  if (statusSelect) statusSelect.value = 'all';

  const openBtn = document.getElementById('btn-open-weights');
  const openDot = document.getElementById('open-weights-dot');
  if (openBtn) {
    openBtn.classList.remove('border-emerald-500', 'text-emerald-300', 'bg-emerald-500/10');
    openBtn.classList.add('border-slate-800', 'text-slate-400', 'bg-slate-900');
  }
  if (openDot) {
    openDot.classList.remove('bg-emerald-400');
    openDot.classList.add('bg-slate-600');
  }

  handleFilterMonth('all');
}

function handleGridSort(val) {
  state.gridSort = val;
  renderGridView(getFilteredModels());
}

function sortMatrix(field) {
  if (state.matrixSort.field === field) {
    state.matrixSort.order = state.matrixSort.order === 'asc' ? 'desc' : 'asc';
  } else {
    state.matrixSort.field = field;
    state.matrixSort.order = 'desc';
  }
  renderMatrixView(getFilteredModels());
}

// Export CSV
function exportDataAsCSV() {
  const models = getFilteredModels();
  const headers = ['ID', 'Date', 'Name', 'Company', 'Family', 'Type', 'Category', 'Status', 'Parameters', 'Architecture', 'OpenWeights', 'License', 'Context'];
  const rows = models.map(m => [
    m.id,
    `"${m.date}"`,
    `"${m.name.replace(/"/g, '""')}"`,
    `"${m.company.replace(/"/g, '""')}"`,
    `"${m.family.replace(/"/g, '""')}"`,
    `"${m.type.replace(/"/g, '""')}"`,
    `"${m.category}"`,
    `"${m.status}"`,
    `"${(m.parameters || '').replace(/"/g, '""')}"`,
    `"${(m.architecture || '').replace(/"/g, '""')}"`,
    m.open_weights ? 'Yes' : 'No',
    `"${(m.license || '').replace(/"/g, '""')}"`,
    `"${(m.context || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `llm-timeline-2026-${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModelModal();
    }
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
      e.preventDefault();
      const input = document.getElementById('search-input');
      if (input) input.focus();
    }
  });
}

function checkUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (['timeline', 'flow', 'grid', 'matrix', 'scope'].includes(hash)) {
    switchView(hash);
  } else if (hash.startsWith('model-')) {
    openModelModal(hash);
  }
}
