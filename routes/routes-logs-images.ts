import { Router } from "express";
import { getLogsImagesShearchDate, postLogsImages } from "../controllers/controllers-logs-images";

const router = Router();

router.get('/', getLogsImagesShearchDate);
router.post('/', postLogsImages)

export default router;