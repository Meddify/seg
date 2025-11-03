document.addEventListener("DOMContentLoaded", () => {
  const team = [
    { name: "Sarah Abada",  img: "https://via.placeholder.com/400x400.png?text=Sarah",  role: "Front-end & Accessibility", bio: "Builds elegant, accessible UIs and keeps our components consistent with design tokens." },
    { name: "Celine Arakji", img: "https://via.placeholder.com/400x400.png?text=Celine", role: "Product & QA",            bio: "Owns roadmaps, writes crisp tickets, and ensures every release ships clean." },
    { name: "Rosesh Baniya", img: "https://via.placeholder.com/400x400.png?text=Rosesh", role: "Back-end Services",       bio: "Designs APIs, databases, and performance-tuned services for reliable scale." },
    { name: "Hachem Chamas", img: "https://via.placeholder.com/400x400.png?text=Hachem", role: "Security & Auth",         bio: "Implements secure auth flows, threat models, and privacy-first data handling." },
    { name: "Aimee Ganza",   img: "https://via.placeholder.com/400x400.png?text=Aimee",  role: "UX Writing & Docs",       bio: "Turns complex flows into clear copy and keeps our docs human and helpful." },
    { name: "Rishi V.",      img: "https://via.placeholder.com/400x400.png?text=Rishi",  role: "DevOps & CI/CD",          bio: "Automates builds, tests, and deploys—so shipping is fast and stress-free." }
  ];

  const container = document.getElementById("team");
  if (!container) { console.error("❌ #team container not found"); return; }

  // Build cards
  team.forEach(member => {
    const card = document.createElement("article");
    card.className = "member";
    card.tabIndex = 0;
    card.dataset.name = member.name;

    const img = document.createElement("img");
    img.className = "avatar";
    img.src = member.img;
    img.alt = `${member.name} — team member`;

    const nameEl = document.createElement("div");
    nameEl.className = "member-name";
    nameEl.textContent = member.name;

    card.append(img, nameEl);
    container.appendChild(card);
  });

  // Modal refs
  const modal   = document.getElementById("member-modal");
  const mAvatar = document.getElementById("modal-avatar");
  const mName   = document.getElementById("modal-name");
  const mRole   = document.getElementById("modal-role");
  const mBio    = document.getElementById("modal-bio");
  const mClose  = document.querySelector(".modal-close");

  function openModal(member) {
    if (!modal) return console.error("❌ modal missing");
    mAvatar.src = member.img;
    mAvatar.alt = `${member.name} — avatar`;
    mName.textContent = member.name;
    mRole.textContent = member.role || "";
    mBio.textContent  = member.bio  || "Team member.";
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Open via click
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".member");
    if (!card) return;
    const member = team.find(t => t.name === card.dataset.name);
    if (member) openModal(member);
  });

  // Open via keyboard
  container.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".member");
    if (!card) return;
    e.preventDefault();
    const member = team.find(t => t.name === card.dataset.name);
    if (member) openModal(member);
  });

  // Close actions
  mClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => { if (e.target.dataset.close === "true") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal?.classList.contains("show")) closeModal(); });

  console.log("✅ Team page JS ready");
});
