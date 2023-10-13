import { Request, Response } from "express";


export const getLogsImagesShearchDate = (req: Request, res: Response) => {
    res.json({
        msg: 'Buscar imagenes por fecha'
    })
}

export const postLogsImages = (req: Request, res: Response) => {

    const  {body} = req;

    res.json({
        msg: 'Create usuer',
        body
    });
}