import { useNavigate } from "react-router-dom";
import { useData } from "../context/authContext";
import { useState, useEffect } from "react";
import PopCard from "../components/pop_card";

export default function Login() {
  const { login } = useData();
  const navigate = useNavigate();

  const [popMessage, setPopMessage] = useState("");
  const [pop, setPop] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://record-communication.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        login(data.token);
        setLoading(false);
        navigate("/admin");
      } else {
        setLoading(false);
        setPop(true);
        setPopMessage(data.message || "Login failed");
        setTimeout(() => setPop(false), 2000);
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setLoading(false);
      setPop(true);
      setPopMessage("Login failed");
      setTimeout(() => setPop(false), 2000);
    }
  }

  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-orange font-bold text-lg mb-4">Login</h1>

      {pop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <PopCard message={popMessage} />
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="flex flex-col space-y-4 bg-white h-80 items-center justify-center w-80 sm:w-96 rounded-lg p-4 shadow-lg shadow-gray-400">
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="p-1 pl-2 rounded-lg border border-gray-500 text-orange w-64"
          />
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="p-1 pl-2 rounded-lg border border-gray-500 text-orange w-64"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-orange w-40 p-2 rounded-lg flex justify-center items-center hover:bg-green-500 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
