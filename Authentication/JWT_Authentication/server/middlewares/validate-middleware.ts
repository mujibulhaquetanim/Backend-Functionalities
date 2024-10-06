import { NextFunction, Request, Response } from "express";

const validate = (schema) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        res.status(400).send(error.errors);
    }
};
export default validate