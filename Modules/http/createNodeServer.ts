import http, { IncomingMessage, ServerResponse } from "node:http";
import { URL} from "node:url";

// helper function to send response
function sendResponse(res: ServerResponse, statusCode: number, message: string | object) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(message));
}

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    // const {query, pathname} = url.parse(req.url || "", true); // deprecated
    if(!req.url){
        sendResponse(res, 400, "Bad Request: No URL");
        return;
    }
    // fix: handle missing host in URL parsing for server requests
    const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const query = Object.fromEntries(parsedUrl.searchParams);
    const pathname = parsedUrl.pathname;

    console.log(`query: ${JSON.stringify(query)} | pathname: ${pathname}`);

    switch (pathname) {
        case "/":
            sendResponse(res, 200, "Welcome to Node Server");
            break;
        case "/api":
            sendResponse(res, 200, { message: "Welcome to API" });
            break;
        default:
            sendResponse(res, 404, "Not Found");
            break;
    }
})

server.listen(3000, () => {
    console.log("Listening on port 'http://localhost:3000'");
});
