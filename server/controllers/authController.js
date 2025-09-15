import bcrypt from "bcrypt";
import getDB from "../helper/db.js";
import generateToken from "../helper/generateToken.js";

export async function loginController(req, res) {
  console.log(req.body);

  const { email, password } = req.body;
  const db = await getDB();

  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Incorrect Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, rows[0].password);

    if (isMatch) {
      const token = generateToken({
        id: rows[0].id,
        email: rows[0].email,
        role: rows[0].role,
      });
      return res.status(200).json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Incorrect Email or Password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}


export async function registerController(req,res){

      const {email,password,role} = req.body;
      const db = await getDB();

      try{
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.execute("INSERT INTO users (email,password,role) VALUES (?,?,?)",
          [email, hashedPassword, role])
        
        res.send('created successfuly')
      }
      catch(err){
         console.log(err)
      }
   
} 

export async function changePasswordController(req,res){

  const {email,oldPassword,newPassword} = req.body;
  const db = await getDB();
   

  try{
     const [rows] =  await db.execute("SELECT * FROM users WHERE email = ?", [email])
     const isMatch = await bcrypt.compare(oldPassword, rows[0].password);
     if(isMatch){
      //change password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.execute("UPDATE users SET password = ? WHERE email = ?",[hashedPassword,email])
      res.status(200).json({message:'successfuly changed'}) 
     }
  }
  catch(err){
    res.status(500)
  }
}
   