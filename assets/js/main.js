// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple SVG wave animation
const wave = document.getElementById('wave-low');
let wavePoints = 50;
let waveHeight = 20;

function animateWave() {
  let path = '';
  for (let i = 0; i <= wavePoints; i++) {
    const x = (i / wavePoints) * 1000;
    const y = 60 + Math.sin(i * 0.5 + Date.now() * 0.002) * waveHeight;
    path += `${x},${y} `;
  }
  wave.setAttribute('points', path);
  requestAnimationFrame(animateWave);
}
animateWave();