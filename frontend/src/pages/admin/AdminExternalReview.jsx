import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminExternalReview = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const externalReviews = [
    {
      id: 1,
      title: "Level 1 – Compiled Self-Assessment",
      program: "BS in Information Technology",
      level: "Level 1",
      reviewedDate: "Dec 5, 2025",
      status: "Accepted",
      remarks:
        "The submitted documents sufficiently satisfy Level 1 accreditation requirements.",
      files: [{ name: "Reviewed-Self-Assessment.pdf", url: "#" }],
    },
    {
      id: 2,
      title: "Level 2 – Research Compliance",
      program: "BS in Information Technology",
      level: "Level 2",
      reviewedDate: "—",
      status: "Pending",
      remarks: "",
      files: [],
    },
    {
      id: 3,
      title: "Level 3 – Facilities Evaluation",
      program: "BS in Information Technology",
      level: "Level 3",
      reviewedDate: "Dec 7, 2025",
      status: "For Revision",
      remarks:
        "Additional laboratory utilization evidence is required.",
      files: [{ name: "External-Reviewer-Comments.pdf", url: "#" }],
    },
  ];

  const statusStyle = (status) => {
    if (status === "Accepted") return "bg-green-100 text-green-700";
    if (status === "For Revision") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const filteredReviews = externalReviews.filter((item) => {
    const statusMatch =
      statusFilter === "All" || item.status === statusFilter;
    const levelMatch =
      levelFilter === "All" || item.level === levelFilter;
    return statusMatch && levelMatch;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* HEADER */}
          <div>
            <h2 className="text-xl font-semibold text-[#6A003A]">
              External Review Monitoring
            </h2>
            <p className="text-sm text-gray-500">
              Monitor external reviewer decisions and feedback on complied documents
            </p>
          </div>

          {/* FILTER CARD */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-wrap gap-6">
            <div className="flex flex-col text-sm">
              <label className="text-gray-500 mb-1">
                Review Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border rounded-lg px-4 py-2 bg-gray-50"
              >
                <option>All</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>For Revision</option>
              </select>
            </div>

            <div className="flex flex-col text-sm">
              <label className="text-gray-500 mb-1">
                Accreditation Level
              </label>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="border rounded-lg px-4 py-2 bg-gray-50"
              >
                <option>All</option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>
            </div>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white rounded-2xl shadow">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="px-6 py-4">Document</th>
                    <th className="px-6 py-4">Program</th>
                    <th className="px-6 py-4">Level</th>
                    <th className="px-6 py-4">Reviewed Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReviews.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-medium text-gray-700">
                        {item.title}
                      </td>
                      <td className="px-6 py-4">{item.program}</td>
                      <td className="px-6 py-4">{item.level}</td>
                      <td className="px-6 py-4">{item.reviewedDate}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${statusStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-4">
                        <button
                          onClick={() => setSelectedReview(item)}
                          className="text-[#6A003A] hover:underline"
                        >
                          View Feedback
                        </button>

                        {item.status === "For Revision" && (
                          <button className="text-red-600 hover:underline">
                            Request Resubmission
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL */}
      {selectedReview && (
        <ExternalFeedbackModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
};

export default AdminExternalReview;

/* =========================
   FEEDBACK MODAL
   ========================= */

const ExternalFeedbackModal = ({ review, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">
          External Review Feedback
        </h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="text-sm space-y-1">
        <p><strong>Document:</strong> {review.title}</p>
        <p><strong>Program:</strong> {review.program}</p>
        <p><strong>Level:</strong> {review.level}</p>
        <p><strong>Status:</strong> {review.status}</p>
        <p><strong>Reviewed Date:</strong> {review.reviewedDate}</p>
      </div>

      <div>
        <h4 className="font-medium text-gray-700 mb-1">
          External Reviewer Remarks
        </h4>
        {review.remarks ? (
          <p className="text-sm text-gray-600">
            {review.remarks}
          </p>
        ) : (
          <p className="text-sm text-gray-400">
            No feedback provided yet.
          </p>
        )}
      </div>

      {review.files.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-700 mb-2">
            Reviewed Attachments
          </h4>
          <ul className="space-y-2">
            {review.files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center border rounded-lg p-3 text-sm"
              >
                <span>{file.name}</span>
                <a
                  href={file.url}
                  className="text-[#6A003A] hover:underline"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
