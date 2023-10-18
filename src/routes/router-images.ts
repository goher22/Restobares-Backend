import { Router } from "express";

import { countImagesHours, searchImagesDate, viewImages } from "../controllers/controller-images";

const router = Router();

router.get('/:nameFile', viewImages);

router.get('/search/:startDate/:endDate', searchImagesDate)

router.get('/group/hours', countImagesHours)

export default router;