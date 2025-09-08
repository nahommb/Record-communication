// routes/authRoutes.js
import express from "express";
import {loginController, registerController}  from "../controllers/authController.js";

const router = express.Router();

// Login route
router.post("/login", loginController);
router.post('/register',registerController);

export default router; // ✅ use export default instead of module.exports
