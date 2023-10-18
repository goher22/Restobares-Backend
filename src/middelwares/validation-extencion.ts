import { NextFunction, Request, Response } from "express"
import { UploadedFile } from "express-fileupload";

export const validationExtencion = (validExtensions:string[] = ['png', 'jpg', 'jpeg', 'gif']) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const {img} = req.files!;

        const  {name} = img as UploadedFile;
        
        const nameContro:string[] = name.split('.');
        const extension = nameContro[nameContro.length-1];

        if(!validExtensions.includes(extension)){
            return res
                .status(400)
                .json({
                    msg:`La extencion ${extension} no es permitida, extenciones validas ${validExtensions}`
                });
        }

        next();
    };
}