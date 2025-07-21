import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_: express.Request, res: express.Response) => {
    res.send("Hello from Express ECR!");
});

app.get("/health", (_: express.Request, res: express.Response) => {
    res.json({ status: "ok", time: new Date().toISOString() });
}); 

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});