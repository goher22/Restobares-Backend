import { Router } from "express";
import { getLogsImagesShearchDate, postLogsImages } from "../controllers/controllers-logs-images";
import { check } from "express-validator";
import { validationField } from "../middelwares/validation";


const router = Router();

router.get('/', getLogsImagesShearchDate);
router.post('/', [
    check('nameUser', 'El nombre del usuario es requerido').not().isEmpty(),
    validationField
],postLogsImages)

export default router;