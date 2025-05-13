import http from "node:http";

const server = http.createServer((req, res) => {
    //writeHead is used to set the response header, which is needed to set the content type
    res.writeHead(200, { "Content-Type": "text/plain" });
    switch(req.url){
        case "/":
            res.end("Welcome to Node Server");
            break;
        case "/api":
            res.end(JSON.stringify({message: "Welcome to API"}));
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("listening on port 'http://localhost:3000'");
});