// db.js
import { createConnection } from "mysql2/promise";

let db; // singleton connection

export default async function getDB() {
  if (db) return db; // reuse existing connection

  try {
    db = await createConnection(process.env.MYSQL_URL);
    console.log("✅ Connected to MySQL!");
    return db;
  } catch (err) {
    console.error("❌ DB Connection Failed:", err);
    throw err; // throw to handle in server or controller
  }
}



 
