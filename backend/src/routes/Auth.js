import { Router } from "express";

const router = Router();

// import controller
import {login} from '../controllers/Auth.Controllers.js';


// login
router.post('/login', login);


export default router;