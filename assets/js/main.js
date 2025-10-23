// -----------------------------
// AUTOMATIC YEAR UPDATE
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// -----------------------------
// WAVEFORM ANIMATION
// -----------------------------
const waveformSVG = document.getElementById('logo-wave-svg') || document.getElementById('waveform');
const waveLow = waveformSVG ? waveformSVG.querySelector('#wave-low') : null;
const waveMid = waveformSVG ? waveformSVG.querySelector('#wave-mid') : null;
const waveHigh = waveformSVG ? waveformSVG.querySelector('#wave-high') : null;

const wavePoints = 100; // Number of points along waveform
let theta = 0;

function generateWave(amp = 20, frequency = 0.02, offset = 0) {
  let points = [];
  for (let i = 0; i <= wavePoints; i++) {
    const x = (i / wavePoints) * 1000;
    const y = 60 + Math.sin(theta + i * frequency + offset) * amp;
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}

function animateWave() {
  theta += 0.05;

  if (waveLow) waveLow.setAttribute('points', generateWave(18, 0.02, 0));
  if (waveMid) waveMid.setAttribute('points', generateWave(12, 0.04, Math.PI / 4));
  if (waveHigh) waveHigh.setAttribute('points', generateWave(6, 0.08, Math.PI / 2));

  requestAnimationFrame(animateWave);
}

if (waveformSVG) animateWave();

// -----------------------------
// PEDAL HOVER EFFECTS (SYNC WITH WAVE)
// -----------------------------
const pedals = document.querySelectorAll('.card, .pedal-card');

pedals.forEach(pedal => {
  pedal.addEventListener('mouseenter', () => {
    // On hover, increase amplitude of wave
    animateHoverWave(40);
  });

  pedal.addEventListener('mouseleave', () => {
    // Return to normal amplitude
    animateHoverWave(20);
  });
});

let currentAmp = 20;

function animateHoverWave(targetAmp) {
  currentAmp = targetAmp;
  if (!waveLow) return;

  function hoverWave() {
    theta += 0.05;
    waveLow.setAttribute('points', generateWave(currentAmp, 0.02, 0));
    waveMid.setAttribute('points', generateWave(currentAmp * 0.6, 0.04, Math.PI / 4));
    waveHigh.setAttribute('points', generateWave(currentAmp * 0.3, 0.08, Math.PI / 2));

    requestAnimationFrame(hoverWave);
  }

  hoverWave();
}

// -----------------------------
// OPTIONAL: SMOOTH SCROLL FOR ANCHORS
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
  });
});
