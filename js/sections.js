/* Walk cards, the chronicle, the people index, errata, bibliography and the hero picture. */
(function () {
  'use strict';
  var O = window.OWL; if (!O) return;
  var esc = O.esc;

  // walks
  var wg = document.getElementById('walkGrid');
  if (wg) {
    wg.innerHTML = O.WALKS.map(function (w) {
      var a = O.BY_ID[w.stops[0][0]], b = O.BY_ID[w.stops[w.stops.length - 1][0]];
      return '<article class="walkcard" style="--wc:' + w.c + '"><h3>' + esc(w.n) + '</h3><p class="meta">' + w.stops.length + ' stops · ' + esc(a.n) + ' to ' + esc(b.n) + '</p><p>' + esc(w.d) + '</p>' +
        '<button type="button" class="btn" data-startwalk="' + w.id + '">Start on the map</button></article>';
    }).join('');
    wg.addEventListener('click', function (e) { var b = e.target.closest('[data-startwalk]'); if (b && O.explorer) O.explorer.startWalk(b.getAttribute('data-startwalk')); });
  }

  // chronicle
  var bar = document.getElementById('yearBar'), cl = document.getElementById('chronList');
  if (bar && cl) {
    var years = {}; O.EVENTS.forEach(function (e) { years[e.y] = (years[e.y] || 0) + 1; });
    var ys = Object.keys(years).map(Number).sort();
    var sel = 1895;
    bar.innerHTML = ys.map(function (y) { return '<button type="button" role="tab" data-y="' + y + '">' + y + '<span>' + years[y] + '</span></button>'; }).join('');
    function show(y) {
      sel = y;
      bar.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-selected', +b.getAttribute('data-y') === y ? 'true' : 'false'); });
      cl.innerHTML = O.EVENTS.filter(function (e) { return e.y === y; }).map(function (e) {
        var p = O.BY_ID[e.id];
        return '<li><span class="d">' + esc(e.d || String(e.y)) + '</span><span class="t"><i style="--c:' + O.color(p) + '"></i>' + esc(e.t) + ' <a href="#explore" data-goto="' + p.id + '">' + esc(p.n) + '</a></span></li>';
      }).join('');
    }
    bar.addEventListener('click', function (e) { var b = e.target.closest('[data-y]'); if (b) show(+b.getAttribute('data-y')); });
    O.bus.addEventListener('year', function (e) { if (e.detail != null && years[e.detail]) show(e.detail); });
    show(sel);
  }

  // people
  var pg = document.getElementById('peopleGrid');
  if (pg) {
    var keys = Object.keys(O.PEOPLE).filter(function (k) { return (O.PEOPLE_PLACES[k] || []).length; });
    keys.sort(function (a, b) {
      function sn(k) { var n = O.PEOPLE[k].n.replace(/\(.*?\)|'.*?'/g, '').replace(/^(Sir|Lord|Lady|Dr|Mrs|Queen|Prince)\s+/,'').trim().split(/[\s,]+/); return n[n.length - 1]; }
      return sn(a).localeCompare(sn(b));
    });
    pg.innerHTML = keys.map(function (k) {
      var p = O.PEOPLE[k], n = (O.PEOPLE_PLACES[k] || []).length;
      return '<div class="person"><button type="button" data-person="' + k + '">' + esc(p.n) + '</button><span class="d">' + esc(p.d || '') + '</span><p>' + esc(p.b) + ' <span class="n">' + n + ' place' + (n > 1 ? 's' : '') + '</span></p></div>';
    }).join('');
    pg.addEventListener('click', function (e) { var b = e.target.closest('[data-person]'); if (b && O.explorer) O.explorer.showPerson(b.getAttribute('data-person')); });
  }

  // errata
  var er = document.getElementById('errata');
  if (er && window.OWL_ERRATA) {
    er.innerHTML = window.OWL_ERRATA.map(function (x) {
      var p = O.BY_ID[x.place];
      return '<li><span class="pg">p. ' + esc(x.p) + '</span> <span class="said">' + esc(x.said) + '</span> ' + esc(x.fix) + (p ? ' <a href="#explore" data-goto="' + p.id + '">' + esc(p.n) + '</a>' : '') + '</li>';
    }).join('');
  }

  // bibliography
  var bi = document.getElementById('biblio');
  if (bi) {
    var used = {}; O.PLACES.forEach(function (p) { (p.r || []).forEach(function (k) { used[k] = (used[k] || 0) + 1; }); });
    var ks = Object.keys(O.SOURCES).filter(function (k) { return k === 'book' || used[k]; });
    ks.sort(function (a, b) { return a === 'book' ? -1 : b === 'book' ? 1 : O.SOURCES[a].full.localeCompare(O.SOURCES[b].full); });
    bi.innerHTML = ks.map(function (k) { return '<li>' + esc(O.SOURCES[k].full) + (used[k] ? ' <span class="n">(' + used[k] + ' entries)</span>' : '') + '</li>'; }).join('');
  }

  // hero picture: use manifest if present
  var hero = window.OWL_HERO;
  if (hero) {
    var img = document.getElementById('heroImg'), cap = document.getElementById('heroCap');
    if (img) { img.src = hero.f; img.alt = hero.alt || hero.t; }
    if (cap) cap.innerHTML = esc(hero.t) + '. ' + O.credit(hero);
  }
})();
