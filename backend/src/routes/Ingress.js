import {Router} from 'express';
import { Ingress } from '../controllers/Ingresos.Controllers.js';
import passport from 'passport';

const router = Router();


router.post('/:idUser/ingress',passport.authenticate('jwt', { session: false }), Ingress);


export default router;