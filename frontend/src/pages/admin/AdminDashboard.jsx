import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatCard from "../../components/admin/StatCard";
import ProgressBar from "../../components/admin/ProgressBar";
import ActivityLog from "../../components/admin/ActivityLog";
import SubmissionTable from "../../components/admin/SubmissionTable";
import LevelBreakdown from "../../components/admin/LevelBreakdown";

const AdminDashboard = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { id: 1, label: "Level 1", value: 75 },
    { id: 2, label: "Level 2", value: 50 },
    { id: 3, label: "Level 3", value: 20 },
  ];

  const handleExport = () => {
    alert("Generating Comprehensive Report...");
  };

  return (
    <>
      {/* MOBILE/TABLET RESPONSIVENESS OVERLAY */}
      <div className="lg:hidden fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-sm">
          <div className="w-16 h-16 bg-magenta-50 text-[#6A003A] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-[#6A003A] uppercase tracking-widest mb-2">
            Use a Laptop or Tablet
          </h2>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            This dashboard is currently optimized for desktop use. To ensure data accuracy and full access to administrative features, please switch to a larger device.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-100">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">System Version 2026.1</p>
          </div>
        </div>
      </div>

      {/* DASHBOARD CONTENT */}
      <div className="hidden lg:flex bg-slate-50 min-h-screen font-sans antialiased text-left">
        <Sidebar />

        <div className="flex-1 ml-64 flex flex-col min-h-screen">
          <Topbar />

          <main className="p-8 space-y-8 overflow-y-auto">
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">System Dashboard</h2>
                <p className="text-sm text-gray-500 font-medium">Real-time accreditation tracking and system analytics</p>
              </div>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#6A003A] text-white text-sm font-bold rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
              </button>
            </div>

            {/* STATS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Submitted Documents" value="12" type="submitted" viewPath="/admin/review" />
              <StatCard title="Pending Reviews" value="5" type="pending" viewPath="/admin/review" />
              <StatCard title="Complied" value="8" type="complied" viewPath="/admin/review" />
              <StatCard title="Non-Compliant" value="3" type="noncompliant" viewPath="/admin/review" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {selectedLevel ? (
                  <LevelBreakdown 
                    level={selectedLevel} 
                    onBack={() => setSelectedLevel(null)} 
                  />
                ) : (
                  <SubmissionTable />
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Accreditation Progress</h3>
                  <div className="space-y-6">
                    {levels.map((lvl) => (
                      <div key={lvl.id} className="group text-left">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-bold text-gray-700 tracking-tight">{lvl.label}</span>
                          <button 
                            onClick={() => setSelectedLevel(lvl)}
                            className="text-[11px] font-bold text-gray-400 uppercase tracking-wider hover:text-[#6A003A] transition-colors"
                          >
                            View Details →
                          </button>
                        </div>
                        <ProgressBar value={lvl.value} />
                      </div>
                    ))}
                  </div>
                </div>
                <ActivityLog />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;