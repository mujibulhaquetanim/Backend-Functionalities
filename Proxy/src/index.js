const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});