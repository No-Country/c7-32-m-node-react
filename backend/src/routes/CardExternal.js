import { Router } from "express";
import { createCardExternal } from "../controllers/CardExternal.Controller.js";

const router = Router();

router.post('/create/:id', createCardExternal);

export default router;
