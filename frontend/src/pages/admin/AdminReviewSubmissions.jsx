import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminReviewSubmissions = () => {
  const [activeTab, setActiveTab] = useState("Submissions");
  const [selectedProgram, setSelectedProgram] = useState(
    "BS in Information Technology"
  );

  const navigate = useNavigate();

  /* =========================
     EXPANDED MOCK SUBMISSIONS DATA
     ========================= */
  const allSubmissions = [
    /* ---------- LEVEL 1 ---------- */
    {
      id: 1,
      level: "Level 1",
      title: "Facilities Compliance",
      program: "BS in Information Technology",
      status: "Pending",
    },
    {
      id: 2,
      level: "Level 1",
      title: "Faculty Profile",
      program: "BS in Information Technology",
      status: "Complied",
    },
    {
      id: 3,
      level: "Level 1",
      title: "Curriculum Design",
      program: "BS in Information Technology",
      status: "Pending",
    },
    {
      id: 4,
      level: "Level 1",
      title: "Student Admission Policies",
      program: "BS in Information Technology",
      status: "Needs Revision",
    },

    /* ---------- LEVEL 2 ---------- */
    {
      id: 5,
      level: "Level 2",
      title: "Research Outputs",
      program: "BS in Information Technology",
      status: "Non-Complied",
    },
    {
      id: 6,
      level: "Level 2",
      title: "Extension Programs",
      program: "BS in Information Technology",
      status: "Pending",
    },
    {
      id: 7,
      level: "Level 2",
      title: "Faculty Research Publications",
      program: "BS in Information Technology",
      status: "Complied",
    },
    {
      id: 8,
      level: "Level 2",
      title: "Community Engagement Activities",
      program: "BS in Information Technology",
      status: "Needs Revision",
    },

    /* ---------- LEVEL 3 ---------- */
    {
      id: 9,
      level: "Level 3",
      title: "Library Resources",
      program: "BS in Information Technology",
      status: "Needs Revision",
    },
    {
      id: 10,
      level: "Level 3",
      title: "Laboratory Utilization",
      program: "BS in Information Technology",
      status: "Pending",
    },
    {
      id: 11,
      level: "Level 3",
      title: "Industry Linkages",
      program: "BS in Information Technology",
      status: "Complied",
    },
    {
      id: 12,
      level: "Level 3",
      title: "Quality Assurance Mechanisms",
      program: "BS in Information Technology",
      status: "Non-Complied",
    },
  ];

  /* =========================
     FILTER LOGIC BY TAB
     ========================= */
  const filteredSubmissions = allSubmissions.filter((item) => {
    if (item.program !== selectedProgram) return false;

    if (activeTab === "Submissions") return item.status === "Pending";
    if (activeTab === "Complied") return item.status === "Complied";
    if (activeTab === "Non-Complied") return item.status === "Non-Complied";
    if (activeTab === "Done") return item.status !== "Pending";

    return true;
  });

  /* =========================
     GROUP BY LEVEL
     ========================= */
  const groupedByLevel = ["Level 1", "Level 2", "Level 3"].map(
    (level) => ({
      level,
      items: filteredSubmissions.filter(
        (item) => item.level === level
      ),
    })
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* HEADER */}
          <div>
            <h2 className="text-xl font-semibold text-[#6A003A]">
              Review Submissions
            </h2>
            <p className="text-sm text-gray-500">
              Review and manage accreditation submissions by level
            </p>
          </div>

          {/* TABS */}
          <div className="flex gap-8 border-b text-sm">
            {["Submissions", "Done", "Complied", "Non-Complied"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition ${
                    activeTab === tab
                      ? "border-b-2 border-[#6A003A] text-[#6A003A] font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* PROGRAM FILTER */}
          <div className="bg-white rounded-2xl shadow p-6">
            <label className="block text-sm text-gray-500 mb-2">
              Program
            </label>
            <select
              value={selectedProgram}
              onChange={(e) =>
                setSelectedProgram(e.target.value)
              }
              className="border rounded-lg px-4 py-2 text-sm bg-gray-50 w-80"
            >
              <option>BS in Information Technology</option>
              <option>BS in Business Administration</option>
            </select>
          </div>

          {/* LEVEL GROUPS */}
          <div className="space-y-4">
            {groupedByLevel.map(({ level, items }) => (
              <LevelGroup
                key={level}
                level={level}
                items={items}
                onReview={(id) =>
                  navigate(`/admin/submissions/${id}/review`)
                }
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminReviewSubmissions;

/* =========================
   LEVEL GROUP (ACCORDION)
   ========================= */

const LevelGroup = ({ level, items, onReview }) => {
  const [open, setOpen] = useState(level === "Level 1");

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        <span>{level}</span>
        <span className="text-xs">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">
              No submissions available.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between items-center bg-gray-50 rounded-xl px-5 py-4 hover:bg-gray-100 transition border-l-4 ${getBorderColor(
                  item.status
                )}`}
              >
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.program}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <StatusBadge status={item.status} />
                  <button
                    onClick={() => onReview(item.id)}
                    className="text-sm text-[#6A003A] hover:underline"
                  >
                    Review
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

/* =========================
   STATUS BADGE
   ========================= */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Complied: "bg-green-100 text-green-700",
    "Non-Complied": "bg-red-100 text-red-700",
    "Needs Revision": "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}
    >
      {status}
    </span>
  );
};

/* =========================
   LEFT BORDER COLOR HELPER
   ========================= */

const getBorderColor = (status) => {
  if (status === "Pending") return "border-yellow-400";
  if (status === "Complied") return "border-green-50q0";
  if (status === "Non-Complied") return "border-red-500";
  if (status === "Needs Revision") return "border-orange-500";
  return "border-gray-300";
};
