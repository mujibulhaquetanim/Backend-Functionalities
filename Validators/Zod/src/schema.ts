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

export type User = z.infer<typeof UserSchema>;

// validation middleware factory
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