
export default function AdminSidebar() { 

    return (
        <div className="w-64 h-screen bg-white text-orange p-4 mt-4 pt-16 rounded-lg ">
            
            <ul>
                <li className="mb-4"><a href="#" className="hover:underline">Dashboard</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Blogs</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Settings</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Reports</a></li>
            </ul>
        </div>
    );
}