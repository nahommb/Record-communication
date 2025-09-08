import bcrypt from "bcrypt";
import getDB from "../helper/db.js";

export  async function loginController(req,res) {

    const { email, password } = req.body;
      const db = await getDB();
    
    try{
     const [rows] = await db.execute("SELECT *FROM users WHERE email = ?",['nahomjr17@gmail.com'])
     console.log(rows[0])
     
     const isMatch = await bcrypt.compare('nahomlee', rows[0].password);
     

     if(isMatch){
      res.send("Login successful");

     }
     else{
      res.status(401).json({message:'Incorect Email or Password'})
     }
    }
    catch(err){
     res.status(500)
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
  