
document.addEventListener('DOMContentLoaded', () => {
  //For now, just ensure JS is wired correctly:
  console.log('Pricing page ready ');
  
  const rows = document.querySelectorAll(".table tbody tr");
  // Add hoover tooltips to each plan cell
  const planCells = document.querySelectorAll(".plan");
  planCells.forEach(plan => {
    plan.setAttribute("title", `Click to learn more about the ${plan.textContent}plan`);
  });

// Add click behaviour to each row
  rows.forEach(row => {
    row.addEventListener("click", () => {
      // Highlight the selected row
      rows.forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");

      // Show plan details in a popup
      const plan = row.querySelector(".plan").textContent;
      const desc = row.querySelector(".desc").textContent
      const price = row.querySelector(".price").textContent;

      alert(`Plan: ${plan}\nDescription: ${desc}\nPrice: ${price}`);                              
    });
  });
});

