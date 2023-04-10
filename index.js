const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Pong updated');
});

app.listen(80, () => {
    console.log("Service is running on port 80");
    console.log("This is a test from the test branch.");
});