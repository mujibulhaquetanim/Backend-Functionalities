"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const node_url_1 = require("node:url");
// helper function to send response
const sendResponse = (res, statusCode, message, contentType = "application/json") => {
    res.statusCode = statusCode;
    res.setHeader("Content-type", contentType);
    res.end(contentType === 'application/json' ? JSON.stringify(message) : message);
};
// helper function to parse request body
const parseBody = (req) => {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => resolve(JSON.stringify(body || {})));
    });
};
const app = node_http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.url) {
        sendResponse(res, 400, { error: "No URL found" });
        return;
    }
    const parsedUrl = new node_url_1.URL(req.url, `http://${req.headers.host || 'http://localhost'}`);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    // GET method
    if (method === 'GET' && pathname === '/') {
        sendResponse(res, 200, "Welcome to Node-CRUD");
        return;
    }
    // POST method
    if (method === 'POST' && pathname === '/user') {
        sendResponse(res, 200, { message: "user found" });
    }
    // PUT method
    // regular expression added to extract the digit from the url, in expressjs this is done by req.params
    if (method === 'PUT' && pathname.match(/^\/user\/\d+$/)) {
        // took second part of the url as id because first part is user
        const id = pathname.split("/")[2];
        if (!id || isNaN(Number(id))) {
            sendResponse(res, 400, { error: "No id found" });
            return;
        }
        // parse request body to get the data.
        const body = yield parseBody(req);
        sendResponse(res, 200, { message: `user with id: ${id} updated successfully`, body });
    }
    // DELETE method
    if (method === 'DELETE' && pathname.match(/^\/user\/\d+$/)) {
        const id = pathname.split("/")[2];
        if (!id || isNaN(Number(id))) {
            sendResponse(res, 400, { error: "No id found" });
            return;
        }
        sendResponse(res, 200, { message: `user with id: ${id} deleted successfully` });
    }
}));
app.listen(3001, () => {
    console.log(`Listening on Port: 3001 on https://localhost:3001`);
});
