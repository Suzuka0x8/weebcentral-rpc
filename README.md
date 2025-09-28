# Discord-RPC

Discord Rich Presence helper for WeebCentral (or customizable for other websites).

This project allows your Discord profile to show what page or content you are currently viewing on a website (like WeebCentral) using **Discord-RPC**. It works via a **Firefox extension** that scrapes the page and a **Node.js RPC helper** that communicates with Discord.

---

## Features

- Shows the current page or content details in Discord (title, chapter, etc.)
- Uses a custom large image uploaded to your Discord application
- Fully customizable — can be adapted to other websites
- Node.js helper handles the Discord RPC communication
- Firefox extension scrapes the webpage for data

---

## Installation

### 1. Discord Developer Portal
1. Go to [Discord Developer Portal](https://discord.com/developers/applications).  
2. Create a new application (or use an existing one).  
3. Upload a **large image** in the “Rich Presence Assets” section. This image will be displayed in your RPC.  
   - You can change this image anytime.  
   - Discord does **not allow URLs** for the large image; it must be uploaded to the portal.  
4. Copy the **Client ID** — this will be used in the Node.js RPC helper.

### 2. Node.js RPC Helper
1. Make sure [Node.js](https://nodejs.org/) is installed.  
2. Open a terminal in the `rpc-helper` folder:
   ```bash
   cd rpc-helper
3. Install dependencies:
   ```bash
   npm install
4. Open **server.js** and configure the following lines:
   ```js
   const clientId = "YOUR_CLIENT_ID";        // Discord Application Client ID
   const largeImageKey = "your_image_key";   // Key of the uploaded image in Discord Developer Portal
5. Start the helper:
   ```bash
   npm start
6. Keep the helper running while browsing the website — it will automatically send updates to Discord.
