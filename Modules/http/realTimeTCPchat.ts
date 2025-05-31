import net from "node:net";

const server = net.createServer((socket) => {
    socket.write("Welcome to the real time TCP chatroom\n");

    const client = [];

    socket.on("connect", () => {
        console.log("Client connected");
        client.push(socket);
    });

}).listen(3000);