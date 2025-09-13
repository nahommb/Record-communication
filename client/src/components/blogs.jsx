import Button from "@mui/material/Button";
import { useState } from "react";
import PopCard from "./pop_card";

export default function Blogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pop, setPop] = useState(false);
  const [popMessage,setPopMessage] = useState()

async function handlePost(e) {
  e.preventDefault();
  console.log("clicked");

  try {
    const res = await fetch("https://record-communication.onrender.com/api/blogs/createblogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    console.log("Status:", res.status);

    if (res.ok) {
      setPop(true);
      setPopMessage("Successfully Posted");
      setTimeout(() => setPop(false), 2000);
    } else {
      const errText = await res.text();
      console.error("Error response:", errText);
      setPopMessage("Something Wrong Please Try Again");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setPopMessage("Network error, please try again");
  }
}


  return (
    <div>
      <h2>Post Blog</h2>

      {/* Popup overlay */}
      {pop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <PopCard message={popMessage}/>
        </div>
      )}
     
     <form onSubmit={handlePost} className="mt-4 ml-4 flex-col flex items-start">
    <input
        required
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 m-4 border rounded-lg border-orange w-60"
    />
    <textarea
        required
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        className="p-2 m-4 h-40 w-80 border rounded-lg border-orange"
    />
    <Button type="submit">Post</Button>
    </form>

      
    </div>
  );
}
