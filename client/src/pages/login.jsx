import { useNavigate } from "react-router-dom";
import { useData } from "../context/authContext";
import { useState } from "react";
import { useEffect } from "react";

export default function Login() {

const {login} = useData();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    // If token exists, redirect to admin
    navigate('/admin');
  }
}, []); // Empty dependency array ensures this runs only once on mount

const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

async function handleLogin(e) {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      login(data.token);
      navigate("/admin");
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Error logging in:", err);
    alert("Something went wrong");
  }
}


  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-orange font-bold text-lg mb-4">Login </h1>
      <div className="flex flex-col space-y-4 bg-white h-80 items-center justify-center w-80 sm:w-96 rounded-lg sha p-4">
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" className=" p-1 pl-2 rounded-lg border border-gray-500 text-orange" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="p-1 pl-2 rounded-lg border border-gray-500  text-orange"/>
        <button onClick={handleLogin} className="bg-orange w-40 p-1 rounded-lg hover:bg-green-500">Login</button>
      </div>
    </div>
  );
}