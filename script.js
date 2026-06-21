// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════
const WHATSAPP_NUMBER = '5534996635105';

const PRODUCTS = [
  {
    id: 'eq_kids', name: 'Bolachinha de Aveia',
    desc: 'Frutas da estação, proteína grelhada, cereal integral e suco natural.',
    price: 19.90, tags: ['zero-lactose','organic'],
    icon: 'ph-bowl-food',
    img: 'assets/bolAveiaII.jpeg',
    bestseller: true
  },
  {
    id: 'lancheira_vegan', name: 'Bolinho de Beterraba',
    desc: 'Húmus, pão integral, cenoura baby, mix de frutas e bebida vegetal.',
    price: 21.90, tags: ['vegan','gluten-free','organic'],
    icon: 'ph-leaf',
    img: 'assets/bolinhoII.jpeg',
    bestseller: true
  },
  {
    id: 'lancheira_proteina', name: 'Pastel de Abóbora',
    desc: 'Pastel de Abóbora. Pastel de Abóbora.',
    price: 22.90, tags: ['gluten-free'],
    icon: 'ph-egg',
    img: 'assets/pastelzin.jpeg',
    bestseller: true
  },
  {
    id: 'lancheira_fruta', name: 'Mini Pizza',
    desc: 'Mini pizza com ingredientes saudaveis.',
    price: 16.90, tags: ['vegan','gluten-free','natural'],
    icon: 'ph-orange-slice',
    img: 'assets/miniPizza.jpeg',
    bestseller: true
  },
  {
    id: 'suco_laranja', name: 'Bolacha de Aveia Hello Kitty',
    desc: 'Laranja pera espremida na hora, 300ml. Sem adição de açúcar.',
    price: 8.00, tags: ['natural','vegan','gluten-free'],
    icon: 'ph-drop',
    img: 'assets/helloKitty.jpeg'
  },
  {
    id: 'suco_misto', name: 'Mamão',
    desc: 'Maçã, couve, limão e gengibre. Suave e refrescante, 300ml.',
    price: 9.00, tags: ['natural','vegan','organic','gluten-free'],
    icon: 'ph-plant',
    img: 'assets/mamao.jpeg'
  },
  {
    id: 'bolinho_bana', name: 'Pão Recheiado',
    desc: 'Feito com farinha integral, banana madura e canela. Sem açúcar refinado.',
    price: 7.50, tags: ['organic','natural'],
    icon: 'ph-cookie',
    img: 'assets/paoFrango.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Pão Porquinho',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/pigFood.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Cookie',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/cookie.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Pão Pessoinha',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/integralPessoinha.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Pão Colorido',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/paoColor.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Hamburguer',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/hamburger.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Cupcake de Banana',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/cupcakeBanana.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Bolinho Morcego',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/batBolo.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Gelatina',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/gelatina.jpeg'
  },
  {
    id: 'iogurte_frutas', name: 'Bolo de Banana',
    desc: 'Iogurte natural integral com granola artesanal e frutas frescas.',
    price: 10.50, tags: ['organic','gluten-free'],
    icon: 'ph-bowl-food',
    img: 'assets/boloBanana.jpeg'
  },
];

const TOP_PRODUCTS = PRODUCTS.filter(p => p.bestseller);

const TESTIMONIALS = [
  { name: 'Ana carolina', role: 'Mãe do Gabriel', text: 'Como mãe do Gabriel, sou muito grata por todo o cuidado com a alimentação dele. Além de receber refeições saudáveis, variadas e preparadas com muito carinho, ele adora a comida e os lanchinhos. Percebi também uma melhora significativa no funcionamento do intestino dele depois que passou a consumir os lanches da manhã e da tarde, o que era uma dificuldade que enfrentávamos. Saber que ele está sendo bem alimentado e recebendo uma nutrição de qualidade me traz muita tranquilidade. Esse trabalho faz toda a diferença na saúde, no desenvolvimento e no bem-estar das nossas crianças.', stars: 5 },
  { name: 'Danielle', role: 'Diretora TECHERS - Escola de Tecnologia', text: 'Aqui na TECHERS temos uma lanchonete e os produtos da Nutri4kids são nossas opções saudáveis e ao mesmo tempo muito gostosas. Os alunos amam! ', stars: 5 },
  { name: 'Fernanda Alves', role: 'Mãe de 3 filhos', text: 'Minha filha tem intolerância à lactose e eles sempre capricham na lancheira dela. Recomendo para todas as mães do grupo da escola!', stars: 5 },
  { name: 'Marcos Rodrigues', role: 'Pai solo', text: 'Como pai solo, a Nutri4Kids salvou minha vida. Entrega pontual, comida deliciosa e meu filho melhorou muito a concentração na escola.', stars: 5 },
  { name: 'Juliana Costa', role: 'Mãe de 1 filho', text: 'O Pedro era supercontra comer fruta. Com a lancheira deles, ele pede mais. O segredo é o capricho no jeito que apresentam os alimentos.', stars: 5 },
];

const TAG_LABELS = {
  'gluten-free': 'Sem Glúten', 'zero-lactose': 'Sem Lactose',
  vegan: 'Vegano', organic: 'Orgânico', natural: 'Natural'
};


// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const state = {
  activeFilters: new Set(),
  address: '',
  cart: {},
  planner: {},   // planner['morning_0'] = productId
  menuActiveFilter: 'all',
  expandedCard: null,
};

// ══════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════
const fmt = n => n.toFixed(2).replace('.', ',');
const getCartSubtotal = () => PRODUCTS.reduce((s,p) => s + (state.cart[p.id]||0)*p.price, 0);
const getCartCount = () => Object.values(state.cart).reduce((a,b) => a+b, 0);

// ══════════════════════════════════════════════
// CART PERSISTENCE (localStorage)
// ══════════════════════════════════════════════
const CART_STORAGE_KEY = 'nutri4kids_cart_v1';
const ADDRESS_STORAGE_KEY = 'nutri4kids_address_v1';

function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    localStorage.setItem(ADDRESS_STORAGE_KEY, state.address || '');
  } catch (err) {
    console.warn('Não foi possível salvar o carrinho:', err);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved && typeof saved === 'object') {
        // Only keep entries for products that still exist
        Object.entries(saved).forEach(([id, qty]) => {
          if (PRODUCTS.some(p => p.id === id) && Number(qty) > 0) {
            state.cart[id] = Number(qty);
          }
        });
      }
    }
  } catch (err) {
    console.warn('Não foi possível carregar o carrinho salvo:', err);
  }
  try {
    const savedAddress = localStorage.getItem(ADDRESS_STORAGE_KEY);
    if (savedAddress) state.address = savedAddress;
  } catch (err) {
    console.warn('Não foi possível carregar o endereço salvo:', err);
  }
}

function scrollToCenter(el) {
  const rect = el.getBoundingClientRect();
  const target = rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
  window.scrollTo({ top: target, behavior: 'smooth' });
}

// ══════════════════════════════════════════════
// HEADER SCROLL SHADOW
// ══════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 10);
});

// Smooth nav scroll to center
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); scrollToCenter(target); }
  });
});

// ══════════════════════════════════════════════
// TOP PRODUCTS CAROUSEL
// ══════════════════════════════════════════════
function initProductsGrid() {
  const track = document.getElementById('productsTrack');
  if (!track) return;
  // uses .products-grid CSS class already in stylesheet
  TOP_PRODUCTS.slice(0, 4).forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-slide';
    card.innerHTML = `
      <div class="product-slide-img-wrap">
        <img class="product-slide-img" src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-slide-body">
        <div class="slide-badge"><i class="ph ph-star ph-fill" style="font-size:.7rem"></i> Mais pedido</div>
        <div class="slide-name">${p.name}</div>
        <div class="slide-desc">${p.desc}</div>
        <div class="slide-footer">
          <div class="slide-price">R$ ${fmt(p.price)}</div>
          <button class="slide-add-btn" data-id="${p.id}" title="Adicionar ao carrinho">
            <i class="ph ph-plus"></i>
          </button>
        </div>
      </div>`;
    track.appendChild(card);
  });

  track.addEventListener('click', e => {
    const btn = e.target.closest('.slide-add-btn[data-id]');
    if (!btn) return;
    const id = btn.dataset.id;
    state.cart[id] = (state.cart[id] || 0) + 1;
    renderCart();
    btn.innerHTML = '<i class="ph ph-check"></i>';
    btn.style.background = 'var(--sage-dark)';
    setTimeout(() => {
      btn.innerHTML = '<i class="ph ph-plus"></i>';
      btn.style.background = '';
    }, 1000);
  });
}

// ══════════════════════════════════════════════
// ══════════════════════════════════════════════
// ORDER DRAWER
// ══════════════════════════════════════════════
function initDrawer() {
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('drawer');
  const openDrawer = () => { overlay.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeDrawer = () => { overlay.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; };
  ['openDrawerBtn','openDrawerBtn2'].forEach(id => document.getElementById(id)?.addEventListener('click', openDrawer));
  document.getElementById('closeDrawerBtn').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

function initAddressInput() {
  const input = document.getElementById('addressInput');
  if (!input) return;
  input.value = state.address || '';
  input.addEventListener('input', () => {
    state.address = input.value;
    const plannerAddr = document.getElementById('plannerAddressInput');
    if (plannerAddr) plannerAddr.value = state.address;
    renderCart();
  });
}

function initFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      state.activeFilters.has(f) ? state.activeFilters.delete(f) : state.activeFilters.add(f);
      chip.classList.toggle('active', state.activeFilters.has(f));
      filterDrawerProducts();
    });
  });
}

function filterDrawerProducts() {
  PRODUCTS.forEach(p => {
    const card = document.getElementById(`pcard-${p.id}`);
    if (!card) return;
    if (state.activeFilters.size === 0) { card.classList.remove('hidden'); return; }
    card.classList.toggle('hidden', ![...state.activeFilters].every(f => p.tags.includes(f)));
  });
}

function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `pcard-${p.id}`;

    const tagsHTML = p.tags.map(t => `<span class="product-tag">${TAG_LABELS[t]||t}</span>`).join('');

    card.innerHTML = `
      <div class="product-card-header">
        <img class="product-card-thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-tags">${tagsHTML}</div>
        </div>
        <div class="product-price">R$ ${fmt(p.price)}</div>
        <i class="ph ph-caret-down product-expand-icon"></i>
      </div>
      <div class="product-expand-body">
        <div class="product-expand-inner">
          <img class="product-expand-img" src="${p.img}" alt="${p.name}" loading="lazy" />
          <p class="product-desc">${p.desc}</p>
          <div class="qty-control">
            <button class="qty-btn" data-action="dec" data-id="${p.id}"><i class="ph ph-minus"></i></button>
            <span class="qty-val" id="qty-${p.id}">0</span>
            <button class="qty-btn" data-action="inc" data-id="${p.id}"><i class="ph ph-plus"></i></button>
            <span class="qty-subtotal" id="sub-${p.id}"></span>
          </div>
        </div>
      </div>`;

    // Toggle expand on header click
    card.querySelector('.product-card-header').addEventListener('click', () => {
      const isOpen = card.classList.contains('expanded');
      // Collapse all others
      document.querySelectorAll('.product-card.expanded').forEach(c => c.classList.remove('expanded'));
      if (!isOpen) {
        card.classList.add('expanded');
        // Lazy-load the big image
        const bigImg = card.querySelector('.product-expand-img');
        if (bigImg && !bigImg.src) bigImg.src = p.img;
      }
    });

    // Qty buttons — stop propagation so they don't toggle expand
    card.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      e.stopPropagation();
      const { id, action } = btn.dataset;
      const cur = state.cart[id] || 0;
      state.cart[id] = action === 'inc' ? cur + 1 : Math.max(0, cur - 1);
      if (!state.cart[id]) delete state.cart[id];
      updateQtyDisplay(id);
      renderCart();
    });

    list.appendChild(card);
  });
}

function updateQtyDisplay(id) {
  const qty = state.cart[id] || 0;
  const qEl = document.getElementById(`qty-${id}`);
  const sEl = document.getElementById(`sub-${id}`);
  if (qEl) qEl.textContent = qty;
  if (sEl) {
    const p = PRODUCTS.find(x => x.id === id);
    sEl.textContent = qty > 0 ? `= R$ ${fmt(qty * p.price)}` : '';
  }
}

function renderCart() {
  saveCartToStorage();
  const summary = document.getElementById('cartSummary');
  const btn = document.getElementById('whatsappBtn');
  const badge = document.getElementById('cartBadge');
  const count = getCartCount();
  const subtotal = getCartSubtotal();
  const hasAddress = !!state.address.trim();

  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);

  if (count === 0) {
    summary.innerHTML = `<div class="cart-empty">Nenhum item adicionado ainda.</div>`;
    btn.disabled = true; return;
  }
  let html = '';
  PRODUCTS.forEach(p => {
    const qty = state.cart[p.id];
    if (!qty) return;
    html += `<div class="cart-row"><span>${qty}× ${p.name}</span><span>R$ ${fmt(qty*p.price)}</span></div>`;
  });
  html += `<div class="cart-row total"><span>TOTAL</span><span>R$ ${fmt(subtotal)}</span></div>`;
  if (!hasAddress) {
    html += `<div class="cart-row" style="color:var(--gray);font-size:.78rem"><span>Preencha o endereço de entrega para finalizar</span></div>`;
  }
  summary.innerHTML = html;
  btn.disabled = !hasAddress;
  btn.onclick = sendWhatsApp;
}

function sendWhatsApp() {
  const subtotal = getCartSubtotal();
  let lines = ['NOVO PEDIDO - Nutri4kids',''];
  PRODUCTS.forEach(p => {
    const qty = state.cart[p.id];
    if (qty) lines.push(`${qty}x ${p.name}  R$ ${fmt(qty*p.price)}`);
  });
  lines.push('','---','',`TOTAL: R$ ${fmt(subtotal)}`,'','---','',`Endereço: ${state.address.trim()}`,'','Pagamento: Pix/Cartão/Dinheiro');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

// ══════════════════════════════════════════════
// MEAL PLANNER — refactored
// ══════════════════════════════════════════════
const PLANNER_DAYS  = ['Seg','Ter','Qua','Qui','Sex'];  // Mon–Fri (school week)
const PLANNER_SLOTS = [
  { id: 'op1', label: 'Opção 1' },
  { id: 'op2', label: 'Opção 2' },
  { id: 'op3', label: 'Opção 3' },
  { id: 'op4', label: 'Opção 4' },
  { id: 'op5', label: 'Opção 5' },
  { id: 'op6', label: 'Opção 6' },
];

let plannerWeekOffset = 0;     // 0 = current week, -1 = last week, +1 = next week
let activePlannerCell = null;  // { key, dayLabel, slotLabel }

function getPlannerWeekLabel(offset) {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - now.getDay() + 1 + offset * 7);
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  const fmt2 = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`;
  if (offset === 0) return `Esta semana (${fmt2(monday)}–${fmt2(friday)})`;
  if (offset === -1) return `Semana passada`;
  if (offset === 1) return `Próxima semana`;
  return `Semana ${offset > 0 ? '+' : ''}${offset}`;
}

function plannerKey(slotId, dayIdx) {
  return `planner_w${plannerWeekOffset}_${slotId}_${dayIdx}`;
}

function initPlanner() {
  const overlay = document.getElementById('plannerOverlay');
  const drawer  = document.getElementById('plannerDrawer');

  const openPlanner = () => {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    buildPlannerGrid();
    renderPickerList();
    updatePlannerFooter();
    const addrInput = document.getElementById('plannerAddressInput');
    if (addrInput) addrInput.value = state.address || '';
  };
  const closePlanner = () => {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    activePlannerCell = null;
  };

  document.getElementById('openPlannerBtn').addEventListener('click', openPlanner);
  document.getElementById('closePlannerBtn').addEventListener('click', closePlanner);
  overlay.addEventListener('click', closePlanner);

  // Week navigation
  document.getElementById('plannerPrevWeek').addEventListener('click', () => {
    plannerWeekOffset--;
    activePlannerCell = null;
    document.getElementById('plannerWeekLabel').textContent = getPlannerWeekLabel(plannerWeekOffset);
    buildPlannerGrid();
    updatePlannerFooter();
    updatePickerCellLabel();
  });
  document.getElementById('plannerNextWeek').addEventListener('click', () => {
    plannerWeekOffset++;
    activePlannerCell = null;
    document.getElementById('plannerWeekLabel').textContent = getPlannerWeekLabel(plannerWeekOffset);
    buildPlannerGrid();
    updatePlannerFooter();
    updatePickerCellLabel();
  });

  // Search
  document.getElementById('pickerSearch').addEventListener('input', renderPickerList);

  // Address (shared with cart drawer)
  document.getElementById('plannerAddressInput')?.addEventListener('input', e => {
    state.address = e.target.value;
    const cartAddr = document.getElementById('addressInput');
    if (cartAddr) cartAddr.value = state.address;
    saveCartToStorage();
    updatePlannerFooter();
  });

  // Clear
  document.getElementById('plannerClearBtn').addEventListener('click', () => {
    if (!confirm('Limpar todos os itens desta semana?')) return;
    Object.keys(state.planner).forEach(k => {
      if (k.startsWith(`planner_w${plannerWeekOffset}_`)) delete state.planner[k];
    });
    activePlannerCell = null;
    buildPlannerGrid();
    updatePlannerFooter();
    updatePickerCellLabel();
  });

  // WhatsApp
  document.getElementById('plannerWaBtn').addEventListener('click', sendPlannerWhatsApp);

  document.getElementById('plannerWeekLabel').textContent = getPlannerWeekLabel(0);
}

function buildPlannerGrid() {
  // Header row
  const header = document.getElementById('wgHeader');
  header.innerHTML = '<div></div>'; // spacer
  PLANNER_DAYS.forEach(d => {
    const el = document.createElement('div');
    el.className = 'wg-day-label';
    el.textContent = d;
    header.appendChild(el);
  });

  // Rows
  const rows = document.getElementById('wgRows');
  rows.innerHTML = '';

  PLANNER_SLOTS.forEach(slot => {
    const row = document.createElement('div');
    row.className = 'wg-row';

    const labelEl = document.createElement('div');
    labelEl.className = 'wg-row-label';
    labelEl.innerHTML = slot.label;
    row.appendChild(labelEl);

    PLANNER_DAYS.forEach((day, dayIdx) => {
      const key  = plannerKey(slot.id, dayIdx);
      const cell = document.createElement('div');
      cell.className = 'wg-cell';
      cell.dataset.key = key;

      cell.addEventListener('click', () => selectPlannerCell(cell, key, day, slot.label));
      renderPlannerCell(cell, key);
      row.appendChild(cell);
    });

    rows.appendChild(row);
  });
}

function renderPlannerCell(cell, key) {
  const pid = state.planner[key];
  if (pid) {
    const p = PRODUCTS.find(x => x.id === pid);
    cell.classList.add('has-item');
    cell.innerHTML = `
      <div class="wg-item">
        <img class="wg-item-img" src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="wg-item-name">${p.name}</div>
        <div class="wg-item-price">R$ ${fmt(p.price)}</div>
      </div>
      <button class="wg-item-remove" title="Remover">×</button>`;
    cell.querySelector('.wg-item-remove').addEventListener('click', e => {
      e.stopPropagation();
      delete state.planner[key];
      cell.classList.remove('has-item');
      renderPlannerCell(cell, key);
      updatePlannerFooter();
      renderPickerList(); // refresh selected state
    });
  } else {
    cell.classList.remove('has-item');
    cell.innerHTML = `<i class="ph ph-plus wg-cell-plus"></i>`;
  }
}

function selectPlannerCell(cell, key, dayLabel, slotLabel) {
  // Deactivate previous
  document.querySelectorAll('.wg-cell.active-pick').forEach(c => c.classList.remove('active-pick'));
  activePlannerCell = { key, dayLabel, slotLabel };
  cell.classList.add('active-pick');
  updatePickerCellLabel();
  renderPickerList();
  // On mobile, scroll picker panel into view
  document.querySelector('.planner-picker-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updatePickerCellLabel() {
  const el = document.getElementById('pickerCellLabel');
  if (activePlannerCell) {
    el.textContent = `${activePlannerCell.dayLabel} — ${activePlannerCell.slotLabel}`;
    el.style.color = 'var(--sage-dark)';
    el.style.fontWeight = '800';
  } else {
    el.textContent = 'Selecione uma célula no grid →';
    el.style.color = 'var(--gray)';
    el.style.fontWeight = '600';
  }
}

function renderPickerList() {
  const list    = document.getElementById('pickerProductList');
  const query   = (document.getElementById('pickerSearch').value || '').toLowerCase().trim();
  const current = activePlannerCell ? state.planner[activePlannerCell.key] : null;

  const filtered = PRODUCTS.filter(p =>
    !query || p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) ||
    p.tags.some(t => (TAG_LABELS[t]||t).toLowerCase().includes(query))
  );

  if (filtered.length === 0) {
    list.innerHTML = `<div class="picker-empty">Nenhum produto encontrado.</div>`;
    return;
  }

  list.innerHTML = '';
  filtered.forEach(p => {
    const item = document.createElement('div');
    item.className = 'picker-product-item' + (p.id === current ? ' selected' : '');
    const tagsHTML = p.tags.slice(0,2).map(t => `<span class="picker-tag">${TAG_LABELS[t]||t}</span>`).join('');
    item.innerHTML = `
      <img class="picker-product-thumb" src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="picker-product-info">
        <div class="picker-product-name">${p.name}</div>
        <div class="picker-product-price">R$ ${fmt(p.price)}</div>
        <div class="picker-product-tags">${tagsHTML}</div>
      </div>
      <i class="ph ${p.id === current ? 'ph-check-circle ph-fill' : 'ph-plus-circle'}" style="font-size:1.3rem;color:${p.id === current ? 'var(--sage)' : 'var(--border)'};flex-shrink:0"></i>`;

    item.addEventListener('click', () => {
      if (!activePlannerCell) return;
      // Toggle: click same again to deselect
      if (state.planner[activePlannerCell.key] === p.id) {
        delete state.planner[activePlannerCell.key];
      } else {
        state.planner[activePlannerCell.key] = p.id;
      }
      // Re-render grid cell
      const cell = document.querySelector(`.wg-cell[data-key="${activePlannerCell.key}"]`);
      if (cell) renderPlannerCell(cell, activePlannerCell.key);
      updatePlannerFooter();
      renderPickerList();
    });

    list.appendChild(item);
  });
}

function updatePlannerFooter() {
  let slots = 0, total = 0;
  Object.entries(state.planner).forEach(([k, pid]) => {
    if (!k.startsWith(`planner_w${plannerWeekOffset}_`)) return;
    const p = PRODUCTS.find(x => x.id === pid);
    if (p) { slots++; total += p.price; }
  });
  document.getElementById('plannerSlotsFilled').textContent = slots;
  document.getElementById('plannerWeekTotal').textContent = `R$ ${fmt(total)}`;
  document.getElementById('plannerWaBtn').disabled = slots === 0 || !state.address.trim();
}

function sendPlannerWhatsApp() {
  const lines = ['🥗 PLANEJAMENTO SEMANAL — Nutri4Kids', ''];
  PLANNER_DAYS.forEach((day, dayIdx) => {
    const items = PLANNER_SLOTS
      .map(slot => state.planner[plannerKey(slot.id, dayIdx)])
      .filter(Boolean)
      .map(pid => PRODUCTS.find(x => x.id === pid))
      .filter(Boolean);
    if (items.length === 0) return;
    lines.push(`*${day.toUpperCase()}*`);
    items.forEach(p => lines.push(`  • ${p.name} — R$ ${fmt(p.price)}`));
    lines.push('');
  });
  let total = 0;
  Object.entries(state.planner).forEach(([k,pid]) => {
    if (!k.startsWith(`planner_w${plannerWeekOffset}_`)) return;
    const p = PRODUCTS.find(x => x.id === pid);
    if (p) total += p.price;
  });
  lines.push(`💰 Total estimado: R$ ${fmt(total)}`, '', 'Semana: ' + getPlannerWeekLabel(plannerWeekOffset));
  lines.push('', `Endereço: ${state.address.trim() || '(não informado)'}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
}

// ══════════════════════════════════════════════
// TESTIMONIALS CAROUSEL
// ══════════════════════════════════════════════
function initTestimonialsCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');

  // 1. Renderiza todos os cards normalmente
  TESTIMONIALS.forEach((t) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    const stars = Array(t.stars).fill('<i class="ph ph-star ph-fill"></i>').join('');
    card.innerHTML = `
      <div class="t-stars">${stars}</div>
      <p class="t-text">"${t.text}"</p>
      <div class="t-author">
        <div class="t-avatar"><i class="ph ph-user ph-lg"></i></div>
        <div><div class="t-name">${t.name}</div><div class="t-role">${t.role}</div></div>
      </div>`;
    track.appendChild(card);
  });

  // 2. Cria fixamente apenas 3 bolinhas (etapas 0, 1 e 2)
  const TOTAL_STEPS = 3;
  for (let i = 0; i < TOTAL_STEPS; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Etapa ${i+1}`);
    dot.addEventListener('click', () => tGoTo(i));
    dotsWrap.appendChild(dot);
  }

  let current = 0;
  function tGoTo(idx) {
    // Garante que o índice fique estritamente entre 0 e 2
    current = Math.max(0, Math.min(idx, TOTAL_STEPS - 1));

    const cardW = (track.children[0]?.offsetWidth || 320) + 20; // Largura do card + gap
    const containerW = track.parentElement.offsetWidth; // Largura visível do carrossel
    
    // Calcula o limite máximo de rolagem para o último card colar na direita
    const maxScroll = (TESTIMONIALS.length * cardW) - containerW - 20; // -20 remove o gap sobressalente do último item

    let targetTranslate = 0;

    if (current === 0) {
      targetTranslate = 0; // Primeira etapa: Início
    } else if (current === TOTAL_STEPS - 1) {
      targetTranslate = Math.max(0, maxScroll); // Última etapa: Fim exato (sem espaço branco)
    } else {
      // Etapa do meio (1): Vai até a metade do caminho máximo de rolagem
      targetTranslate = Math.max(0, maxScroll / 2);
    }

    track.style.transform = `translateX(-${targetTranslate}px)`;
    
    // Atualiza o estado visual das 3 bolinhas
    document.querySelectorAll('#carouselDots .carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
  }

  // Controles de avançar e voltar respeitando as 3 etapas
  document.getElementById('prevBtn').addEventListener('click', () => tGoTo(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => tGoTo(current + 1));

  // Suporte para Touch/Swipe
  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) tGoTo(dx < 0 ? current + 1 : current - 1);
  });
  
  window.addEventListener('resize', () => tGoTo(current));
}

// ══════════════════════════════════════════════
// SCROLL ANIMATIONS
// ══════════════════════════════════════════════
function initAnimations() {
  const els = document.querySelectorAll('.fade-up');
  if (!window.IntersectionObserver) { els.forEach(el => el.classList.add('visible')); return; }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initAddressInput();
  initFilters();
  renderProducts();
  renderCart();
  initDrawer();
  initProductsGrid();
  initPlanner();
  initTestimonialsCarousel();
  initAnimations();

  // "Cardápio" nav + footer links open drawer
  const openDrawerFn = e => {
    e.preventDefault();
    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  document.getElementById('navCardapioBtn')?.addEventListener('click', openDrawerFn);
  document.getElementById('footerCardapioBtn')?.addEventListener('click', openDrawerFn);
});
