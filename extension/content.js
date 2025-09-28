console.log("WeebCentral RPC content script loaded!");

// Function to scrape title, chapter, and cover
function getWeebCentralMangaInfo() {
    const cover = document.querySelector('meta[property="og:image"]')?.content || "";

    const pageTitle = document.title; // e.g., "Chapter 1 | Tokyo Ghoul | Weeb Central" or "Tokyo Ghoul | Weeb Central"
    let chapter = "";
    let title = "";

    const parts = pageTitle.split("|").map(p => p.trim());

    if (parts[0].startsWith("Chapter")) {
        // Chapter page
        chapter = parts[0];      // "Chapter 1"
        title = parts[1] || "";  // "Tokyo Ghoul"
    } else {
        // Manga main page
        chapter = "";             // No chapter
        title = parts[0] || "";   // "Tokyo Ghoul"
    }

    return { title, chapter, cover };
}

// Function to send info to background script
function sendRPCUpdate() {
    const info = getWeebCentralMangaInfo();
    console.log("Scraped info:", info);
    browser.runtime.sendMessage({ action: "updateRPC", data: info });
}

// Initial update
sendRPCUpdate();

// Observe <title> changes dynamically
const titleObserver = new MutationObserver(() => {
    sendRPCUpdate();
});

const titleElement = document.querySelector("title");
if (titleElement) {
    titleObserver.observe(titleElement, { childList: true });
}

// Optional: send periodic updates just in case
setInterval(sendRPCUpdate, 5000);
