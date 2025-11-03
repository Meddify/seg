:root {
  --brand: #F46B08;
  --bg: #6E6E6E;
  --ink: #FFFFFF;
  --text: #FFFFFF;
  --card: #2E2E2E;
  --border: rgba(255,255,255,.15);
  --shadow: 0 10px 28px rgba(0,0,0,.25);
  --radius: 12px;
}

* { box-sizing: border-box; }

body {
  font-family: "Georgia", serif;
  background: var(--bg);
  margin: 0;
  color: var(--ink);
}

/* NAV */
.nav {
  display: flex;
  justify-content: center;
  gap: 25px;
  background-color: var(--bg);
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255,255,255,.2);
}

.nav a {
  background-color: var(--brand);
  color: white;
  text-decoration: none;
  padding: 10px 22px;
  font-size: 16px;
  border-radius: 6px;
  transition: 0.2s ease;
}

.nav a:hover {
  background-color: #ff9e3d;
  transform: translateY(-2px);
}

/* HEADERS */
h1 {
  color: white;
  font-size: 42px;
  margin: 40px 20px 10px;
  text-align: center;
}

.subtitle {
  text-align: center;
  margin-bottom: 25px;
  color: #EFEFEF;
}

/* TEAM GRID */
.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 28px;
  padding: 30px 24px 60px;
  max-width: 1100px;
  margin: 0 auto;
}

.member {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 18px 14px;
  text-align: center;
  transition: 0.2s ease;
  color: var(--ink);
  cursor: pointer;
}

.member:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  transform: translateY(-3px);
}

.avatar {
  width: 96px;
  height: 96px;
  margin: 0 auto 12px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--brand);
  display: block;
}

.member-name {
  color: var(--brand);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .2px;
}

/* MODAL */
.modal { position: fixed; inset: 0; display: none; z-index: 50; }
.modal.show { display: block; }
.modal-backdrop { position:absolute; inset:0; background: rgba(0,0,0,.45); backdrop-filter: blur(4px); }

.modal-dialog {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
  width: min(520px, 92vw); background: var(--card); color: var(--ink);
  border-radius: 16px; box-shadow: 0 18px 48px rgba(0,0,0,.35);
  border: 1px solid rgba(255,255,255,.14); padding: 24px 22px 22px; text-align: center;
}

.modal-close {
  position: absolute; right: 10px; top: 10px; width: 36px; height: 36px;
  border-radius: 10px; border: 0; background: var(--brand); color: var(--text);
  font-size: 22px; line-height: 1; cursor: pointer; font-weight: 700;
  transition: transform .15s ease, filter .15s ease;
}
.modal-close:hover { transform: translateY(-1px); filter: brightness(1.05); }

.modal-avatar {
  width: 96px; height: 96px; border-radius: 50%; object-fit: cover;
  border: 4px solid var(--brand); box-shadow: 0 6px 18px rgba(0,0,0,.25);
  margin: 6px auto 12px; display: block;
}

.modal-name { font-size: 24px; color: var(--text); margin: 6px 0 2px; }
.modal-role { margin: 0 0 10px; color: #d9d9d9; font-style: italic; }
.modal-bio { margin: 0; line-height: 1.55; color: #efefef; }

@media (max-width: 480px) {
  .modal-dialog { padding: 18px 16px; }
  .modal-avatar { width: 84px; height: 84px; }
  .modal-name { font-size: 22px; }
}
