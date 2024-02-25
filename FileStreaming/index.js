const express = require('express');
const { normalRead, stream } = require('./fileRead');
const status = require("express-status-monitor");

const app = express();
const PORT = 8000;

app.use(status());
app.get('/', (req, res) => {
    res.send("try '/normal' for normal data read\ntry '/stream' for stream read");
});

app.get('/normal', normalRead);
app.get('/stream', stream);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});