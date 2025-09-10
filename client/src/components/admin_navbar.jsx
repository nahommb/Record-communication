import { useData } from "../context/authContext";

export default function AdminNavbar() {

    const {logout} = useData();

  return (
    <nav className="p-4 text-orange">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xxl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
            <p>Nahom m</p>
          <button onClick={logout} className="bg-blueAccent px-2 py-1 text-white rounded hover:bg-blue-700">Logout</button>
        </div>
      </div>
    </nav>
  );
}