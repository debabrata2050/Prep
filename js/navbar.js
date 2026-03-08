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

  const marqueeHTML = `
    <div class="marquee-wrapper" id="global-marquee">
      <div class="marquee-static-label">⚠️ Disclaimer</div>
      <div class="marquee-scroll-area">
        <div class="marquee-content">
          <span>🍿 Videos are hosted on DailyMotion. If they don't play, try using a VPN! 🌍</span>
          <span>🍿 Videos are hosted on DailyMotion. If they don't play, try using a VPN! 🌍</span>
          <span>🍿 Videos are hosted on DailyMotion. If they don't play, try using a VPN! 🌍</span>
        </div>
      </div>
      <button class="close-marquee" id="close-marquee" aria-label="Close alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;

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

  const headerWrapper = document.createElement("header");
  headerWrapper.className = "site-header";
  headerWrapper.innerHTML = marqueeHTML + navHTML;
  document.body.insertBefore(headerWrapper, document.body.firstChild);

  // Marquee close
  const closeBtn = document.getElementById("close-marquee");
  const marquee = document.getElementById("global-marquee");
  if (closeBtn && marquee) {
    closeBtn.addEventListener("click", () => {
      marquee.style.display = "none";
    });
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
