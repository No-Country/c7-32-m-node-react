import { Router } from "express";
import { login, googleLogin } from '../controllers/Auth.Controllers.js';
import { forgotPassword } from '../controllers/Account.Controllers.js';

const router = Router();

// LOGIN
router.post('/login', login);
router.post('/google/login', googleLogin);

export default router;
