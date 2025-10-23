// ==============================
// DYNAMIC CURRENT YEAR
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = currentYear;
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".main-nav ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ==============================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ==============================
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ==============================
// FADE-IN ON SCROLL
// ==============================
const fadeElements = document.querySelectorAll(".fade-in, .hero, .features article, .products-preview .card, .build-for-profit, .newsletter");

const observerOptions = {
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ==============================
// ANIMATED SVG WAVE
// ==============================
const wave = document.getElementById("wave-low");
const wavePoints = 50;
let waveArray = [];

function createWave() {
  waveArray = [];
  for (let i = 0; i <= wavePoints; i++) {
    waveArray.push({
      x: (i / wavePoints) * 1000,
      y: 60 + Math.sin(i * 0.5) * 20
    });
  }
  updateWave();
}

function updateWave() {
  const polylinePoints = waveArray.map(p => `${p.x},${p.y}`).join(" ");
  wave.setAttribute("points", polylinePoints);
}

function animateWave() {
  for (let i = 0; i <= wavePoints; i++) {
    waveArray[i].y = 60 + Math.sin(Date.now() * 0.002 + i * 0.5) * 20;
  }
  updateWave();
  requestAnimationFrame(animateWave);
}

// Initialize wave
if(wave) {
  createWave();
  animateWave();
}

// ==============================
// HERO FADE-IN ANIMATION INIT
// ==============================
const hero = document.querySelector(".hero-inner");
if(hero) {
  hero.classList.add("fade-in");
}