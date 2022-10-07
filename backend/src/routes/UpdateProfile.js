import { Router } from "express";
import { updateProfile } from "../controllers/Account.Controllers.js";

const router = Router();

router.put('/updateprofile', updateProfile);

export default router;
