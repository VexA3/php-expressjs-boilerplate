const express = require('express');
const app = express();
const host = "0.0.0.0";
const port = 9000;

app.get('/', (req, res) => {
    res.send("Express Server listening on poart 9000");
});

app.get("/api/test", (req, res) => {
    res.send("hello world");
});

app.listen(port, host, () => {
    console.log('Running on http://%s:%s', host, port);
});
