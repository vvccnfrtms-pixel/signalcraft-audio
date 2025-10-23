// Notify Me button interactions
const notifyButtons = document.querySelectorAll('.notify-btn');

notifyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.closest('.card').querySelector('h4').textContent;
    alert(`Thank you! We'll notify you when the "${productName}" is available.`);
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Thank you for subscribing! Updates will be sent to ${email}.`);
      newsletterForm.reset();
    }
  });
}