document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature");

  features.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (i === 0) window.location.href = "chatbot.html";
      if (i === 1) window.location.href = "appointments.html";
      if (i === 2) window.location.href = "records.html";
    });
  });
});
