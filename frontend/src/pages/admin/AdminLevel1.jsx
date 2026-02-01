import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLevel1 = () => {
  const [activeTab, setActiveTab] = useState("guidelines");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // MOCK ANNOUNCEMENTS / MATERIALS
  const materials = [
    {
      id: 1,
      title: "Self-Assessment Guidelines",
      description:
        "Please review the attached guidelines before submitting your Self-Assessment Report.",
      date: "Nov 7",
      files: [
        {
          name: "Level1-Guidelines.pdf",
          url: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Compliance Report Template",
      description:
        "Use this template when preparing your compliance report.",
      date: "Nov 7",
      files: [
        {
          name: "Compliance-Template.docx",
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
              Level 1
            </h2>
            <p className="text-sm text-gray-500">
              Initial Accreditation Requirements
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

      {/* MATERIAL VIEWER MODAL */}
      {selectedMaterial && (
        <MaterialViewer
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
    </div>
  );
};

export default AdminLevel1;

/* =========================
   GUIDELINES TAB
   ========================= */

const Guidelines = ({ materials, onSelect }) => (
  <div className="space-y-6">
    {/* LEVEL BANNER */}
    <div className="bg-[#6A003A] text-white rounded-xl p-6">
      <h3 className="text-2xl font-semibold">LEVEL 1</h3>
      <p className="text-sm mt-1">
        Upload Self-Assessment, Compliance Reports, and Supporting Evidence.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* UPCOMING */}
      <div className="bg-white rounded-xl shadow p-6">
        <h4 className="font-semibold text-gray-700 mb-1">
          Upcoming
        </h4>
        <p className="text-sm text-gray-500">
          Woohoo, no work due soon!
        </p>
      </div>

      {/* MATERIALS */}
      <div className="md:col-span-2 bg-white rounded-xl shadow p-6 space-y-4">
        <h4 className="font-semibold text-gray-700">
          Materials
        </h4>

        {materials.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="w-full text-left bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition
                       border-l-4 border-[#6A003A]"
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
   MATERIAL VIEWER (MODAL)
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

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Attachments
        </h4>

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
  </div>
);

/* =========================
   OTHER TABS
   ========================= */


const Submissions = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [programFilter, setProgramFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");

  const submissions = [
    {
      id: 1,
      title: "Self-Assessment Report.pdf",
      program: "BS in Information Technology",
      submittedBy: "Dean - CITE",
      dateRaw: "2025-11-12",
      date: "Nov 12, 2025",
      status: "Pending",
    },
    {
      id: 2,
      title: "Compliance Report.docx",
      program: "BS in Information Technology",
      submittedBy: "Dean - CITE",
      dateRaw: "2025-11-10",
      date: "Nov 10, 2025",
      status: "Not Complied",
    },
    {
      id: 3,
      title: "Facilities Evidence.zip",
      program: "BS in Information Technology",
      submittedBy: "Dean - CITE",
      dateRaw: "2025-11-08",
      date: "Nov 8, 2025",
      status: "Complied",
    },
  ];

  const count = (status) =>
    submissions.filter((s) => s.status === status).length;

  let filtered = submissions.filter((item) => {
    const statusMatch =
      statusFilter === "All" || item.status === statusFilter;
    const programMatch =
      programFilter === "All" || item.program === programFilter;
    return statusMatch && programMatch;
  });

  filtered.sort((a, b) =>
    sortOrder === "latest"
      ? new Date(b.dateRaw) - new Date(a.dateRaw)
      : new Date(a.dateRaw) - new Date(b.dateRaw)
  );

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">

      {/* STATUS SUMMARY */}
      <div className="flex gap-8 text-sm text-gray-600">
        <StatusItem label="Submitted" value={submissions.length} />
        <StatusItem label="Pending" value={count("Pending")} />
        <StatusItem label="Not Complied" value={count("Not Complied")} />
        <StatusItem label="Complied" value={count("Complied")} />
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4">
        {/* STATUS */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-md px-4 py-2 text-sm bg-gray-100"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Not Complied">Not Complied</option>
          <option value="Complied">Complied</option>
        </select>

        {/* PROGRAM */}
        <select
          value={programFilter}
          onChange={(e) => setProgramFilter(e.target.value)}
          className="border rounded-md px-4 py-2 text-sm bg-gray-100"
        >
          <option value="All">All Programs</option>
          <option value="BS in Information Technology">
            BS in Information Technology
          </option>
        </select>

        {/* SORT */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-md px-4 py-2 text-sm bg-gray-100"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-3">Document</th>
              <th className="p-3">Program</th>
              <th className="p-3">Submitted By</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium text-gray-700">
                  {item.title}
                </td>
                <td className="p-3">{item.program}</td>
                <td className="p-3">{item.submittedBy}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "Not Complied"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-[#6A003A] hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* SMALL STATUS COMPONENT */
const StatusItem = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-lg font-semibold text-gray-700">
      {value}
    </span>
    <span className="text-xs">{label}</span>
  </div>
);




const Complied = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const compliedDocs = [
    {
      id: 1,
      title: "Final Self-Assessment.pdf",
      program: "BS in Information Technology",
      approvedBy: "QA Office",
      date: "Nov 20, 2025",
      files: [
        { name: "Final Self-Assessment.pdf", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Facilities Evidence.zip",
      program: "BS in Information Technology",
      approvedBy: "QA Office",
      date: "Nov 18, 2025",
      files: [
        { name: "Facilities Evidence.zip", url: "#" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h4 className="font-semibold text-gray-700">
        Complied Documents
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-3">Document</th>
              <th className="p-3">Program</th>
              <th className="p-3">Approved By</th>
              <th className="p-3">Date Approved</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {compliedDocs.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium text-gray-700">
                  {item.title}
                </td>
                <td className="p-3">{item.program}</td>
                <td className="p-3">{item.approvedBy}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    Complied
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedDoc(item)}
                    className="text-[#6A003A] hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW MODAL */}
      {selectedDoc && (
        <CompliedViewer
          doc={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </div>
  );
};

const CompliedViewer = ({ doc, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">
          {doc.title}
        </h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>Program:</strong> {doc.program}</p>
        <p><strong>Approved By:</strong> {doc.approvedBy}</p>
        <p><strong>Date Approved:</strong> {doc.date}</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Attachments
        </h4>

        <ul className="space-y-2">
          {doc.files.map((file, index) => (
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
  </div>
);
