console.log("WeebCentral RPC content script loaded!");

function getWeebCentralMangaInfo() {
    const cover = document.querySelector('meta[property="og:image"]')?.content || "";

    const pageTitle = document.title; 
    let chapter = "";
    let title = "";

    const parts = pageTitle.split("|").map(p => p.trim());

    if (parts[0].startsWith("Chapter")) {
        // Chapter page
        chapter = parts[0];      
        title = parts[1] || "";  
    } else {
        // Manga main page
        chapter = "";             
        title = parts[0] || "";   
    }

    return { title, chapter, cover };
}


function sendRPCUpdate() {
    const info = getWeebCentralMangaInfo();
    console.log("Scraped info:", info);
    browser.runtime.sendMessage({ action: "updateRPC", data: info });
}


sendRPCUpdate();


const titleObserver = new MutationObserver(() => {
    sendRPCUpdate();
});

const titleElement = document.querySelector("title");
if (titleElement) {
    titleObserver.observe(titleElement, { childList: true });
}


setInterval(sendRPCUpdate, 5000);
