document.addEventListener("DOMContentLoaded", () => {
  const team = [
    { 
      name: "Sarah Abada",
      role: "Front-End & Styling",
      bio: "Works mainly on the HTML/CSS, keeping the pages consistent with the color theme and layout we agreed on."
    },
    { 
      name: "Celina Arakji",
      role: "Content & Organization",
      bio: "Helps plan the sections of the website, writes a lot of the text, and makes sure we follow the project instructions."
    },
    { 
      name: "Rosesh Baniya",
      role: "Basic JavaScript & Links",
      bio: "Connects the pages together, helps with simple JavaScript, and checks that the buttons and links actually work."
    },
    { 
      name: "Hachem Chamas",
      role: "Ideas & Problem-Solving",
      bio: "Comes up with ideas for features, helps fix small bugs, and gives feedback on what looks clear or confusing."
    },
    { 
      name: "Aimee Ganza",
      role: "Testing & Writing",
      bio: "Tests the pages to see what’s broken, gives comments from a user point of view, and helps with the written parts of the project."
    },
    { 
      name: "Rishi Velayutham",
      role: "File Setup & GitHub",
      bio: "Helps with the folder structure, uploads files to GitHub, and makes sure everyone’s work is saved and updated."
    }
  ];

  const container = document.getElementById("team");

  function getInitials(name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // Render each card
  team.forEach(member => {
    const card = document.createElement("div");
    card.className = "member";
    card.dataset.name = member.name;

    card.innerHTML = `
      <div class="initial-badge">${getInitials(member.name)}</div>
      <div class="member-name">${member.name}</div>
      <div class="member-role">${member.role}</div>
    `;

    container.appendChild(card);
  });

  // Modal logic
  const modal = document.getElementById("member-modal");
  const initials = document.getElementById("modal-initials");
  const mName = document.getElementById("modal-name");
  const mRole = document.getElementById("modal-role");
  const mBio = document.getElementById("modal-bio");
  const mClose = document.querySelector(".modal-close");

  function openModal(member) {
    initials.textContent = getInitials(member.name);
    mName.textContent = member.name;
    mRole.textContent = member.role;
    mBio.textContent = member.bio;
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".member");
    if (!card) return;
    const person = team.find(x => x.name === card.dataset.name);
    if (person) openModal(person);
  });

  mClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal();
