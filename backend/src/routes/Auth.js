import { Router } from "express";

const router = Router();

// import controller
import {login, googleLogin} from '../controllers/Auth.Controllers.js';


// login
router.post('/login', login);
router.post('/google/login', googleLogin);


export default router;