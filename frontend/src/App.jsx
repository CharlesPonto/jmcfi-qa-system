import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminSubmissionView from "./pages/admin/AdminSubmissionView";
import AdminReviewSubmissions from "./pages/admin/AdminReviewSubmissions";
import AdminSubmissionReview from "./pages/admin/AdminSubmissionReview";
import AdminUserManagement from "./pages/admin/AdminUserManagement";
import AdminLevel1 from "./pages/admin/AdminLevel1";
import AdminExternalReview from "./pages/admin/AdminExternalReview";
import AdminLevel2 from "./pages/admin/AdminLevel2";
import AdminLevel3 from "./pages/admin/AdminLevel3";
import AdminLevel4 from "./pages/admin/AdminLevel4";

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

        <Route path="/admin/users" element={<AdminUserManagement />} />

        <Route path="/admin/accreditation/level/1" element={<AdminLevel1 />} />

        <Route
          path="/admin/external-review"
          element={<AdminExternalReview />}
        />

        <Route
          path="/admin/external-review"
          element={<AdminExternalReview />}
        />

        <Route path="/admin/accreditation/level/2" element={<AdminLevel2 />} />

        <Route path="/admin/accreditation/level/3" element={<AdminLevel3 />} />
        <Route path="/admin/accreditation/level/4" element={<AdminLevel4 />} />
      </Routes>
    </Router>
  );
}

export default App;
