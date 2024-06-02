const express = require('express');
const path = require('path');
const { addFileAtPosition } = require('./InsertingNewData');
const fs = require('node:fs').promises;

const app = express();

const newData = {
    "id": 5,
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "year": 1937
};

app.get('/', (_, res) => {
    console.log('hello to the mock server');
    res.send('hello to the mock server');
});

app.get('/data', async (_, res) => {
    const filePath = path.join(__dirname, '../db.json');

    await addFileAtPosition(filePath, newData, -1);

    const updatedData = await fs.readFile(filePath, 'utf8');

    res.send(JSON.parse(updatedData));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
