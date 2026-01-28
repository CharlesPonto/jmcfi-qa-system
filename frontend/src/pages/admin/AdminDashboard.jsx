import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatCard from "../../components/admin/StatCard";
import ProgressBar from "../../components/admin/ProgressBar";
import SubmissionTable from "../../components/admin/SubmissionTable";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard title="Submitted Documents" value="12" />
            <StatCard title="Pending Reviews" value="5" />
            <StatCard title="Complied" value="8" />
            <StatCard title="Non-Compliant" value="3" />
          </div>

          {/* Progress */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Accreditation Progress
            </h3>
            <ProgressBar label="Level 1" value={80} />
            <ProgressBar label="Level 2" value={50} />
            <ProgressBar label="Level 3" value={20} />
          </div>

          {/* Table */}
          <SubmissionTable />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
