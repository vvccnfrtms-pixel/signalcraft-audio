// assets/js/shop.js - small behavior helpers
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.textContent = 'Added';
      btn.classList.remove('btn-outline');
      btn.classList.add('btn');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('btn');
        btn.classList.add('btn-outline');
      }, 1200);
    });
  });

  document.querySelectorAll('.notify-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.textContent = 'Noted';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Notify Me';
        btn.disabled = false;
      }, 1300);
    });
  });
});