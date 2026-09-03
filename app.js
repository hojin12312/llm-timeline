// LLM Timeline 2026 - Minimalist Chronological Horizontal Timeline

var searchQuery = '';
var activeModalId = null;
var sortOrder = 'desc'; // Default: Newest first (9월 -> 1월)

// Initialize robustly regardless of load timing
function initApp() {
  if (typeof TIMELINE_DATA === 'undefined') {
    console.error('TIMELINE_DATA is not loaded.');
    return;
  }
  renderMonthButtons();
  renderTimeline();
  setupScrollInteractions();
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
    var text = [
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

  // Build HTML
  // Note: .timeline-axis-line spans the entire length of .timeline-track
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

  var html = '<div class="model-card" onclick="openModal(\'' + m.id + '\')">';
  
  // Top row: Company & Category
  html += '<div class="card-top">';
  html += '  <span class="card-company">' + (meta.flag ? meta.flag + ' ' : '') + m.company + '</span>';
  html += '  <span class="card-tag">' + (m.category || m.type) + '</span>';
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
      // Faster multiplier: 2.2x for swift movement with silky deceleration
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
    var walk = (x - startX) * 1.8; // slightly faster drag
    var maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = Math.max(0, Math.min(maxScroll, startScrollLeft - walk));
    targetScrollLeft = container.scrollLeft;
  });
}

// Navigation Controls (Buttons)
function scrollTimeline(direction) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;
  var amount = 750; // faster jump per click
  container.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

function jumpToMonth(month) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  // Update active button
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

// Modal
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

  if (m.modalities && m.modalities.length > 0) {
    html += '  <div><span class="spec-label" style="margin-bottom: 4px;">지원 모달리티</span><div>';
    m.modalities.forEach(function(mod) {
      html += '<span class="card-tag" style="margin-right: 4px;">' + mod + '</span>';
    });
    html += '  </div></div>';
  }

  if (m.focus && m.focus.length > 0) {
    html += '  <div><span class="spec-label" style="margin-bottom: 4px;">주요 역량 / 포커스</span><div>';
    m.focus.forEach(function(f) {
      html += '<span class="card-tag" style="margin-right: 4px;">' + f + '</span>';
    });
    html += '  </div></div>';
  }

  if (m.note) {
    html += '  <div class="modal-note"><strong>비고:</strong> ' + m.note + '</div>';
  }

  html += '</div>';

  html += '<div class="modal-footer">';
  html += '  <button class="btn-secondary" onclick="copyCitation(\'' + m.id + '\')"><span id="btn-copy-text">인용 복사</span></button>';
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

// Close on Esc
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    var input = document.getElementById('search-input');
    if (input) input.focus();
  }
});
