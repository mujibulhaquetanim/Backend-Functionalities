import { NextFunction, Request, Response } from "express";
import { z, ZodSchema } from 'zod';

//validate middleware accepts a schema as an argument which is a type of ZodSchema and returns a middleware function that validates the request body against the schema and calls the next middleware if validation is successful and throws an error if validation fails.
const validate = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate the request body against the schema
        await schema.parseAsync(req.body);
        next(); // Proceed to the next middleware or route handler if validation is successful
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: error.errors, // Send detailed errors from Zod
            });
        } else {
            // Handle unexpected errors
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }
};

export default validate;
