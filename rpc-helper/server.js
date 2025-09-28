const RPC = require('discord-rpc');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const clientId = '1421955684165095488';
const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => console.log('Discord RPC connected!'));

rpc.login({ clientId }).catch(console.error);


app.post('/update', (req, res) => {
    const { title, chapter } = req.body;

    const activity = {
        details: title || "Reading Manga", 
        instance: false,
        largeImageKey: "default",
        largeImageText: title || "Manga"
    };

    if(chapter && chapter.trim() !== "") {
        activity.state = chapter;
    }

    try {
        rpc.setActivity(activity);
        console.log("Updated Discord RPC:", activity);
        res.sendStatus(200);
    } catch (err) {
        console.error("RPC setActivity error (ignored):", err);
        res.sendStatus(200);
    }
});


app.listen(3000, () => console.log('RPC helper running on http://127.0.0.1:3000'));
