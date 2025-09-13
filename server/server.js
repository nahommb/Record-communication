// server.js
import dotenv from "dotenv";
import express from "express";
import generateToken from "./helper/generateToken.js";
import authRoutes from "./routes/authRoutes.js";
import blogsRoutes from "./routes/blogsRouts.js";
import getDB from "./helper/db.js";
import initDB from "./models/initDb.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(cors({
  origin: ["https://recordcommunication.netlify.app",'http://localhost:5173'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));

// Routes
app.use("/api/auth", authRoutes);   
app.use("/api/blogs", blogsRoutes);
 
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
 