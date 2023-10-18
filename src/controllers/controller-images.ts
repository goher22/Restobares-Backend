import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const viewImages = async (req: Request, res: Response) => {
    try {
        const {nameFile} = req.params;
        const payhImagen = path.join(__dirname, '../public/uploads', nameFile+'.png');
        if(fs.existsSync(payhImagen)) {
            res.sendFile(payhImagen);
        }else{
            const payhImagen = path.join(__dirname, '../public', 'no-image.png')
            res.sendFile(payhImagen)            
        }
    } catch (error) {
        const payhImagen = path.join(__dirname, '../public', 'no-image.png')
        res.sendFile(payhImagen)
    }
}