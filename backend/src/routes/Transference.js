import { Router } from 'express';

const router = Router();

// controllers
import { postTransf } from '../controllers/Transference.Controller.js';

router.post('/user/:userId/transference', postTransf);

export default router;
