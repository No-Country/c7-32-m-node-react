import { Router } from 'express';
import passport from 'passport';

const router = Router();

import { postTransf } from '../controllers/Transference.Controller.js';

router.post('/user/:userId/transference', passport.authenticate('jwt', { session: false }), postTransf);

export default router;
