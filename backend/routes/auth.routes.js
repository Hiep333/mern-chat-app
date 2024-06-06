import express from "express";
import { loginUser, logoutUser, singupUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup",singupUser);
router.get("/login",loginUser);
router.get("/logout",logoutUser);

export default router;