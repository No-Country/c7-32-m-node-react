import { Router } from "express";
import { updateProfile, uploadProfileImage } from "../controllers/Account.Controllers.js";
import upload from "../utils/multer.js";

const router = Router();

router.put('/updateprofile', updateProfile);
router.post('/uploadProfileImage', upload.single("profileImage"), uploadProfileImage);

export default router;
