// LLM Timeline 2026 - Minimal Chronological Horizontal Timeline

let searchQuery = '';
let activeModalId = null;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  setupScrollInteractions();
});

// Get filtered models
function getFilteredModels() {
  if (!searchQuery) return TIMELINE_DATA;
  const q = searchQuery.toLowerCase();
  return TIMELINE_DATA.filter(m => {
    const text = [
      m.name,
      m.company,
      m.family,
      m.parameters,
      m.architecture,
      m.type,
      m.date
    ].join(' ').toLowerCase();
    return text.includes(q);
  });
}

// Render Horizontal Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  const models = getFilteredModels();

  if (models.length === 0) {
    container.innerHTML = `
      <div class="w-full text-center py-20 text-gray-500 text-sm">
        검색 결과와 일치하는 모델이 없습니다.
      </div>
    `;
    return;
  }

  // Group models by Date
  const dateGroups = {};
  models.forEach(m => {
    if (!dateGroups[m.date]) {
      dateGroups[m.date] = [];
    }
    dateGroups[m.date].push(m);
  });

  const dates = Object.keys(dateGroups);

  // Build HTML
  let html = `
    <!-- Continuous Horizontal Line (가로줄) -->
    <div class="timeline-axis-line"></div>
    <div class="flex items-start gap-8 relative z-10">
  `;

  dates.forEach(date => {
    const groupModels = dateGroups[date];
    const month = date.slice(0, 7);

    html += `
      <div class="date-column flex flex-col items-center flex-shrink-0 w-72" id="date-col-${date}" data-month="${month}">
        <!-- Node on the horizontal line -->
        <div class="station-node" title="${date}"></div>

        <!-- Date Header -->
        <div class="mt-4 text-center">
          <span class="text-xs font-mono font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
            ${date}
          </span>
          <span class="text-[11px] text-gray-400 block mt-0.5">
            ${groupModels.length}개 모델
          </span>
        </div>

        <!-- Model Cards for this date -->
        <div class="mt-4 w-full space-y-3">
          ${groupModels.map(m => renderModelCard(m)).join('')}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Render Single Model Card
function renderModelCard(m) {
  const meta = COMPANY_META[m.company] || { flag: '🌐' };

  return `
    <div class="model-card cursor-pointer" onclick="openModal('${m.id}')">
      <!-- Company & Type -->
      <div class="flex items-center justify-between gap-2 mb-1.5">
        <span class="text-xs text-gray-600 font-medium truncate">
          ${meta.flag || ''} ${m.company}
        </span>
        <span class="clean-tag text-[10px]">
          ${m.category || m.type}
        </span>
      </div>

      <!-- Model Name -->
      <h3 class="text-sm font-bold text-gray-900 leading-snug">
        ${m.name}
      </h3>

      <!-- Parameters or Architecture -->
      ${m.parameters ? `
        <div class="mt-2 text-xs text-gray-600 font-mono">
          <span class="text-gray-400">파라미터:</span> ${m.parameters}
        </div>
      ` : ''}

      ${m.architecture ? `
        <div class="mt-1 text-xs text-gray-600">
          <span class="text-gray-400">아키텍처:</span> ${m.architecture}
        </div>
      ` : ''}

      <!-- Status & Open Weights -->
      <div class="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
        <span>${m.family}</span>
        ${m.open_weights ? `<span class="text-emerald-700 font-medium">오픈 웨이트</span>` : m.status !== 'GA' ? `<span class="text-amber-700 font-medium">${m.status}</span>` : `<span class="text-gray-400">상세보기 →</span>`}
      </div>
    </div>
  `;
}

// Setup Horizontal Scroll Interactions (Mouse wheel & Drag)
function setupScrollInteractions() {
  const container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  // Convert vertical mouse wheel to horizontal scroll
  container.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5;
    }
  }, { passive: false });

  // Drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    // Avoid interfering with card clicks
    if (e.target.closest('.model-card') || e.target.closest('button')) return;
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

// Left / Right Scroll Buttons
function scrollTimeline(direction) {
  const container = document.getElementById('timeline-scroll-container');
  if (!container) return;
  const amount = 560; // scroll ~2 date columns
  container.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

// Fast Jump to Month
function jumpToMonth(month) {
  const container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  // Find first column matching month
  const targetCol = container.querySelector(`[data-month="${month}"]`);
  if (targetCol) {
    targetCol.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }
}

// Search
function handleSearch(val) {
  searchQuery = val.trim();
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    if (searchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderTimeline();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  handleSearch('');
}

// Modal View
function openModal(id) {
  const m = TIMELINE_DATA.find(item => item.id === id);
  if (!m) return;

  activeModalId = id;
  const modal = document.getElementById('model-modal');
  const card = document.getElementById('modal-content-card');
  const meta = COMPANY_META[m.company] || { flag: '🌐' };

  card.innerHTML = `
    <div class="flex items-start justify-between gap-4 pb-3 border-b border-gray-200">
      <div>
        <div class="text-xs text-gray-500 font-medium mb-1">
          ${meta.flag || ''} ${m.company} · ${m.family}
        </div>
        <h2 class="text-xl font-bold text-gray-900">${m.name}</h2>
        <div class="text-xs font-mono text-gray-500 mt-1">출시일: ${m.date}</div>
      </div>
      <button onclick="closeModal()" class="text-gray-400 hover:text-black p-1 text-base">✕</button>
    </div>

    <div class="space-y-3 text-xs">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-gray-50 p-2.5 rounded border border-gray-200">
          <span class="text-gray-500 block">유형</span>
          <span class="font-medium text-gray-900">${m.type}</span>
        </div>
        <div class="bg-gray-50 p-2.5 rounded border border-gray-200">
          <span class="text-gray-500 block">상태</span>
          <span class="font-medium text-gray-900">${m.status || 'GA'}</span>
        </div>
      </div>

      ${m.parameters ? `
        <div class="bg-gray-50 p-2.5 rounded border border-gray-200">
          <span class="text-gray-500 block">파라미터 규격</span>
          <span class="font-mono font-bold text-gray-900">${m.parameters}</span>
        </div>
      ` : ''}

      ${m.architecture ? `
        <div class="bg-gray-50 p-2.5 rounded border border-gray-200">
          <span class="text-gray-500 block">아키텍처</span>
          <span class="font-medium text-gray-900">${m.architecture}</span>
        </div>
      ` : ''}

      ${m.context ? `
        <div class="bg-gray-50 p-2.5 rounded border border-gray-200">
          <span class="text-gray-500 block">컨텍스트 윈도우</span>
          <span class="font-mono text-gray-900">${m.context}</span>
        </div>
      ` : ''}

      ${(m.modalities && m.modalities.length > 0) ? `
        <div>
          <span class="text-gray-500 block mb-1">지원 모달리티</span>
          <div class="flex flex-wrap gap-1">
            ${m.modalities.map(mod => `<span class="clean-tag">${mod}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${(m.focus && m.focus.length > 0) ? `
        <div>
          <span class="text-gray-500 block mb-1">주요 역량 / 포커스</span>
          <div class="flex flex-wrap gap-1">
            ${m.focus.map(f => `<span class="clean-tag">${f}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${m.note ? `
        <div class="bg-gray-50 p-3 rounded border border-gray-200 text-gray-700 leading-relaxed">
          <span class="font-bold text-gray-900 block mb-0.5">비고:</span>
          ${m.note}
        </div>
      ` : ''}
    </div>

    <div class="pt-3 border-t border-gray-200 flex items-center justify-between">
      <button onclick="copyCitation('${m.id}')" class="px-3 py-1.5 rounded border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50">
        <span id="btn-copy-text">인용 복사</span>
      </button>
      <button onclick="closeModal()" class="px-4 py-1.5 rounded bg-black text-white text-xs font-semibold hover:bg-gray-800">
        닫기
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('model-modal');
  if (modal) modal.classList.add('hidden');
  activeModalId = null;
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'model-modal') closeModal();
}

function copyCitation(id) {
  const m = TIMELINE_DATA.find(item => item.id === id);
  if (!m) return;
  const citation = `- **${m.name}** (${m.company}, ${m.date}) - ${m.type}${m.parameters ? ` [${m.parameters}]` : ''}`;
  navigator.clipboard.writeText(citation).then(() => {
    const el = document.getElementById('btn-copy-text');
    if (el) {
      el.textContent = '복사됨!';
      setTimeout(() => el.textContent = '인용 복사', 2000);
    }
  });
}

// Close on Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search-input')?.focus();
  }
});
