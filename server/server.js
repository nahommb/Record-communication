// server.js
import dotenv from "dotenv";
import express from "express";
import generateToken from "./helper/generateToken.js";
import authRoutes from "./routes/authRoutes.js";
import blogsRoutes from "./routes/blogsRouts.js";
import getDB from "./helper/db.js";
import initDB from "./models/initDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/blogs", blogsRoutes);

const db = await getDB();
db

initDB();

// Test route
app.get("/", (req, res) => {
  const token = generateToken({ id: 1, username: "testuser" });
  res.json({ message: "Hello from Node server 🚀", token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 