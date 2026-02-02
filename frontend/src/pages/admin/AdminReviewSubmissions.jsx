import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import LevelGroup from "../../components/admin/LevelGroup";

const AdminReviewSubmissions = () => {
  const [activeTab, setActiveTab] = useState("Submissions");
  const [selectedProgram, setSelectedProgram] = useState("BS in Information Technology");
  const navigate = useNavigate();

  const allSubmissions = [{

      id: 1,

      level: "Level 1",

      title: "Facilities Compliance",

      program: "BS in Information Technology",

      status: "Pending",

    },

    {

      id: 2,

      level: "Level 1",

      title: "Faculty Profile",

      program: "BS in Information Technology",

      status: "Complied",

    },

    {

      id: 3,

      level: "Level 1",

      title: "Curriculum Design",

      program: "BS in Information Technology",

      status: "Pending",

    },

    {

      id: 4,

      level: "Level 1",

      title: "Student Admission Policies",

      program: "BS in Information Technology",

      status: "Needs Revision",

    },



    /* ---------- LEVEL 2 ---------- */

    {

      id: 5,

      level: "Level 2",

      title: "Research Outputs",

      program: "BS in Information Technology",

      status: "Non-Complied",

    },

    {

      id: 6,

      level: "Level 2",

      title: "Extension Programs",

      program: "BS in Information Technology",

      status: "Pending",

    },

    {

      id: 7,

      level: "Level 2",

      title: "Faculty Research Publications",

      program: "BS in Information Technology",

      status: "Complied",

    },

    {

      id: 8,

      level: "Level 2",

      title: "Community Engagement Activities",

      program: "BS in Information Technology",

      status: "Needs Revision",

    },



    /* ---------- LEVEL 3 ---------- */

    {

      id: 9,

      level: "Level 3",

      title: "Library Resources",

      program: "BS in Information Technology",

      status: "Needs Revision",

    },

    {

      id: 10,

      level: "Level 3",

      title: "Laboratory Utilization",

      program: "BS in Information Technology",

      status: "Pending",

    },

    {

      id: 11,

      level: "Level 3",

      title: "Industry Linkages",

      program: "BS in Information Technology",

      status: "Complied",

    },

    {

      id: 12,

      level: "Level 3",

      title: "Quality Assurance Mechanisms",

      program: "BS in Information Technology",

      status: "Non-Complied",

    },];

  const filteredSubmissions = allSubmissions.filter((item) => {
    if (item.program !== selectedProgram) return false;
    if (activeTab === "Submissions") return item.status === "Pending";
    if (activeTab === "Complied") return item.status === "Complied";
    if (activeTab === "Non-Complied") return item.status === "Non-Complied";
    if (activeTab === "Done") return item.status !== "Pending";
    return true;
  });

  const levels = ["Level 1", "Level 2", "Level 3"];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />
        
        <main className="p-8 space-y-8">
          {/* PAGE HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Review Submissions</h2>
              <p className="text-sm text-gray-500">Manage and validate accreditation requirements</p>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
              {["Submissions", "Done", "Complied", "Non-Complied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    activeTab === tab 
                      ? "bg-[#6A003A] text-white shadow-md" 
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* FILTERS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-magenta-50 flex items-center justify-center text-[#6A003A]">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Filter by Program</label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full md:w-80 bg-gray-50 border-none rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-[#6A003A]/20 outline-none"
              >
                <option>BS in Information Technology</option>
                <option>BS in Business Administration</option>
              </select>
            </div>
          </div>

          {/* LEVEL GROUPS */}
          <div className="space-y-6">
            {levels.map((level) => (
              <LevelGroup
                key={level}
                level={level}
                items={filteredSubmissions.filter(i => i.level === level)}
                onReview={(id) => navigate(`/admin/submissions/${id}/review`)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminReviewSubmissions;