import { useData } from "../context/authContext";

export default function AdminNavbar() {

    const {logout,user} = useData();

  return (
    <div className="p-4 text-orange shadow-lg shadow-gray-400 bg-white m-2 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xxl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-2">
            <p>{user.email}</p>
          <button onClick={logout} className="bg-blueAccent px-2 py-1 text-white rounded hover:bg-blue-700">Logout</button>
        </div>
      </div>
    </div>
  );
}