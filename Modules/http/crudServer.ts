import http, {ServerResponse, IncomingMessage} from 'node:http';
import { URL } from 'node:url';

// helper function to send response
const sendResponse = (res:ServerResponse ,statusCode: number, message: object | string, contentType: string= "application/json" )=>{
    res.statusCode = statusCode;
    res.setHeader("Content-type", contentType);
    res.end(contentType === 'application/json' ? JSON.stringify(message): message);
}

// helper function to parse request body
const parseBody = (req: IncomingMessage)=>{
    return new Promise((resolve)=>{
        let body = '';
        req.on('data', chunk=> body+=chunk);
        req.on('end', ()=> resolve(JSON.stringify(body || {})))
    })
}

const app = http.createServer(async(req: IncomingMessage, res: ServerResponse)=>{
    if(!req.url){
        sendResponse(res, 400, {error: "No URL found"})
        return;
    }
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'http://localhost'}`);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // GET method
    if(method === 'GET' && pathname=== '/'){
        sendResponse(res, 200, "Welcome to Node-CRUD")
        return;
    }

    // POST method
    if(method === 'POST' && pathname === '/user'){
        sendResponse(res, 200, { message: "user found"})
    }
})

app.listen(3001, ()=>{
    console.log(`Listening on Port: 3001 on https://localhost:3001`)
})