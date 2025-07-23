    import express from "express";

    const app = express();

    app.use(express.json());

    app.get("/", (_: express.Request, res: express.Response) => {
        res.send("Hello from Express ECR!");
    });

    app.get("/health", (_: express.Request, res: express.Response) => {
        res.status(200).json({ status: "ok", time: new Date().toISOString() });
    }); 

    app.listen(8000, "0.0.0.0", () => {
    console.log("Server is running on http://0.0.0.0:8000");
    });