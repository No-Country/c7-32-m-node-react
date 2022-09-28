import { Router } from "express";
import { login, googleLogin } from '../controllers/Auth.Controllers.js';
import { forgotPassword } from '../controllers/Account.Controllers.js';

const router = Router();

// LOGIN
router.post('/login', login);
router.post('/google/login', googleLogin);

// PASSWORD
router.post('/forgot-password', forgotPassword);

export default router;
