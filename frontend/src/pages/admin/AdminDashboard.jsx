import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatCard from "../../components/admin/StatCard";
import ProgressBar from "../../components/admin/ProgressBar";
import ActivityLog from "../../components/admin/ActivityLog";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              title="Submitted Documents"
              value="12"
              type="submitted"
              viewPath="/admin/review-submissions"
            />
            <StatCard
              title="Pending Reviews"
              value="5"
              type="pending"
              viewPath="/admin/review-submissions"
            />
            <StatCard
              title="Complied"
              value="8"
              type="complied"
              viewPath="/admin/review-submissions"
            />
            <StatCard
              title="Non-Compliant"
              value="3"
              type="noncompliant"
              viewPath="/admin/review-submissions"
            />
          </div>

          {/* PROGRESS */}
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#6A003A]">
            <h3 className="text-lg font-semibold text-[#6A003A] mb-4">
              Accreditation Progress
            </h3>

            <ProgressBar label="Level 1" value={80} />
            <ProgressBar label="Level 2" value={50} />
            <ProgressBar label="Level 3" value={20} />
          </div>

          {/* ACTIVITY LOG */}
          <ActivityLog />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
