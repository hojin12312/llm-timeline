// LLM Timeline 2026 - Minimalist Chronological Horizontal Timeline & Model Comparison

var searchQuery = '';
var activeModalId = null;
var sortOrder = 'desc'; // Default: Newest first (9월 -> 1월)
var compareList = [];   // Array of up to 2 model IDs: [idA, idB]
var activeCompareA = null;
var activeCompareB = null;

// Initialize robustly regardless of load timing
function initApp() {
  if (typeof TIMELINE_DATA === 'undefined') {
    console.error('TIMELINE_DATA is not loaded.');
    return;
  }
  var sub = document.getElementById('header-subtitle');
  if (sub) {
    sub.textContent = '2026년 1월 1일 ~ 9월 4일 주요 파운데이션 모델 ' + TIMELINE_DATA.length + '개 출시 순서';
  }
  renderMonthButtons();
  renderTimeline();
  setupScrollInteractions();
  updateCompareDock();

  // Check URL hash for direct comparison link or model modal
  if (window.location.hash.indexOf('#compare') !== -1) {
    var hashStr = window.location.hash.replace('#compare', '').replace(/^=/, '');
    var parts = hashStr ? hashStr.split(',') : [];
    if (parts.length >= 2 && parts[0] && parts[1]) {
      openCompareModal(parts[0], parts[1]);
    } else {
      openCompareModal();
    }
  } else if (window.location.hash.indexOf('#model=') !== -1) {
    var modelId = window.location.hash.replace('#model=', '');
    if (modelId) {
      openModal(modelId);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Render Month Buttons in sync with sort order
function renderMonthButtons() {
  var container = document.querySelector('.month-buttons');
  if (!container) return;
  var months = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09'];
  if (sortOrder === 'desc') {
    months.reverse();
  }
  var html = '<button class="month-btn active" data-month="all" onclick="jumpToMonth(\'all\')">전체 (' + TIMELINE_DATA.length + ')</button>';
  months.forEach(function(m) {
    var monthNum = parseInt(m.slice(5), 10);
    html += '<button class="month-btn" data-month="' + m + '" onclick="jumpToMonth(\'' + m + '\')">' + monthNum + '월</button>';
  });
  container.innerHTML = html;
}

// Toggle Sort Order (최신순 ⇄ 과거순)
function toggleSortOrder() {
  sortOrder = (sortOrder === 'desc') ? 'asc' : 'desc';
  var icon = document.getElementById('sort-toggle-icon');
  var label = document.getElementById('sort-toggle-label');
  if (label) {
    label.textContent = (sortOrder === 'desc') ? '최신순 (9월→1월)' : '과거순 (1월→9월)';
  }
  if (icon) {
    icon.textContent = (sortOrder === 'desc') ? '↓' : '↑';
  }
  renderMonthButtons();
  renderTimeline();
  var container = document.getElementById('timeline-scroll-container');
  if (container) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

// Get filtered models
function getFilteredModels() {
  if (!searchQuery) return TIMELINE_DATA;
  var q = searchQuery.toLowerCase();
  return TIMELINE_DATA.filter(function(m) {
    var aliases = '';
    if (m.company.includes('LG') || m.family.includes('EXAONE')) aliases += ' lg 엘지 exaone 엑사원';
    if (m.company.includes('SK') || m.family.includes('A.X')) aliases += ' sk skt 에스케이 a.x 에이닷';
    if (m.company.includes('NAVER') || m.name.includes('HyperCLOVA')) aliases += ' naver 네이버 clova 클로바';
    if (m.company.includes('Upstage') || m.name.includes('Solar')) aliases += ' upstage 업스테이지 solar 솔라';
    if (m.company.includes('Tencent') || m.family.includes('Hunyuan')) aliases += ' tencent 텐센트 hunyuan 훈위안 혼원 hy4 hy3';

    var text = [
      m.name,
      m.company,
      m.family,
      m.parameters,
      m.architecture,
      m.type,
      m.date,
      m.note || '',
      aliases
    ].join(' ').toLowerCase();
    return text.includes(q);
  });
}

// Render Horizontal Timeline
function renderTimeline() {
  var track = document.getElementById('timeline-track-inner');
  if (!track) return;

  var models = getFilteredModels();

  if (models.length === 0) {
    track.innerHTML = '<div style="padding: 60px; color: #6b7280; font-size: 14px;">일치하는 검색 결과가 없습니다.</div>';
    return;
  }

  // Group models by Date
  var dateGroups = {};
  models.forEach(function(m) {
    if (!dateGroups[m.date]) {
      dateGroups[m.date] = [];
    }
    dateGroups[m.date].push(m);
  });

  // Sort dates by sortOrder (desc: 9월 -> 1월 / asc: 1월 -> 9월)
  var dates = Object.keys(dateGroups);
  dates.sort(function(a, b) {
    return (sortOrder === 'desc') ? b.localeCompare(a) : a.localeCompare(b);
  });

  // Build HTML: .timeline-axis-line spans the length of .timeline-track
  var html = '<div class="timeline-axis-line"></div>';

  dates.forEach(function(date) {
    var groupModels = dateGroups[date];
    var month = date.slice(0, 7);

    html += '<div class="date-column" id="date-col-' + date + '" data-month="' + month + '">';
    html += '  <div class="station-node" title="' + date + '"></div>';
    html += '  <div class="date-badge">' + date + '</div>';
    html += '  <div class="date-model-count">' + groupModels.length + '개 모델</div>';
    html += '  <div class="cards-stack">';

    groupModels.forEach(function(m) {
      html += renderModelCard(m);
    });

    html += '  </div>';
    html += '</div>';
  });

  track.innerHTML = html;
}

// Render Single Model Card
function renderModelCard(m) {
  var meta = (typeof COMPANY_META !== 'undefined' && COMPANY_META[m.company]) ? COMPANY_META[m.company] : { flag: '🌐' };
  var isCompared = compareList.includes(m.id);

  var html = '<div class="model-card" onclick="openModal(\'' + m.id + '\')">';
  
  // Top row: Company & Category & Compare Toggle Button
  html += '<div class="card-top">';
  html += '  <span class="card-company">' + (meta.flag ? meta.flag + ' ' : '') + m.company + '</span>';
  html += '  <div style="display: flex; align-items: center; gap: 6px;">';
  html += '    <span class="card-tag">' + (m.category || m.type) + '</span>';
  html += '    <button class="btn-card-compare ' + (isCompared ? 'active' : '') + '" onclick="toggleCompareItem(\'' + m.id + '\', event)" title="비교 목록에 추가/제거">' + (isCompared ? '✓ 선택됨' : '+ 비교') + '</button>';
  html += '  </div>';
  html += '</div>';

  // Title
  html += '<div class="card-title">' + m.name + '</div>';

  // Parameters & Architecture if present
  if (m.parameters || m.architecture) {
    html += '<div class="card-meta">';
    if (m.parameters) {
      html += '<div><span>파라미터: ' + m.parameters + '</span></div>';
    }
    if (m.architecture) {
      html += '<div><span>아키텍처: ' + m.architecture + '</span></div>';
    }
    html += '</div>';
  }

  // Bottom row: Family & Status / Open
  html += '<div class="card-bottom">';
  html += '  <span>' + m.family + '</span>';
  if (m.open_weights) {
    html += '  <span class="card-open-weights">오픈 웨이트</span>';
  } else if (m.status && m.status !== 'GA') {
    html += '  <span>' + m.status + '</span>';
  } else {
    html += '  <span>상세보기 →</span>';
  }
  html += '</div>';

  html += '</div>';
  return html;
}

// Setup Horizontal Scroll Interactions (Smoother & Faster Physics)
function setupScrollInteractions() {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  var targetScrollLeft = container.scrollLeft;
  var isAnimating = false;

  // Smooth lerp animation loop
  function smoothScrollLoop() {
    var diff = targetScrollLeft - container.scrollLeft;
    if (Math.abs(diff) > 0.5) {
      container.scrollLeft += diff * 0.18; // smooth easing
      requestAnimationFrame(smoothScrollLoop);
      isAnimating = true;
    } else {
      container.scrollLeft = targetScrollLeft;
      isAnimating = false;
    }
  }

  // Mouse wheel horizontal scroll with momentum
  container.addEventListener('wheel', function(e) {
    var delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (delta !== 0) {
      e.preventDefault();
      var multiplier = (e.deltaMode === 1) ? 45 : 2.2;
      var maxScroll = container.scrollWidth - container.clientWidth;
      targetScrollLeft = Math.max(0, Math.min(maxScroll, targetScrollLeft + delta * multiplier));
      
      if (!isAnimating) {
        smoothScrollLoop();
      }
    }
  }, { passive: false });

  // Sync target position on native scroll events (drag / touch)
  container.addEventListener('scroll', function() {
    if (!isAnimating) {
      targetScrollLeft = container.scrollLeft;
    }
  });

  // Drag-to-scroll
  var isDown = false;
  var startX;
  var startScrollLeft;

  container.addEventListener('mousedown', function(e) {
    if (e.target.closest('.model-card') || e.target.closest('button')) return;
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    startScrollLeft = container.scrollLeft;
    targetScrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', function() {
    isDown = false;
  });

  container.addEventListener('mouseup', function() {
    isDown = false;
  });

  container.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1.8;
    var maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = Math.max(0, Math.min(maxScroll, startScrollLeft - walk));
    targetScrollLeft = container.scrollLeft;
  });
}

// Navigation Controls (Buttons)
function scrollTimeline(direction) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;
  var amount = 750;
  container.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

function jumpToMonth(month) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  document.querySelectorAll('.month-btn').forEach(function(btn) {
    if (btn.getAttribute('data-month') === month) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (month === 'all') {
    container.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  var targetCol = container.querySelector('[data-month="' + month + '"]');
  if (targetCol) {
    targetCol.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }
}

// Search
function handleSearch(val) {
  searchQuery = val.trim();
  var clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    if (searchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderTimeline();
}

function clearSearch() {
  var input = document.getElementById('search-input');
  if (input) input.value = '';
  handleSearch('');
}

// Modal (Single Model Details)
function openModal(id) {
  var m = TIMELINE_DATA.find(function(item) { return item.id === id; });
  if (!m) return;

  activeModalId = id;
  var modal = document.getElementById('model-modal');
  var card = document.getElementById('modal-content-card');
  var meta = (typeof COMPANY_META !== 'undefined' && COMPANY_META[m.company]) ? COMPANY_META[m.company] : { flag: '🌐' };

  var html = '';
  html += '<div class="modal-header">';
  html += '  <div>';
  html += '    <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">' + (meta.flag ? meta.flag + ' ' : '') + m.company + ' · ' + m.family + '</div>';
  html += '    <h2 style="font-size: 18px; font-weight: 700; color: #111827;">' + m.name + '</h2>';
  html += '    <div style="font-size: 12px; font-family: monospace; color: #6b7280; margin-top: 2px;">출시일: ' + m.date + '</div>';
  html += '  </div>';
  html += '  <button class="modal-close" onclick="closeModal()">✕</button>';
  html += '</div>';

  html += '<div class="modal-body">';
  
  html += '  <div class="spec-grid">';
  html += '    <div class="spec-item"><span class="spec-label">유형</span><div class="spec-value">' + m.type + '</div></div>';
  html += '    <div class="spec-item"><span class="spec-label">상태</span><div class="spec-value">' + (m.status || 'GA') + '</div></div>';
  html += '  </div>';

  if (m.parameters) {
    html += '  <div class="spec-item"><span class="spec-label">파라미터 규격</span><div class="spec-value" style="font-family: monospace;">' + m.parameters + '</div></div>';
  }

  if (m.architecture) {
    html += '  <div class="spec-item"><span class="spec-label">아키텍처</span><div class="spec-value">' + m.architecture + '</div></div>';
  }

  if (m.context) {
    html += '  <div class="spec-item"><span class="spec-label">컨텍스트 윈도우</span><div class="spec-value" style="font-family: monospace;">' + m.context + '</div></div>';
  }

  if (m.open_weights !== undefined) {
    html += '  <div class="spec-item"><span class="spec-label">오픈 웨이트 여부</span><div class="spec-value">' + (m.open_weights ? '예 (Open Weights)' : '아니오 (API / 폐쇄형)') + '</div></div>';
  }

  if (m.modalities && m.modalities.length > 0) {
    html += '  <div><span class="spec-label" style="margin-bottom: 4px;">지원 모달리티</span><div>';
    m.modalities.forEach(function(mod) {
      html += '<span class="card-tag" style="margin-right: 4px; display: inline-block; margin-bottom: 4px;">' + mod + '</span>';
    });
    html += '  </div></div>';
  }

  if (m.focus && m.focus.length > 0) {
    html += '  <div><span class="spec-label" style="margin-bottom: 4px;">주요 역량 / 포커스</span><div>';
    m.focus.forEach(function(f) {
      html += '<span class="card-tag" style="margin-right: 4px; display: inline-block; margin-bottom: 4px;">' + f + '</span>';
    });
    html += '  </div></div>';
  }

  // Benchmark scores section
  if (m.benchmarks && Object.keys(m.benchmarks).length > 0) {
    html += '  <div style="margin-top: 8px; border-top: 1px solid #e5e7eb; padding-top: 12px;">';
    html += '    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">';
    html += '      <span class="spec-label" style="font-weight: 700; color: #111827; font-size: 12px;">📊 주요 공개 벤치마크 점수</span>';
    html += '      <span style="font-size: 11px; color: #6b7280;">공식 보고서 / 리더보드 기준</span>';
    html += '    </div>';
    html += '    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">';
    Object.entries(m.benchmarks).forEach(function(entry) {
      var key = entry[0];
      var val = entry[1];
      var isElo = key === 'Chatbot Arena ELO';
      html += '      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 8px 10px;">';
      html += '        <div style="font-size: 11px; color: #6b7280;">' + key + '</div>';
      html += '        <div style="font-size: 15px; font-weight: 700; color: #111827; font-family: monospace; margin-top: 2px;">' + val + (isElo ? ' ELO' : '%') + '</div>';
      html += '      </div>';
    });
    html += '    </div>';
    html += '  </div>';
  }

  if (m.note) {
    html += '  <div class="modal-note"><strong>비고:</strong> ' + m.note + '</div>';
  }

  html += '</div>';

  html += '<div class="modal-footer">';
  html += '  <div style="display: flex; gap: 8px;">';
  html += '    <button class="btn-secondary" onclick="addModelToCompare(\'' + m.id + '\')">⚖️ 이 모델 비교함 담기</button>';
  html += '    <button class="btn-secondary" onclick="copyCitation(\'' + m.id + '\')"><span id="btn-copy-text">인용 복사</span></button>';
  html += '  </div>';
  html += '  <button class="btn-primary" onclick="closeModal()">닫기</button>';
  html += '</div>';

  card.innerHTML = html;
  modal.classList.remove('hidden');
}

function closeModal() {
  var modal = document.getElementById('model-modal');
  if (modal) modal.classList.add('hidden');
  activeModalId = null;
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'model-modal') closeModal();
}

function copyCitation(id) {
  var m = TIMELINE_DATA.find(function(item) { return item.id === id; });
  if (!m) return;
  var citation = '- **' + m.name + '** (' + m.company + ', ' + m.date + ') - ' + m.type + (m.parameters ? ' [' + m.parameters + ']' : '');
  navigator.clipboard.writeText(citation).then(function() {
    var el = document.getElementById('btn-copy-text');
    if (el) {
      el.textContent = '복사됨!';
      setTimeout(function() { el.textContent = '인용 복사'; }, 2000);
    }
  });
}

// -------------------------------------------------------------
// Comparison System (Side-by-Side Model Comparison)
// -------------------------------------------------------------

// Toggle compare item from card or modal
function toggleCompareItem(id, event) {
  if (event) {
    event.stopPropagation();
  }
  var idx = compareList.indexOf(id);
  if (idx >= 0) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 2) {
      compareList.shift(); // keep max 2, roll over
    }
    compareList.push(id);
  }
  updateCompareDock();
  renderTimeline(); // re-render cards to sync button active states
}

function addModelToCompare(id) {
  if (!compareList.includes(id)) {
    if (compareList.length >= 2) {
      compareList.shift();
    }
    compareList.push(id);
  }
  updateCompareDock();
  closeModal();
  if (compareList.length === 2) {
    openCompareModal(compareList[0], compareList[1]);
  } else {
    openCompareModal(id);
  }
}

function clearCompareList() {
  compareList = [];
  updateCompareDock();
  renderTimeline();
}

function updateCompareDock() {
  var dock = document.getElementById('compare-dock');
  var itemsContainer = document.getElementById('compare-dock-items');
  var countEl = document.getElementById('compare-count');
  var btnCompare = document.getElementById('btn-dock-compare');

  if (!dock || !itemsContainer || !countEl || !btnCompare) return;

  if (compareList.length === 0) {
    dock.classList.add('hidden');
    return;
  }

  dock.classList.remove('hidden');
  countEl.textContent = compareList.length;

  var html = '';
  compareList.forEach(function(id) {
    var m = TIMELINE_DATA.find(function(item) { return item.id === id; });
    var name = m ? m.name : id;
    html += '<div class="compare-dock-pill">';
    html += '  <span>' + name + '</span>';
    html += '  <button class="compare-dock-remove" onclick="toggleCompareItem(\'' + id + '\')" title="제거">✕</button>';
    html += '</div>';
  });

  itemsContainer.innerHTML = html;

  if (compareList.length >= 1) {
    btnCompare.removeAttribute('disabled');
    btnCompare.style.opacity = '1';
    btnCompare.textContent = compareList.length === 2 ? '상호 비교하기 (2/2)' : '상호 비교하기 (1선택됨)';
  } else {
    btnCompare.setAttribute('disabled', 'disabled');
    btnCompare.style.opacity = '0.5';
  }
}

// Open Side-by-Side Comparison Modal
function openCompareModal(idA, idB) {
  var modal = document.getElementById('compare-modal');
  var content = document.getElementById('compare-modal-content');
  if (!modal || !content) return;

  // Determine initial pair of models
  if (!idA && !idB) {
    if (compareList.length >= 2) {
      idA = compareList[0];
      idB = compareList[1];
    } else if (compareList.length === 1) {
      idA = compareList[0];
      idB = (idA === 'model-113') ? 'model-110' : 'model-113';
    } else {
      // Default: Claude Fable 5.1 (model-113) vs Qwen3.8-Flash-Next (model-110)
      idA = 'model-113';
      idB = 'model-110';
    }
  } else if (idA && !idB) {
    idB = (idA === 'model-113') ? 'model-110' : 'model-113';
  }

  activeCompareA = idA;
  activeCompareB = idB;

  renderCompareModalContent();
  modal.classList.remove('hidden');
}

function closeCompareModal() {
  var modal = document.getElementById('compare-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCompareBackdropClick(e) {
  if (e.target.id === 'compare-modal') {
    closeCompareModal();
  }
}

function handleCompareSelectChange() {
  var selA = document.getElementById('compare-select-a');
  var selB = document.getElementById('compare-select-b');
  if (selA && selB) {
    activeCompareA = selA.value;
    activeCompareB = selB.value;
    renderCompareModalContent();
  }
}

// Render the inside of the comparison modal
function renderCompareModalContent() {
  var content = document.getElementById('compare-modal-content');
  if (!content) return;

  var modA = TIMELINE_DATA.find(function(item) { return item.id === activeCompareA; }) || TIMELINE_DATA[0];
  var modB = TIMELINE_DATA.find(function(item) { return item.id === activeCompareB; }) || TIMELINE_DATA[1];

  var metaA = (typeof COMPANY_META !== 'undefined' && COMPANY_META[modA.company]) ? COMPANY_META[modA.company] : { flag: '🌐' };
  var metaB = (typeof COMPANY_META !== 'undefined' && COMPANY_META[modB.company]) ? COMPANY_META[modB.company] : { flag: '🌐' };

  var html = '';

  // Header
  html += '<div class="modal-header">';
  html += '  <div>';
  html += '    <h2 style="font-size: 18px; font-weight: 700; color: #111827;">⚖️ 파운데이션 모델 벤치마크 및 스펙 직접 비교</h2>';
  html += '    <p style="font-size: 12px; color: #6b7280; margin-top: 2px;">두 모델을 선택하여 아키텍처 규격과 공개 벤치마크를 상호 비교합니다.</p>';
  html += '  </div>';
  html += '  <button class="modal-close" onclick="closeCompareModal()">✕</button>';
  html += '</div>';

  html += '<div style="padding: 16px 0;">';

  // Model Selector Dropdowns Header
  html += '<div class="compare-select-header">';
  // Select A
  html += '  <div>';
  html += '    <label style="font-size: 11px; font-weight: 600; color: #4b5563; display: block; margin-bottom: 4px;">모델 A (기준)</label>';
  html += '    <select id="compare-select-a" class="compare-select" onchange="handleCompareSelectChange()">';
  TIMELINE_DATA.forEach(function(m) {
    var selected = (m.id === modA.id) ? 'selected' : '';
    html += '      <option value="' + m.id + '" ' + selected + '>' + m.name + ' (' + m.company + ' · ' + m.date + ')</option>';
  });
  html += '    </select>';
  html += '  </div>';

  // VS Icon
  html += '  <div class="compare-vs-badge">VS</div>';

  // Select B
  html += '  <div>';
  html += '    <label style="font-size: 11px; font-weight: 600; color: #4b5563; display: block; margin-bottom: 4px;">모델 B (비교 대상)</label>';
  html += '    <select id="compare-select-b" class="compare-select" onchange="handleCompareSelectChange()">';
  TIMELINE_DATA.forEach(function(m) {
    var selected = (m.id === modB.id) ? 'selected' : '';
    html += '      <option value="' + m.id + '" ' + selected + '>' + m.name + ' (' + m.company + ' · ' + m.date + ')</option>';
  });
  html += '    </select>';
  html += '  </div>';
  html += '</div>';

  // 1. Basic Specs Comparison Table
  html += '<div style="margin-bottom: 24px;">';
  html += '  <h3 style="font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">';
  html += '    <span>📋 기본 사양 및 아키텍처 비교</span>';
  html += '  </h3>';
  html += '  <table class="comparison-table">';
  html += '    <thead>';
  html += '      <tr>';
  html += '        <th style="width: 25%;">항목</th>';
  html += '        <th style="width: 37.5%;">' + (metaA.flag ? metaA.flag + ' ' : '') + modA.name + '</th>';
  html += '        <th style="width: 37.5%;">' + (metaB.flag ? metaB.flag + ' ' : '') + modB.name + '</th>';
  html += '      </tr>';
  html += '    </thead>';
  html += '    <tbody>';

  var specRows = [
    { label: '개발사 / 기관', a: (metaA.flag ? metaA.flag + ' ' : '') + modA.company, b: (metaB.flag ? metaB.flag + ' ' : '') + modB.company },
    { label: '출시일', a: modA.date, b: modB.date },
    { label: '모델 패밀리', a: modA.family, b: modB.family },
    { label: '모델 유형 / 카테고리', a: modA.type + ' (' + (modA.category || 'General') + ')', b: modB.type + ' (' + (modB.category || 'General') + ')' },
    { label: '파라미터 규격', a: modA.parameters || '비공개', b: modB.parameters || '비공개' },
    { label: '아키텍처', a: modA.architecture || '트랜스포머', b: modB.architecture || '트랜스포머' },
    { label: '오픈 웨이트', a: modA.open_weights ? '예 (Open)' : '아니오 (Closed API)', b: modB.open_weights ? '예 (Open)' : '아니오 (Closed API)' },
    { label: '컨텍스트 윈도우', a: modA.context || '표준', b: modB.context || '표준' },
    { label: '지원 모달리티', a: (modA.modalities && modA.modalities.length > 0) ? modA.modalities.join(', ') : 'Text', b: (modB.modalities && modB.modalities.length > 0) ? modB.modalities.join(', ') : 'Text' }
  ];

  specRows.forEach(function(row) {
    html += '      <tr>';
    html += '        <td style="font-weight: 600; color: #4b5563;">' + row.label + '</td>';
    html += '        <td>' + row.a + '</td>';
    html += '        <td>' + row.b + '</td>';
    html += '      </tr>';
  });

  html += '    </tbody>';
  html += '  </table>';
  html += '</div>';

  // 2. Benchmarks Side-by-Side Comparison
  var benchKeys = [
    { key: 'Chatbot Arena ELO', label: 'Chatbot Arena ELO', desc: '인간 선호도 블라인드 평가', unit: ' ELO' },
    { key: 'MMLU-Pro', label: 'MMLU-Pro', desc: '고난도 학술 종합 추론', unit: '%' },
    { key: 'GPQA Diamond', label: 'GPQA Diamond', desc: '대학원 전문가 과학/물리/화학/생물', unit: '%' },
    { key: 'MATH-500', label: 'MATH-500', desc: '수학 올림피아드/경시대회급 추론', unit: '%' },
    { key: 'SWE-bench Verified', label: 'SWE-bench Verified', desc: '실제 GitHub 이슈 해결 능력 (엔지니어링)', unit: '%' },
    { key: 'HumanEval', label: 'HumanEval', desc: '파이썬 코드 구현 정확도', unit: '%' },
    { key: 'LiveCodeBench', label: 'LiveCodeBench', desc: '경쟁 프로그래밍 문제 해결력', unit: '%' },
    { key: 'MMMU (Multimodal)', label: 'MMMU (Multimodal)', desc: '대학 수준 다중 모달리티(이미지/도표) 이해', unit: '%' }
  ];

  var winsA = 0;
  var winsB = 0;
  var ties = 0;
  var totalCommon = 0;

  var benchRowsHtml = '';

  benchKeys.forEach(function(bItem) {
    var key = bItem.key;
    var valA = (modA.benchmarks && modA.benchmarks[key] !== undefined) ? modA.benchmarks[key] : null;
    var valB = (modB.benchmarks && modB.benchmarks[key] !== undefined) ? modB.benchmarks[key] : null;

    if (valA === null && valB === null) return; // neither has it

    totalCommon++;
    var diffText = '';
    var cellAClass = '';
    var cellBClass = '';
    var badgeA = '';
    var badgeB = '';
    var ratioA = 50;
    var ratioB = 50;

    if (valA !== null && valB !== null) {
      var diff = Math.round((valA - valB) * 10) / 10;
      var sum = valA + valB;
      if (sum > 0) {
        ratioA = Math.round((valA / sum) * 100);
        ratioB = 100 - ratioA;
      }

      if (diff > 0) {
        winsA++;
        cellAClass = 'score-win';
        badgeA = '<span class="score-win-badge">+' + diff + (key === 'Chatbot Arena ELO' ? '' : '%') + ' 우세</span>';
        diffText = '<span style="color: #059669; font-weight: 600;">' + modA.name + ' +' + diff + '</span>';
      } else if (diff < 0) {
        winsB++;
        cellBClass = 'score-win';
        badgeB = '<span class="score-win-badge">+' + Math.abs(diff) + (key === 'Chatbot Arena ELO' ? '' : '%') + ' 우세</span>';
        diffText = '<span style="color: #059669; font-weight: 600;">' + modB.name + ' +' + Math.abs(diff) + '</span>';
      } else {
        ties++;
        diffText = '<span style="color: #6b7280;">동률 (0.0)</span>';
      }
    } else if (valA !== null) {
      winsA++;
      cellAClass = 'score-win';
      badgeA = '<span class="score-win-badge">지원</span>';
      diffText = '<span style="color: #6b7280;">' + modB.name + ' 미지원</span>';
      ratioA = 100;
      ratioB = 0;
    } else {
      winsB++;
      cellBClass = 'score-win';
      badgeB = '<span class="score-win-badge">지원</span>';
      diffText = '<span style="color: #6b7280;">' + modA.name + ' 미지원</span>';
      ratioA = 0;
      ratioB = 100;
    }

    var displayA = (valA !== null) ? (valA + bItem.unit) : '<span style="color: #9ca3af; font-size: 11px;">해당 없음</span>';
    var displayB = (valB !== null) ? (valB + bItem.unit) : '<span style="color: #9ca3af; font-size: 11px;">해당 없음</span>';

    benchRowsHtml += '<tr>';
    benchRowsHtml += '  <td>';
    benchRowsHtml += '    <div style="font-weight: 700; color: #111827;">' + bItem.label + '</div>';
    benchRowsHtml += '    <div style="font-size: 11px; color: #6b7280;">' + bItem.desc + '</div>';
    benchRowsHtml += '    <div class="benchmark-bar-container" title="' + modA.name + ' (' + ratioA + '%) vs ' + modB.name + ' (' + ratioB + '%)">';
    benchRowsHtml += '      <div class="benchmark-bar-a" style="width: ' + ratioA + '%;"></div>';
    benchRowsHtml += '      <div class="benchmark-bar-b" style="width: ' + ratioB + '%;"></div>';
    benchRowsHtml += '    </div>';
    benchRowsHtml += '  </td>';
    benchRowsHtml += '  <td class="' + cellAClass + '" style="font-family: monospace; font-size: 14px;">' + displayA + ' ' + badgeA + '</td>';
    benchRowsHtml += '  <td class="' + cellBClass + '" style="font-family: monospace; font-size: 14px;">' + displayB + ' ' + badgeB + '</td>';
    benchRowsHtml += '  <td style="font-size: 12px;">' + diffText + '</td>';
    benchRowsHtml += '</tr>';
  });

  // Scoreboard Banner
  html += '<div>';
  html += '  <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">';
  html += '    <div>';
  html += '      <h3 style="font-size: 13px; font-weight: 700; color: #111827; margin: 0;">📊 공개 벤치마크 점수 상호 비교</h3>';
  html += '      <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">수치가 높을수록 우수한 성능을 나타냅니다.</div>';
  html += '    </div>';
  html += '    <div style="background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 6px; padding: 4px 12px; font-size: 12px; font-weight: 700; color: #111827;">';
  html += '      <span>' + modA.name + ' <strong style="color: #2563eb;">' + winsA + '승</strong></span>';
  html += '      <span style="color: #9ca3af; margin: 0 4px;">:</span>';
  html += '      <span>' + modB.name + ' <strong style="color: #9333ea;">' + winsB + '승</strong></span>';
  if (ties > 0) {
    html += '      <span style="color: #6b7280; font-size: 11px; font-weight: normal; margin-left: 4px;">(' + ties + '무)</span>';
  }
  html += '    </div>';
  html += '  </div>';

  html += '  <table class="comparison-table">';
  html += '    <thead>';
  html += '      <tr>';
  html += '        <th style="width: 32%;">벤치마크 평가 지표</th>';
  html += '        <th style="width: 25%; color: #1d4ed8;">' + (metaA.flag ? metaA.flag + ' ' : '') + modA.name + '</th>';
  html += '        <th style="width: 25%; color: #7e22ce;">' + (metaB.flag ? metaB.flag + ' ' : '') + modB.name + '</th>';
  html += '        <th style="width: 18%;">상대 격차</th>';
  html += '      </tr>';
  html += '    </thead>';
  html += '    <tbody>';
  html += benchRowsHtml;
  html += '    </tbody>';
  html += '  </table>';
  html += '</div>';

  html += '</div>'; // End body

  // Modal Footer
  html += '<div class="modal-footer">';
  html += '  <button class="btn-secondary" onclick="copyComparisonMarkdown(\'' + modA.id + '\', \'' + modB.id + '\')"><span id="btn-copy-compare-text">비교 결과 마크다운 복사</span></button>';
  html += '  <button class="btn-primary" onclick="closeCompareModal()">닫기</button>';
  html += '</div>';

  content.innerHTML = html;
}

// Copy Comparison Markdown to Clipboard
function copyComparisonMarkdown(idA, idB) {
  var modA = TIMELINE_DATA.find(function(item) { return item.id === idA; });
  var modB = TIMELINE_DATA.find(function(item) { return item.id === idB; });
  if (!modA || !modB) return;

  var md = '### ' + modA.name + ' vs ' + modB.name + ' 비교 요약 (2026 파운데이션 모델)\n\n';
  md += '| 항목 | ' + modA.name + ' | ' + modB.name + ' |\n';
  md += '|---|---|---|\n';
  md += '| 제조사 / 출시일 | ' + modA.company + ' (' + modA.date + ') | ' + modB.company + ' (' + modB.date + ') |\n';
  md += '| 파라미터 / 아키텍처 | ' + (modA.parameters || '-') + ' / ' + (modA.architecture || '-') + ' | ' + (modB.parameters || '-') + ' / ' + (modB.architecture || '-') + ' |\n';
  md += '| 오픈 웨이트 여부 | ' + (modA.open_weights ? 'Open' : 'Closed') + ' | ' + (modB.open_weights ? 'Open' : 'Closed') + ' |\n';

  if (modA.benchmarks && modB.benchmarks) {
    md += '\n#### 주요 벤치마크 점수 비교\n\n';
    md += '| 벤치마크 | ' + modA.name + ' | ' + modB.name + ' | 격차 |\n';
    md += '|---|---|---|---|\n';
    var allKeys = Array.from(new Set(Object.keys(modA.benchmarks).concat(Object.keys(modB.benchmarks))));
    allKeys.forEach(function(k) {
      var sA = modA.benchmarks[k] !== undefined ? modA.benchmarks[k] : '-';
      var sB = modB.benchmarks[k] !== undefined ? modB.benchmarks[k] : '-';
      var diff = (typeof sA === 'number' && typeof sB === 'number') ? (Math.round((sA - sB) * 10) / 10) : '-';
      var diffStr = diff > 0 ? ('+' + diff + ' (' + modA.name + ' 우세)') : diff < 0 ? ('+' + Math.abs(diff) + ' (' + modB.name + ' 우세)') : '동률';
      md += '| ' + k + ' | ' + sA + ' | ' + sB + ' | ' + diffStr + ' |\n';
    });
  }

  navigator.clipboard.writeText(md).then(function() {
    var el = document.getElementById('btn-copy-compare-text');
    if (el) {
      el.textContent = '마크다운 복사 완료!';
      setTimeout(function() { el.textContent = '비교 결과 마크다운 복사'; }, 2000);
    }
  });
}

// Global Key Listeners
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeCompareModal();
  }
  if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    var input = document.getElementById('search-input');
    if (input) input.focus();
  }
});
