// assets/js/menu.js
(function () {
  // Small helper - only run when DOM is ready
  function domReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  domReady(function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Defensive: if elements missing, exit gracefully
    if (!menuToggle || !navLinks) {
      // Nothing to do; don't throw errors that break other scripts
      return;
    }

    // Remove any residual 'show' class on load to avoid states kept by some browsers or previews
    navLinks.classList.remove('show');

    // Toggle the navigation when hamburger clicked
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.classList.toggle('show');
      // For accessibility, set aria-expanded attribute
      const expanded = navLinks.classList.contains('show');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close the menu when a nav link is clicked (use event delegation)
    navLinks.addEventListener('click', function (e) {
      const target = e.target;
      if (target && target.tagName === 'A') {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // If the viewport resizes to desktop breakpoint, ensure menu is closed
    function handleResize() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
    window.addEventListener('resize', handleResize);

    // Optional: close menu on Escape key
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        navLinks.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
