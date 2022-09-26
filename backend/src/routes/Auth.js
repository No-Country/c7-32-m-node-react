import { Router } from "express";

const router = Router();

// import controller
import {register, login} from '../controllers/Auth.Controllers.js';

router.get('/register',register);

// login
router.post('/login', login);


export default router;