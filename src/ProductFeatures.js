window.addEventListener("load", () => {
  document.querySelectorAll(".feature").forEach((f, i) => {
    setTimeout(() => {
      f.style.opacity = "1";
      f.style.transform = "translateY(0)";
    }, i * 200); // stagger each card by 0.2s
  });
});
