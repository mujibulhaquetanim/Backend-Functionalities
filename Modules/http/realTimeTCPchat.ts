import net from "node:net";

const clients: net.Socket[] = [];

const server = net.createServer((socket) => {
    socket.write("Welcome to the real time TCP chatroom\n");


    console.log(`Client ${socket.remoteAddress}:${socket.remotePort} connected`);
    console.log(`Client count: ${clients.length}`);
    clients.push(socket);

    socket.on("data", (data) => {
        // send data to all connected clients with their IP and port
        clients.forEach((client) => {
            // don't send data back to the sender
            if(client !== socket){
                client.write(`${socket.remoteAddress}:${socket.remotePort}: ${data}\n\n`);
            }
        });
    });

    socket.on("close", () => {
        console.log(`Client ${socket.remoteAddress}:${socket.remotePort} disconnected`);
        // remove the clients from the list and close the connection
        clients.splice(clients.indexOf(socket), 1);
    });

    socket.on("error", (error) => {
        console.error(`Client ${socket.remoteAddress}:${socket.remotePort} error: ${error}`);
    });

}).listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`);
});