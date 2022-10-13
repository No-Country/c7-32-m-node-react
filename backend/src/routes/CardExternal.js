import { Router } from "express";
import passport from 'passport';

// controllers
import { createCardExternal, getCardsOfUser, deleteCardsOfUser } from "../controllers/CardExternal.Controller.js";

const router = Router();

router.post('/create/:id', passport.authenticate('jwt', { session: false }), createCardExternal);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), getCardsOfUser);
router.delete('/:idCard/user/delete/:idUser', passport.authenticate('jwt', { session: false }), deleteCardsOfUser)

export default router;
