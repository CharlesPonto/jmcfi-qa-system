import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLevel4 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = [
    {
      id: 1,
      title: "Institutional Excellence Framework",
      description:
        "Governance effectiveness and continuous improvement for Level 4.",
      date: "Jan 15, 2026",
      files: [{ name: "Level4-Framework.pdf", url: "#" }],
    },
    {
      id: 2,
      title: "QA & Continuous Improvement Manual",
      description:
        "Manual describing internal QA systems and feedback mechanisms.",
      date: "Jan 15, 2026",
      files: [{ name: "QA-Manual.pdf", url: "#" }],
    },
    {
      id: 3,
      title: "Benchmarking & Best Practices Guide",
      description: "Guide for national and international benchmarking.",
      date: "Jan 15, 2026",
      files: [{ name: "Benchmarking-Guide.pdf", url: "#" }],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8 text-left animate-in fade-in duration-700">
          {/* HEADER SECTION */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Level 4: Institutional Excellence
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Governance, Global Competitiveness & Strategic Planning
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                Highest Tier
              </span>
            </div>
          </div>

          {/* PREMIUM TAB NAV */}
          <div className="flex gap-1 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 w-fit">
            {["guidelines", "submissions", "complied"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-2.5 rounded-xl text-xs font-bold transition-all ${
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
              <Guidelines
                materials={materials}
                onSelect={setSelectedMaterial}
              />
            )}
            {activeTab === "submissions" && <Submissions />}
            {activeTab === "complied" && <Complied />}
          </div>
        </main>
      </div>

      {selectedMaterial && (
        <MaterialViewer
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
    </div>
  );
};

/* --- TAB 1: GUIDELINES --- */
const Guidelines = ({ materials, onSelect }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* CORE FOCUS AREAS CARD */}
    <div className="lg:col-span-4 space-y-6">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-50/50 rounded-bl-full -mr-10 -mt-10" />
        <h4 className="text-[10px] font-black text-[#6A003A] uppercase tracking-widest mb-6">
          Strategic Pillars
        </h4>
        <ul className="space-y-4">
          {[
            "Institutional Governance",
            "Global Benchmarking",
            "QA System Maturity",
            "Sustainability Framework",
            "Strategic Innovation",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-xs font-bold text-gray-600"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#6A003A]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* REFERENCE MATERIALS */}
    <div className="lg:col-span-8">
      <div className="grid grid-cols-1 gap-4">
        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">
          Master Documentation
        </h4>
        {materials.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="group w-full bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#6A003A] transition-all text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-magenta-50 group-hover:text-[#6A003A] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-[10px] font-medium text-gray-400 mt-1 uppercase tracking-tighter italic">
                  Published: {item.date}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-[#6A003A] group-hover:text-[#6A003A] transition-all">
              →
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

/* --- TAB 2: SUBMISSIONS --- */
const Submissions = () => {
  const submissions = [
    {
      id: 1,
      title: "Institutional QA System Report",
      date: "Jan 20, 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Strategic Plan & Sustainability Report",
      date: "Jan 18, 2026",
      status: "Needs Revision",
    },
    {
      id: 3,
      title: "Benchmarking & Internationalization",
      date: "Jan 16, 2026",
      status: "Complied",
    },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-slate-50/30">
        <h4 className="font-bold text-gray-800">Portfolio Status</h4>
        <div className="flex gap-6">
          <StatusCount
            label="Submissions"
            val={submissions.length}
            color="text-gray-800"
          />
          <StatusCount label="Complied" val={1} color="text-emerald-500" />
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {submissions.map((item) => (
          <div
            key={item.id}
            className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-2 h-2 rounded-full ${item.status === "Complied" ? "bg-emerald-500" : item.status === "Pending" ? "bg-amber-400" : "bg-rose-500"}`}
              />
              <div>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  Updated: {item.date}
                </p>
              </div>
            </div>
            <span
              className={`px-4 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                item.status === "Complied"
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                  : item.status === "Pending"
                    ? "bg-amber-50 text-amber-600 border-amber-100"
                    : "bg-rose-50 text-rose-600 border-rose-100"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- TAB 3: COMPLIED --- */
const Complied = () => (
  <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-12 text-center">
    <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center text-emerald-500 mx-auto mb-6 border border-emerald-100">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-black text-emerald-900 tracking-tight">
      Institutional Excellence Verified
    </h3>
    <p className="text-sm text-emerald-700/70 font-medium mt-2 max-w-md mx-auto">
      The portfolio for Level 4 accreditation has been finalized and satisfies
      all global benchmarking criteria.
    </p>
    <div className="mt-8 pt-8 border-t border-emerald-100 inline-block w-full max-w-xs">
      <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em]">
        Verified by QA Office
      </p>
      <p className="text-[10px] font-bold text-emerald-600/60 mt-1">
        Jan 28, 2026
      </p>
    </div>
  </div>
);

/* --- HELPERS --- */
const StatusCount = ({ label, val, color }) => (
  <div className="text-right">
    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
      {label}
    </p>
    <p className={`text-xl font-black leading-none mt-1 ${color}`}>{val}</p>
  </div>
);

const MaterialViewer = ({ material, onClose }) => (
  <div className="fixed inset-0 bg-[#6A003A]/20 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in duration-300">
      <div className="bg-[#6A003A] p-10 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors text-xl"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold">{material.title}</h3>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
          Institutional Resource
        </p>
      </div>
      <div className="p-10 space-y-6 text-left">
        <p className="text-sm text-gray-600 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-4">
          {material.description}
        </p>
        <div className="space-y-3">
          {material.files.map((file, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-[#6A003A] transition-all shadow-sm"
            >
              <span className="text-xs font-bold text-gray-700">
                {file.name}
              </span>
              <div className="flex gap-6">
                <a
                  href={file.url}
                  className="text-[10px] font-black text-[#6A003A] uppercase tracking-widest hover:underline"
                >
                  View File
                </a>
                <a
                  href={file.url}
                  download
                  className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AdminLevel4;
