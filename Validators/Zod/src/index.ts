import express, { NextFunction, Request, Response } from "express";
import { UserSchema, validateRequest, User } from "./schema";

const app = express();
app.use(express.json());

// Route handler
app.get("/", (req: Request, res: Response) => {
    res.send("use POST /users to create a new user");
});

app.post(
    "/users",
    validateRequest(UserSchema),
    (req: Request, res: Response) => {
        const user: User = req.body;

        //handle validated user data
        res.status(201).json(user);
    }
);

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => {
    console.log("Sever is running on http://127.0.0.1:3000");
});
