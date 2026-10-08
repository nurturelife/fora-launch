// Page behaviour: plan selector, gallery, reviews, FAQ, drawer, sticky bars and the pre-launch checkout.
(function () {
  var C = window.FORA_CONTENT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var GREEN = '#0B3B23', LIME = '#C9F542';

  var state = { plan: 'three_month', qty: 1, gallery: 0, reviewFilter: 'Overall', openFaq: 0, scrolled: false, done: false, touched: {} };

  // Analytics hook: Meta CAPI / TikTok / GA connect here later.
  function track(event, data) {
    var p = Object.assign({ event: event, plan: state.plan, ts: Date.now() }, data || {});
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(p);
    window.dispatchEvent(new CustomEvent('fora:track', { detail: p }));
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function num(s) { return parseFloat(String(s).replace(/[^\d.]/g, '')) || 0; }
  function gbp(n) { return '£' + n.toFixed(2); }
  function selPlan() { return C.plans.filter(function (p) { return p.id === state.plan; })[0] || C.plans[0]; }
  function scrollToEl(el, offset) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' }); }

  // ---------- Plans ----------
  function renderPlans() {
    var p = selPlan();
    $$('[data-plan]').forEach(function (b) {
      var sel = b.dataset.plan === state.plan;
      b.style.border = sel ? '2px solid ' + GREEN : '1.5px solid rgba(11,59,35,.2)';
      b.style.background = sel ? '#F3FCD9' : '#fff';
      var dot = b.querySelector('span > span');
      if (dot) dot.style.background = sel ? GREEN : 'transparent';
      b.setAttribute('aria-pressed', sel ? 'true' : 'false');
    });
    $$('[data-sel-total]').forEach(function (s) { s.innerHTML = esc(p.total) + ' · ' + esc(p.totalLabel); });
    renderCheckout();
  }
  function selectPlan(id) {
    var p = C.plans.filter(function (x) { return x.id === id; })[0];
    state.plan = id; renderPlans();
    track('plan_selected', { plan: id }); if (p && p.event) track(p.event, { plan: id });
  }

  // ---------- Gallery ----------
  var gal = $('#top [style*="scroll-snap-type"]');
  var thumbs = $$('#top button.scp2:not([data-plan])');
  function renderThumbs() {
    thumbs.forEach(function (b, i) {
      b.style.border = i === state.gallery ? '1.5px solid ' + GREEN : '1.5px solid rgba(11,59,35,.14)';
      b.style.background = i === state.gallery ? LIME : 'transparent';
    });
  }
  if (gal) {
    thumbs.forEach(function (b, i) { b.addEventListener('click', function () { gal.scrollTo({ left: i * gal.clientWidth, behavior: 'smooth' }); state.gallery = i; renderThumbs(); }); });
    gal.addEventListener('scroll', function () {
      var i = Math.round(gal.scrollLeft / Math.max(1, gal.clientWidth));
      if (i !== state.gallery) { state.gallery = i; renderThumbs(); }
    }, { passive: true });
  }

  // ---------- Reviews ----------
  var revGrid = $('[style*="repeat(auto-fill"]');
  var revBtns = $$('button[data-track="review_filter"]');
  function renderReviews() {
    revBtns.forEach(function (b) {
      var on = b.textContent.trim() === state.reviewFilter;
      b.style.background = on ? GREEN : 'transparent'; b.style.color = on ? LIME : GREEN;
    });
    var list = C.reviews.map(function (r, i) { return Object.assign({ key: i + 1 }, r); })
      .filter(function (r) { return state.reviewFilter === 'Overall' || r.tag === state.reviewFilter; });
    revGrid.innerHTML = list.length ? list.map(function (r) {
      return '<div style="display:flex;flex-direction:column;gap:12px">' +
        '<div style="position:relative;overflow:hidden;border-radius:6px;aspect-ratio:4/5;min-width:0"><div class="slot-empty" role="img" aria-label="Customer photo" style="position:absolute;inset:0;border-radius:6px"><span>UGC · customer photo with pack · ' + esc(r.tag) + '</span></div></div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span style="color:#FF5A1F;letter-spacing:2px">' + '★★★★★'.slice(0, r.stars || 5) + '</span><span style="font-size:11px;letter-spacing:.1em;font-weight:800;text-transform:uppercase;border:1px solid rgba(11,59,35,.3);padding:3px 7px;border-radius:3px">' + esc(r.tag) + '</span></div>' +
        '<p style="margin:0;font-size:16px;font-weight:600;letter-spacing:-.01em;text-wrap:pretty">' + esc(r.text) + '</p>' +
        '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">' + esc(r.name) + '</strong>' + (r.verified ? ' · Verified purchase' : '') + '</div></div>';
    }).join('') : '<p style="grid-column:1/-1;margin:0;color:#3E6B50">No reviews for this filter yet.</p>';
  }
  revBtns.forEach(function (b) { b.addEventListener('click', function () { state.reviewFilter = b.textContent.trim(); renderReviews(); track('review_filter', { filter: state.reviewFilter }); }); });

  // ---------- FAQ ----------
  var faqList = $('#faq [style*="border-top: 1.5px solid"]') || $('#faq [style*="border-top:1.5px solid"]');
  function renderFaq() {
    faqList.innerHTML = C.faqs.map(function (f, i) {
      var open = state.openFaq === i;
      return '<div style="border-bottom:1px solid rgba(11,59,35,.14)">' +
        '<button type="button" data-faq="' + i + '" aria-expanded="' + open + '" class="scp4" style="display:flex;justify-content:space-between;align-items:center;gap:16px;width:100%;background:transparent;border:0;color:#0B3B23;text-align:left;padding:20px 0;font-weight:800;font-size:clamp(17px,1.4vw,20px);letter-spacing:-.01em;min-height:56px"><span>' + esc(f.q) + '</span><span style="flex:0 0 auto;width:28px;height:28px;border:1.5px solid;border-radius:50%;display:grid;place-items:center;font-size:18px;line-height:1;transform:' + (open ? 'rotate(45deg)' : 'none') + ';transition:transform .2s">+</span></button>' +
        (open ? '<p style="margin:0;padding:0 40px 22px 0;color:#3E6B50;max-width:60ch;text-wrap:pretty;animation:foraRise .25s ease">' + esc(f.a) + '</p>' : '') + '</div>';
    }).join('');
  }
  faqList.addEventListener('click', function (e) {
    var b = e.target.closest('[data-faq]'); if (!b) return;
    var i = +b.dataset.faq; state.openFaq = state.openFaq === i ? -1 : i; renderFaq();
    if (state.openFaq >= 0) track('faq_open', { question: C.faqs[i].q });
  });

  // ---------- Nutrition / ingredients drawer ----------
  var drawer = $('#drawer');
  function openDrawer(kind) {
    var nut = kind === 'nutrition';
    $('#drawer-title').textContent = nut ? 'Nutrition information' : 'Full ingredient list';
    var N = C.nutrition;
    $('#drawer-body').innerHTML =
      (nut ? '<div style="border:1.5px solid #0B3B23;border-radius:6px;padding:16px;background:#fff">' +
        '<div style="font-weight:900;font-size:20px;letter-spacing:-.02em;border-bottom:1.5px solid #0B3B23;padding-bottom:8px">Nutrition information</div>' +
        '<div data-drawer-cols style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(11,59,35,.14);font-weight:700"><span style="flex:1">Typical values</span><span style="flex:0 0 100px;text-align:right">Per 100 g</span><span style="flex:0 0 120px;text-align:right">' + esc(N.servingLabel) + '</span></div>' +
        N.rows.map(function (n) { return '<div data-drawer-cols style="display:flex;justify-content:space-between;gap:12px;font-size:14px;padding:8px 0;border-bottom:1px solid rgba(11,59,35,.1)"><span style="flex:1;font-weight:' + n.w + '">' + esc(n.label) + '</span><span style="flex:0 0 100px;text-align:right;color:#3E6B50">' + esc(n.per100) + '</span><span style="flex:0 0 120px;text-align:right;color:#3E6B50">' + esc(n.perServing) + '</span></div>'; }).join('') +
        '<div style="font-weight:900;font-size:20px;letter-spacing:-.02em;border-bottom:1.5px solid #0B3B23;padding:20px 0 8px">Active ingredients</div>' +
        '<div data-drawer-cols style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(11,59,35,.14);font-weight:700"><span style="flex:1">Per gummy · per serving</span><span style="flex:0 0 100px;text-align:right">1 gummy</span><span style="flex:0 0 120px;text-align:right">5 gummies</span></div>' +
        N.actives.map(function (a) { return '<div data-drawer-cols style="display:flex;justify-content:space-between;gap:12px;font-size:14px;padding:8px 0;border-bottom:1px solid rgba(11,59,35,.1)"><span style="flex:1">' + esc(a[0]) + '</span><span style="flex:0 0 100px;text-align:right;color:#3E6B50">' + esc(a[1]) + '</span><span style="flex:0 0 120px;text-align:right;color:#3E6B50;font-weight:700">' + esc(a[2]) + '</span></div>'; }).join('') +
        '<div style="font-size:12px;color:#3E6B50;padding-top:10px">Servings per container: 30 · Units per container: 150 · Net weight 420 g · Finished weight per gummy 2.8 g (± 5%)</div></div>' : '') +
      '<div style="display:flex;flex-direction:column">' + C.ingredientGroups.map(function (g) { return '<div style="padding:14px 0;border-bottom:1px solid rgba(11,59,35,.14)"><div style="font-size:12px;letter-spacing:.14em;font-weight:800;text-transform:uppercase;margin-bottom:6px">' + esc(g.name) + ' · ' + esc(g.count) + '</div><div style="font-size:14px;color:#3E6B50;line-height:1.55">' + esc(g.items.join(' · ')) + '</div></div>'; }).join('') + '</div>' +
      '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">Free from:</strong> ' + esc(C.freeFrom.join(', ')) + '</div>' +
      '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">Ingredients:</strong> ' + esc(C.fullIngredientList) + '</div>' +
      '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">Sweeteners:</strong> ' + esc(C.sweeteners) + ' Base: pectin (no gelatin).</div>' +
      '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">Storage:</strong> Store in tightly closed original packaging in a dry environment. Best before 24 months from manufacture when kept in a cool, dry place below 25°C, away from direct sunlight.</div>' +
      '<div style="font-size:13px;color:#3E6B50"><strong style="color:#0B3B23">Warnings:</strong> ' + esc(C.warnings.join(' ')) + '</div>';
    drawer.hidden = false; document.body.style.overflow = 'hidden';
    $('#drawer-close').focus();
    track('nutrition_open', { panel: kind });
  }
  function closeDrawer() { drawer.hidden = true; document.body.style.overflow = ''; }
  $$('[data-close-drawer]').forEach(function (el) { el.addEventListener('click', closeDrawer); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) closeDrawer(); });

  // ---------- Sticky bars ----------
  var heroCta = $('button[data-track="hero_cta_click"]');
  var stickyD = $('#sticky-desk'), stickyM = $('#sticky-mob');
  function onScroll() {
    var past = heroCta ? heroCta.parentNode.getBoundingClientRect().bottom < 0 : window.scrollY > 700;
    if (past !== state.scrolled) { state.scrolled = past; stickyD.hidden = stickyM.hidden = !past; }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Navigation / CTAs ----------
  function goPlans() {
    var el = $('#plans'); if (!el) return;
    var sticky = !stickyD.hidden ? stickyD.getBoundingClientRect().height : 0;
    scrollToEl(el, sticky + 16);
  }
  function scrollToNearestPlans() {
    var els = $$('[data-plan-selector]');
    var near = els.map(function (e) { return { e: e, d: Math.abs(e.getBoundingClientRect().top - 90) }; }).sort(function (a, b) { return a.d - b.d; })[0].e;
    scrollToEl(near, 90);
  }
  var CTA = { hero_cta_click: 'hero', add_to_cart: 'repeat_module', value_cta_click: 'value_stack', final_cta_click: 'final_cta', sticky_cta_click: 'sticky' };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-track], button');
    if (!t) return;
    var key = t.dataset && t.dataset.track;
    if (key === 'nav_shop_click') { e.preventDefault(); goPlans(); track('nav_shop_click'); return; }
    if (key === 'plan_selected') { selectPlan(t.dataset.plan); return; }
    if (key === 'nutrition_open') { openDrawer(/nutrition/i.test(t.textContent) ? 'nutrition' : 'ingredients'); return; }
    if (key && CTA[key]) { track(key); openCheckout(CTA[key] + (key === 'sticky_cta_click' ? (t.closest('#sticky-mob') ? '_mobile' : '_desktop') : '')); return; }
    if (/^See plans/.test(t.textContent.trim())) { scrollToNearestPlans(); track('sticky_cta_click'); }
  });

  // ---------- Checkout (in-page, pre-launch lead capture) ----------
  var pdpView = $('#view-pdp'), coView = $('#view-checkout');
  function openCheckout(source) {
    track('add_to_cart', { source: source }); track('checkout_start', { source: source, prelaunch: true });
    state.done = false; closeDrawer(); renderCheckout();
    pdpView.hidden = true; coView.hidden = false; stickyD.hidden = stickyM.hidden = true; state.scrolled = false;
    history.pushState({ view: 'checkout' }, '', '#checkout');
    window.scrollTo(0, 0); document.title = 'Waitlist · Fora';
    track('checkout_view', { source: source });
  }
  function showPdp(scroll) {
    coView.hidden = true; pdpView.hidden = false; document.title = PDP_TITLE;
    if (scroll) { var el = $('#plans'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90 }); }
    onScroll();
  }
  function goBack(e) {
    if (e) e.preventDefault();
    if (history.state && history.state.view === 'checkout') history.back(); else showPdp(true);
  }
  window.addEventListener('popstate', function () { if (location.hash !== '#checkout') showPdp(true); });
  $$('[data-co-back]').forEach(function (a) { a.addEventListener('click', goBack); });

  function renderCheckout() {
    var p = selPlan(), q = state.qty, months = p.id === 'three_month' ? 3 : 1;
    var one = C.plans.filter(function (x) { return x.id === 'one_time'; })[0];
    var total = num(p.total) * q, isSub = p.id !== 'one_time';
    var compare = one && isSub ? num(one.total) * months * q : 0, saving = compare ? compare - total : 0;
    var pouches = q * months;
    var set = function (k, v) { $$('[data-co="' + k + '"]').forEach(function (el) { el.textContent = v; }); };
    set('total', gbp(total)); set('totalLabel', p.totalLabel); set('name', p.name); set('perDay', p.perDay);
    set('qty', q); set('first', state.firstName || '');
    set('packs', (pouches === 1 ? 'One pouch' : pouches + ' pouches') + ' · ' + (28 * pouches) + ' daily packs' + (isSub ? ' per delivery' : ''));
    set('qtyHint', isSub ? (q === 1 ? '1 subscription' : q + ' subscriptions') : (q === 1 ? '1 pack' : q + ' packs'));
    set('purchaseType', isSub ? 'Subscription · pause, skip or cancel' : 'One-time · no subscription');
    set('billed', p.id === 'three_month' ? gbp(total) + ' every 3 months' : p.id === 'one_month' ? gbp(total) + ' monthly' : gbp(total) + ' once');
    set('compare', compare ? gbp(compare) : ''); set('saving', '−' + gbp(saving));
    set('delivery', isSub || C.product.freeShippingConfirmed ? 'Free UK delivery' : 'Calculated at next step');
    $$('[data-co="compareWrap"]').forEach(function (el) { el.style.display = compare ? 'inline' : 'none'; });
    $$('[data-co="savingRow"]').forEach(function (el) { el.hidden = !(saving > 0); });
    $$('[data-co="tag"]').forEach(function (el) {
      el.style.display = p.tag ? 'inline-block' : 'none'; el.textContent = p.tag || '';
      el.style.background = p.tag === 'BEST VALUE' ? LIME : GREEN; el.style.color = p.tag === 'BEST VALUE' ? GREEN : LIME;
    });
    var dec = $('#co-dec'); dec.disabled = q <= 1; dec.style.opacity = q <= 1 ? .35 : 1; dec.style.cursor = q <= 1 ? 'not-allowed' : 'pointer';
    $('#co-edit').hidden = state.done; $('#co-done').hidden = !state.done;
  }
  $('#co-dec').addEventListener('click', function () { if (state.qty > 1) { state.qty--; track('quantity_changed', { qty: state.qty }); renderCheckout(); } });
  $('#co-inc').addEventListener('click', function () { state.qty++; track('quantity_changed', { qty: state.qty }); renderCheckout(); });
  $('#co-summary-toggle').addEventListener('click', function () {
    var panel = $('#co-summary-panel'), open = panel.classList.toggle('open');
    this.setAttribute('aria-expanded', open); $('[data-co="toggleLabel"]').textContent = open ? 'Hide order summary' : 'Show order summary';
  });

  var form = $('#co-form'), openedAt = Date.now();
  function validFirst(v) { return v.trim() ? '' : 'Please enter your first name.'; }
  function validEmail(v) {
    var t = v.trim(); if (!t) return 'Please enter your email address.';
    return window.ForaKlaviyo.validEmail(t) ? '' : 'That email doesn’t look right — check for typos.';
  }
  function showErr(name, msg) {
    var input = form.elements[name], err = $('#err-' + name);
    err.textContent = msg; err.hidden = !msg;
    input.setAttribute('aria-invalid', !!msg); input.style.borderColor = msg ? '#D03A00' : 'rgba(11,59,35,.25)';
  }
  var validators = { firstName: validFirst, email: validEmail };
  ['firstName', 'email'].forEach(function (n) {
    form.elements[n].addEventListener('blur', function () { state.touched[n] = true; showErr(n, validators[n](form.elements[n].value)); });
    form.elements[n].addEventListener('input', function () { if (state.touched[n]) showErr(n, validators[n](form.elements[n].value)); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fe = validFirst(form.elements.firstName.value), ee = validEmail(form.elements.email.value);
    state.touched = { firstName: true, email: true }; showErr('firstName', fe); showErr('email', ee);
    if (fe || ee) { form.elements[fe ? 'firstName' : 'email'].focus(); return; }
    var p = selPlan(), btn = $('#co-submit'), label = $('#co-submit-label');
    var lead = { firstName: form.elements.firstName.value.trim(), email: form.elements.email.value.trim().toLowerCase(), plan: p.id, planName: p.name, qty: state.qty, total: gbp(num(p.total) * state.qty), source: 'prelaunch_checkout' };
    function finish() {
      state.firstName = lead.firstName; state.email = lead.email; state.done = true;
      $$('[data-co="email"]').forEach(function (el) { el.textContent = lead.email; });
      renderCheckout(); window.scrollTo({ top: 0, behavior: 'smooth' });
      track('prelaunch_lead', { plan: p.id, qty: state.qty });
    }
    // Spam traps: a filled honeypot or a submit faster than a human could manage get a fake success.
    if (form.elements.company.value || Date.now() - openedAt < 2000) { finish(); return; }
    btn.disabled = true; btn.style.opacity = .7; label.textContent = 'Joining…';
    window.ForaKlaviyo.subscribe(lead)
      .then(function () { window.ForaKlaviyo.track('Joined Waitlist', { plan: p.id, plan_name: p.name, quantity: state.qty, plan_total: lead.total }, lead.email); finish(); })
      .catch(function (err) { console.warn('Lead submit failed', err); $('#co-error').hidden = false; })
      .then(function () { btn.disabled = false; btn.style.opacity = 1; label.textContent = 'Join the waitlist'; });
  });

  // ---------- Init ----------
  var PDP_TITLE = document.title;
  renderPlans(); renderThumbs(); renderReviews(); renderFaq(); onScroll();
  if (location.hash === '#checkout') history.replaceState(null, '', location.pathname + location.search);
  track('page_view');
})();
