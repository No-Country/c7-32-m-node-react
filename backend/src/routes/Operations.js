import { Router } from "express";
import { operationsHistory } from "../controllers/Account.Controllers.js";

const router = Router();

router.put('/history', operationsHistory);

export default router;
