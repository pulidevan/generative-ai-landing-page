/* AI Essentials: "Book your 1-on-1 AI consultation" form. No payment; every booking becomes a lead in the CRM
 * (leads.aiessentials.in, POST /api/consult-lead.php).
 *
 * Source of truth: Aiess CRM repo, embeds/consult-form/. Shipped as a copy on genai.aiessentials.in and
 * link.aiessentials.in. Each site styles the same markup (.native-lead-form) with its own CSS.
 *
 * Usage:
 *   <div data-aiess-consult data-success-url="thankyou.html"></div>   renders the form inline
 *   AiessConsult.open()                                                 opens it in a bottom sheet (needs data-aiess-consult-sheet on <body>, or call it)
 * On success it dispatches `aiess:lead` on window with {name, eventId} so the page can fire its own tracking.
 */
(function () {
  'use strict';
  var BUILD = '2026.11.06-2';
  var ENDPOINT = 'https://leads.aiessentials.in/api/consult-lead.php';
  var PROFILES = ['💼 Working Professional', '🧑‍💻 Freelancer / Consultant', '🎓 Student / Fresher', '🏢 Business Owner / Founder', '🔄 Career Switcher'];
  var GOALS = ['Create Ai Videos', 'Build websites and app using AI', 'Get more clients and increase my income', 'Deliver work faster using AI',
    'Automate repetitive work', 'Add AI services to my existing business', 'Build a scalable AI-based service', 'Get promotion', 'Become AI Engineer'];
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'utm_adset', 'utm_placement', 'utm_platform', 'fbclid', 'gclid'];
  var seq = 0;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // Where THIS visit came from. Only this visit: URL UTMs, then ad click ids, then the referrer, else "direct".
  // Never an older visit's source from localStorage (that is how a LinkedIn visit weeks ago labelled a direct visit today).
  function platformFromHost(h) {
    h = (h || '').toLowerCase();
    if (!h) return '';
    if (/instagram\.com$/.test(h)) return 'instagram';
    if (/(^|\.)linkedin\.com$|lnkd\.in$/.test(h)) return 'linkedin';
    if (/whatsapp|wa\.me$/.test(h)) return 'whatsapp';
    if (/youtube\.com$|youtu\.be$/.test(h)) return 'youtube';
    if (/(^|\.)(twitter|x)\.com$|^t\.co$/.test(h)) return 'twitter';
    if (/facebook\.com$|fb\.com$|fb\.me$/.test(h)) return 'facebook';
    if (/(^|\.)google\./.test(h)) return 'google';
    if (/(^|\.)bing\.com$/.test(h)) return 'bing';
    if (/telegram|t\.me$/.test(h)) return 'telegram';
    if (/(^|\.)aiessentials\.in$/.test(h)) return h === location.hostname ? '' : h;   // our own other sites
    return h;
  }
  function resolveVisit() {
    var a = {}, q;
    try { q = new URLSearchParams(location.search); } catch (e) { q = null; }
    UTM.forEach(function (k) { var v = q && q.get(k); if (v) a[k] = v.trim().slice(0, 200); });
    var ref = '';
    try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch (e) {}
    if (ref === location.hostname) ref = '';
    a.referrer = ref ? document.referrer.slice(0, 200) : '';
    var platform = (a.utm_source || '').toLowerCase() || platformFromHost(ref) ||
      (a.fbclid ? 'facebook_or_instagram' : '') || (a.gclid ? 'google' : '') || 'direct';
    a.source_platform = platform;
    a.landing_page = location.hostname + location.pathname;
    a.source_link = location.href.slice(0, 500);
    a.device = /iPad|Tablet/i.test(navigator.userAgent) ? 'Tablet' : (/Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop');
    return a;
  }
  // Keep this visit's landing signals for the tab (in-page navigation can drop the query string), but a new
  // visit with its own UTMs or referrer replaces them.
  var VISIT = (function () {
    var now = resolveVisit(), saved = null;
    try { saved = JSON.parse(sessionStorage.getItem('aiess_consult_visit') || 'null'); } catch (e) {}
    var fresh = now.source_platform !== 'direct' || !saved;
    var v = fresh ? now : saved;
    try { sessionStorage.setItem('aiess_consult_visit', JSON.stringify(v)); } catch (e) {}
    return v;
  })();
  function attribution() {
    var a = JSON.parse(JSON.stringify(VISIT));
    a.source_link = location.href.slice(0, 500);
    return a;
  }

  var ICON = {
    user: '<svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    mail: '<svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    chev: '<svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  function markup(id, opts) {
    var opt = function (list, ph) { return '<option value="">' + ph + '</option>' + list.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join(''); };
    var f = function (name) { return id + '-' + name; };
    return '' +
      '<form class="native-lead-form" novalidate data-build="' + BUILD + '">' +
      (opts.title ? '<div class="form-header-title-block"><h3 class="form-main-title">' + esc(opts.title) + '</h3><p class="form-sub-title">' + esc(opts.subtitle || '') + '</p></div>' : '') +
      '<div class="form-group"><label for="' + f('name') + '">Full name <span class="req">*</span></label>' +
        '<div class="input-wrap">' + ICON.user + '<input id="' + f('name') + '" name="name" type="text" autocomplete="name" maxlength="80" placeholder="Your name" required></div>' +
        '<span class="field-error" role="alert" data-err="name"></span></div>' +
      '<div class="form-group"><label for="' + f('phone') + '">WhatsApp number <span class="req">*</span></label>' +
        '<div class="phone-wrap"><span class="country-badge">🇮🇳 +91</span><input id="' + f('phone') + '" name="phone" type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="14" placeholder="98765 43210" required></div>' +
        '<span class="field-error" role="alert" data-err="phone"></span></div>' +
      '<div class="form-group"><label for="' + f('email') + '">Email <span class="req">*</span></label>' +
        '<div class="input-wrap">' + ICON.mail + '<input id="' + f('email') + '" name="email" type="email" autocomplete="email" maxlength="120" placeholder="you@example.com" required></div>' +
        '<span class="field-error" role="alert" data-err="email"></span></div>' +
      '<div class="form-group"><label for="' + f('profile') + '">Which describes you? <span class="req">*</span></label>' +
        '<div class="select-wrap"><select id="' + f('profile') + '" name="profile" required>' + opt(PROFILES, 'Select one…') + '</select>' + ICON.chev + '</div>' +
        '<span class="field-error" role="alert" data-err="profile"></span></div>' +
      '<div class="form-group"><label for="' + f('goal') + '">What do you want AI to help you achieve? <span class="req">*</span></label>' +
        '<div class="select-wrap"><select id="' + f('goal') + '" name="goal" required>' + opt(GOALS, 'Select your goal…') + '</select>' + ICON.chev + '</div>' +
        '<span class="field-error" role="alert" data-err="goal"></span></div>' +
      '<div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>' +
      '<div class="form-error" role="alert" hidden></div>' +
      '<button type="submit" class="native-submit-btn"><span class="btn-text">' + esc(opts.cta || 'Book My Free Consultation') + '</span>' + ICON.arrow +
        '<span class="btn-spinner" style="display:none"></span></button>' +
      '<p class="form-trust-footer">' + ICON.lock + '<span>100% free · No payment · We reply on WhatsApp</span></p>' +
      '</form>';
  }

  function validate(v) {
    var e = {};
    if (v.name.length < 2) e.name = 'Enter your name.';
    var d = v.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '').replace(/^0(?=\d{10}$)/, '');
    if (!/^[6-9]\d{9}$/.test(d)) e.phone = 'Enter a valid 10-digit WhatsApp number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address.';
    if (!v.profile) e.profile = 'Choose what describes you.';
    if (!v.goal) e.goal = 'Choose what you want AI to help you achieve.';
    return e;
  }

  function successView(name, opts) {
    return '<div class="native-lead-form consult-success" role="status">' +
      '<div class="consult-success-icon">' + ICON.check + '</div>' +
      '<h3 class="form-main-title">You\'re booked' + (name ? ', ' + esc(name.split(' ')[0]) : '') + '!</h3>' +
      '<p class="form-sub-title">Our team will message you on WhatsApp shortly to fix a time for your free 1-on-1 AI consultation.</p>' +
      (opts.whatsapp ? '<a class="native-submit-btn" href="' + esc(opts.whatsapp) + '" target="_blank" rel="noopener">Chat with us on WhatsApp now</a>' : '') +
      '</div>';
  }

  function mount(host, opts) {
    if (host.__aiessConsult) return;
    host.__aiessConsult = true;
    opts = opts || {};
    var id = 'aiess-consult-' + (++seq);
    host.innerHTML = markup(id, opts);
    var form = host.querySelector('form');
    var btn = form.querySelector('.native-submit-btn');
    var started = false;

    function showErrors(errs) {
      form.querySelectorAll('[data-err]').forEach(function (s) {
        var k = s.getAttribute('data-err'), m = errs[k] || '';
        s.textContent = m;
        var input = form.elements[k];
        if (input) input.setAttribute('aria-invalid', m ? 'true' : 'false');
      });
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
    }
    function busy(on) {
      btn.classList.toggle('submitting', on);
      btn.disabled = on;
      btn.querySelector('.btn-text').textContent = on ? 'Booking your consultation…' : (opts.cta || 'Book My Free Consultation');
      btn.querySelector('.btn-spinner').style.display = on ? 'inline-block' : 'none';
    }
    form.addEventListener('input', function (e) {
      if (!started) { started = true; window.dispatchEvent(new CustomEvent('aiess:form_start', { detail: { form: 'ai_consultation' } })); }
      var t = e.target, s = t.name && form.querySelector('[data-err="' + t.name + '"]');
      if (s && s.textContent) { s.textContent = ''; t.setAttribute('aria-invalid', 'false'); }
    });
    form.addEventListener('change', function (e) { form.dispatchEvent(new Event('input', { bubbles: true })); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = form.querySelector('.form-error');
      err.hidden = true;
      var v = {
        name: form.elements.name.value.trim().replace(/\s+/g, ' '),
        phone: form.elements.phone.value.trim(),
        email: form.elements.email.value.trim(),
        profile: form.elements.profile.value,
        goal: form.elements.goal.value,
        website: form.elements.website.value
      };
      var errs = validate(v);
      showErrors(errs);
      if (Object.keys(errs).length) return;
      busy(true);
      v.attribution = attribution();
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v), mode: 'cors', credentials: 'omit' })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (b) { return { ok: r.ok, status: r.status, body: b }; }); })
        .then(function (res) {
          if (res.ok && res.body.ok) {
            try { sessionStorage.setItem('lead_first_name', v.name.split(' ')[0]); } catch (x) {}
            window.dispatchEvent(new CustomEvent('aiess:lead', { detail: { name: v.name, eventId: res.body.event_id || '', profile: v.profile, goal: v.goal } }));
            if (opts.successUrl) { setTimeout(function () { location.href = opts.successUrl; }, 700); return; }
            host.innerHTML = successView(v.name, opts);
            return;
          }
          busy(false);
          if (res.status === 422 && res.body.errors) { showErrors(res.body.errors); return; }
          err.textContent = res.body.error || 'Something went wrong. Please try again.';
          err.hidden = false;
        })
        .catch(function () {
          busy(false);
          err.textContent = 'Could not reach the server. Check your connection and try again.';
          err.hidden = false;
        });
    });
  }

  function fromAttrs(el) {
    return {
      title: el.getAttribute('data-title') || '',
      subtitle: el.getAttribute('data-subtitle') || '',
      cta: el.getAttribute('data-cta') || '',
      successUrl: el.getAttribute('data-success-url') || '',
      whatsapp: el.getAttribute('data-whatsapp') || ''
    };
  }

  // Bottom sheet (used on link.aiessentials.in). Reuses the page's .sheet-* dialog styles when present.
  var sheet = null;
  function open(opts) {
    opts = opts || {};
    if (!sheet) {
      sheet = document.createElement('dialog');
      sheet.className = 'sheet-dialog aiess-consult-sheet';
      sheet.setAttribute('aria-label', 'Book your free 1-on-1 AI consultation');
      sheet.innerHTML = '<div class="sheet-container"><div class="sheet-handle"></div>' +
        '<div class="sheet-header"><span class="sheet-title">' + esc(opts.sheetTitle || 'FREE // 1-ON-1 AI CONSULTATION') + '</span>' +
        '<button type="button" class="sheet-close" aria-label="Close"><svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></div>' +
        '<div class="aiess-consult-body"></div></div>';
      document.body.appendChild(sheet);
      sheet.querySelector('.sheet-close').addEventListener('click', function () { sheet.close(); });
      sheet.addEventListener('click', function (e) { if (e.target === sheet) sheet.close(); });
      mount(sheet.querySelector('.aiess-consult-body'), opts);
    }
    if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
    window.dispatchEvent(new CustomEvent('aiess:consult_open'));
    var first = sheet.querySelector('input[name="name"]');
    if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 60);
  }

  function init() { document.querySelectorAll('[data-aiess-consult]').forEach(function (el) { mount(el, fromAttrs(el)); }); }
  window.AiessConsult = { mount: mount, open: open, init: init, build: BUILD };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
