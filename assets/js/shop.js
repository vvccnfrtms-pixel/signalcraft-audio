// -----------------------------
// PRODUCT HOVER INTERACTIONS
// -----------------------------
const pedalCards = document.querySelectorAll('.card, .pedal-card');

pedalCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.02)';
    card.style.boxShadow = '0 6px 20px rgba(255, 217, 75, 0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
  });
});

// -----------------------------
// ADD TO CART (OPTIONAL)
// -----------------------------
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const pedalName = button.closest('.card, .pedal-card').querySelector('h4').textContent;
    alert(`Added "${pedalName}" to cart!`);
  });
});

// -----------------------------
// FILTER / SORT (OPTIONAL)
// -----------------------------
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    pedalCards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// -----------------------------
// DYNAMIC PRODUCT PREVIEW (OPTIONAL)
// -----------------------------
pedalCards.forEach(card => {
  card.addEventListener('click', () => {
    const pedalTitle = card.querySelector('h4').textContent;
    const pedalDesc = card.querySelector('p').textContent;
    const pedalImgSrc = card.querySelector('img').src;

    // Could populate a modal for product preview
    console.log(`Previewing ${pedalTitle}`);
    // Example: openModal(pedalTitle, pedalDesc, pedalImgSrc);
  });
});
