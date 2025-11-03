
document.addEventListener('DOMContentLoaded', () => {

  console.log('Pricing page ready ');
  const rows = document.querySelectorAll(".table tbody tr");


  const planCells = document.querySelectorAll(".plan");
  planCells.forEach(plan => {
    plan.setAttribute("title", `Click to learn more about the ${plan.textContent}plan`);
  });


  rows.forEach(row => {
    row.addEventListener("click", () => {
     
      rows.forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");

      
      const plan = row.querySelector(".plan").textContent;
      const desc = row.querySelector(".desc").textContent
      const price = row.querySelector(".price").textContent;

      alert(`Plan: ${plan}\nDescription: ${desc}\nPrice: ${price}`);                              
    });
  });
});

