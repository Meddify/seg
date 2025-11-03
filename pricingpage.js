
document.addEventListener('DOMContentLoaded', () => {
  // For now, just ensure JS is wired correctly:
  console.log('Pricing page ready ');
  const rows = document.querySelectorAll(".table tbody tr");

  rows.forEach(row => {
    row.addEventListener("click", () => {
      rows.forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");
    });
  });
});

