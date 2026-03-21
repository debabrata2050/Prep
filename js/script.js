document.addEventListener('DOMContentLoaded', () => {
  loadVideoCards();
});

function loadVideoCards() {
  const container = document.getElementById("video-list");
  const loader = document.getElementById("loader");

  const params = new URLSearchParams(window.location.search);
  const subjectKey = params.get("name");

  if (!subjectKey || typeof allVideoData === "undefined" || !allVideoData[subjectKey]) {
    if (loader) loader.style.display = "none";
    container.innerHTML = "<p style='text-align:center;color:var(--text-muted);padding:40px;'>No videos available.</p>";
    return;
  }

  const data = allVideoData[subjectKey];

  document.title = data.name + " — Prep";
  const h = document.getElementById("subject-title");
  const c = document.getElementById("video-count");
  if (h) h.textContent = data.name;

  // Calculate total videos
  let totalCount = 0;
  if (data.categories) {
    data.categories.forEach(cat => totalCount += cat.videos.length);
  } else if (data.videos) {
    totalCount = data.videos.length;
  }
  if (c) c.textContent = `${totalCount} video${totalCount !== 1 ? 's' : ''}`;

  // Helper to render a video card
  const createVideoCard = (v, instructor, thumbnail) => {
    const link = `../video.html?id=${v.id}&title=${encodeURIComponent(v.title)}&subject=${encodeURIComponent(data.name)}`;
    const defaultThumb = "../" + thumbnail;
    const dmThumb = `https://www.dailymotion.com/thumbnail/video/${v.id}`;

    const card = document.createElement("a");
    card.href = link;
    card.className = "v-card";
    card.innerHTML = `
      <div class="thumb-wrap">
        <img class="thumb" loading="lazy"
             src="${defaultThumb}"
             alt="${v.title}">
        <div class="play-btn"><div class="play-circle"></div></div>
      </div>
      <div class="body">
        <p class="title">${v.title}</p>
        <div class="v-meta">
          <span class="instructor">👨‍🏫 ${instructor}</span>
          <span class="date">${v.date}</span>
        </div>
      </div>
    `;

    // Fetch DailyMotion thumbnail in the background
    const imgObj = new Image();
    imgObj.onload = () => {
      const imgTarget = card.querySelector('.thumb');
      if (imgTarget) imgTarget.src = dmThumb;
    };
    imgObj.src = dmThumb;
    return card;
  };

  if (data.categories) {
    container.classList.remove("video-grid"); // Change container to a section list
    container.innerHTML = "";
    data.categories.forEach(cat => {
      const section = document.createElement("section");
      section.className = "cat-section";
      section.innerHTML = `
        <div class="cat-header">
          <h2 class="cat-title">${cat.name}</h2>
          <button class="cat-toggle" aria-label="Toggle Section">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div class="video-grid-wrapper">
          <div class="video-grid"></div>
        </div>
      `;
      container.appendChild(section);

      const header = section.querySelector(".cat-header");
      const gridWrapper = section.querySelector(".video-grid-wrapper");
      const grid = section.querySelector(".video-grid");

      // Toggle collapse
      header.addEventListener("click", () => {
        section.classList.toggle("is-collapsed");
      });

      // Lazy load videos for this category
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          cat.videos.forEach(v => {
            grid.appendChild(createVideoCard(v, data.instructor, data.thumbnail));
          });
          observer.disconnect();
        }
      }, { rootMargin: '200px' });
      observer.observe(section);
    });
  } else if (data.videos) {
    data.videos.forEach(v => {
      container.appendChild(createVideoCard(v, data.instructor, data.thumbnail));
    });
  }

  if (loader) loader.style.display = "none";
}
