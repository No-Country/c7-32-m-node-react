import { Router } from "express";
import {register} from '../controllers/Auth.Controllers.js';

const router = Router();
router.get('/register',register);

export default router;