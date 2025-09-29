# Discord-RPC

Discord Rich Presence helper for WeebCentral (or customizable for other websites).

This project allows your Discord profile to show what page or content you are currently viewing on a website using **Discord Rich Presence**. It works via a **Firefox extension** that scrapes the page and a **Node.js RPC helper** that communicates with Discord.

---

## Features

- Shows the current page or content details in Discord (title, chapter, or custom info)
- Uses a custom large image uploaded to your Discord application
- Fully customizable — can be adapted to other websites
- Node.js helper handles the Discord RPC communication
- Firefox extension scrapes the webpage for data

---

## Downloads

Get the latest release here: [Releases](https://github.com/Suzuka0x8/weebcentral-rpc/releases)

- **Firefox Extension (.xpi)** – Load in Firefox Developer Edition
> **Important:** Right-click the `.xpi` link and choose **Save Link As...**  
> Do **not** left-click — Firefox will try to install it directly and fail.

- **Source Code (.zip)** – Clone or extract for Node.js RPC helper

---

## 1. Discord Developer Portal

1. Go to [Discord Developer Portal](https://discord.com/developers/applications).  
2. Create a new application (or use an existing one).  
3. Upload a **large image** in the “Rich Presence Assets” section.  
   - This image will be displayed in your RPC.  
   - Discord does **not allow URLs**; it must be uploaded to the portal.  
4. Copy the **Client ID** — this will be used in the Node.js RPC helper.

---

## 2. Node.js RPC Helper

1. Make sure [Node.js](https://nodejs.org/) is installed.

2. Open a terminal in the `rpc-helper` folder:

    ```bash
    cd rpc-helper
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Open `server.js` (or your RPC helper file) and configure the following lines:

    ```js
    const clientId = "YOUR_CLIENT_ID";        // Discord Application Client ID
    const largeImageKey = "your_image_key";   // Name of the uploaded image in Discord Developer Portal
    ```

    > **Tip:** Make sure the `clientId` matches your application, and the `largeImageKey` matches the uploaded image key.

5. Start the helper:

    ```bash
    npm start
    ```

6. Keep the helper running while browsing the website — it will automatically send updates to Discord.

> **Alternative:** You can also run directly with Node:  
> `node server.js`

---

## 3. Firefox Extension Setup

1. **Install Firefox Developer Edition** (recommended).  
   - The extension **cannot be loaded on standard Firefox** due to unsigned extension restrictions.  

2. **Disable signature enforcement for XPI:**  
   - Open `about:config` in Firefox Developer Edition.  
   - Search for `xpinstall.signatures.required` and set it to **false**.

3. **Load the extension:**
   - **Temporary (for testing / development on normal Firefox):**
     1. Open Firefox.  
     2. Go to **Extensions** → click the **gear icon** → **Debug Add-ons**.  
     3. Click **Load Temporary Add-on** and select the `manifest.json` in your extension folder.  
   - **Permanent (Developer Edition via XPI):**
     1. Open `about:addons`.  
     2. Click **Install Add-on From File...**  
     3. Select the `.xpi` file created from your extension folder.  

4. **Verify it’s loaded:**  
   - The extension should appear under your installed add-ons.  
   - It will stay active while Firefox is open.

5. **Open the target website:**  
   - Go to the supported site (e.g., WeebCentral).  
   - The extension reads page metadata and sends it to the Node.js RPC helper.

> **Notes:**  
> - Temporary extensions are removed when Firefox closes.  
> - Using the `.xpi` in Developer Edition with signature enforcement disabled allows permanent installation.  
> - To **create or modify your own XPI file**, see Mozilla’s guide: [Packaging a Firefox Extension](https://extensionworkshop.com/documentation/publish/package-your-extension/)

---

## Usage

1. Open a page on the supported website.  
2. The extension reads the page metadata (title, chapter, or custom info).  
3. Your Discord profile updates automatically via the RPC helper.

---

## Customization

- Change your **Discord app name** in the Developer Portal — the RPC will display it as “Playing” or another type.  
- Modify scraping logic in `content.js` to support other websites.  
- Change the **large image** in Discord Developer Portal; the extension only sends a key.  
- The helper can be adapted for any site — update `content.js` logic and client settings.

---

## Preview

![Preview](https://imgur.com/SgsvnLq.png)

---

## License

[MIT](LICENSE)

---

## Donate & Contact

<a href="https://coindrop.to/kazz" target="_blank"><img src="https://coindrop.to/embed-button.png" style="border-radius: 10px;" alt="Coindrop.to me" style="height: 57px !important;width: 229px !important;" ></a>

For questions, suggestions, or feedback, you can reach me at: [https://kxzz.dev](https://kxzz.dev)
