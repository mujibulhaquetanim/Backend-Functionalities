import net from "node:net";

const server = net.createServer((socket) => {
    socket.write("Welcome to the real time TCP chatroom\n");

    const client: net.Socket[] = [];

    socket.on("connect", () => {
        console.log("Client connected");
        client.push(socket);
    });

    socket.on("data", (data) => {
        client.forEach((client) => {
            // send data to all connected clients with their IP and port
            client.write(`${socket.remoteAddress}:${socket.remotePort}: ${data}\n\n`);
        });
    });

}).listen(3000);