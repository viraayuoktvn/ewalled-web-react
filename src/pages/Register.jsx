import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate(); // 🔹 Gunakan useNavigate untuk navigasi

    const handleRegister = () => {
        // 🔹 Simulasi proses registrasi (bisa diganti dengan API)
        console.log("Registrasi berhasil!");

        // 🔹 Redirect ke halaman Login setelah berhasil daftar
        navigate("/login");
    };

    return (
      <div className="flex h-screen">
        {/* Left Section - Form */}
        <div className="font-['Open_Sans'] w-1/2 flex flex-col justify-center items-center">
          <div className="w-[375px] items-center">
            <div className="mb-12 flex justify-center items-center flex-col text-center">
                <img src="src/assets/ewalled.svg" alt="Logo" className="h-[60px] my-6" />
            </div>
                
                <input type="text" placeholder="Nama Lengkap" className="w-full p-3 mb-4 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
                <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
                <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
                <input type="text" placeholder="No Hp" className="w-full p-3 mb-12 border rounded-xl focus:outline-none placeholder:text-black placeholder:font-semibold" />
                
                {/* 🔹 Panggil handleRegister saat tombol diklik */}
                <button onClick={handleRegister} className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md shadow-[#19918F]">
                    Daftar
                </button>
                
                <p className="mt-4 text-gray-600">
                    Sudah punya akun? <Link to="/login" className="text-blue-600">Login di sini</Link>
                </p>
            </div>
        </div>
        
        {/* Right Section - Image */}
        <div className="w-1/2 h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/logreg.svg')" }}></div>
      </div>
    );
}

export default Register;