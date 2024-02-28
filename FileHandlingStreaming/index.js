const express = require('express');
const { normalRead, stream, gzip} = require('./api/fileRead');
const status = require("express-status-monitor");

const app = express();
const PORT = 8000;

app.use(status());

app.get('/', (_, res) => {
    res.send(`this server running on ${process.pid}.\n\n Try /normal\n\n /stream\n\n /gzip`);
});
app.get('/normal', normalRead);
app.get('/stream', stream);
app.get('/gzip', gzip);


app.listen(PORT, () => {
    console.log('http://localhost:'+PORT);
});