// assets/js/shop.js
// Minimal helpers for product pages (add to cart / notify buttons) — non-blocking if absent

document.addEventListener('DOMContentLoaded', function () {
  // Add-to-cart button demo handler
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.textContent = 'Added';
      btn.classList.remove('btn-outline');
      btn.classList.add('btn');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('btn');
        btn.classList.add('btn-outline');
      }, 1300);
    });
  });

  // Notify me
  document.querySelectorAll('.notify-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.textContent = 'Noted';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Notify Me';
        btn.disabled = false;
      }, 1500);
    });
  });
});