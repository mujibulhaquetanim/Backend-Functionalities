import net from "node:net";

const clients: net.Socket[] = [];

net.createServer((socket) => {
    socket.write("Welcome to the real time TCP chatroom\n");


    console.log(`Client ${socket.remoteAddress}:${socket.remotePort} connected`);
    console.log(`Client count: ${clients.length}`);
    clients.push(socket);

    socket.on("data", (data) => {
        // send data to all connected clients with their IP and port
        clients.forEach((client) => {
            // don't send data back to the sender
            if(client !== socket){
                client.write(`${socket.remoteAddress}:${socket.remotePort}: ${data.toString().trim()}\n\n`);
            }
        });
    });

    socket.on("end", () => {
        const index = clients.indexOf(socket);
        // if the client is in the list
        if( index !== -1){
            // remove the clients from the list and close the connection
            console.log(`Client ${socket.remoteAddress}:${socket.remotePort} disconnected`);
            clients.splice(index, 1);
        }
    });

    socket.on("error", (error) => {
        console.error(`Client ${socket.remoteAddress}:${socket.remotePort} error: ${error}`);

        const index = clients.indexOf(socket);
        if( index !== -1){
            clients.splice(index, 1);
        }
        // safely remove problematic clients
        socket.destroy();
    });

}).listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`);
});