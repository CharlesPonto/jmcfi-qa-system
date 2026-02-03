import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import LevelGroup from "../../components/admin/LevelGroup";

const AdminReviewSubmissions = () => {
  const [activeTab, setActiveTab] = useState("Submissions");
  const [selectedProgram, setSelectedProgram] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Added for mobile control
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const allSubmissions = [
    /* ... (data remains the same) ... */
    { id: 1, level: "Level 1", title: "Facilities Compliance", program: "BS in Information Technology", status: "Pending" },
    { id: 2, level: "Level 1", title: "Faculty Profile", program: "BS in Information Technology", status: "Complied" },
    { id: 3, level: "Level 1", title: "Curriculum Design", program: "BS in Information Technology", status: "Pending" },
    { id: 4, level: "Level 1", title: "Student Admission Policies", program: "BS in Information Technology", status: "Needs Revision" },
    { id: 5, level: "Level 2", title: "Research Outputs", program: "BS in Information Technology", status: "Non-Complied" },
    { id: 6, level: "Level 2", title: "Extension Programs", program: "BS in Information Technology", status: "Pending" },
    { id: 7, level: "Level 2", title: "Faculty Research Publications", program: "BS in Information Technology", status: "Complied" },
    { id: 8, level: "Level 2", title: "Community Engagement Activities", program: "BS in Information Technology", status: "Needs Revision" },
    { id: 9, level: "Level 3", title: "Library Resources", program: "BS in Information Technology", status: "Needs Revision" },
    { id: 10, level: "Level 3", title: "Laboratory Utilization", program: "BS in Information Technology", status: "Pending" },
    { id: 11, level: "Level 3", title: "Industry Linkages", program: "BS in Information Technology", status: "Complied" },
    { id: 12, level: "Level 3", title: "Quality Assurance Mechanisms", program: "BS in Information Technology", status: "Non-Complied" },
    { id: 13, level: "Level 1", title: "Strategic Plan", program: "BS in Business Administration", status: "Pending" },
  ];

  const filteredSubmissions = allSubmissions.filter((item) => {
    const programMatch = selectedProgram === "All" || item.program === selectedProgram;
    let tabMatch = true;
    if (activeTab === "Submissions") tabMatch = item.status === "Pending";
    else if (activeTab === "Complied") tabMatch = item.status === "Complied";
    else if (activeTab === "Non-Complied") tabMatch = item.status === "Non-Complied";
    else if (activeTab === "Done") tabMatch = item.status !== "Pending";
    return programMatch && tabMatch;
  });

  const levels = ["Level 1", "Level 2", "Level 3"];

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      {/* 1. Added props to Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* 2. Changed ml-64 to lg:ml-64 */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        {/* 3. Passed toggle to Topbar */}
        <Topbar toggleSidebar={toggleSidebar} />
        
        <main className="p-4 md:p-8 space-y-6">
          {/* HEADER SECTION - Stack on mobile, row on MD */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">Review Submissions</h2>
              <p className="text-sm text-gray-500 font-medium">Manage and validate accreditation requirements</p>
            </div>
            
            {/* TAB NAVIGATION - Horizontal scroll on mobile */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-x-auto no-scrollbar max-w-full">
              {["Submissions", "Done", "Complied", "Non-Complied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${
                    activeTab === tab 
                      ? "bg-[#6A003A] text-white shadow-lg shadow-[#6A003A]/20" 
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* SINGLE PROGRAM FILTER */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="max-w-md">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Filter by Program</label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full bg-slate-50 border border-transparent rounded-xl px-4 py-3 text-xs font-semibold text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#6A003A]/10 outline-none transition-all cursor-pointer appearance-none"
              >
                <option value="All">All Programs</option>
                <option>BS in Information Technology</option>
                <option>BS in Business Administration</option>
                <option>BS in Computer Engineering</option>
              </select>
            </div>
          </div>

          {/* LEVEL GROUPS */}
          <div className="space-y-6 md:space-y-8">
            {levels.map((level) => {
              const itemsInLevel = filteredSubmissions.filter(i => i.level === level);
              if (itemsInLevel.length === 0) return null;
              
              return (
                <div key={level} className="overflow-x-auto pb-2">
                   <LevelGroup
                    level={level}
                    items={itemsInLevel}
                    onReview={(id) => navigate(`/admin/submissions/${id}/review`)}
                  />
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminReviewSubmissions;