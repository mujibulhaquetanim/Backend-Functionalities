import http, { IncomingMessage, ServerResponse } from "node:http";
import { URL} from "node:url";

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    // const {query, pathname} = url.parse(req.url || "", true); // deprecated
    if(!req.url){
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request: No URL");
        return;
    }
    // fix: handle missing host in URL parsing for server requests
    const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const query = Object.fromEntries(parsedUrl.searchParams);
    const pathname = parsedUrl.pathname;

    console.log(`query: ${JSON.stringify(query)} | pathname: ${pathname}`);

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
