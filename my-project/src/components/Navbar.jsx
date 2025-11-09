import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-yellow-400">CineScope 🎬</Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/search" className="hover:text-yellow-400">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;
