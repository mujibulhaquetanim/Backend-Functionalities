// longPollingServer.ts
import * as http from 'http';

interface ClientResponse {
    res: http.ServerResponse;
    timeoutId: NodeJS.Timeout;
}

const waitingClients: ClientResponse[] = [];
let dataCounter = 0; // Just a simple counter to simulate new data

const server = http.createServer((req, res) => {
    // Set CORS headers for local development, adjust as needed for production
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/poll' && req.method === 'GET') {
        // Set a timeout for the long-polling request (e.g., 25 seconds)
        const timeoutId = setTimeout(() => {
            // Remove this client from waitingClients
            const index = waitingClients.findIndex(client => client.res === res);
            if (index !== -1) {
                waitingClients.splice(index, 1);
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'No new data (timeout)', data: null }));
        }, 25000); // 25 seconds timeout

        // Add the client's response object to our waiting list
        waitingClients.push({ res, timeoutId });
        console.log(`Client connected for long polling. Total waiting clients: ${waitingClients.length}`);

    } else if (req.url === '/send-data' && req.method === 'GET') {
        // This endpoint simulates new data becoming available
        dataCounter++;
        const newData = { timestamp: new Date().toISOString(), value: `New data item ${dataCounter}` };
        console.log(`New data available: ${JSON.stringify(newData)}`);

        // Send data to all waiting clients
        while (waitingClients.length > 0) {
            const client = waitingClients.shift(); // Get the first client in line
            if (client) {
                clearTimeout(client.timeoutId); // Clear the timeout for this client
                client.res.writeHead(200, { 'Content-Type': 'application/json' });
                client.res.end(JSON.stringify({ message: 'New data received', data: newData }));
                console.log('Sent data to a client.');
            }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'Data sent to waiting clients' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Call /poll to start long polling.');
    console.log('Call /send-data to simulate new data being available.');
});