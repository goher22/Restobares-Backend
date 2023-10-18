import { Router } from "express";

import { countImagesHours, searchImagesDate, viewImages } from "../controllers/controller-images";
import { isNotDate } from "../middelwares/validation-date";
import { validation } from "../middelwares/validation";

const router = Router();

router.get('/:nameFile', viewImages);

router.get('/search/:startDate/:endDate', [
    isNotDate,
    validation,
], searchImagesDate,)

router.get('/group/hours', countImagesHours)

export default router;