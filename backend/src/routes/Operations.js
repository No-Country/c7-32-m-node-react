import { Router } from "express";
import { operationsHistory } from "../controllers/Account.Controllers.js";

const router = Router();

router.get('/history/:id', operationsHistory);

export default router;