import dgram from 'dgram';
const server = dgram.createSocket('udp4');
const clients = new Map();
const timeOut = 1000 * 60 * 3;
// as UDP is connectionless, we need to listen for messages and we can't use the 'connection' event.
// Listen for incoming messages
server.on('message', (msg, rinfo) => {
    // made combo of add & port a key, redis style 😊
    const clientKey = `${rinfo.address}:${rinfo.port}`;
    if (!clients.has(clientKey)) {
        console.log(`New Client added: ${clientKey}`);
    }
    // for each new msg of a user, update their recent time. without this client would be removed automatically after the interval time regardless of activity.
    clients.set(clientKey, { port: rinfo.port, lastActive: Date.now() });
    // Broadcast the message to the connected clients
    clients.forEach((value, key) => {
        if (key !== clientKey) {
            server.send(`${rinfo.address}:${rinfo.port} sent: ${msg.toString().trim()}`, rinfo.port, key.split(':')[0], (error) => {
                if (error) {
                    console.log(`Error sending message to ${key} : ${error}`);
                }
            });
        }
    });
});
setInterval(() => {
    const now = Date.now();
    clients.forEach((value, key) => {
        if (now - value.lastActive > timeOut) {
            console.log(`${key}: is disconnected due to inactivity`);
            clients.delete(key);
        }
    });
}, timeOut);
// Handle errors
server.on('error', (err) => {
    console.log(`Server error:\n${err.stack}`);
    server.close();
});
// When the socket is ready to receive messages
server.bind(3000, () => {
    console.log(`UDP server listening on ${server.address().address}:${server.address().port}`);
});
// Optional: Handle when the server closes
server.on('close', () => {
    console.log('UDP server closed');
});
