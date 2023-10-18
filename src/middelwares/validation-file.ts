import { NextFunction, Request, Response } from "express";

export const isNotEmptyValidationFile = (req: Request, res: Response, next: NextFunction) => {
    const  {files} = req;
    
    if (!files || Object.keys(files).length === 0) {
        return res.status(400).json({msg: 'No hay archivo que subir'});
    }

    next()
}