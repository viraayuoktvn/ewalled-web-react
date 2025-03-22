import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // 🔹 Buat fungsi navigasi

  const handleLogin = () => {
    navigate("/"); // 🔹 Arahkan ke halaman Home setelah login
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Form */}
      <div className="font-['Open_Sans'] w-1/2 flex flex-col justify-center items-center">
        <div className="w-[375px]">
          <div className="mb-12 flex justify-center items-center flex-col text-center">
            <img src="/src/assets/ewalled.svg" alt="Logo" className="h-[60px] my-6" />
          </div>

          <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-12 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
          
          {/* 🔹 Gunakan onClick untuk navigasi */}
          <button
            onClick={handleLogin}
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md shadow-[#19918F]"
          >
            Login
          </button>

          <p className="mt-4 text-gray-600">
            Belum punya akun? <Link to="/register" className="text-blue-600">Daftar di sini</Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className="w-1/2 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/logreg.svg')" }} // 🔹 Cek path asset
      ></div>
    </div>
  );
}

export default Login;