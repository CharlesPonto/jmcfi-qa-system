import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminExternalReview = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Added for mobile toggle

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // COMPLETE DATA PRESERVED
  const externalReviews = [
    { id: 1, title: "Level 1 – Compiled Self-Assessment", program: "BSIT", fullName: "BS in Information Technology", level: "Level 1", reviewedDate: "Dec 5, 2025", status: "Accepted", remarks: "The submitted documents sufficiently satisfy Level 1 accreditation requirements.", files: [{ name: "Reviewed-Self-Assessment.pdf", url: "#" }] },
    { id: 2, title: "Level 2 – Research Compliance", program: "BSIT", fullName: "BS in Information Technology", level: "Level 2", reviewedDate: "—", status: "Pending", remarks: "", files: [] },
    { id: 3, title: "Level 3 – Facilities Evaluation", program: "BSIT", fullName: "BS in Information Technology", level: "Level 3", reviewedDate: "Dec 7, 2025", status: "For Revision", remarks: "Additional laboratory utilization evidence is required.", files: [{ name: "External-Reviewer-Comments.pdf", url: "#" }] },
    { id: 4, title: "Level 1 – Curriculum Documentation", program: "BSIT", fullName: "BS in Information Technology", level: "Level 1", reviewedDate: "Nov 28, 2025", status: "Accepted", remarks: "Course syllabi and curriculum maps meet Level 1 standards.", files: [{ name: "Curriculum-Review.pdf", url: "#" }] },
    { id: 5, title: "Level 2 – Faculty Profile Verification", program: "BSIT", fullName: "BS in Information Technology", level: "Level 2", reviewedDate: "Dec 10, 2025", status: "For Revision", remarks: "Incomplete PRC licenses and missing CPD certificates.", files: [{ name: "Reviewer-Notes.pdf", url: "#" }] },
    { id: 6, title: "Level 3 – Community Extension Compliance", program: "BSIT", fullName: "BS in Information Technology", level: "Level 3", reviewedDate: "—", status: "Pending", remarks: "", files: [] },
    { id: 7, title: "Level 1 – Student Portfolio Submission", program: "BSIT", fullName: "BS in Information Technology", level: "Level 1", reviewedDate: "Dec 2, 2025", status: "Accepted", remarks: "All portfolio samples are complete and properly documented.", files: [{ name: "Portfolio-Samples.zip", url: "#" }] },
    { id: 8, title: "Level 2 – QA Internal Audit", program: "BSIT", fullName: "BS in Information Technology", level: "Level 2", reviewedDate: "Dec 8, 2025", status: "Accepted", remarks: "Audit findings show alignment with Level 2 expectations.", files: [{ name: "Internal-Audit-Report.pdf", url: "#" }] },
    { id: 9, title: "Level 3 – Stakeholder Satisfaction Survey", program: "BSIT", fullName: "BS in Information Technology", level: "Level 3", reviewedDate: "Dec 9, 2025", status: "For Revision", remarks: "Survey methodology needs stronger validation.", files: [{ name: "Survey-Reviewer-Feedback.pdf", url: "#" }] },
    { id: 10, title: "Level 2 – Library Resources Review", program: "BSIT", fullName: "BS in Information Technology", level: "Level 2", reviewedDate: "Nov 30, 2025", status: "Accepted", remarks: "Digital and physical library resources meet accreditation requirements.", files: [{ name: "Library-Compliance.pdf", url: "#" }] },
  ];

  const filteredReviews = externalReviews.filter((item) => {
    const statusMatch = statusFilter === "All" || item.status === statusFilter;
    const levelMatch = levelFilter === "All" || item.level === levelFilter;
    return statusMatch && levelMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      {/* Sidebar now receives open state */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-6">
          {/* HEADER */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                External Monitoring
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Tracking external reviewer decisions and feedback
              </p>
            </div>

            {/* FILTERS - Responsive grid for smaller screens */}
            <div className="grid grid-cols-2 sm:flex gap-3">
              <FilterSelect
                label="Status"
                value={statusFilter}
                onChange={setStatusFilter}
                options={["All", "Pending", "Accepted", "For Revision"]}
              />
              <FilterSelect
                label="Level"
                value={levelFilter}
                onChange={setLevelFilter}
                options={["All", "Level 1", "Level 2", "Level 3"]}
              />
            </div>
          </div>

          {/* TABLE CONTAINER */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Document & Program
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                      Accreditation
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                      Decision Date
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {filteredReviews.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#6A003A] font-bold text-xs shadow-sm group-hover:border-[#6A003A] transition-colors">
                            {item.program}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-400 font-medium">
                              {item.fullName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-sm font-semibold text-gray-700">
                          {item.level}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                          {item.reviewedDate}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => setSelectedReview(item)}
                            className="text-xs font-bold text-[#6A003A] hover:underline uppercase tracking-tight whitespace-nowrap"
                          >
                            Feedback
                          </button>
                          {item.status === "For Revision" && (
                            <button
                              title="Resubmit for Review"
                              className="text-rose-600 hover:text-rose-800 transition-colors shrink-0"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {selectedReview && (
        <ExternalFeedbackModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
};

/* --- CONSISTENT SUB-COMPONENTS (PRESERVED) --- */

const FilterSelect = ({ label, value, onChange, options }) => (
  <div className="flex flex-col text-left flex-1 sm:flex-none">
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">
      {label}
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-xs font-bold text-gray-700 shadow-sm focus:outline-none transition-all cursor-pointer w-full"
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Accepted: "bg-emerald-50 text-emerald-600 border-emerald-100",
    "For Revision": "bg-rose-50 text-rose-600 border-rose-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight border whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
};

const ExternalFeedbackModal = ({ review, onClose }) => (
  <div className="fixed inset-0 bg-[#6A003A]/20 backdrop-blur-sm flex items-end sm:items-center justify-center z-[100] p-0 sm:p-4 animate-in fade-in duration-200">
    <div className="bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden border border-white animate-in slide-in-from-bottom sm:zoom-in duration-300">
      <div className="bg-[#6A003A] p-6 sm:p-8 text-white relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors font-bold text-xl">
          ✕
        </button>
        <h3 className="text-xl sm:text-2xl font-bold">Reviewer Feedback</h3>
        <p className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-1">
          {review.level} • {review.program}
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-6 text-left">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Official Remarks</h4>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed italic">
            {review.remarks || "No feedback provided yet by the external reviewer."}
          </p>
        </div>

        {review.files.length > 0 && (
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Attached Corrections</h4>
            <div className="space-y-2">
              {review.files.map((file, index) => (
                <div key={index} className="flex justify-between items-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm group hover:border-[#6A003A] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-magenta-50 flex items-center justify-center text-[#6A003A]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 truncate max-w-[150px] sm:max-w-none">
                      {file.name}
                    </span>
                  </div>
                  <a href={file.url} className="text-[10px] font-bold text-[#6A003A] uppercase tracking-widest px-3 py-1 bg-magenta-50 rounded-lg hover:bg-[#6A003A] hover:text-white transition-all">
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Mobile close padding */}
        <div className="h-4 sm:hidden"></div>
      </div>
    </div>
  </div>
);

export default AdminExternalReview;