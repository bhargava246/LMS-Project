import{ Router } from "express";

import { getProfile,login,logout,register } from "../controllers/user.controller";

const router = Router();

router.post('/register',register);
router.post('/login',login);
router.get('/logut',logout);
router.get('/me',getProfile);

export default router;
