// ==============================
// DYNAMIC CURRENT YEAR (FOOTER)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = currentYear;
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".main-nav ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ==============================
// NOTIFY ME BUTTONS FOR COMING SOON PEDALS
// ==============================
const notifyButtons = document.querySelectorAll(".notify-btn");

notifyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const pedalName = card.querySelector("h4").textContent;
    const email = prompt(`Enter your email to be notified when "${pedalName}" is available:`);
    
    if(email) {
      // Placeholder: Here you would integrate backend or email API
      alert(`Thank you! We'll notify you at ${email} when "${pedalName}" is available.`);
      button.disabled = true;
      button.textContent = "Subscribed";
      button.classList.add("subscribed");
    }
  });
});

// ==============================
// ADD TO CART SIMULATION
// ==============================
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const pedalName = card.querySelector("h4").textContent;
    
    // Placeholder: Replace with real cart functionality
    alert(`"${pedalName}" added to your cart!`);
  });
});

// ==============================
// FADE-IN ANIMATION ON SCROLL (SHOP GRID)
// ==============================
const fadeElements = document.querySelectorAll(".products-preview .card, .build-for-profit, .newsletter");

const observerOptions = {
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ==============================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ==============================
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});