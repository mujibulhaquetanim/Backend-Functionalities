const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('hello to the mock server');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})