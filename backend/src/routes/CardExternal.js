import { Router } from "express";
import passport from 'passport';

// controllers
import { createCardExternal, getCardsOfUser, deleteCardsOfUser } from "../controllers/CardExternal.Controller.js";

const router = Router();

router.post('/create/:id',createCardExternal);
router.get('/user/:id', getCardsOfUser);
router.delete('/:idCard/user/delete/:idUser', deleteCardsOfUser)

export default router;
