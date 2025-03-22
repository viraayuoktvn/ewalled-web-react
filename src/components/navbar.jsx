import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // 🔹 Ambil path halaman saat ini

  return (
    <nav className="flex justify-between items-center px-12 py-5 shadow-md bg-white">
      {/* 🔹 Logo (Klik untuk kembali ke Dashboard) */}
      <Link to="/" className="flex items-center gap-2">
        <img src="src/assets/ewalled.svg" alt="Logo" className="w-30 h-7" />
      </Link>

      {/* 🔹 Menu Items */}
      <div className="flex items-center gap-10">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Dashboard
        </Link>
        <Link 
          to="/transfer" 
          className={location.pathname === "/transfer" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Transfer
        </Link>
        <Link 
          to="/topup" 
          className={location.pathname === "/topup" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Topup
        </Link>

        {/* 🔹 Sign Out & Separator */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-gray-700">Sign Out</Link>
          <div className="h-6 w-px bg-gray-300"></div>
        </div>

        {/* 🔹 Theme Icon */}
        <img src="src/assets/sun.svg" className="h-6 -ml-4" alt="Theme Icon" />
      </div>
    </nav>
  );
};

export default Navbar;