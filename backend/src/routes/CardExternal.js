import { Router } from "express";
import passport from 'passport';

// controllers
<<<<<<< HEAD
import { createCardExternal, getCardsOfUser, deleteCardsOfUser } from "../controllers/CardExternal.Controller.js";
=======
import { createCardExternal, getCardsOfUser } from "../controllers/CardExternal.Controller.js";
>>>>>>> IM_BK_wallet

const router = Router();

<<<<<<< HEAD


router.post('/create/:id',passport.authenticate('jwt', { session: false }),  createCardExternal);
router.get('/user/:id',passport.authenticate('jwt', { session: false }), getCardsOfUser);
<<<<<<< HEAD
router.delete('/:idCard/user/delete/:idUser',passport.authenticate('jwt', { session: false }), deleteCardsOfUser);
=======
>>>>>>> IM_BK_wallet


export default router;
=======
router.post('/create/:id', passport.authenticate('jwt', { session: false }), createCardExternal);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), getCardsOfUser);
router.delete('/:idCard/user/delete/:idUser', passport.authenticate('jwt', { session: false }), deleteCardsOfUser)

export default router;
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
