import { Router } from "express";
import { forgotPassword, renewPassword } from '../controllers/Account.Controllers.js';

const router = Router();

// PASSWORD
router.post('/forgot-password', forgotPassword);
router.put('/renew-password/:resetToken', renewPassword);

export default router;
