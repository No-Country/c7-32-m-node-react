import { Router } from "express";
import { login, googleLogin } from '../controllers/Auth.Controllers.js';
import { forgotPassword } from '../controllers/Account.Controllers.js';
import register from '../controllers/Register.Controller.js';


const router = Router();

// REGISTER
router.post('/register',register);

// LOGIN
router.post('/login', login);
router.post('/google/login', googleLogin);

export default router;