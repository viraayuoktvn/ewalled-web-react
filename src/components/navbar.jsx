const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-5 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="src\assets\ewalled.svg" alt="Logo" className="w-30 h-7" />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-10">
        <a href="#" className="text-blue-600 font-medium">
          Dashboard
        </a>
        <a href="#" className="text-gray-700">Transfer</a>
        <a href="#" className="text-gray-700">Topup</a>
        <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700">Sign Out</a>
            <div className="h-6 w-px bg-gray-300"></div>
        </div>

        <img src="src\assets\sun.svg" className="h-6 -ml-4"></img>
      </div>
    </nav>
  );
};

export default Navbar;
