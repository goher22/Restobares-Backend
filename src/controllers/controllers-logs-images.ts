import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import { imageConvert } from "../helpers/image-convert";
import { uploadFile } from "../helpers/upload-file";
import { deleteFile } from "../helpers/delecte-file";

const LogImage = require("../db/mongodb/models/models-logs-images")


export const getLogsImagesShearchDate = (req: Request, res: Response) => {
    res.json({
        msg: 'Buscar imagenes por fecha'
    })
}

export const postLogsImages = async (req: Request, res: Response) => {

    try{

        const {nameUser} = req.body;

        const {img} = req.files!;

        const  imgfile = img as UploadedFile;

        const nameContro:string[] = imgfile.name.split('.');
        const extension = nameContro[nameContro.length-1];

        await uploadFile(imgfile, extension);

        const nameFile = await imageConvert(`temp.${extension}`, 'png');

        await deleteFile(`temp.${extension}`);

        const fechaActualSegundos = new Date().getTime();

        const logImage = new LogImage({
            date: fechaActualSegundos,
            nameUser,
            urlImage: `${process.env.PORT ?? 'http://localhost:8080'}/api/images/${nameFile}`,
        });

        await logImage.save();

        res.json({
            msg: 'Create usuer',
            logImage
        });

    }catch(msg){
        res
            .status(500)
            .json({err:msg});
    }
}