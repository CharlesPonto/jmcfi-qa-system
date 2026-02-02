import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Guidelines from "../../components/admin/Guidelines";
import Submissions from "../../components/admin/Submissions";
import Complied from "../../components/admin/Complied";
import MaterialViewer from "../../components/admin/MaterialViewer";

const AdminLevel3 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // MODAL STATES
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("announcement");

  // Adjusted Level 3 specific criteria to match the "materials" structure
  const materials = [
    { id: 1, title: "Instructional Audit Guidelines", description: "Advanced curriculum implementation & learning outcomes.", date: "Jan 10", files: [{ name: "L3-Instruction.pdf", url: "#" }] },
    { id: 2, title: "Community Outreach Framework", description: "Sustainability and impact of outreach programs.", date: "Jan 12", files: [{ name: "L3-Outreach.pdf", url: "#" }] },
    { id: 3, title: "Research Utilization Policy", description: "Utilization of results and indexed publications.", date: "Jan 15", files: [{ name: "L3-Research.pdf", url: "#" }] },
  ];

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Level 3</h2>
              <p className="text-sm text-gray-500 font-medium">Advanced Program Evaluation & Sustainability</p>
            </div>
            
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              {["guidelines", "submissions", "complied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-[#6A003A] text-white shadow-md"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openModal("announcement")}
              className="px-5 py-2.5 bg-white border border-gray-200 text-[#6A003A] text-xs font-bold rounded-xl hover:bg-gray-50 shadow-sm flex items-center gap-2 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.405 2.405 0 010-1.574l2.147-6.167a1.76 1.76 0 013.417.592zM15.817 3.427a1.76 1.76 0 00-3.23.174 19.708 19.708 0 000 16.798 1.76 1.76 0 003.23.174 20.314 20.314 0 000-17.146z"/>
              </svg>
              Add L3 Announcement
            </button>

            <button
              onClick={() => openModal("task")}
              className="px-5 py-2.5 bg-[#6A003A] text-white text-xs font-bold rounded-xl hover:bg-[#4a0028] shadow-lg shadow-[#6A003A]/20 flex items-center gap-2 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
              Create L3 Task
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="animate-in fade-in duration-500 text-left">
            {activeTab === "guidelines" && <Guidelines materials={materials} onSelect={setSelectedMaterial} />}
            {activeTab === "submissions" && <Submissions />}
            {activeTab === "complied" && <Complied />}
          </div>
        </main>
      </div>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 text-left">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="p-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#6A003A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                    {modalType === "task" ? "Create L3 Task" : "L3 Announcement"}
                  </h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                   <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-2xl p-5 border-2 border-transparent focus-within:border-[#6A003A]/10 transition-all">
                  <input 
                    type="text"
                    placeholder={modalType === "task" ? "Criterion Title" : "What's the update for Level 3?"}
                    className="w-full bg-transparent text-sm font-semibold text-gray-800 placeholder:text-gray-400 outline-none mb-3"
                  />
                  <textarea 
                    placeholder="Provide specific Level 3 instructions..."
                    className="w-full bg-transparent text-xs font-medium text-gray-500 outline-none resize-none h-32 leading-relaxed"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Recipient Program</label>
                    <select className="w-full bg-slate-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-600 outline-none">
                      <option>All L3 Programs</option>
                      <option>BSIT</option>
                      <option>BSBA</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest"
                >
                  Discard
                </button>
                <button className="px-10 py-3.5 bg-[#6A003A] text-white text-xs font-bold rounded-2xl shadow-xl shadow-[#6A003A]/30 hover:bg-[#4a0028] transition-all uppercase tracking-widest">
                  {modalType === "task" ? "Assign Task" : "Post Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedMaterial && (
        <MaterialViewer material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />
      )}
    </div>
  );
};

export default AdminLevel3;