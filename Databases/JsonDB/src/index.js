const express = require('express');
const data = require('./db.json');
const { InsertingNewData } = require('./InsertingNewData');
const app = express();

app.get('/', (_, res) => {
    res.send('hello to the mock server');
})

app.get('/data', (_, res) => {
    res.send(data);
    InsertingNewData()
});


app.listen(3000, () => {
    console.log('listening on port 3000');
})