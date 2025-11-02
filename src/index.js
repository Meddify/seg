document.addEventListener("DOMContentLoaded", () => {
  console.log("🏠 Landing page loaded");
});


document.querySelectorAll("nav a").forEach(button => {
  button.addEventListener("click", () => {
    console.log(`Navigating to: ${button.textContent}`);
  });
});


const signupButton = document.querySelector('nav a:last-child');

if (signupButton) {
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("🚀 Creating your Meddify account... coming soon!");
  });
}


document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const heroImg = document.querySelector(".hero img");

if (heroImg) {
  heroImg.addEventListener("mouseenter", () => {
    console.log("🩺 Your AI medical assistant is always here to help!");
  });
}

