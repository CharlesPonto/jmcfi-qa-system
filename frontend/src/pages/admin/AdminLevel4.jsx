import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Guidelines from "../../components/admin/Guidelines";
import Submissions from "../../components/admin/Submissions";
import Complied from "../../components/admin/Complied";
import MaterialViewer from "../../components/admin/MaterialViewer";

const AdminLevel4 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // MODAL STATES
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("announcement");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const materials = [
    { id: 1, title: "Institutional Excellence Framework", description: "Governance effectiveness and continuous improvement.", date: "Jan 15", files: [{ name: "Level4-Framework.pdf", url: "#" }] },
    { id: 2, title: "QA & Continuous Improvement Manual", description: "Internal QA systems and feedback mechanisms.", date: "Jan 15", files: [{ name: "QA-Manual.pdf", url: "#" }] },
    { id: 3, title: "Benchmarking & Best Practices Guide", description: "National and international benchmarking procedures.", date: "Jan 15", files: [{ name: "Benchmarking-Guide.pdf", url: "#" }] },
  ];

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-6 md:space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">Level 4</h2>
              </div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Governance, Global Competitiveness & Strategic Planning</p>
            </div>
            
            {/* TABS - Responsive Scroll */}
            <div className="w-full xl:w-auto flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto no-scrollbar">
              {["guidelines", "submissions", "complied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 xl:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
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

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => openModal("announcement")}
              className="text-sm font-semibold w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-[#6A003A] rounded-xl hover:bg-gray-50 shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.405 2.405 0 010-1.574l2.147-6.167a1.76 1.76 0 013.417.592zM15.817 3.427a1.76 1.76 0 00-3.23.174 19.708 19.708 0 000 16.798 1.76 1.76 0 003.23.174 20.314 20.314 0 000-17.146z"/>
              </svg>
              Add Announcement
            </button>

            <button
              onClick={() => openModal("task")}
              className="text-sm font-semibold w-full sm:w-auto px-6 py-3 bg-[#6A003A] text-white rounded-xl hover:bg-[#4a0028] shadow-lg shadow-[#6A003A]/20 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
              Create Task
            </button>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {activeTab === "guidelines" && <Guidelines materials={materials} onSelect={setSelectedMaterial} />}
            {activeTab === "submissions" && <Submissions />}
            {activeTab === "complied" && <Complied />}
          </div>
        </main>
      </div>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-end sm:items-center justify-center z-[100] p-0 sm:p-4 text-left">
          <div className="bg-white rounded-t-[2.5rem] sm:rounded-[2rem] shadow-2xl w-full max-w-2xl animate-in slide-in-from-bottom sm:zoom-in-95 duration-300 overflow-hidden">
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#6A003A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-800 tracking-tight">
                    {modalType === "task" ? "New L4 Strategic Task" : "Add L4 Announcement"}
                  </h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-gray-400">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-[1.5rem] p-5 border-2 border-transparent focus-within:border-[#6A003A]/20 transition-all shadow-inner">
                  <input 
                    type="text"
                    placeholder={modalType === "task" ? "Excellence Criterion Title" : "What is the update for Level 4?"}
                    className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-300 outline-none mb-3"
                  />
                  <textarea 
                    placeholder="Provide details for institutional excellence compliance..."
                    className="w-full bg-transparent text-xs font-medium text-gray-500 outline-none resize-none h-32 md:h-40 leading-relaxed"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Assigned Program</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-bold text-gray-700 outline-none appearance-none">
                      <option>All Excellence Programs</option>
                      <option>BS Information Technology</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex w-full md:w-auto items-center gap-6">
                  <button onClick={() => setIsModalOpen(false)} className="flex-1 md:flex-none text-[11px] font-black text-gray-400 hover:text-gray-600 uppercase tracking-widest">Discard</button>
                  <button className="flex-[2] md:flex-none px-10 py-4 bg-[#6A003A] text-white text-[10px] font-black rounded-2xl shadow-xl shadow-[#6A003A]/30 hover:bg-[#4a0028] transition-all uppercase tracking-[0.2em]">
                    {modalType === "task" ? "Assign Task" : "Post Now"}
                  </button>
                </div>
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

export default AdminLevel4;