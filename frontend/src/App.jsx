import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminSubmissionView from "./pages/admin/AdminSubmissionView";
import AdminReviewSubmissions from "./pages/admin/AdminReviewSubmissions";
import AdminSubmissionReview from "./pages/admin/AdminSubmissionReview";

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

        <Route
          path="/admin/submissions/:id"
          element={<AdminSubmissionView />}
        />

        <Route
          path="/admin/review-submissions"
          element={<AdminReviewSubmissions />}
        />

        <Route
          path="/admin/submissions/:id/review"
          element={<AdminSubmissionReview />}
        />
      </Routes>
    </Router>
  );
}

export default App;
