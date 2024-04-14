import express from 'express'

const app = express();

app.get('/', (_, res) => {
    res.end("Welcome to socket io");
});

app.listen(8000, () => {
    console.log("listening on localhost:8000")
})