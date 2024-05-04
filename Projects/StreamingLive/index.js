import http from "http"
import Express from "express"
import path from "path";

const app = Express();
const server = http.createServer(app);

app.use(Express.static(path.resolve('./public')));


server.listen(3000, () => console.log("listening on port 'http://localhost:3000'"));