// ===========================
// TISHARA JEWELLERY
// script.js
// ===========================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Header shadow on scroll
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
  }

});

// Button hover animation
document.querySelectorAll(".btn").forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });

});

// Floating WhatsApp animation
const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

  setInterval(() => {

    whatsapp.animate([
      { transform: "scale(1)" },
      { transform: "scale(1.1)" },
      { transform: "scale(1)" }
    ], {
      duration: 1200
    });

  }, 5000);

}
