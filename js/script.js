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
  if (c) c.textContent = `${data.videos.length} video${data.videos.length !== 1 ? 's' : ''}`;

  data.videos.forEach(v => {
    const link = `../video.html?id=${v.id}&title=${encodeURIComponent(v.title)}&subject=${encodeURIComponent(data.name)}`;

    const defaultThumb = "../" + data.thumbnail;
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
          <span class="instructor">👨‍🏫 ${data.instructor}</span>
          <span class="date">${v.date}</span>
        </div>
      </div>
    `;

    // Fetch DailyMotion thumbnail in the background and replace if successful
    const imgObj = new Image();
    imgObj.onload = () => {
      const imgTarget = card.querySelector('.thumb');
      if (imgTarget) imgTarget.src = dmThumb;
    };
    imgObj.src = dmThumb;

    container.appendChild(card);
  });

  if (loader) loader.style.display = "none";
}
