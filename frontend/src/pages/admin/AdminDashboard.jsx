import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatCard from "../../components/admin/StatCard";
import ProgressBar from "../../components/admin/ProgressBar";
import ActivityLog from "../../components/admin/ActivityLog";
import SubmissionTable from "../../components/admin/SubmissionTable";

const AdminDashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8 overflow-y-auto">
          {/* STATS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Submitted Documents" value="12" type="submitted" viewPath="/admin/review" />
            <StatCard title="Pending Reviews" value="5" type="pending" viewPath="/admin/review" />
            <StatCard title="Complied" value="8" type="complied" viewPath="/admin/review" />
            <StatCard title="Non-Compliant" value="3" type="noncompliant" viewPath="/admin/review" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-2 space-y-8">
              <SubmissionTable />
            </div>

            {/* SIDEBAR CONTENT AREA */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Accreditation Progress</h3>
                <ProgressBar label="Level 1" value={75} />
                <ProgressBar label="Level 2" value={50} />
                <ProgressBar label="Level 3" value={20} />
              </div>
              <ActivityLog />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;