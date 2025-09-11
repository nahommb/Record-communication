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
  const res = await fetch("https://record-communication.onrender.com/api/blogs/getblogs",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  }); 
  const newdata = await res.json();
  

  getData(newdata);

}

  

   return (
 <div className="h-32 md:h-44 
  absolute top-44 sm:top-40 md:top-48 lg:top-80 inset-x-5 md:inset-x-20 
  z-20 rounded-2xl 
  bg-white/20 backdrop-blur-md 
  border border-white/30 
  shadow-lg
">
  <h1 className="text-white text-xl font-bold p-2 sm:p-4">Daily Blog</h1>
  <p className="text-gray-600 sm:text-xl text-sm pl-2 sm:pl-4">
    {data ? data.content : ''}
  </p>
</div>

);

}