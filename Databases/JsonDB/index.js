const express = require('express');
const data = require('./db.json');
const app = express();
const fs = require('fs');

app.get('/', (_, res) => {
    res.send('hello to the mock server');
})

const newData = [{}]

fs.writeFile('data',JSON.stringify(newData));

app.listen(3000, () => {
    console.log('listening on port 3000');
})