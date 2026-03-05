import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import { useNavigate } from "react-router-dom";
import AreaComplianceTable from "./AreaComplianceTable"; // Import the new file

const AdminLevel1 = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null); // Track which area is open
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Mapping the data you provided
  const areaRequirements = {
    1: [
      { id: "1.1.1", subArea: "JMCFI Philosophy, Vision, Mission, and Goals", evidence: "Official PVMG Documents" },
      { id: "1.1.2", subArea: "Articles of Incorporation/SEC Registration", evidence: "Certified True Copy of SEC" },
      { id: "1.1.3", subArea: "JMCFI Core Values", evidence: "Institutional Core Values Booklet" },
      { id: "1.1.4", subArea: "JMCFI Roadmap", evidence: "Strategic Roadmap 2024-2030" },
      { id: "1.1.5", subArea: "JMCFI Institutional Quality Framework", evidence: "ISO or Quality Manual" },
    ],
    // Other areas can be added here following the same format
  };

  const areas = [
    { id: 1, title: "Area I", name: "Philosophy and Objectives", progress: 100, status: "Complied" },
    { id: 2, title: "Area II", name: "Faculty", progress: 85, status: "Ongoing" },
    { id: 3, title: "Area III", name: "Instruction", progress: 92, status: "Ongoing" },
    { id: 4, title: "Area IV", name: "Library", progress: 100, status: "Complied" },
    { id: 5, title: "Area V", name: "Laboratories", progress: 45, status: "Critical" },
    { id: 6, title: "Area VI", name: "Physical Plant & Facilities", progress: 75, status: "Ongoing" },
    { id: 7, title: "Area VII", name: "Student Personnel Services", progress: 88, status: "Ongoing" },
    { id: 8, title: "Area VIII", name: "Social Orientation & Involvement", progress: 40, status: "Critical" },
    { id: 9, title: "Area IX", name: "Organization and Administration", progress: 95, status: "Ongoing" },
    { id: 10, title: "Area X", name: "Research", progress: 30, status: "Critical" },
    { id: 11, title: "Area XI", name: "Other Resources", progress: 100, status: "Complied" },
  ];

  return (
    <div className="bg-[#F4F7FE] min-h-screen flex font-sans antialiased text-left">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="w-full p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div>
              <h1 className="text-2xl font-black text-slate-800">PACUCOA Level 1</h1>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mt-1">Institutional Compliance Dashboard</p>
            </div>
            <button className="text-sm font-bold bg-[#6A003A] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all">
              Download Full Report
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatBox label="Completion" value="78.4%" color="text-[#6A003A]" />
            <StatBox label="Complied" value="03" color="text-emerald-600" />
            <StatBox label="Ongoing" value="05" color="text-amber-500" />
            <StatBox label="Critical" value="03" color="text-rose-500" />
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-4 px-2">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Select an Area to View Details</span>
                <div className="h-px flex-1 bg-slate-200"></div>
             </div>

             <div className="grid grid-cols-1 gap-3">
                {areas.map((area) => (
                  <AreaRow 
                    key={area.id} 
                    area={area} 
                    onClick={() => navigate(`/admin/level-1/area/${area.id}`)}
                    isActive={selectedArea?.id === area.id}
                  />
                ))}
             </div>
          </div>

          {/* This part shows the table only when an area is clicked */}
          {selectedArea && (
            <AreaComplianceTable 
              area={selectedArea} 
              data={areaRequirements[selectedArea.id] || []} 
            />
          )}
        </main>
      </div>
    </div>
  );
};

const StatBox = ({ label, value, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-2xl font-black ${color}`}>{value}</p>
  </div>
);

const AreaRow = ({ area, onClick, isActive }) => {
  const isCritical = area.status === "Critical";
  const isComplied = area.status === "Complied";

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer bg-white border ${isActive ? 'border-[#6A003A] ring-1 ring-[#6A003A]' : 'border-slate-100'} hover:border-[#6A003A]/30 p-4 md:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all group shadow-sm`}
    >
      <div className="flex items-center gap-5 flex-1">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0 ${
          isComplied ? 'bg-emerald-50 text-emerald-600' : 
          isCritical ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-[#6A003A]'
        }`}>
          {area.title.split(' ')[1]}
        </div>
        <div>
           <h4 className="text-[17px] font-bold text-slate-800 group-hover:text-[#6A003A] transition-colors">{area.name}</h4>
           <span className={`text-[10px] font-black uppercase tracking-widest ${
              isComplied ? 'text-emerald-500' : isCritical ? 'text-rose-500' : 'text-amber-500'
           }`}>{area.status}</span>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-col items-end gap-1.5">
           <span className="text-lg font-black text-slate-800">{area.progress}%</span>
           <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${isComplied ? 'bg-emerald-500' : isCritical ? 'bg-rose-500' : 'bg-[#6A003A]'}`} style={{ width: `${area.progress}%` }} />
           </div>
        </div>
        <div className={`p-2.5 rounded-xl transition-all ${isActive ? 'bg-[#6A003A] text-white' : 'bg-slate-50 text-slate-300'}`}>
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminLevel1;