import { Router } from "express";
import { operationsHistory, IngresoEgresoHistory } from "../controllers/Account.Controllers.js";

const router = Router();

router.get('/history/:id', operationsHistory);
router.get('/operations/:id', IngresoEgresoHistory);

export default router;
