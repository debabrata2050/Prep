document.addEventListener('DOMContentLoaded', () => {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  loadVideoCards();
});

function loadVideoCards() {
  const container = document.getElementById("video-list");
  const subjectName = typeof subject !== "undefined" ? subject : "Subject";

  if (typeof videoData === "undefined") {
    console.error("videoData is not defined.");
    container.innerHTML = "<p>No videos available.</p>";
    return;
  }

  videoData.forEach(video => {
    const col = document.createElement("div");
    col.className = "col s12 m6 l4";

    const videoLink = `../video.html?id=${video.id}&title=${encodeURIComponent(video.title)}&subject=${encodeURIComponent(subjectName)}`;

    col.innerHTML = `
      <a href="${videoLink}" class="card-link">
        <div class="card hoverable">
          <div class="card-image">
            <img src="https://www.dailymotion.com/thumbnail/video/${video.id}" alt="${video.title}">
          </div>
          <div class="card-content">
            <div class="video-info-row">
              <div class="video-text">
                <p class="video-title">${video.title}</p>
                <span class="video-date">${video.date}</span>
              </div>
              <div class="arrow-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor">
                  <line y2="12" x2="19" y1="12" x1="5"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    `;

    container.appendChild(col);
  });
}

