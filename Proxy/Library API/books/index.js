const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Response from Book Categories');
})

app.get('/fiction', (_, res) => {
    res.send('Response from Fiction Category');
})
app.get('/ai', (_, res) => {
    res.send('Response from AI Book Category');
})

app.listen(3001, () => {
    console.log('listening on http://127.0.0.1:3001');
})