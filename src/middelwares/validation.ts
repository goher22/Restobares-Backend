import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validation = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const {msg} = errors['errors'][0];
        return res.status(400).json({
            msg
        });
    }
    next();
}