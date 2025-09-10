import { useState } from "react";
import AdminSidebar from "./admin_sidebar";

export default function AdminBody() {

    const [index,setIndex] = useState(0);

    const bodyParts = [
        <p>0</p>,
        <p>1</p>,
        <p>2</p>,
        <p>3</p>

    ]

  return (
    <div className="flex flex-row items-center justify-between min-h-screen bg-gray-100">
         <div className="w-64 h-screen bg-white text-orange p-4 mt-4 pt-16 rounded-lg ">  
            <ul>
                <li><button onClick={()=>setIndex(0)}  className="mb-4">Dashboard</button></li>
                <li><button onClick={()=>setIndex(1)}  className="mb-4">Blogs</button></li>
                <li><button onClick={()=>setIndex(2)}  className="mb-4">Settings</button></li>
                <li><button onClick={()=>setIndex(3)}  className="mb-4">Reports</button></li> 
                

            </ul>
        </div>
        <div className="bg-white mt-8 ml-4 m-4 rounded-lg w-full h-screen">
            {bodyParts[index]}
        </div>
    </div>
  );
}