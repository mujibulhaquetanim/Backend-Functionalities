import http from 'http';
import express from 'express';
import path from 'path';

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

app.get('/', (_, res) => {
    res.sendFile('/public/index.html');
});

server.listen(8000, () => {
    console.log("listening on localhost:8000")
})