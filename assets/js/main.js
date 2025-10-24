// assets/js/main.js
// Handles menu toggle, close-on-link, resize, fade-in observer, year, contact form fallback

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    navLinks.classList.remove('show');

    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.classList.toggle('show');
      const expanded = navLinks.classList.contains('show');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    navLinks.addEventListener('click', function (e) {
      const t = e.target;
      if (t && t.tagName === 'A') {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // fade-in
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks — we got your message. We will respond shortly.');
      contactForm.reset();
    });
  }

  // accessibility: Escape closes menu
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});