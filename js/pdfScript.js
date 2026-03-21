document.addEventListener('DOMContentLoaded', () => {
    loadPdfs();
});

function loadPdfs() {
    const container = document.getElementById("pdf-container");
    const loader = document.getElementById("loader");

    const params = new URLSearchParams(window.location.search);
    const subjectKey = params.get("name") || "reasoning"; // Default to reasoning as per user note

    if (!subjectKey || typeof allPdfData === "undefined" || !allPdfData[subjectKey]) {
        if (loader) loader.style.display = "none";
        container.innerHTML = "<p style='text-align:center;color:var(--text-muted);padding:40px;'>No PDFs available.</p>";
        return;
    }

    const data = allPdfData[subjectKey];
    const pdfFiles = data.files;

    // Update UI headers
    document.title = data.name + " PDFs — Prep";
    const titleEl = document.getElementById("pdf-title");
    const countEl = document.getElementById("pdf-count");
    if (titleEl) titleEl.textContent = `${data.name} PDFs`;
    if (countEl) countEl.textContent = `${pdfFiles.length} file${pdfFiles.length !== 1 ? 's' : ''}`;

    // Categorize by month and year
    const grouped = groupPdfsByMonth(pdfFiles);

    // Sort to show latest first
    const monthYearKeys = Object.keys(grouped).sort((a, b) => {
        const [monthA, yearA] = a.split(" ");
        const [monthB, yearB] = b.split(" ");
        const dateA = new Date(`${monthA} 1, ${yearA}`);
        const dateB = new Date(`${monthB} 1, ${yearB}`);
        return dateB - dateA;
    });

    container.innerHTML = ""; // Clear loader if any

    monthYearKeys.forEach(monthYear => {
        const section = document.createElement("section");
        section.className = "month-section";
        
        section.innerHTML = `
            <div class="month-header">
                <h3>${monthYear}</h3>
                <button class="month-toggle" aria-label="Toggle Section">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>
            <div class="pdf-grid-wrapper">
                <div class="pdf-grid"></div>
            </div>
        `;
        
        const header = section.querySelector(".month-header");
        const grid = section.querySelector(".pdf-grid");

        // Toggle collapse
        header.addEventListener("click", () => {
            section.classList.toggle("is-collapsed");
        });

        grouped[monthYear].forEach(pdf => {
            const card = createPdfCard(pdf, data);
            grid.appendChild(card);
        });

        container.appendChild(section);
    });

    if (loader) loader.style.display = "none";
}

function groupPdfsByMonth(files) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const grouped = {};

    files.forEach(file => {
        const dateParts = file.date.split("-");
        const monthIndex = parseInt(dateParts[1]) - 1;
        const monthName = months[monthIndex];
        const year = dateParts[2];
        const groupKey = `${monthName} ${year}`;

        if (!grouped[groupKey]) {
            grouped[groupKey] = [];
        }
        grouped[groupKey].push(file);
    });

    return grouped;
}

function createPdfCard(pdf, subjectData) {
    const link = `view-pdf.html?url=${encodeURIComponent(pdf.url)}&title=${encodeURIComponent(pdf.title)}`;
    
    const card = document.createElement("a");
    card.href = link;
    card.className = "p-card";
    card.innerHTML = `
        <div class="p-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        </div>
        <div class="p-body">
            <p class="p-title">${pdf.title}</p>
            <div class="p-meta">
                <span class="p-date">${pdf.date}</span>
                <span class="p-download">View & Download</span>
            </div>
        </div>
    `;

    return card;
}
