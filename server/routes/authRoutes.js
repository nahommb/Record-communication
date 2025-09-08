// routes/authRoutes.js
import express from "express";
import loginController  from "../controllers/loginController.js";

const router = express.Router();

// Login route
router.post("/login", loginController);

export default router; // ✅ use export default instead of module.exports
