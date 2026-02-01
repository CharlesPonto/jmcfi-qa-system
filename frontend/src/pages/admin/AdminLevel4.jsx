import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLevel4 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  /* =========================
     LEVEL 4 MATERIALS
     ========================= */
  const materials = [
    {
      id: 1,
      title: "Level 4 Institutional Excellence Framework",
      description:
        "Framework outlining institutional maturity, governance, sustainability, and continuous improvement for Level 4 accreditation.",
      date: "Jan 15, 2026",
      files: [{ name: "Level4-Institutional-Framework.pdf", url: "#" }],
    },
    {
      id: 2,
      title: "Quality Assurance & Continuous Improvement Manual",
      description:
        "Manual describing internal QA systems, monitoring, and feedback mechanisms.",
      date: "Jan 15, 2026",
      files: [{ name: "QA-Continuous-Improvement.pdf", url: "#" }],
    },
    {
      id: 3,
      title: "Benchmarking & Best Practices Guide",
      description:
        "Guide for benchmarking against national and international institutions.",
      date: "Jan 15, 2026",
      files: [{ name: "Benchmarking-Best-Practices.pdf", url: "#" }],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* HEADER */}
          <div>
            <h2 className="text-xl font-semibold text-[#6A003A]">
              Level 4
            </h2>
            <p className="text-sm text-gray-500">
              Institutional Excellence & Continuous Improvement
            </p>
          </div>

          {/* TABS */}
          <div className="flex gap-8 border-b text-sm">
            {["guidelines", "submissions", "complied"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-[#6A003A] text-[#6A003A] font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          {activeTab === "guidelines" && (
            <Guidelines
              materials={materials}
              onSelect={setSelectedMaterial}
            />
          )}
          {activeTab === "submissions" && <Submissions />}
          {activeTab === "complied" && <Complied />}
        </main>
      </div>

      {/* MATERIAL VIEWER */}
      {selectedMaterial && (
        <MaterialViewer
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
    </div>
  );
};

export default AdminLevel4;

/* =========================
   GUIDELINES TAB (LEVEL 4)
   ========================= */

const Guidelines = ({ materials, onSelect }) => (
  <div className="space-y-6">
    {/* LEVEL BANNER */}
    <div className="bg-[#6A003A] text-white rounded-xl p-6">
      <h3 className="text-2xl font-semibold">LEVEL 4</h3>
      <p className="text-sm mt-1">
        Demonstrate institutional maturity, governance effectiveness, and continuous quality improvement.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* FOCUS AREAS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h4 className="font-semibold text-gray-700 mb-2">
          Core Focus Areas
        </h4>
        <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
          <li>Institutional Governance</li>
          <li>Quality Assurance Systems</li>
          <li>Sustainability & Strategic Planning</li>
          <li>Benchmarking & Global Competitiveness</li>
          <li>Continuous Improvement</li>
        </ul>
      </div>

      {/* MATERIALS */}
      <div className="md:col-span-2 bg-white rounded-xl shadow p-6 space-y-4">
        <h4 className="font-semibold text-gray-700">
          Reference Materials
        </h4>

        {materials.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="w-full text-left bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition border-l-4 border-[#6A003A]"
          >
            <p className="text-sm font-medium text-gray-700">
              Admin posted a material: {item.title}
            </p>
            <p className="text-xs text-gray-500">
              {item.date}
            </p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

/* =========================
   MATERIAL VIEWER
   ========================= */

const MaterialViewer = ({ material, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">
          {material.title}
        </h3>
        <button onClick={onClose} className="text-gray-500">
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-600">
        {material.description}
      </p>

      <ul className="space-y-2">
        {material.files.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center border rounded-md p-3 text-sm"
          >
            <span>{file.name}</span>
            <div className="flex gap-3">
              <a href={file.url} className="text-[#6A003A] hover:underline">
                View
              </a>
              <a href={file.url} download className="text-gray-600 hover:underline">
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* =========================
   SUBMISSIONS TAB
   ========================= */

const Submissions = () => {
  const submissions = [
    {
      id: 1,
      title: "Institutional QA System Report.pdf",
      date: "Jan 20, 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Strategic Plan & Sustainability Report.pdf",
      date: "Jan 18, 2026",
      status: "Needs Revision",
    },
    {
      id: 3,
      title: "Benchmarking & Internationalization Report.pdf",
      date: "Jan 16, 2026",
      status: "Complied",
    },
  ];

  const count = (status) =>
    submissions.filter((s) => s.status === status).length;

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      {/* STATUS SUMMARY */}
      <div className="flex gap-8 text-sm text-gray-600">
        <StatusItem label="Submitted" value={submissions.length} />
        <StatusItem label="Pending" value={count("Pending")} />
        <StatusItem label="Needs Revision" value={count("Needs Revision")} />
        <StatusItem label="Complied" value={count("Complied")} />
      </div>

      {submissions.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between items-center bg-gray-50 border-l-4 rounded-lg px-4 py-3 ${
            item.status === "Pending"
              ? "border-yellow-400"
              : item.status === "Needs Revision"
              ? "border-orange-400"
              : "border-green-500"
          }`}
        >
          <div>
            <p className="text-sm font-medium text-gray-700">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">
              Last updated: {item.date}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs ${
              item.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : item.status === "Needs Revision"
                ? "bg-orange-100 text-orange-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
};

/* =========================
   COMPLIED TAB
   ========================= */

const Complied = () => {
  const complied = [
    {
      id: 1,
      title: "Approved Institutional Excellence Portfolio.pdf",
      approvedBy: "QA Office",
      date: "Jan 28, 2026",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      {complied.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-green-50 border-l-4 border-green-600 rounded-lg px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-gray-700">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">
              Approved by {item.approvedBy}
            </p>
          </div>
          <span className="text-xs text-green-700">
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

/* =========================
   SMALL COMPONENT
   ========================= */

const StatusItem = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-lg font-semibold text-gray-700">
      {value}
    </span>
    <span className="text-xs">{label}</span>
  </div>
);
