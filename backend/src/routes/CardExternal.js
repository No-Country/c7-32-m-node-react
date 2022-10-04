import { Router } from "express";

// controllers
import { createCardExternal, getCardsOfUser } from "../controllers/CardExternal.Controller.js";

const router = Router();



router.post('/create/:id', createCardExternal);
router.get('/user/:id', getCardsOfUser);


export default router;