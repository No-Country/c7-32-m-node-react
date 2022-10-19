import { Router } from "express";
import { login, googleLogin } from '../controllers/Auth.Controllers.js';
import { forgotPassword } from '../controllers/Account.Controllers.js';
import register from '../controllers/Register.Controller.js';
<<<<<<< HEAD


const router = Router();

// REGISTER
router.post('/register',register);

// LOGIN
router.post('/login', login);
router.post('/google/login', googleLogin);

=======

const router = Router();

router.post('/register', register);

router.post('/login', login);
router.post('/google/login', googleLogin);

>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
export default router;
