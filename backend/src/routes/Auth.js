import { Router } from "express";

const router = Router();

// import controller
//import {} from '../controllers/Auth.Controllers.js';
import register from '../controllers/Register.Controller.js';

router.post('/register',register);


export default router;