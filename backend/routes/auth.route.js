import express from "express";

import {
  login,
  signup,
  logout,
  getUserProfile,
  updateUser,
  getAllUser,
  refreshAccessToken,
  calculateBMI,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../utils/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refreshAccessToken", refreshAccessToken);
router.get("/getUserProfile", authenticateUser, getUserProfile); //hjb
router.get("/getAllUser", authenticateUser, getAllUser);
router.patch("/updateUser", authenticateUser, updateUser); //hjb
router.get("/calculateBmi", authenticateUser, calculateBMI);

export default router;
