const express = require('express');
const path = require('path');
// const { addFilesAtPosition } = require('./InsertingNewData');
const { addFilesAtPosition } = require('./addFileAtPosition');
const fs = require('node:fs').promises;

const app = express();

const newData = [
    {
        "id": 5,
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "year": 1937
    },
    {
        "id": 6,
        "title": "1984",
        "author": "George Orwell",
        "year": 1949
    },
    {
        "id": 7,
        "title": "The Catcher in the Rye",
        "author": "J. D. Salinger",
        "year": 1951
    },
    {
        "id": 8,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "year": 1939
    }
];

app.get('/', (_, res) => {
    console.log('hello to the mock server');
    res.send('hello to the mock server');
});

app.get('/data', async (_, res) => {
    const filePath = path.join(__dirname, '../db.json');

    await addFilesAtPosition(filePath, newData, -1);

    const updatedData = await fs.readFile(filePath, 'utf8');

    res.send(JSON.parse(updatedData));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
