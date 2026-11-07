/* Themes: a full-width carousel explaining the ten map themes, with links into the map below. */
(function () {
  'use strict';
  var O = window.OWL, T = window.OWL_THEMES || [];
  var stage = document.getElementById('themeStage'), tabs = document.getElementById('themeTabs');
  if (!O || !stage || !tabs || !T.length) return;
  var esc = O.esc;

  var counts = {};
  O.PLACES.forEach(function (p) { p.L.forEach(function (l) { counts[l] = (counts[l] || 0) + 1; }); });

  function italics(s) { return esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>'); }

  // build tabs and slides
  var slides = [], tabBtns = [];
  T.forEach(function (t, i) {
    var L = O.LAYER[t.id] || { n: t.id, c: '#1f3b30' };
    var im = ((O.IMAGES[t.img.place] || [])[t.img.n || 0]) || null;

    var b = document.createElement('button');
    b.type = 'button'; b.className = 'ttab'; b.id = 'ttab-' + t.id;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'tslide-' + t.id);
    b.style.setProperty('--c', L.c);
    b.innerHTML = '<i></i>' + esc(L.n);
    b.addEventListener('click', function () { go(i, true); });
    tabs.appendChild(b); tabBtns.push(b);

    var s = document.createElement('article');
    s.className = 'tslide'; s.id = 'tslide-' + t.id; s.hidden = true;
    s.setAttribute('role', 'tabpanel'); s.setAttribute('aria-labelledby', 'ttab-' + t.id);
    s.setAttribute('aria-roledescription', 'slide');
    s.style.setProperty('--c', L.c);
    var stops = t.stops.map(function (st) {
      var p = O.BY_ID[st[0]]; if (!p) return '';
      return '<li><button type="button" class="tstop" data-tgo="' + esc(p.id) + '" data-theme="' + esc(t.id) + '">' +
        '<span class="tstop__name">' + esc(p.n) + '</span><span class="tstop__note">' + esc(st[1]) + '</span></button></li>';
    }).join('');
    var credit = im ? '<p class="tslide__credit"><span>' + esc(im.t) + (im.y && String(im.t).indexOf(String(im.y)) < 0 ? ' (' + esc(im.y) + ')' : '') + '</span> ' + O.credit(im) + '</p>' : '';
    s.innerHTML =
      '<div class="tslide__bg" role="presentation" style="background-position:' + esc(t.img.pos || '50% 50%') + (t.img.zoom ? ';--z:' + (+t.img.zoom) : '') + '"></div>' +
      '<div class="tslide__shade" role="presentation"></div>' +
      '<div class="tslide__inner">' +
        '<div class="tslide__text">' +
          '<p class="tslide__kicker"><span class="tslide__num">Theme ' + (i + 1) + ' of ' + T.length + '</span> · ' + esc(counts[t.id] || 0) + ' places</p>' +
          '<h3 class="tslide__title">' + esc(L.n) + '</h3>' +
          '<p class="tslide__lede">' + italics(t.lede) + '</p>' +
          '<div class="tslide__body">' + t.body.map(function (p) { return '<p>' + italics(p) + '</p>'; }).join('') + '</div>' +
          '<p class="tslide__ch">From the book: ' + esc(t.ch) + '</p>' +
        '</div>' +
        '<aside class="tslide__go" aria-label="Places to start with">' +
          '<h4>Start here</h4>' +
          '<ol class="tslide__stops">' + stops + '</ol>' +
          '<button type="button" class="btn tslide__all" data-tshow="' + esc(t.id) + '">Show all ' + (counts[t.id] || 0) + ' places on the map</button>' +
        '</aside>' +
      '</div>' + credit;
    s._bg = t.img.url || (im && im.f) || '';
    stage.insertBefore(s, document.getElementById('themePrev'));
    slides.push(s);
  });

  function loadBg(i) {
    var s = slides[(i + slides.length) % slides.length];
    if (s && s._bg && !s._bgLoaded) { s.querySelector('.tslide__bg').style.backgroundImage = 'url("' + s._bg.replace(/"/g, '%22') + '")'; s._bgLoaded = true; }
  }

  var cur = -1;
  function go(i, focusTab) {
    i = (i + slides.length) % slides.length;
    if (i === cur) return;
    slides.forEach(function (s, k) { s.hidden = k !== i; s.classList.toggle('is-in', k === i); });
    tabBtns.forEach(function (b, k) {
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
      b.tabIndex = k === i ? 0 : -1;
    });
    cur = i;
    loadBg(i); loadBg(i + 1); loadBg(i - 1);
    var tb = tabBtns[i];
    if (tb.scrollIntoView && tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: tb.offsetLeft - tabs.clientWidth / 2 + tb.offsetWidth / 2, behavior: O.still() ? 'auto' : 'smooth' });
    if (focusTab) tb.focus({ preventScroll: true });
    if (history.replaceState && /^#?theme=/.test(location.hash)) history.replaceState(null, '', '#theme=' + T[i].id);
  }

  document.getElementById('themePrev').addEventListener('click', function () { go(cur - 1); });
  document.getElementById('themeNext').addEventListener('click', function () { go(cur + 1); });

  // keyboard: arrows move between tabs (and work anywhere inside the section)
  document.getElementById('themes').addEventListener('keydown', function (e) {
    if (/input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, tabs.contains(e.target)); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, tabs.contains(e.target)); }
    else if (tabs.contains(e.target) && e.key === 'Home') { e.preventDefault(); go(0, true); }
    else if (tabs.contains(e.target) && e.key === 'End') { e.preventDefault(); go(slides.length - 1, true); }
  });

  // swipe on touch screens
  var sx = null, sy = null;
  stage.addEventListener('touchstart', function (e) { var t = e.touches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = sy = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // links into the map
  function toMap() { document.getElementById('explore').scrollIntoView({ behavior: O.still() ? 'auto' : 'smooth' }); }
  stage.addEventListener('click', function (e) {
    var a = e.target.closest('[data-tgo]'), b = e.target.closest('[data-tshow]');
    if (!O.explorer) return;
    if (a) {
      O.explorer.showTheme(a.getAttribute('data-theme'), { fit: false });
      O.explorer.select(a.getAttribute('data-tgo'), { from: 'external' });
      toMap();
    } else if (b) {
      O.explorer.showTheme(b.getAttribute('data-tshow'));
      if (history.replaceState) history.replaceState(null, '', '#explore');
      toMap();
    }
  });

  // start on the theme named in the address (#theme=queer), or the first
  var m = location.hash.match(/^#theme=([\w-]+)/), start = 0;
  if (m) T.forEach(function (t, i) { if (t.id === m[1]) start = i; });
  go(start);
  if (m) setTimeout(function () { document.getElementById('themes').scrollIntoView(); }, 50);
})();
