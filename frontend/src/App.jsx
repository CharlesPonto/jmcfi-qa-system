import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard";
import DeanDashboard from "./pages/dean/DeanDashboard";
import UserDashboard from "./pages/user/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Dean */}
        <Route path="/dean/dashboard" element={<DeanDashboard />} />

        {/* Common User */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
