import { useParams } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminSubmissionReview = () => {
  const { id } = useParams();

  /* =========================
     MOCK SUBMITTED FILES
     (Simulates Dean uploads)
     ========================= */
  const submittedFiles = [
    {
      id: 1,
      name: "Self-Assessment Report.pdf",
      type: "SAR",
      uploadedAt: "Nov 12, 2025",
      url: "#",
    },
    {
      id: 2,
      name: "Facilities Evidence.zip",
      type: "Evidence",
      uploadedAt: "Nov 12, 2025",
      url: "#",
    },
  ];

  /* =========================
     CHECKLIST STATE
     ========================= */
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      item: "Vision, Mission, and Goals are clearly stated",
      status: "Yes",
      comment: "",
    },
    {
      id: 2,
      item: "Adequate laboratory facilities are available",
      status: "Needs Revision",
      comment: "",
    },
    {
      id: 3,
      item: "Faculty credentials are complete",
      status: "No",
      comment: "",
    },
  ]);

  const updateStatus = (id, value) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: value } : item
      )
    );
  };

  const updateComment = (id, value) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, comment: value } : item
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* PAGE TITLE */}
          <h2 className="text-xl font-semibold text-[#6A003A]">
            Review Submission
          </h2>

          {/* SUBMISSION SUMMARY */}
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#6A003A]">
            <h3 className="font-semibold mb-4 text-gray-700">
              Submission Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Detail label="Submission ID" value={id} />
              <Detail label="Program" value="BS in Information Technology" />
              <Detail label="Department" value="CITE" />
              <Detail label="Accreditation Level" value="Level 1" />
              <Detail label="Date Submitted" value="Nov 12, 2025" />
            </div>
          </div>

          {/* =========================
              SUBMITTED FILES (LIKE LMS)
             ========================= */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-700">
              Submitted Files
            </h3>

            {submittedFiles.length > 0 ? (
              <ul className="space-y-3">
                {submittedFiles.map((file) => (
                  <li
                    key={file.id}
                    className="flex justify-between items-center border rounded-lg p-3"
                  >
                    <div>
                      <p className="font-medium text-gray-700">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {file.type} • Uploaded on {file.uploadedAt}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#6A003A] hover:underline"
                      >
                        View
                      </a>
                      <a
                        href={file.url}
                        download
                        className="text-sm text-gray-600 hover:underline"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                No files have been submitted for this accreditation.
              </p>
            )}
          </div>

          {/* =========================
              CHECKLIST REVIEW
             ========================= */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-700">
              Accreditation Checklist Review
            </h3>

            <div className="space-y-4">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <p className="font-medium text-gray-700">
                    {item.item}
                  </p>

                  <div className="flex gap-6 text-sm">
                    {["Yes", "No", "Needs Revision"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name={`status-${item.id}`}
                          checked={item.status === option}
                          onChange={() =>
                            updateStatus(item.id, option)
                          }
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  <textarea
                    placeholder="Enter comment or recommendation (optional)"
                    value={item.comment}
                    onChange={(e) =>
                      updateComment(item.id, e.target.value)
                    }
                    className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6A003A]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DECISION BUTTONS */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-wrap gap-4 justify-end">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Mark as Complied
            </button>

            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Request Revision
            </button>

            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Mark as Non-Compliant
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

/* SMALL COMPONENT */
const Detail = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium text-gray-700">{value}</p>
  </div>
);

export default AdminSubmissionReview;
