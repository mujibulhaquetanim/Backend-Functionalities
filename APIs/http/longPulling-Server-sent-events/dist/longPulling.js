"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// longPollingServer.ts
const http = __importStar(require("http"));
const waitingClients = [];
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
    }
    else if (req.url === '/send-data' && req.method === 'GET') {
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
    }
    else {
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
