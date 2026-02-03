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
  const [sidebarOpen, setSidebarOpen] = useState(false); // Controls mobile sidebar

  const levels = [
    { id: 1, label: "Level 1", value: 75 },
    { id: 2, label: "Level 2", value: 50 },
    { id: 3, label: "Level 3", value: 20 },
  ];

  const handleExport = () => {
    alert("Generating Comprehensive Report...");
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      
      {/* SIDEBAR - Pass state and toggle function */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        
        {/* TOPBAR - Pass toggle function for the hamburger menu */}
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-8 overflow-y-auto">
          
          {/* RESPONSIVE WARNING NOTE (Optional - keeps the user informed) */}
          <div className="lg:hidden bg-amber-50 border border-amber-200 p-4 rounded-2xl">
             <p className="text-sm font-semibold text-amber-800 uppercase tracking-tight">System Notice</p>
             <p className="text-xs text-amber-700 mt-1 font-medium">
               Some features are optimized for desktop. Use a laptop for full administrative control.
             </p>
          </div>

          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">System Dashboard</h2>
              <p className="text-xs md:text-sm text-gray-500 font-medium tracking-tight">Real-time accreditation tracking and system analytics</p>
            </div>
            <button
              onClick={handleExport}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#6A003A] text-white text-sm font-bold rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Report
            </button>
          </div>

          {/* STATS SECTION - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard title="Submitted Documents" value="12" type="submitted" viewPath="/admin/review" />
            <StatCard title="Pending Reviews" value="5" type="pending" viewPath="/admin/review" />
            <StatCard title="Complied" value="8" type="complied" viewPath="/admin/review" />
            <StatCard title="Non-Compliant" value="3" type="noncompliant" viewPath="/admin/review" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-2 space-y-8 overflow-x-auto">
              {selectedLevel ? (
                <LevelBreakdown 
                  level={selectedLevel} 
                  onBack={() => setSelectedLevel(null)} 
                />
              ) : (
                <div className="min-w-full">
                   <SubmissionTable />
                </div>
              )}
            </div>

            {/* SIDEBAR CONTENT AREA (Progress & Logs) */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Accreditation Progress</h3>
                <div className="space-y-6">
                  {levels.map((lvl) => (
                    <div key={lvl.id} className="group text-left">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-gray-700 tracking-tight">{lvl.label}</span>
                        <button 
                          onClick={() => setSelectedLevel(lvl)}
                          className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#6A003A] transition-colors"
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
  );
};

export default AdminDashboard;