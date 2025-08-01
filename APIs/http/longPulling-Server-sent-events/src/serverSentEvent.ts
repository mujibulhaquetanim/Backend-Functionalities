import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

const clients: ServerResponse[] = [];

const sendEventToAll = (data: object) => {
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  clients.forEach(client => client.write(payload));
};

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (!req.url) return;

  if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });

    res.write(': connected\n\n');
    clients.push(res);

    req.on('close', () => {
      const index = clients.indexOf(res);
      if (index !== -1) clients.splice(index, 1);
    });
  } else if (req.url === '/send') {
    sendEventToAll({ message: 'Hello from TypeScript SSE!', time: new Date().toISOString() });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Event sent');
  } else if (req.url === '/') {
    const filePath = path.join(__dirname, '../public/index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('SSE TypeScript server running at http://localhost:3000');
});
