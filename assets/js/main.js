// assets/js/main.js
// Handles: menu toggle, close-on-link, resize behavior, fade-in observer, wave animation, year setter, footer behaviours, contact form fallback

document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Defensive checks
  if (menuToggle && navLinks) {
    // ensure closed on load
    navLinks.classList.remove('show');

    // toggle
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.classList.toggle('show');
      const state = navLinks.classList.contains('show') ? 'true' : 'false';
      menuToggle.setAttribute('aria-expanded', state);
    });

    // close when clicking a nav item
    navLinks.addEventListener('click', function (e) {
      const t = e.target;
      if (t && t.tagName === 'A') {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // close if resizing to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Wave animation — animate polyline points with a simple loop
  (function animateWave() {
    const poly = document.getElementById('wave-low');
    if (!poly) return;
    const width = 1000;
    const height = 80;
    function makePoints(offset) {
      const points = [];
      const segments = 32;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        const theta = (i / segments) * Math.PI * 2 + offset;
        const y = height/2 + Math.sin(theta) * 18 * Math.sin(offset/2 + i/8);
        points.push(`${(x).toFixed(2)},${(y).toFixed(2)}`);
      }
      return points.join(' ');
    }
    let t = 0;
    function frame() {
      if (poly) poly.setAttribute('points', makePoints(t));
      t += 0.02;
      requestAnimationFrame(frame);
    }
    frame();
  })();

  // Contact form simulated submission if present
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // simple success animation
      alert('Thank you — your message has been received. We will respond shortly.');
      contactForm.reset();
    });
  }

  // small accessibility: close nav on Escape
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});