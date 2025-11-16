document.addEventListener("DOMContentLoaded", () => {
  const team = [
    { 
      name: "Sarah Abada",  
      role: "Front-end & Accessibility",
      bio: "Leads UI implementation and ensures components follow accessibility best practices."
    },
    { 
      name: "Celine Arakji", 
      role: "Product & UX",
      bio: "Coordinates features, flow, and user experience for Meddify’s main modules."
    },
    { 
      name: "Rosesh Baniya", 
      role: "Back-end & APIs",
      bio: "Works on data handling, integrations, and the logic behind Meddify’s services."
    },
    { 
      name: "Hachem Chamas", 
      role: "Data & AI",
      bio: "Helps design and test AI features such as the smart health chatbot."
    },
    { 
      name: "Aimee Ganza", 
      role: "Research & Testing",
      bio: "Focuses on user feedback, documentation, and quality assurance."
    },
    { 
      name: "Rishi Velayutham", 
      role: "DevOps & Deployment",
      bio: "Supports deployment, version control, and keeping the project running smoothly."
    }
  ];

  const container = document.getElementById("team");
  if (!container) {
    console.error("❌ #team container not found");
    return;
  }

  function getInitials(name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // Build cards
  team.forEach(member => {
    const card = document.createElement("article");
    card.className = "member";
    card.tabIndex = 0;
    card.dataset.name = member.name;

    const initials = document.createElement("div");
    initials.className = "initial-badge";
    initials.textContent = getInitials(member.name);

    const nameEl = document.createElement("div");
    nameEl.className = "member-name";
    nameEl.textContent = member.name;

    const roleEl = document.createElement("p");
    roleEl.className = "member-role";
    roleEl.textContent = member.role;

    card.append(initials, nameEl, roleEl);
    container.appendChild(card);
  });

  // Modal refs
  const modal   = document.getElementById("member-modal");
  const mInitials = document.getElementById("modal-initials");
  const mName   = document.getElementById("modal-name");
  const mRole   = document.getElementById("modal-role");
  const mBio    = document.getElementById("modal-bio");
  const mClose  = document.querySelector(".modal-close");

  function openModal(member) {
    if (!modal) return;
    mInitials.textContent = getInitials(member.name);
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


  container.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".member");
    if (!card) return;
    e.preventDefault();
    const member = team.find(t => t.name === card.dataset.name);
    if (member) openModal(member);
  });

  
  mClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target.dataset.close === "true") closeModal();
    if (e.target.classList.contains("modal-backdrop")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("show")) closeModal();
  });
});
