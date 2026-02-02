import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Guidelines from "../../components/admin/Level2/Guidelines"; // Organized in a subfolder
import Submissions from "../../components/admin/Level2/Submissions";
import Complied from "../../components/admin/Level2/Complied";
import MaterialViewer from "../../components/admin/MaterialViewer";

const AdminLevel2 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = [
    { id: 1, title: "Level 2 Accreditation Framework", description: "Outcome-based accreditation requirements.", date: "Dec 3", files: [{ name: "Level2-Framework.pdf", url: "#" }] },
    { id: 2, title: "Research & Extension Guidelines", description: "Guidelines for documenting research outputs.", date: "Dec 3", files: [{ name: "Research-Guidelines.pdf", url: "#" }] },
    { id: 3, title: "Performance Indicators Template", description: "Template for reporting learning outcomes.", date: "Dec 3", files: [{ name: "Indicators.xlsx", url: "#" }] },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="p-8 space-y-8">
          {/* HEADER */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Level 2</h2>
              <p className="text-sm text-gray-500 font-medium">Outcome-Based Program Accreditation</p>
            </div>
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              {["guidelines", "submissions", "complied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab ? "bg-[#6A003A] text-white shadow-md" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-in fade-in duration-500">
            {activeTab === "guidelines" && <Guidelines materials={materials} onSelect={setSelectedMaterial} />}
            {activeTab === "submissions" && <Submissions />}
            {activeTab === "complied" && <Complied />}
          </div>
        </main>
      </div>

      {selectedMaterial && (
        <MaterialViewer material={selectedMaterial} onClose={() => setSelectedMaterial(null)} />
      )}
    </div>
  );
};

export default AdminLevel2;