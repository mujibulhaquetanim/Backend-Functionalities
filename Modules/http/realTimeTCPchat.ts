import net from "node:net";

const server = net.createServer((socket) => {
    socket.write("Welcome to the real time TCP chatroom\n");

    const client: net.Socket[] = [];

    socket.on("connect", () => {
        console.log(`Client ${socket.remoteAddress}:${socket.remotePort} connected`);
        console.log(`Client count: ${client.length}`);
        client.push(socket);
    });

    socket.on("data", (data) => {
        // send data to all connected clients with their IP and port
        client.forEach((client) => {
            // don't send data back to the sender
            if(client !== socket){
                client.write(`${socket.remoteAddress}:${socket.remotePort}: ${data}\n\n`);
            }
        });
    });

    socket.on("close", () => {
        console.log(`Client ${socket.remoteAddress}:${socket.remotePort} disconnected`);
        // remove the client from the list and close the connection
        client.splice(client.indexOf(socket), 1);
    });

}).listen(3000);