/* The main map: themes, years, search, list, place card, walks. */
(function () {
  'use strict';
  var O = window.OWL; if (!O || !window.L) return;
  var esc = O.esc;
  var cfg = window.OWL_CONFIG || {};

  var state = {
    layers: {}, year: null, q: '', sel: null, walk: null, walkIdx: 0, person: null
  };
  O.LAYERS.forEach(function (l) { state.layers[l.id] = true; });

  // ---------- map ----------
  var map = L.map('map', { zoomControl: true, minZoom: 10, maxZoom: 18, preferCanvas: false })
    .setView([cfg.START.lat, cfg.START.lng], cfg.START.zoom);
  var tiles = O.baseLayers(map);
  tiles.modern.addTo(map);
  var mapEl = document.getElementById('map');
  var bmButtons = document.querySelectorAll('.bm');
  function setBase(which) {
    if (which === 'historic' && !tiles.historic) which = 'period';
    if (tiles.historic) { if (which === 'historic') { map.removeLayer(tiles.modern); tiles.historic.addTo(map); } else { map.removeLayer(tiles.historic); if (!map.hasLayer(tiles.modern)) tiles.modern.addTo(map); } }
    mapEl.classList.toggle('period', which === 'period');
    bmButtons.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-bm') === which ? 'true' : 'false'); });
    O.store('owl-base', which);
  }
  if (tiles.historic) { document.getElementById('bmHistoric').hidden = false; var nc = document.getElementById('nlsCredit'); if (nc) nc.hidden = false; }
  bmButtons.forEach(function (b) { b.addEventListener('click', function () { setBase(b.getAttribute('data-bm')); }); });
  setBase(O.read('owl-base') || 'period');

  var markers = {};
  var ringLayer = L.layerGroup().addTo(map);
  var walkLayer = L.layerGroup().addTo(map);

  O.PLACES.forEach(function (p) {
    var m = L.circleMarker(p.ll, {
      radius: p.L[0] === 'wilde' ? 7 : 6, weight: 1.5, color: '#fffdf6', fillColor: O.color(p), fillOpacity: .92,
      dashArray: p.st === 'approx' ? '2 2' : null
    });
    m.bindTooltip(p.n, { className: 'owl-tip', direction: 'top', offset: [0, -6] });
    m.on('click', function () { select(p.id, { from: 'map' }); });
    m.addTo(map);
    markers[p.id] = m;
  });

  // ---------- filters ----------
  var chips = document.getElementById('layerChips');
  var counts = {}; O.PLACES.forEach(function (p) { p.L.forEach(function (l) { counts[l] = (counts[l] || 0) + 1; }); });
  O.LAYERS.forEach(function (l) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.style.setProperty('--c', l.c);
    b.setAttribute('aria-pressed', 'true'); b.setAttribute('data-layer', l.id);
    b.innerHTML = '<i></i>' + esc(l.n) + ' <b>' + (counts[l.id] || 0) + '</b>';
    b.title = 'Click to toggle; double-click to show only this theme';
    b.addEventListener('click', function () { state.layers[l.id] = !state.layers[l.id]; paintChips(); refresh(); });
    b.addEventListener('dblclick', function (e) { e.preventDefault(); O.LAYERS.forEach(function (x) { state.layers[x.id] = x.id === l.id; }); paintChips(); refresh(); });
    chips.appendChild(b);
  });
  var allBtn = document.createElement('button');
  allBtn.type = 'button'; allBtn.className = 'chip'; allBtn.textContent = 'All'; allBtn.style.setProperty('--c', '#221c17');
  allBtn.addEventListener('click', function () { var any = O.LAYERS.some(function (l) { return !state.layers[l.id]; }); O.LAYERS.forEach(function (l) { state.layers[l.id] = any; }); paintChips(); refresh(); });
  chips.appendChild(allBtn);
  function paintChips() { chips.querySelectorAll('[data-layer]').forEach(function (b) { b.setAttribute('aria-pressed', state.layers[b.getAttribute('data-layer')] ? 'true' : 'false'); }); }

  var yr = document.getElementById('year'), yrOut = document.getElementById('yearOut'), yrAll = document.getElementById('yearAll'), yrPlay = document.getElementById('yearPlay');
  function setYear(y) {
    state.year = y; yrOut.textContent = y == null ? 'all' : y;
    yrAll.setAttribute('aria-pressed', y == null ? 'true' : 'false');
    if (y != null) yr.value = y;
    refresh();
    O.bus.dispatchEvent(new CustomEvent('year', { detail: y }));
  }
  yr.addEventListener('input', function () { stopPlay(); setYear(+yr.value); });
  yrAll.addEventListener('click', function () { stopPlay(); setYear(null); });
  var playTimer = null;
  function stopPlay() { if (playTimer) { clearInterval(playTimer); playTimer = null; yrPlay.textContent = '▶ Play'; } }
  yrPlay.addEventListener('click', function () {
    if (playTimer) { stopPlay(); return; }
    var y = state.year == null || state.year >= 1897 ? 1879 : state.year + 1;
    setYear(y); yrPlay.textContent = '❚❚ Pause';
    playTimer = setInterval(function () { if (state.year >= 1897) { stopPlay(); return; } setYear(state.year + 1); }, O.still() ? 2600 : 1600);
  });

  var qEl = document.getElementById('q'), qTimer;
  qEl.addEventListener('input', function () { clearTimeout(qTimer); qTimer = setTimeout(function () { state.q = qEl.value.trim().toLowerCase(); state.person = null; refresh(); }, 150); });

  function hay(p) {
    if (!p._hay) {
      var ppl = (p.p || []).map(function (k) { return O.PEOPLE[k] ? O.PEOPLE[k].n : ''; }).join(' ');
      var ev = (p.ev || []).map(function (e) { return e[0] + ' ' + e[1] + ' ' + e[2]; }).join(' ');
      p._hay = (p.n + ' ' + p.a + ' ' + p.s + ' ' + p.t.join(' ') + ' ' + ppl + ' ' + ev).toLowerCase();
    }
    return p._hay;
  }
  function visible(p) {
    if (!p.L.some(function (l) { return state.layers[l]; })) return false;
    if (state.person && (p.p || []).indexOf(state.person) < 0) return false;
    if (state.q) {
      var words = state.q.split(/\s+/);
      for (var i = 0; i < words.length; i++) if (hay(p).indexOf(words[i]) < 0) return false;
    }
    return true;
  }
  function inYear(p) { return state.year == null || (p.y[0] <= state.year && state.year <= p.y[1]); }
  function hasEvent(p) { return state.year != null && (p.ev || []).some(function (e) { return e[0] === state.year; }); }

  var list = document.getElementById('placeList'), countEl = document.getElementById('listCount');
  function refresh() {
    ringLayer.clearLayers();
    var shown = [];
    O.PLACES.forEach(function (p) {
      var m = markers[p.id], vis = visible(p), on = inYear(p);
      if (vis && !state.walk) {
        if (!map.hasLayer(m)) m.addTo(map);
        m.setStyle({ fillOpacity: on ? .92 : .12, opacity: on ? 1 : .25 });
        if (on) shown.push(p);
        if (hasEvent(p)) {
          var r = L.circleMarker(p.ll, { radius: 11, color: O.color(p), weight: 2, fill: false, interactive: false, className: O.still() ? '' : 'pulse' });
          ringLayer.addLayer(r);
        }
      } else if (state.walk) {
        if (map.hasLayer(m)) map.removeLayer(m);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    });
    if (state.sel && markers[state.sel] && map.hasLayer(markers[state.sel])) markers[state.sel].setStyle({ weight: 3, color: '#221c17' }).bringToFront();
    // list
    if (state.walk) {
      var w = state.walk;
      list.innerHTML = w.stops.map(function (st, i) {
        var p = O.BY_ID[st[0]];
        return '<li><button type="button" class="is-stop" data-stop="' + i + '"' + (i === state.walkIdx ? ' aria-current="true"' : '') + ' style="--wc:' + w.c + '"><span class="num">' + (i + 1) + '</span><span><span class="nm">' + esc(p.n) + '</span><span class="yr">' + esc(st[1]) + '</span></span></button></li>';
      }).join('');
      countEl.textContent = w.n + ': ' + w.stops.length + ' stops';
      return;
    }
    var sorted = shown.slice().sort(function (a, b) {
      var ea = hasEvent(a) ? 0 : 1, eb = hasEvent(b) ? 0 : 1;
      return ea - eb || a.n.localeCompare(b.n);
    });
    list.innerHTML = sorted.map(function (p) {
      return '<li><button type="button" data-id="' + p.id + '"' + (p.id === state.sel ? ' aria-current="true"' : '') + ' style="--c:' + O.color(p) + '">' +
        '<span class="dot"></span><span><span class="nm">' + esc(p.n) + '</span><span class="yr">' + esc(O.LAYER[p.L[0]].n) + ' · ' + O.yearsLabel(p) + (hasEvent(p) ? ' · <b>' + state.year + '</b>' : '') + '</span></span></button></li>';
    }).join('');
    var msg = sorted.length + ' place' + (sorted.length === 1 ? '' : 's');
    if (state.year != null) msg += ' in ' + state.year;
    if (state.person && O.PEOPLE[state.person]) msg += ' linked to ' + O.PEOPLE[state.person].n + ' (search box clears this)';
    countEl.textContent = msg;
  }
  list.addEventListener('click', function (e) {
    var s = e.target.closest('button[data-stop]'); if (s) { goStop(+s.getAttribute('data-stop')); return; }
    var b = e.target.closest('button[data-id]'); if (b) select(b.getAttribute('data-id'), { from: 'list' });
  });

  // ---------- card ----------
  var card = document.getElementById('card');
  var emptyHTML = card.innerHTML;
  function srcLine(p) {
    var out = [];
    if (p.b && p.b.length) out.push('<li><strong>The book</strong>: von Eckardt, Gilman &amp; Chamberlin, <cite>Oscar Wilde\'s London</cite> (1987), ' + (p.b.length > 1 ? 'pp. ' : 'p. ') + p.b.join(', ') + '.</li>');
    (p.r || []).forEach(function (k) { var s = O.SOURCES[k]; if (s) out.push('<li>' + esc(s.full) + '</li>'); });
    return out.length ? '<ul class="srcs">' + out.join('') + '</ul>' : '';
  }
  function gallery(p) {
    var ims = O.IMAGES[p.id] || [];
    if (!ims.length) return '';
    return '<div class="gallery' + (ims.length === 1 ? ' gallery--one' : '') + '">' + ims.map(function (im, i) {
      return '<figure><button type="button" data-img="' + i + '" aria-label="Enlarge: ' + esc(im.t) + '"><img loading="lazy" src="' + esc(im.f) + '" alt="' + esc(im.alt || im.t) + '"></button>' +
        '<figcaption>' + esc(im.t) + (im.y && String(im.t).indexOf(String(im.y)) < 0 ? ' (' + esc(im.y) + ')' : '') + '. ' + O.credit(im) + '</figcaption></figure>';
    }).join('') + '</div>';
  }
  var STATUS = { survives: 'Building or site survives', site: 'Building gone · site marked', approx: 'Approximate location' };
  function nearby(p) {
    var here = L.latLng(p.ll);
    return O.PLACES.filter(function (q) { return q.id !== p.id; })
      .map(function (q) { return { q: q, d: here.distanceTo(q.ll) }; })
      .filter(function (x) { return x.d < 450; }).sort(function (a, b) { return a.d - b.d; }).slice(0, 5);
  }
  function render(p) {
    var lay = p.L.map(function (l) { return '<span style="--c:' + O.LAYER[l].c + '">' + esc(O.LAYER[l].n) + '</span>'; }).join('');
    var ev = (p.ev || []).length ? '<ul class="events">' + p.ev.map(function (e) { return '<li><b>' + e[0] + (e[1] ? ', ' + esc(e[1]) : '') + '</b>: ' + esc(e[2]) + '</li>'; }).join('') + '</ul>' : '';
    var ppl = (p.p || []).filter(function (k) { return O.PEOPLE[k]; }).map(function (k) { return '<a href="#" data-person="' + k + '">' + esc(O.PEOPLE[k].n) + '</a>'; }).join(', ');
    var walks = (O.PLACE_WALKS[p.id] || []).map(function (wid) { var w = O.WALKS.filter(function (x) { return x.id === wid; })[0]; return '<a href="#" data-walk="' + wid + '">' + esc(w.n) + '</a>'; }).join('<br>');
    var nb = nearby(p).map(function (x) { return '<a href="#" data-goto="' + x.q.id + '">' + esc(x.q.n) + '</a> <span class="n">(' + Math.round(x.d / 10) * 10 + ' m)</span>'; }).join('<br>');
    card.innerHTML =
      '<div class="card__layers">' + lay + '</div>' +
      '<h3>' + esc(p.n) + '</h3>' +
      '<p class="card__addr">' + esc(p.a) + '</p>' +
      '<p class="card__status">' + esc(STATUS[p.st] || '') + ' · ' + O.yearsLabel(p) + '</p>' +
      '<p class="card__sum">' + esc(p.s) + '</p>' +
      gallery(p) +
      p.t.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
      ev +
      (ppl ? '<h4>People</h4><p class="people">' + ppl + '</p>' : '') +
      (walks ? '<h4>On the walks</h4><p class="walklinks">' + walks + '</p>' : '') +
      (nb ? '<h4>Nearby</h4><p class="nearby">' + nb + '</p>' : '') +
      '<h4>Sources</h4>' + srcLine(p);
    card.scrollTop = 0;
  }
  card.addEventListener('click', function (e) {
    var a = e.target.closest('[data-goto],[data-person],[data-walk],[data-img]');
    if (!a) return;
    e.preventDefault();
    if (a.hasAttribute('data-goto')) select(a.getAttribute('data-goto'), { fly: true });
    else if (a.hasAttribute('data-person')) showPerson(a.getAttribute('data-person'));
    else if (a.hasAttribute('data-walk')) startWalk(a.getAttribute('data-walk'));
    else if (a.hasAttribute('data-img')) { var p = O.BY_ID[state.sel]; O.openLightbox(O.IMAGES[p.id][+a.getAttribute('data-img')]); }
  });

  function select(id, opt) {
    opt = opt || {};
    var p = O.BY_ID[id]; if (!p) return;
    if (state.sel && markers[state.sel]) markers[state.sel].setStyle({ weight: 1.5, color: '#fffdf6' });
    state.sel = id;
    // make sure it is visible
    if (!visible(p) && !state.walk) { p.L.forEach(function (l) { state.layers[l] = true; }); state.q = ''; qEl.value = ''; state.person = null; paintChips(); }
    if (!inYear(p) && !state.walk) setYear(null); else refresh();
    var m = markers[id];
    if (m && map.hasLayer(m)) m.setStyle({ weight: 3, color: '#221c17' }).bringToFront();
    if (opt.fly || opt.from === 'list' || opt.from === 'external') map.flyTo(p.ll, Math.max(map.getZoom(), 15), { duration: O.still() ? 0 : .8 });
    render(p);
    var btn = list.querySelector('[data-id="' + id + '"]'); if (btn && opt.from !== 'list') btn.scrollIntoView({ block: 'nearest' });
    if (history.replaceState) history.replaceState(null, '', '#place=' + id);
  }

  function showPerson(k) {
    var per = O.PEOPLE[k]; if (!per) return;
    stopWalk(); state.person = k; state.q = ''; qEl.value = '';
    O.LAYERS.forEach(function (l) { state.layers[l.id] = true; }); paintChips(); setYear(null);
    var pts = (O.PEOPLE_PLACES[k] || []).map(function (id) { return O.BY_ID[id].ll; });
    if (pts.length) map.flyToBounds(L.latLngBounds(pts).pad(.3), { maxZoom: 15, duration: O.still() ? 0 : .8 });
    card.innerHTML = '<h3>' + esc(per.n) + '</h3><p class="card__addr">' + esc(per.d || '') + '</p><p class="card__sum">' + esc(per.b) + '</p><h4>Places</h4><p class="nearby">' +
      (O.PEOPLE_PLACES[k] || []).map(function (id) { return '<a href="#" data-goto="' + id + '">' + esc(O.BY_ID[id].n) + '</a>'; }).join('<br>') + '</p>';
    document.getElementById('explore').scrollIntoView({ behavior: O.still() ? 'auto' : 'smooth' });
  }

  // ---------- walks ----------
  var bar = document.getElementById('walkBar');
  function startWalk(id, idx) {
    var w = O.WALKS.filter(function (x) { return x.id === id; })[0]; if (!w) return;
    state.walk = w; state.walkIdx = idx || 0; stopPlay(); state.year = null; yrOut.textContent = 'all'; yrAll.setAttribute('aria-pressed', 'true');
    walkLayer.clearLayers();
    var pts = w.stops.map(function (s) { return O.BY_ID[s[0]].ll; });
    L.polyline(pts, { color: w.c, weight: 2.5, opacity: .55, dashArray: '5 7' }).addTo(walkLayer);
    w.stops.forEach(function (s, i) {
      var p = O.BY_ID[s[0]];
      var icon = L.divIcon({ className: 'stopnum', html: String(i + 1), iconSize: [22, 22] });
      var mk = L.marker(p.ll, { icon: icon, keyboard: false, zIndexOffset: i }).bindTooltip(p.n, { className: 'owl-tip', direction: 'top', offset: [0, -10] });
      mk.on('click', function () { goStop(i); });
      walkLayer.addLayer(mk);
    });
    bar.style.setProperty('--wc', w.c); document.querySelector('.mapwrap').style.setProperty('--wc', w.c);
    bar.hidden = false;
    refresh();
    map.fitBounds(L.latLngBounds(pts).pad(.15), { animate: !O.still() });
    goStop(state.walkIdx, true);
    document.getElementById('explore').scrollIntoView({ behavior: O.still() ? 'auto' : 'smooth' });
  }
  function goStop(i, first) {
    var w = state.walk; if (!w) return;
    i = Math.max(0, Math.min(w.stops.length - 1, i)); state.walkIdx = i;
    var s = w.stops[i], p = O.BY_ID[s[0]];
    document.getElementById('walkTitle').textContent = w.n + ' · stop ' + (i + 1) + ' of ' + w.stops.length;
    document.getElementById('walkStep').textContent = p.n + ': ' + s[1];
    state.sel = p.id; render(p);
    list.querySelectorAll('[data-stop]').forEach(function (b) { var on = +b.getAttribute('data-stop') === i; b.setAttribute('aria-current', on ? 'true' : 'false'); if (on) b.scrollIntoView({ block: 'nearest' }); });
    if (!first) map.flyTo(p.ll, Math.max(map.getZoom(), 15), { duration: O.still() ? 0 : .8 });
    if (history.replaceState) history.replaceState(null, '', '#walk=' + w.id + '&stop=' + (i + 1));
  }
  function stopWalk() { if (!state.walk) return; state.walk = null; walkLayer.clearLayers(); bar.hidden = true; refresh(); }
  document.getElementById('walkPrev').addEventListener('click', function () { goStop(state.walkIdx - 1); });
  document.getElementById('walkNext').addEventListener('click', function () { goStop(state.walkIdx + 1); });
  document.getElementById('walkClose').addEventListener('click', stopWalk);
  document.addEventListener('keydown', function (e) {
    if (!state.walk || /input|textarea/i.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') goStop(state.walkIdx + 1); else if (e.key === 'ArrowLeft') goStop(state.walkIdx - 1);
  });

  // empty-card shortcuts and external links
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-goto]');
    if (a && !card.contains(a)) { e.preventDefault(); stopWalk(); select(a.getAttribute('data-goto'), { from: 'external' }); document.getElementById('explore').scrollIntoView({ behavior: O.still() ? 'auto' : 'smooth' }); }
  });
  card.addEventListener('click', function (e) { var a = e.target.closest('.card__empty [data-goto]'); if (a) { e.preventDefault(); select(a.getAttribute('data-goto'), { fly: true }); } });

  O.explorer = { select: select, startWalk: startWalk, showPerson: showPerson, setYear: setYear, map: map };

  refresh();
  // deep links: #place=id or #walk=id&stop=n
  var h = location.hash.slice(1), mm;
  if ((mm = h.match(/^place=([\w-]+)/))) select(mm[1], { fly: true });
  else if ((mm = h.match(/^walk=([\w-]+)(?:&stop=(\d+))?/))) startWalk(mm[1], mm[2] ? +mm[2] - 1 : 0);
  setTimeout(function () { map.invalidateSize(); }, 300);
  window.addEventListener('resize', function () { map.invalidateSize(); });
})();
