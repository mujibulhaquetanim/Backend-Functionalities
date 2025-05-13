import http, { IncomingMessage, Server, ServerResponse } from "node:http";
import url from "node:url";

// const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
//     switch (req.url) {
//         case "/":
//             res.writeHead(200, { "Content-Type": "text/plain" });
//             res.end("Welcome to Node Server");
//             break;
//         case "/api":
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ message: "Welcome to API" }));
//             break;
//         default:
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("Not Found");
//             break;
//     }
// });

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    const {query, pathname} = url.parse(req.url || "", true);
    switch (pathname) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Welcome to Node Server");
            break;
        case "/api":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Welcome to API" }));
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
            break;
    }
})

server.listen(3000, () => {
    console.log("Listening on port 'http://localhost:3000'");
});
