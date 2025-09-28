browser.runtime.onMessage.addListener((message) => {
    if(message.action === 'updateRPC'){
        console.log("Received from content.js:", message.data);
        fetch('http://127.0.0.1:3000/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message.data)
        })
        .then(res => console.log("POST response:", res.status))
        .catch(err => console.error("POST error:", err));
        
    }
});
