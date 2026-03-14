// Consolidated PDF data — single source of truth for Reasoning
// PDFs are categorized by month for display logic

const allPdfData = {
    reasoning: {
        name: "Reasoning",
        instructor: "Saurav Singh",
        thumbnail: "assets/reasoning.png", // Reusing video thumbnail or dedicated icon
        files: [
            { title: "Misc. Topics", date: "01-12-2025", url: "pdf/91666_29782.pdf" },
            { title: "RRB Clerk Mains", date: "02-01-2026", url: "pdf/91666_30218.pdf" },
            { title: "RRB Clerk Mains", date: "05-01-2026", url: "pdf/91666_30238.pdf" },
            { title: "RRB Clerk Mains", date: "06-01-2026", url: "pdf/91666_30254.pdf" },
            { title: "RRB Clerk Mains", date: "07-01-2026", url: "pdf/91666_30289.pdf" }
        ]
    }
};

// Helper to get all PDFs for Reasoning
const reasoningPdfs = allPdfData.reasoning.files;

// Identify subjects available for PDFs (currently only Reasoning)
const pdfSubjects = Object.keys(allPdfData).map(key => ({
    name: allPdfData[key].name,
    thumbnail: allPdfData[key].thumbnail,
    link: `pages/pdfs.html?name=${key}`
}));
