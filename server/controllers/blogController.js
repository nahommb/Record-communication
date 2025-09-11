import getDB from '../helper/db.js';

export async function createBlogController(req,res){

    const {title,content} = req.body;
    console.log(req.body)
  try{
    const db = await getDB();
    await db.execute("INSERT INTO blogs (title,content) VALUES (?,?)",[title,content])

    res.status(200).json("Blog created")
  }
  catch(err){
   res.status(500)
  }
   
}

export async function getBlogsController(req,res){

    try{
      const db = await getDB();
      const [rows] = await db.execute("SELECT * FROM blogs");

      res.json(rows[rows.length - 1]);
    }
    catch(err){
      res.status(500)
    }
   
}