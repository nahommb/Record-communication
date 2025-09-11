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

    const res = await fetch("http://localhost:5000/api/blogs/createblogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    console.log(res.ok);

    if (res.ok) {
      setPop(true);
      setPopMessage('Successfuly Posted')
      // Auto-close popup after 3s
      setTimeout(() => setPop(false), 2000);
    } else {
      setPopMessage('Something Wrong Please Try Again')
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
