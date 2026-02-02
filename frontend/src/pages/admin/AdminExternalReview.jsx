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
      program: "BSIT",
      fullName: "BS in Information Technology",
      level: "Level 1",
      reviewedDate: "Dec 5, 2025",
      status: "Accepted",
      remarks: "The submitted documents sufficiently satisfy Level 1 accreditation requirements.",
      files: [{ name: "Reviewed-Self-Assessment.pdf", url: "#" }],
    },
    {
      id: 2,
      title: "Level 2 – Research Compliance",
      program: "BSIT",
      fullName: "BS in Information Technology",
      level: "Level 2",
      reviewedDate: "—",
      status: "Pending",
      remarks: "",
      files: [],
    },
    {
      id: 3,
      title: "Level 3 – Facilities Evaluation",
      program: "BSIT",
      fullName: "BS in Information Technology",
      level: "Level 3",
      reviewedDate: "Dec 7, 2025",
      status: "For Revision",
      remarks: "Additional laboratory utilization evidence is required.",
      files: [{ name: "External-Reviewer-Comments.pdf", url: "#" }],
    },
  ];

  const filteredReviews = externalReviews.filter((item) => {
    const statusMatch = statusFilter === "All" || item.status === statusFilter;
    const levelMatch = levelFilter === "All" || item.level === levelFilter;
    return statusMatch && levelMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8 animate-in fade-in duration-500">
          {/* HEADER */}
          <div className="flex justify-between items-end">
            <div className="text-left">
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">External Monitoring</h2>
              <p className="text-sm text-gray-500 font-medium">Tracking external reviewer decisions and feedback</p>
            </div>
            
            {/* COMPACT FILTERS */}
            <div className="flex gap-3">
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

          {/* TABLE CARD */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden text-left">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-gray-100">
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Document & Program</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Accreditation</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Decision Date</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {filteredReviews.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-magenta-50 flex items-center justify-center text-[#6A003A] font-bold text-xs shadow-sm">
                            {item.program}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800 group-hover:text-[#6A003A] transition-colors">{item.title}</p>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter">{item.fullName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <span className="text-xs font-bold text-gray-600">{item.level}</span>
                      </td>
                      <td className="px-8 py-5 text-center text-xs font-medium text-gray-500">
                        {item.reviewedDate}
                      </td>
                      <td className="px-8 py-5 text-center">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedReview(item)}
                            className="px-4 py-2 bg-white border border-gray-200 text-[10px] font-bold text-gray-600 uppercase tracking-widest rounded-lg hover:border-[#6A003A] hover:text-[#6A003A] transition-all"
                          >
                            Feedback
                          </button>
                          {item.status === "For Revision" && (
                            <button className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
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
        <ExternalFeedbackModal review={selectedReview} onClose={() => setSelectedReview(null)} />
      )}
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const FilterSelect = ({ label, value, onChange, options }) => (
  <div className="flex flex-col text-left">
    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-xs font-bold text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A003A]/10 transition-all cursor-pointer"
    >
      {options.map(opt => <option key={opt}>{opt}</option>)}
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
    <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter border ${styles[status]}`}>
      {status}
    </span>
  );
};

const ExternalFeedbackModal = ({ review, onClose }) => (
  <div className="fixed inset-0 bg-[#6A003A]/20 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in zoom-in duration-200">
    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden border border-white">
      <div className="bg-[#6A003A] p-8 text-white relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors">✕</button>
        <h3 className="text-2xl font-bold">Reviewer Feedback</h3>
        <p className="text-white/60 text-xs font-medium uppercase tracking-widest mt-1">{review.level} • {review.program}</p>
      </div>

      <div className="p-8 space-y-6 text-left">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Official Remarks</h4>
          <p className="text-sm text-gray-700 leading-relaxed font-medium italic">
            {review.remarks || "No feedback provided yet by the external reviewer."}
          </p>
        </div>

        {review.files.length > 0 && (
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Attached Corrections</h4>
            <div className="space-y-2">
              {review.files.map((file, index) => (
                <div key={index} className="flex justify-between items-center bg-white border border-gray-100 rounded-xl p-4 shadow-sm group hover:border-[#6A003A] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-magenta-50 flex items-center justify-center text-[#6A003A]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-xs font-bold text-gray-700">{file.name}</span>
                  </div>
                  <a href={file.url} className="text-[10px] font-black text-[#6A003A] uppercase tracking-widest px-3 py-1 bg-magenta-50 rounded-lg hover:bg-[#6A003A] hover:text-white transition-all">
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default AdminExternalReview;