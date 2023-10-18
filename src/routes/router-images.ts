import { Router } from "express";

import { viewImages } from "../controllers/controller-images";

const router = Router();

router.get('/:nameFile', viewImages);

export default router;