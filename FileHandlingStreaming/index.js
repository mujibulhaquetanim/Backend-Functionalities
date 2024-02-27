const express = require('express');
const { normalRead, stream, gzip} = require('./fileRead');
const status = require("express-status-monitor");
const { append } = require('./readWrite');


const app = express();
const PORT = 8000;

app.use(status());

app.get('/', (_, res) => {
    res.send(`try '/normal' for normal data read\ntry '/stream' for stream read ${process.pid}`);
});
app.get('/normal', normalRead);
app.get('/stream', stream);
app.get('/gzip', gzip);
// app.get('/append', append);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});