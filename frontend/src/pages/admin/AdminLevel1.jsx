import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Guidelines from "../../components/admin/Guidelines";
import Submissions from "../../components/admin/Submissions";
import Complied from "../../components/admin/Complied";
import MaterialViewer from "../../components/admin/MaterialViewer";

const AdminLevel1 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = [
    { id: 1, title: "Self-Assessment Guidelines", description: "Review before submitting your SAR.", date: "Nov 7", files: [{ name: "Level1-Guidelines.pdf", url: "#" }] },
    { id: 2, title: "Compliance Report Template", description: "Use this template for reports.", date: "Nov 7", files: [{ name: "Compliance-Template.docx", url: "#" }] },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="p-8 space-y-8">
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Level 1</h2>
              <p className="text-sm text-gray-500 font-medium">Initial Accreditation Requirements</p>
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

          {/* TAB CONTENT */}
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

export default AdminLevel1;