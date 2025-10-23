// ==============================
// MENU TOGGLE FOR MOBILE
// ==============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ==============================
// FADE-IN ON SCROLL
// ==============================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ==============================
// DYNAMIC YEAR IN FOOTER
// ==============================
const yearSpan = document.getElementById('year');
if(yearSpan){
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// ==============================
// SVG WAVE ANIMATION
// ==============================
const wave = document.getElementById('wave-low');

function generateWave(){
  if(!wave) return;
  const points = [];
  const width = 1000;
  const height = 60;
  const amplitude = 20;
  const frequency = 0.02;
  for(let x = 0; x <= width; x+=10){
    const y = height + Math.sin(x * frequency + Date.now() * 0.002) * amplitude;
    points.push(`${x},${y}`);
  }
  wave.setAttribute('points', points.join(' '));
}

function animateWave(){
  generateWave();
  requestAnimationFrame(animateWave);
}

animateWave();