import dgram from 'dgram';

const server = dgram.createSocket('udp4');

const clients: { address: string; port: number }[] = [];

// as UDP is connectionless, we need to listen for messages and we can't use the 'connection' event.

// Listen for incoming messages
server.on('message', (msg, rinfo) => {
    // 'msg' is the actual data received (a Buffer)
    // 'rinfo' contains the sender's address and port

    // console.log(`Server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);

    // Optional: Send a response back to the sender. this is basically an acknowledgement.
    // server.send(`Got your message: "${msg.toString().trim()}"`, rinfo.port, rinfo.address, (err) => {
    //     if (err) console.error(`Error sending response: ${err}`);
    // });

    console.log(`Client ${rinfo.address}:${rinfo.port} sent: ${msg.toString().trim()}`);
    
    const clientExists = clients.some((client)=> client.address === rinfo.address && client.port === rinfo.port);
    if(!clientExists){
        clients.push(rinfo);
    }

    // send data to all connected clients with their IP and port
    clients.forEach((client) => {
        // don't send data back to the sender
        if(client.address !== rinfo.address || client.port !== rinfo.port){
            server.send(`${rinfo.address}:${rinfo.port}: ${msg.toString().trim()}\n\n`, client.port, client.address, (err) => {
                if (err) console.error(`Error sending response: ${err}`);
            });
        }
    });
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