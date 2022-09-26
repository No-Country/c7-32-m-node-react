import { Router } from "express";

const router = Router();

// import controller
import {register} from '../controllers/Auth.Controllers.js';

router.get('/register',register);


export default router;