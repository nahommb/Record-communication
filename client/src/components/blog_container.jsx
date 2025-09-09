import { useEffect } from "react";
import { useData } from "../context/authContext";

export default function BlogContainer() {

const { getData, data } = useData();

useEffect(() => {
  fetchBlogs();
}, []);

useEffect(() => {
  
}, [data]); // runs whenever data changes


  const fetchBlogs = async () => {
  const res = await fetch("http://localhost:5000/api/blogs/getblogs",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  }); 
  const newdata = await res.json();
  

  getData(newdata);

}

  

   return (
  <div className=" h-32 md:h-44 bg-blueAccent absolute top-44 sm:top-40 md:top-48 lg:top-80 inset-x-5  md:inset-x-20 z-20 rounded-md">
    <h1 className="text-orange text-xl font-bold p-2 sm:p-4">Blogs</h1>
    <p className="text-white sm:text-xl text-sm pl-2 sm:pl-4">{data?data.content:'loading'}</p>
  </div>
);

}