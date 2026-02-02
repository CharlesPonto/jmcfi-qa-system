import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/jmcfi-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin" && password === "admin123") {
      navigate("/admin/dashboard");
      return;
    }
    setError("Invalid administrator credentials.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] relative overflow-hidden px-4 antialiased">
      
      {/* PREMIUM BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6A003A]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#6A003A]/5 blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236A003A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="w-full max-w-[420px] relative z-10">
        {/* LOGO SECTION - Now fully centered */}
        <div className="flex flex-col items-center mb-10 text-center px-4">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-[#6A003A]/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img src={logo} alt="JMCFI" className="relative w-20 h-20 object-contain drop-shadow-xl" />
          </div>
          
          {/* Centered Heading */}
          <h2 className="text-gray-900 font-bold text-lg lg:text-xl tracking-[0.15em] uppercase leading-tight">
            Quality Assurance <br className="hidden sm:block" /> Management System
          </h2>
          
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.25em] mt-3">
            Institutional Portal
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-white p-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Admin Username
              </label>
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-[#6A003A]/5 focus:border-[#6A003A] transition-all placeholder:text-gray-300"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-[#6A003A]/5 focus:border-[#6A003A] transition-all placeholder:text-gray-300"
                required
              />
            </div>

            {error && (
              <p className="text-xs text-rose-500 font-semibold text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#6A003A] text-white py-4 rounded-xl text-sm font-semibold hover:bg-[#52002d] shadow-xl shadow-[#6A003A]/20 active:scale-[0.98] transition-all"
            >
              Sign In
            </button>
          </form>

          {/* PROTOTYPE CREDENTIALS PILL */}
          <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col items-center">
            <div className="bg-[#6A003A]/5 px-4 py-2 rounded-full border border-[#6A003A]/10">
              <p className="text-[10px] text-gray-500 font-medium">
                Prototype Admin: <span className="text-[#6A003A] font-bold">admin / admin123</span>
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center">
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">
            Jose Maria College Foundation, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;