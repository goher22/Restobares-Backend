import { Router } from "express";
import { getLogsImagesShearchDate, postLogsImages } from "../controllers/controllers-logs-images";
import { check } from "express-validator";
import { validation } from "../middelwares/validation";
import { isNotEmptyValidationFile } from "../middelwares/validation-file";
import { validationExtencion } from "../middelwares/validation-extencion";



const router = Router();

router.get('/', getLogsImagesShearchDate);

router.post('/', [
    isNotEmptyValidationFile,
    validationExtencion(['jpg', 'jpeg']),
    check('nameUser', 'El nombre del usuario es requerido').not().isEmpty(),
    validation
],postLogsImages)

export default router;