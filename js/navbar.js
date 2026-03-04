document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const isInPagesFolder = path.includes("/pages/");
  const prefix = isInPagesFolder ? "../" : "";

  // Build nav links
  let desktopLinks = "";
  let mobileLinks = "";

  if (typeof allVideoData !== "undefined") {
    Object.keys(allVideoData).forEach(key => {
      const name = allVideoData[key].name;
      const href = `${prefix}pages/subject.html?name=${key}`;
      desktopLinks += `<li><a href="${href}">${name}</a></li>`;
      mobileLinks += `<a href="${href}">${name}</a>`;
    });
  }

  const navHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="${prefix}index.html" class="nav-brand">Prep</a>
        <ul class="nav-links">
          <li><a href="${prefix}index.html">Home</a></li>
          ${desktopLinks}
        </ul>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
            <span class="theme-toggle-icon icon-moon">🌙</span>
            <span class="theme-toggle-icon icon-sun">☀️</span>
          </button>
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="nav-mobile" id="nav-mobile">
      <a href="${prefix}index.html">Home</a>
      ${mobileLinks}
    </div>
  `;

  const temp = document.createElement("div");
  temp.innerHTML = navHTML;
  while (temp.firstChild) {
    document.body.insertBefore(temp.firstChild, document.body.firstChild);
  }

  // Hamburger
  const hamburger = document.getElementById("nav-hamburger");
  const mobileMenu = document.getElementById("nav-mobile");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
    mobileMenu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => mobileMenu.classList.remove("open"))
    );
  }

  // Theme toggle
  initTheme();
});

function initTheme() {
  const saved = localStorage.getItem("theme");
  // Default to dark
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
}
