import http, { IncomingMessage, Server, ServerResponse } from "node:http";
import { URL} from "node:url";

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
    // const {query, pathname} = url.parse(req.url || "", true); // deprecated
    if(!req.url){
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request: No URL");
        return;
    }
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    // Object.fromEntries() Transforms query parameters into an object. The URL.searchParams returns a URLSearchParams instance, which is iterable but not a plain object. Using Object.fromEntries(), we easily convert it into a standard JavaScript object. without this, we have to manually extract each key-value pair from the URLSearchParams instance. i.e. url.searchParams.get(key), url.searchParams.get(age), url.searchParams.get(gender) or manually loop through the URLSearchParams instance using url.searchParams.forEach((value, key) => {})
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
