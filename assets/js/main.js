// ==============================
// NAVIGATION HAMBURGER
// ==============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ==============================
// FADE-IN ANIMATION
// ==============================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ==============================
// WAVE ANIMATION (Simple Moving Polyline)
// ==============================
const wave = document.querySelector('#logo-wave-svg polyline');
if(wave){
  let wavePoints = wave.getAttribute('points').split(' ').map(p => p.split(',').map(Number));
  function animateWave(){
    wavePoints = wavePoints.map(([x,y]) => [x, y + Math.sin(Date.now() * 0.002 + x*0.01)*2]);
    wave.setAttribute('points', wavePoints.map(p => p.join(',')).join(' '));
    requestAnimationFrame(animateWave);
  }
  animateWave();
}

// ==============================
// SET CURRENT YEAR
// ==============================
document.getElementById('year').textContent = new Date().getFullYear();