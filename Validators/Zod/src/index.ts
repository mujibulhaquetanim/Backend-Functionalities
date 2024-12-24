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

// Error-handling middleware function that takes four arguments. This function will be called if an error occurs in the route handler or in any of the middleware functions that are called before this one.
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // err.stack will contain the stack trace of the error. stack trace is a list of function calls that were in progress when the error occurred.
    console.error(err.stack);
    // check if the response headers have already been sent. If they have, call the next middleware in the chain with the error. If not, send a 500 response with a JSON object containing the message "Internal Server Error". If we don't check headersSent, the server will crash with an unhandled promise rejection error. This is because the response headers can only be sent once, and if we try to send them again, the server will throw an error. headersSent is a boolean property of the response object that indicates whether the response headers have been sent. If the headers have been sent, it will be true; otherwise, it will be false. We can use this property to check if the headers have been sent before sending a response. it is a good practice to check if the headers have been sent before sending a response to avoid errors.
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => {
    console.log("Sever is running on http://127.0.0.1:3000");
});
