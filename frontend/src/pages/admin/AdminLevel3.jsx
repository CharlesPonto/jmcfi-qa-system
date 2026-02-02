import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLevel3 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const criteria = [
    { id: 1, title: "Instruction", description: "Advanced curriculum implementation & learning outcomes." },
    { id: 2, title: "Community Outreach", description: "Sustainability and impact of outreach programs." },
    { id: 3, title: "Research", description: "Utilization of results and indexed publications." },
    { id: 4, title: "Faculty Development", description: "Training, evaluation, and professional growth." },
    { id: 5, title: "Library Resources", description: "Collections, facilities, and digital services." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8 text-left animate-in fade-in duration-500">
          {/* HEADER SECTION */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Level 3 Accreditation</h2>
              <p className="text-sm text-gray-500 font-medium">Advanced Program Evaluation & Sustainability Monitoring</p>
            </div>
            <div className="px-4 py-2 bg-magenta-50 text-[#6A003A] rounded-2xl border border-magenta-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6A003A] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Advanced Phase</span>
            </div>
          </div>

          {/* TABS NAVIGATION */}
          <div className="flex gap-1 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 w-fit">
            {["guidelines", "submissions", "complied"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab
                    ? "bg-[#6A003A] text-white shadow-lg shadow-magenta-100"
                    : "text-gray-400 hover:text-gray-600 hover:bg-slate-50"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* DYNAMIC CONTENT */}
          <div className="mt-4">
            {activeTab === "guidelines" && (
              <Guidelines criteria={criteria} onSelect={setSelectedMaterial} />
            )}
            {activeTab === "submissions" && <Submissions criteria={criteria} />}
            {activeTab === "complied" && <Complied criteria={criteria} />}
          </div>
        </main>
      </div>

      {selectedMaterial && (
        <MaterialViewer material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />
      )}
    </div>
  );
};

/* --- TAB 1: GUIDELINES --- */
const Guidelines = ({ criteria, onSelect }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {criteria.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-magenta-50 rounded-xl flex items-center justify-center text-[#6A003A] font-black text-xs mb-4">
              0{item.id}
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* REFERENCE MATERIALS SIDEBAR */}
    <div className="bg-[#6A003A] rounded-[2.5rem] p-8 text-white shadow-xl shadow-magenta-100/50 h-fit">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-6 text-center">Reference Hub</h4>
      <div className="space-y-4">
        <button 
          onClick={() => onSelect({ title: "Level 3 Criteria Manual", description: "Official PACUCOA handbook for advanced accreditation.", files: [{name: "Manual_v3.pdf", url: "#"}]})}
          className="w-full bg-white/10 hover:bg-white/20 p-5 rounded-2xl text-left transition-all border border-white/5"
        >
          <p className="text-xs font-bold">Evaluation Procedures</p>
          <p className="text-[10px] opacity-60 mt-1 italic">Updated Jan 2026</p>
        </button>
      </div>
    </div>
  </div>
);

/* --- TAB 2: SUBMISSIONS --- */
const Submissions = ({ criteria }) => (
  <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-gray-50 flex justify-between items-center">
        <h4 className="font-bold text-gray-800 tracking-tight">Criterion Submissions</h4>
        <div className="flex gap-4 items-center">
            <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-gray-400 uppercase">Average Score</span>
                <span className="text-lg font-black text-[#6A003A]">4.82</span>
            </div>
        </div>
    </div>
    <div className="divide-y divide-gray-50">
      {criteria.map((item) => (
        <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
          <div className="flex items-center gap-6">
            <div className="text-xs font-black text-gray-300">#{item.id}</div>
            <div>
              <p className="text-sm font-bold text-gray-800">{item.title}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Last Update: Jan 10, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${item.id % 2 === 0 ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'}`}>
              {item.id % 2 === 0 ? 'Pending Review' : 'Revision Required'}
            </span>
            <button className="text-[10px] font-black text-[#6A003A] uppercase tracking-widest hover:underline">Manage</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* --- TAB 3: COMPLIED --- */
const Complied = ({ criteria }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 className="text-xl font-black text-emerald-800 tracking-tight">2/5 Criteria</h3>
        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Final Approval Status</p>
    </div>
    {/* EXAMPLE COMPLIED ITEM */}
    <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-sm flex items-center justify-between">
        <div>
            <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Criterion 01</p>
            <h4 className="font-bold text-gray-800">Instructional Audit</h4>
        </div>
        <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400">APPROVED</p>
            <p className="text-[10px] font-medium text-gray-400">Jan 15, 2026</p>
        </div>
    </div>
  </div>
);

/* --- MATERIAL VIEWER MODAL --- */
const MaterialViewer = ({ material, onClose }) => (
    <div className="fixed inset-0 bg-[#6A003A]/20 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in duration-200">
        <div className="bg-[#6A003A] p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors">✕</button>
          <h3 className="text-2xl font-bold">{material.title}</h3>
          <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-1">Resource Material</p>
        </div>
        <div className="p-8 space-y-4 text-left">
          <p className="text-sm text-gray-600 leading-relaxed italic">"{material.description}"</p>
          <div className="space-y-2 pt-4">
            {material.files.map((file, i) => (
              <div key={i} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-[#6A003A] transition-colors">
                <span className="text-xs font-bold text-gray-700">{file.name}</span>
                <div className="flex gap-4">
                    <a href={file.url} className="text-[10px] font-black text-[#6A003A] uppercase tracking-widest hover:underline">View</a>
                    <a href={file.url} download className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:underline">Download</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);

export default AdminLevel3;