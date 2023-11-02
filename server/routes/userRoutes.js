import express from "express";
import { registerUser, userProfile } from '../controller/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/profile', userProfile)

export default router;
