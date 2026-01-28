import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // HARDCODED LOGIN (FOR PROTOTYPE)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } else if (username === "dean" && password === "dean123") {
      localStorage.setItem("role", "dean");
      navigate("/dean/dashboard");
    } else if (username === "user" && password === "user123") {
      localStorage.setItem("role", "user");
      navigate("/user/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-2">
          Quality Assurance Management System
        </h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Login to continue
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Prototype Accounts:</p>
          <p>Admin: admin / admin123</p>
          <p>Dean: dean / dean123</p>
          <p>User: user / user123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
