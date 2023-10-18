import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { convertionDateSecond } from "../helpers/convertion-date-second";

const LogImage = require("../db/mongodb/models/models-logs-images")

export const countImagesHours = async (req: Request, res:Response) => {
    try {

        const result = await LogImage.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d %H",
                            date: {
                                $toDate: {
                                  $add: ['$date', 5 * 60 * 60 * 1000] // Sumar 5 horas en milisegundos para ajustar a GMT-5
                                }
                            }
                        },
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);

        res.json(result);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error en el servidor.' });
    }
}

export const searchImagesDate = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.params;

        const initSecund = convertionDateSecond(startDate);
        const finalSecund = convertionDateSecond(endDate, "T23:59:59.999Z");

        const images = await LogImage.find({
            date: {
                $gte: initSecund,
                $lte: finalSecund
            }
        });

        res.status(200).json(images);

    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor.' });
    }
}

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