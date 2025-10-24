// assets/js/wave.js
// Lightweight wave polyline animation for the footer
document.addEventListener('DOMContentLoaded', function () {
  const poly = document.getElementById('wave-low');
  if (!poly) return;

  const width = 1000;
  const height = 80;
  const segments = 36;

  function makePoints(offset) {
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const theta = (i / segments) * Math.PI * 2 + offset;
      const y = height / 2 + Math.sin(theta * 1.1 + offset * 0.6) * 18 * Math.sin(offset / 2 + i / 8);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return pts.join(' ');
  }

  let t = 0;
  function frame() {
    if (poly) poly.setAttribute('points', makePoints(t));
    t += 0.02;
    requestAnimationFrame(frame);
  }
  frame();
});
