
const team = [
  { name: "Sarah Abada", img: "https://via.placeholder.com/400x400.png?text=Sarah" },
  { name: "Celine Arakji", img: "https://via.placeholder.com/400x400.png?text=Celine" },
  { name: "Rosesh Baniya", img: "https://via.placeholder.com/400x400.png?text=Rosesh" },
  { name: "Hachem Chamas", img: "https://via.placeholder.com/400x400.png?text=Hachem" },
  { name: "Aimee Ganza", img: "https://via.placeholder.com/400x400.png?text=Aimee" },
  { name: "Rishi Velayutham", img: "https://via.placeholder.com/400x400.png?text=Rishi" }
];

const container = document.getElementById("team");


team.forEach(member => {
  const card = document.createElement("article");
  card.className = "member";

  const img = document.createElement("img");
  img.className = "avatar";
  img.src = member.img;
  img.alt = `${member.name} — team member`;

  const nameEl = document.createElement("div");
  nameEl.className = "member-name";
  nameEl.textContent = member.name;

  card.appendChild(img);
  card.appendChild(nameEl);

  container.appendChild(card);
});
