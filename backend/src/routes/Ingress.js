import { Router } from 'express';
import { Ingress } from '../controllers/Ingresos.Controllers.js';
import passport from 'passport';

const router = Router();

router.post('/:idUser/ingress', Ingress);

export default router;
