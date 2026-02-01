import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLevel3 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  /* =========================
     LEVEL 3 CRITERIA (SIMPLIFIED)
     ========================= */
  const criteria = [
    {
      id: 1,
      title: "Instruction",
      description:
        "Quality of instruction, learning outcomes, and curriculum implementation.",
    },
    {
      id: 2,
      title: "Community Outreach",
      description:
        "Planning, implementation, and sustainability of outreach programs.",
    },
    {
      id: 3,
      title: "Research",
      description:
        "Research outputs, publications, and utilization of results.",
    },
    {
      id: 4,
      title: "Faculty & Staff Development",
      description:
        "Training programs, evaluation, and professional growth of faculty and staff.",
    },
    {
      id: 5,
      title: "Library & Learning Resources",
      description:
        "Library services, facilities, collections, and learning resources.",
    },
  ];

  /* =========================
     ADMIN MATERIALS
     ========================= */
  const materials = [
    {
      id: 1,
      title: "Level 3 Accreditation Guidelines",
      description:
        "This document contains the complete PACUCOA Level 3 criteria and evaluation procedures.",
      date: "Jan 5, 2026",
      files: [
        {
          name: "Level3-Guidelines.pdf",
          url: "#",
        },
      ],
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
              Level 3
            </h2>
            <p className="text-sm text-gray-500">
              Advanced Program Accreditation (Criteria-Based Evaluation)
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
              criteria={criteria}
              materials={materials}
              onSelect={setSelectedMaterial}
            />
          )}
          {activeTab === "submissions" && <Submissions criteria={criteria} />}
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

export default AdminLevel3;

/* =========================
   GUIDELINES TAB
   ========================= */

const Guidelines = ({ criteria, materials, onSelect }) => (
  <div className="space-y-6">
    {/* LEVEL BANNER */}
    <div className="bg-[#6A003A] text-white rounded-xl p-6">
      <h3 className="text-2xl font-semibold">LEVEL 3</h3>
      <p className="text-sm mt-1">
        Submit evidence per criterion for advanced accreditation.
      </p>
    </div>

    {/* CRITERIA OVERVIEW */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {criteria.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-[#6A003A]"
        >
          <h4 className="font-semibold text-gray-700">
            Criterion {item.id}: {item.title}
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* MATERIALS */}
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h4 className="font-semibold text-gray-700">
        Reference Materials
      </h4>

      {materials.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="w-full text-left bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition"
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
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
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
              <a
                href={file.url}
                className="text-[#6A003A] hover:underline"
              >
                View
              </a>
              <a
                href={file.url}
                download
                className="text-gray-600 hover:underline"
              >
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

const Submissions = ({ criteria }) => {
  const submissions = criteria.map((item) => ({
    id: item.id,
    criterion: item.title,
    status: item.id % 2 === 0 ? "Pending" : "Needs Revision",
    date: "Jan 10, 2026",
  }));

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h4 className="font-semibold text-gray-700">
        Criterion Submissions
      </h4>

      {submissions.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-l-4 border-[#6A003A] bg-gray-50 rounded-lg px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-gray-700">
              Criterion {item.id}: {item.criterion}
            </p>
            <p className="text-xs text-gray-500">
              Last updated: {item.date}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs ${
              item.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-orange-100 text-orange-700"
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
      criterion: "Instruction",
      approvedBy: "QA Office",
      date: "Jan 15, 2026",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h4 className="font-semibold text-gray-700">
        Approved Criteria
      </h4>

      {complied.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-l-4 border-green-600 bg-green-50 rounded-lg px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-gray-700">
              Criterion {item.id}: {item.criterion}
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
