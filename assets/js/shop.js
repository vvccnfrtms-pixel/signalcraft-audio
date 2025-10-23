// ==============================
// ADD TO CART BUTTONS
// ==============================
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const productName = card.querySelector('h4').textContent;
    alert(`${productName} has been added to your cart!`);
    // Future: integrate with actual cart system here
  });
});

// ==============================
// NOTIFY ME BUTTONS
// ==============================
const notifyButtons = document.querySelectorAll('.notify-btn');

notifyButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const productName = card.querySelector('h4').textContent;
    const userEmail = prompt(`Enter your email to be notified when ${productName} is available:`);

    if(userEmail){
      alert(`Thanks! We'll notify you at ${userEmail} when ${productName} is available.`);
      // Future: send this email to backend or newsletter system
    }
  });
});