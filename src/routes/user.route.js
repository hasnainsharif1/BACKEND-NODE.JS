import {Router} from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
// router.get("/me", getUserProfile);
// router.put("/me", updateUserProfile);
// router.delete("/me", deleteUserProfile);

export default router;
