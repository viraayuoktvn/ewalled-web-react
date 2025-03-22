import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Topup from "./pages/Topup";
import Transfer from "./pages/Transfer";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom"; // 🔹 Import useLocation

function App() {
  const location = useLocation(); // 🔹 Ambil lokasi URL saat ini

  // 🔹 Sembunyikan Navbar di halaman Login & Register
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />} {/* 🔹 Navbar hanya muncul di halaman tertentu */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
