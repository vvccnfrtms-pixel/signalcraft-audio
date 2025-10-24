document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ==============================
  // Optional: Fade-in effect for sections
  // ==============================
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // ==============================
  // Update footer year
  // ==============================
  const yearSpan = document.getElementById('year');
  if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
  }
});