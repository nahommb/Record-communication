// server.js
import dotenv from "dotenv";
import express from "express";
import generateToken from "./helper/generateToken.js";
import authRoutes from "./routes/authRoutes.js";
import getDB from "./helper/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

const db = await getDB();
db

// Test route
app.get("/", (req, res) => {
  const token = generateToken({ id: 1, username: "testuser" });
  res.json({ message: "Hello from Node server 🚀", token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 