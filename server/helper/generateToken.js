import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "mysecret";

export default function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}
 