import { NextFunction, Request, Response } from "express";

export const isNotDate = (req: Request, res: Response, next: NextFunction) => {

    const { startDate, endDate } = req.params;

    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'Se requieren las fechas de inicio y fin.' });
    }
    next();
}