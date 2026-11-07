/* Opening section: counting figures, the ticker of places, and a gentle tilt and parallax that follow the pointer. */
(function () {
  'use strict';
  var O = window.OWL;
  if (!O) return;
  var still = O.still();

  // 1. count the figures up from zero
  ['countPlaces', 'countEvents', 'countWalks', 'countPeople'].forEach(function (id, k) {
    var el = document.getElementById(id); if (!el) return;
    var target = parseInt(el.textContent, 10) || 0;
    if (still || !window.requestAnimationFrame) return;
    var t0 = null, dur = 1400, delay = 1250 + k * 120;
    el.textContent = '0';
    setTimeout(function () {
      requestAnimationFrame(function step(ts) {
        if (t0 == null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * e));
        if (p < 1) requestAnimationFrame(step);
      });
    }, delay);
  });

  // 2. the ticker: places from every theme, starting with Wilde's own, twice over so the loop is seamless
  var track = document.getElementById('heroTicker');
  if (track) {
    var pick = ['salisbury-st', 'tite-16', 'cafe-royal', 'lyceum', 'grosvenor-gallery', 'savoy-hotel', 'st-james-theatre', 'kettners',
      'haymarket-street', 'cheshire-cheese', 'bodley-head', 'liberty', 'seven-dials', 'tower-bridge', 'empire', 'lords',
      'cleveland-st', 'old-bailey', 'cadogan-hotel', 'metropolitan-tabernacle', 'bluegate-fields', 'crystal-palace',
      'british-museum', 'clapham-junction', 'pentonville', 'upper-bedford'];
    var items = pick.map(function (id) { return O.BY_ID[id]; }).filter(Boolean);
    var html = items.map(function (p) {
      var name = p.n.split(':')[0];
      return '<a href="#place=' + O.esc(p.id) + '" data-goto="' + O.esc(p.id) + '">' + O.esc(name) + '</a>';
    }).join('');
    track.innerHTML = html + html.replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ');
  }

  // 3. pointer: tilt the portrait and let the map drift a little the other way
  var card = document.getElementById('heroCard'), map = document.getElementById('heroMap'), hero = document.getElementById('top');
  var fine = window.matchMedia && matchMedia('(pointer: fine)').matches;
  if (!hero || !fine) return;
  var raf = null, mx = 0, my = 0;
  hero.addEventListener('pointermove', function (e) {
    if (O.still()) return;
    var r = hero.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  hero.addEventListener('pointerleave', function () { mx = my = 0; if (!raf) raf = requestAnimationFrame(apply); });
  function apply() {
    raf = null;
    if (card) { card.style.setProperty('--ry', (mx * 9).toFixed(2) + 'deg'); card.style.setProperty('--rx', (-my * 7).toFixed(2) + 'deg'); }
    if (map) { map.style.setProperty('--px', (-mx * 22).toFixed(1) + 'px'); map.style.setProperty('--py', (-my * 16).toFixed(1) + 'px'); }
  }
})();
