const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Response from inventory Route');
})
app.get('/fiction', (_, res) => {
    res.send('Fiction books are available');
})
app.get('/ai', (_, res) => {
    res.send('AI books are available');
})
app.get('/missing-books', (_, res) => {
    res.json({ philosophy: '2 books are missing', history: '1 book is missing' });
})

app.listen(3002, () => {
    console.log('listening on http://127.0.0.1:3002');
})