import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/jmcfi-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* =========================
     HARDCODED PROTOTYPE ACCOUNTS
     ========================= */
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // ADMIN
    if (email === "admin" && password === "admin123") {
      navigate("/admin/dashboard");
      return;
    }

    // DEAN
    if (email === "dean" && password === "dean123") {
      navigate("/dean/dashboard");
      return;
    }

    // COMMON USER
    if (email === "user" && password === "user123") {
      navigate("/user/dashboard");
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6A003A] px-4">
      {/* LOGIN CARD */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Jose Maria College"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Login to Account
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1 mb-6">
          Please enter your email and password to continue
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email address
            </label>
            <input
              type="text"
              placeholder="admin / dean / user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A003A]"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm text-gray-600">
                Password
              </label>
              <button
                type="button"
                className="text-xs text-[#6A003A] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A003A]"
              required
            />
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded" />
            <span>Remember Password</span>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#6A003A] text-white py-2 rounded-md text-sm font-medium hover:bg-[#8A1456] transition"
          >
            Sign In
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-[#6A003A] hover:underline cursor-pointer">
            Create Account
          </span>
        </p>

        {/* PROTOTYPE INFO */}
        {/* <div className="mt-6 text-xs text-gray-400 border-t pt-4">
          <p className="font-medium mb-1">Prototype Accounts:</p>
          <p>Admin → admin / admin123</p>
          <p>Dean → dean / dean123</p>
          <p>User → user / user123</p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
