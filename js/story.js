/* Scroll scene: a sticky map that follows Wilde's addresses as the steps scroll past. */
(function () {
  'use strict';
  var O = window.OWL, S = window.OWL_STORY || [];
  var el = document.getElementById('storyMap'), stepsEl = document.getElementById('storySteps'), yearEl = document.getElementById('storyYear');
  if (!O || !window.L || !el || !S.length) return;
  var esc = O.esc;

  // steps
  S.forEach(function (s, i) {
    var p = O.BY_ID[s.id]; if (!p) return;
    var d = document.createElement('div');
    d.className = 'step'; d.setAttribute('data-i', i);
    d.innerHTML = '<p class="step__year">' + esc(s.y) + '</p><h3>' + esc(s.h) + '</h3><p>' + esc(s.t) + '</p><p><a href="#explore" data-goto="' + p.id + '">' + esc(p.n) + ' on the map →</a></p>';
    stepsEl.appendChild(d);
  });

  var map = L.map(el, { zoomControl: false, attributionControl: true, scrollWheelZoom: false, dragging: false, touchZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false })
    .setView(O.BY_ID[S[0].id].ll, 14);
  var t = O.baseLayers(map);
  if (t.historic) t.historic.addTo(map); else { t.modern.addTo(map); el.classList.add('period'); }

  var pts = S.map(function (s) { return O.BY_ID[s.id].ll; });
  var trail = L.polyline([], { color: '#a8321f', weight: 3, opacity: .85 }).addTo(map);
  var dots = pts.map(function (ll, i) {
    return L.circleMarker(ll, { radius: 5, color: '#fff', weight: 1.5, fillColor: '#a8321f', fillOpacity: 0, opacity: 0 }).addTo(map);
  });
  var head = L.circleMarker(pts[0], { radius: 9, color: '#a8321f', weight: 3, fillColor: '#fff', fillOpacity: 1 }).addTo(map);
  var label = L.tooltip({ permanent: true, direction: 'right', className: 'owl-tip', offset: [10, 0] }).setLatLng(pts[0]).setContent(O.BY_ID[S[0].id].n).addTo(map);

  var current = -1;
  function go(i) {
    if (i === current) return; current = i;
    trail.setLatLngs(pts.slice(0, i + 1));
    dots.forEach(function (d, k) { var on = k <= i; d.setStyle({ fillOpacity: on ? 1 : 0, opacity: on ? 1 : 0 }); });
    head.setLatLng(pts[i]);
    label.setLatLng(pts[i]).setContent(O.BY_ID[S[i].id].n);
    yearEl.textContent = S[i].y;
    var bounds = L.latLngBounds(pts.slice(Math.max(0, i - 2), i + 1)).pad(.6);
    if (O.still()) map.fitBounds(bounds, { maxZoom: 15, animate: false });
    else map.flyToBounds(bounds, { maxZoom: 15, duration: 1.1 });
    stepsEl.querySelectorAll('.step[data-i]').forEach(function (s) { s.classList.toggle('is-active', +s.getAttribute('data-i') === i); });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) go(+en.target.getAttribute('data-i')); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    stepsEl.querySelectorAll('.step[data-i]').forEach(function (s) { io.observe(s); });
  }
  go(0);
  setTimeout(function () { map.invalidateSize(); }, 300);
  window.addEventListener('resize', function () { map.invalidateSize(); });
})();
