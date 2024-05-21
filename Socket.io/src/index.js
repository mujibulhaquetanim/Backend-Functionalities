import http from 'http';
import express from 'express';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    // console.log('new user has connected',socket.id);
    socket.on('usr-msg', (msg) => {
        // console.log('A new user message:', msg);
        io.emit('message', msg)
    })
})

app.use(express.static(path.resolve("./public")));

app.get('/', (_, res) => {
    res.sendFile('/public/index.html');
});

server.listen(8000, () => {
    console.log("listening on localhost:8000")
})