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
function sendResponse(res, statusCode, message) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(message));
}
const server = node_http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {query, pathname} = url.parse(req.url || "", true); // deprecated
    if (!req.url) {
        sendResponse(res, 400, "Bad Request: No URL");
        return;
    }
    // fix: handle missing host in URL parsing for server requests
    const parsedUrl = new node_url_1.URL(req.url, `http://${req.headers.host || "localhost"}`);
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
}));
server.listen(3000, () => {
    console.log("Listening on port 'http://localhost:3000'");
});
