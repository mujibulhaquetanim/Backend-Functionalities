# Create Server with Node.js

## Comments

* `Object.fromEntries()` Transforms query parameters into an object. The URL.searchParams returns a URLSearchParams instance, which is iterable but not a plain object. Using Object.fromEntries(), we easily convert it into a standard JavaScript object. without this, we have to manually extract each key-value pair from the URLSearchParams instance. i.e. url.searchParams.get(key), url.searchParams.get(age), url.searchParams.get(gender) or manually loop through the URLSearchParams instance using `url.searchParams.forEach((value, key) => {})`

* The `getBody` function was created to manually parse the request body in a Node.js server that doesn’t use Express.js. Unlike Express.js, which provides express.json() middleware for automatic request body parsing, the raw http module requires manual handling. Since the built-in `http` module does not automatically handle incoming request data, this function listens for data chunks sent in a request, collects them into a complete string, and then parses them into a JSON object. This approach is necessary for handling HTTP methods like `POST` and `PUT`, where the server receives data that needs to be processed before responding. The function uses promises to ensure that the request body is fully received before proceeding, making asynchronous handling more efficient. Without it, the server wouldn't be able to correctly extract and process JSON data sent by clients, leading to issues when managing incoming information. This function is crucial for creating a lightweight API without relying on additional frameworks like Express.js, allowing developers to have more control over request handling. in the code: It uses a Promise to asynchronously wait for the complete request body before resolving it, making it cleaner and preventing incomplete data processing.

## Codes

* simpler way to create api server

```js
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
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
});
```

