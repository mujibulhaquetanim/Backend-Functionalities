import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import { ValidationErrors } from './types';
import { NextFunction, Request, Response } from 'express';

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    roles: z.array(z.enum(['admin', 'user'])).default(['user'])
});
// infer the type of the schema using the infer method of the Zod schema object and export it as a type alias called User. This type will be used to type the request body in the Express route handlers.
export type User = z.infer<typeof UserSchema>;

// validation middleware factory function which takes a Zod schema and returns an Express middleware function that validates the request body against the schema and returns a 400 response with the validation errors if the validation fails. If the validation passes, it calls the next middleware in the chain. If an error occurs during validation, it calls the next middleware in the chain with the error.
export const validateRequest = (schema: z.ZodSchema) =>{
    return async (req: Request, res: Response, next: NextFunction)=>{
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            if(error instanceof z.ZodError){
                const validationError: ValidationErrors = {
                    message: 'Validation Failed',
                    error: fromError(error).message.split(';')
                }
                res.status(400).json(validationError);
            } else {
                next(error);
            }
        }
    }
}