import { Router } from "express";

import { countImagesHours, searchImagesDate, viewImages } from "../controllers/controller-images";
import { isNotDate } from "../middelwares/validation-date";
import { validate } from "uuid";

const router = Router();

router.get('/:nameFile', viewImages);

router.get('/search/:startDate/:endDate', [
    isNotDate,
    validate,
], searchImagesDate,)

router.get('/group/hours', countImagesHours)

export default router;