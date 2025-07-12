document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const filename = path.split("/").pop(); // e.g., "english.html"
  const isInPagesFolder = path.includes("/pages/");

  const prefix = isInPagesFolder ? "../" : "";

  const navHTML = `
    <nav class="blue darken-2">
      <div class="nav-wrapper container">
        <a href="${filename}" class="brand-logo">${getPageTitle(filename)}</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="${prefix}index.html">Home</a></li>
          <li><a href="${prefix}pages/english.html">English</a></li>
          <li><a href="${prefix}pages/quant.html">Quant</a></li>
          <li><a href="${prefix}pages/reasoning.html">Reasoning</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><a href="${prefix}index.html">Home</a></li>
      <li><a href="${prefix}pages/english.html">English</a></li>
      <li><a href="${prefix}pages/quant.html">Quant</a></li>
      <li><a href="${prefix}pages/reasoning.html">Reasoning</a></li>
    </ul>
  `;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = navHTML;
  document.body.insertBefore(tempDiv, document.body.firstChild);

  // Initialize Materialize sidenav
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

function getPageTitle(filename) {
  const name = filename.split(".")[0].toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1);
}
