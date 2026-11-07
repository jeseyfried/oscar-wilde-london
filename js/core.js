/* Shared data, helpers, toggles and the lightbox. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var LAYERS = [
    { id: 'wilde', n: "Wilde's footsteps", c: '#1f6b4a' },
    { id: 'queer', n: 'Queer London', c: '#7a3b69' },
    { id: 'stage', n: 'Stage & song', c: '#b8862b' },
    { id: 'aesthetic', n: 'Art & Aestheticism', c: '#2f7f8c' },
    { id: 'letters', n: 'Readers & writers', c: '#3c4f7a' },
    { id: 'growth', n: 'The growing city', c: '#6d6a5f' },
    { id: 'shame', n: "London's shame", c: '#6b4430' },
    { id: 'night', n: 'Juliets of a night', c: '#b0466e' },
    { id: 'pleasure', n: 'Pleasures & sport', c: '#c46a2b' },
    { id: 'faith', n: 'Religion & spirits', c: '#7d7a2e' }
  ];
  var LAYER = {}; LAYERS.forEach(function (l) { LAYER[l.id] = l; });

  var PLACES = (window.OWL_PLACES || []).slice();
  var BY_ID = {}; PLACES.forEach(function (p) { BY_ID[p.id] = p; });
  var PEOPLE = window.OWL_PEOPLE || {};
  var SOURCES = window.OWL_SOURCES || {};
  var IMAGES = window.OWL_IMAGES || {};
  var WALKS = window.OWL_WALKS || [];

  // people -> places, places -> walks
  var PEOPLE_PLACES = {};
  PLACES.forEach(function (p) { (p.p || []).forEach(function (k) { (PEOPLE_PLACES[k] = PEOPLE_PLACES[k] || []).push(p.id); }); });
  var PLACE_WALKS = {};
  WALKS.forEach(function (w) { w.stops.forEach(function (s) { var a = PLACE_WALKS[s[0]] = PLACE_WALKS[s[0]] || []; if (a.indexOf(w.id) < 0) a.push(w.id); }); });

  // all dated events
  var MONTHS = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12, spring: 4, summer: 7, autumn: 10, fall: 10, winter: 12 };
  function sortKey(date) {
    var s = (date || '').toLowerCase(), m = 0, d = 0;
    Object.keys(MONTHS).forEach(function (k) { if (!m && s.indexOf(k) >= 0) m = MONTHS[k]; });
    var dm = s.match(/^(\d{1,2})/); if (dm) d = +dm[1];
    return m * 100 + d;
  }
  var EVENTS = [];
  PLACES.forEach(function (p) { (p.ev || []).forEach(function (e) { EVENTS.push({ y: e[0], d: e[1], t: e[2], id: p.id, k: e[0] * 10000 + sortKey(e[1]) }); }); });
  EVENTS.sort(function (a, b) { return a.k - b.k; });

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function color(p) { return (LAYER[p.L[0]] || LAYERS[0]).c; }
  function yearsLabel(p) { return p.y[0] === p.y[1] ? String(p.y[0]) : p.y[0] + '–' + p.y[1]; }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function still() { return root.classList.contains('still'); }

  // motion toggle
  var tm = document.getElementById('toggleMotion');
  function paint() { if (!tm) return; var on = !still(); tm.setAttribute('aria-pressed', on ? 'true' : 'false'); tm.textContent = on ? 'Motion on' : 'Motion off'; }
  if (tm) tm.addEventListener('click', function () { root.classList.toggle('still'); store('owl-motion', still() ? 'off' : 'on'); paint(); });
  paint();

  // lightbox
  var lb = document.getElementById('lightbox'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap'), lastFocus = null;
  function credit(im) {
    var bits = [];
    if (im.a && im.a !== 'Unknown author') bits.push(esc(im.a));
    if (im.l) bits.push(esc(im.l));
    return bits.join(' · ') + (im.u ? ' · <a href="' + esc(im.u) + '" target="_blank" rel="noopener">source</a>' : '');
  }
  function openLightbox(im) {
    if (!lb) return;
    lastFocus = document.activeElement;
    lbImg.src = im.f; lbImg.alt = im.t || '';
    lbCap.innerHTML = '<strong>' + esc(im.t) + '</strong>' + (im.y ? ' (' + esc(im.y) + ')' : '') + '<br>' + credit(im);
    lb.hidden = false; document.getElementById('lbClose').focus();
  }
  function closeLightbox() { if (!lb) return; lb.hidden = true; lbImg.src = ''; if (lastFocus) lastFocus.focus(); }
  if (lb) {
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLightbox(); });
  }

  // tile layers shared by both maps
  function baseLayers(map) {
    var cfg = window.OWL_CONFIG || {};
    // Today's map. CARTO's free tiles now need their own API key, so with a MapTiler key we use
    // MapTiler's Voyager style (same look); without one we fall back to the standard OpenStreetMap tiles.
    var osm = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    var modern = cfg.MAPTILER_KEY
      ? L.tileLayer('https://api.maptiler.com/maps/' + (cfg.MODERN_STYLE || 'voyager') + '/256/{z}/{x}/{y}.png?key=' + cfg.MAPTILER_KEY, {
          maxZoom: 19, attribution: '© <a href="https://www.maptiler.com/copyright/">MapTiler</a> ' + osm })
      : L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: osm });
    var historic = null;
    if (cfg.MAPTILER_KEY) {
      historic = L.tileLayer('https://api.maptiler.com/tiles/' + cfg.HISTORIC_TILESET + '/{z}/{x}/{y}.jpg?key=' + cfg.MAPTILER_KEY, {
        maxZoom: 19, maxNativeZoom: 17, attribution: 'Historic map courtesy of the <a href="https://maps.nls.uk/">National Library of Scotland</a> via MapTiler'
      });
    }
    return { modern: modern, historic: historic };
  }

  window.OWL = {
    LAYERS: LAYERS, LAYER: LAYER, PLACES: PLACES, BY_ID: BY_ID, PEOPLE: PEOPLE, SOURCES: SOURCES,
    IMAGES: IMAGES, WALKS: WALKS, EVENTS: EVENTS, PEOPLE_PLACES: PEOPLE_PLACES, PLACE_WALKS: PLACE_WALKS,
    esc: esc, color: color, yearsLabel: yearsLabel, store: store, read: read, still: still,
    openLightbox: openLightbox, credit: credit, baseLayers: baseLayers, bus: document.createElement('span')
  };

  // counts in the hero
  function setText(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  setText('countPlaces', PLACES.length);
  setText('countEvents', EVENTS.length);
  setText('countWalks', WALKS.length);
  setText('countPeople', Object.keys(PEOPLE).length);
})();
