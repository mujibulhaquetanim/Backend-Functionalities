import dgram from 'dgram';

const server = dgram.createSocket('udp4');

// as UDP is connectionless, we need to listen for messages and we can't use the 'connection' event.

// Listen for incoming messages
server.on('message', (msg, rinfo) => {
    // 'msg' is the actual data received (a Buffer)
    // 'rinfo' contains the sender's address and port
    console.log(`Server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
});

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