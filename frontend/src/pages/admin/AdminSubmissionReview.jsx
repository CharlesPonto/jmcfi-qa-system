import { useParams } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatusBadge from "../../components/admin/StatusBadge"; // Reuse from previous step

const AdminSubmissionReview = () => {
  const { id } = useParams();
  const [checklist, setChecklist] = useState([
    { id: 1, item: "Vision, Mission, and Goals are clearly stated", status: "Yes", comment: "" },
    { id: 2, item: "Adequate laboratory facilities are available", status: "Needs Revision", comment: "" },
    { id: 3, item: "Faculty credentials are complete", status: "No", comment: "" },
  ]);

  const updateStatus = (id, value) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, status: value } : item));
  };

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8 max-w-6xl mx-auto w-full">
          {/* HEADER */}
          <div className="flex justify-between items-end border-b border-gray-200 pb-6">
            <div>
              <nav className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Accreditation / Review / #{id}
              </nav>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Review Submission
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
                Save Draft
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN: DETAILS & FILES */}
            <div className="lg:col-span-1 space-y-6">
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Submission Info</h3>
                <div className="space-y-4">
                  <Detail label="Program" value="BS in Information Technology" />
                  <Detail label="Accreditation" value="Level 1" />
                  <Detail label="Department" value="CITE" />
                  <Detail label="Date" value="Nov 12, 2025" />
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Evidence Files</h3>
                <div className="space-y-3">
                  <FileItem name="Self-Assessment Report.pdf" type="SAR" date="Nov 12" />
                  <FileItem name="Facilities Evidence.zip" type="Evidence" date="Nov 12" />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: CHECKLIST */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-white">
                  <h3 className="font-bold text-gray-800">Compliance Checklist</h3>
                </div>
                
                <div className="divide-y divide-gray-50">
                  {checklist.map((item) => (
                    <div key={item.id} className="p-6 space-y-4 hover:bg-slate-50/50 transition">
                      <p className="text-sm font-bold text-gray-700 leading-relaxed">{item.item}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {["Yes", "No", "Needs Revision"].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateStatus(item.id, option)}
                            className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                              item.status === option 
                                ? getOptionStyles(option) 
                                : "bg-white border-gray-200 text-gray-400 hover:border-gray-300"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>

                      <textarea
                        placeholder="Add specific observations or requirements for the Dean..."
                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#6A003A]/10 min-h-[80px] placeholder:text-gray-300"
                      />
                    </div>
                  ))}
                </div>

                {/* DECISION FOOTER */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3 justify-end">
                  <button className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all">
                    Approve
                  </button>
                  <button className="px-6 py-2.5 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-amber-600 shadow-lg shadow-amber-200 transition-all">
                    Request Revision
                  </button>
                  <button className="px-6 py-2.5 bg-rose-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-rose-700 shadow-lg shadow-rose-200 transition-all">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper for dynamic button colors
const getOptionStyles = (option) => {
  if (option === "Yes") return "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm";
  if (option === "No") return "bg-rose-50 border-rose-500 text-rose-700 shadow-sm";
  return "bg-amber-50 border-amber-500 text-amber-700 shadow-sm";
};

/* SMALL COMPONENTS */
const Detail = ({ label, value }) => (
  <div>
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
    <p className="text-sm font-bold text-gray-700 mt-0.5">{value}</p>
  </div>
);

const FileItem = ({ name, type, date }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-transparent hover:border-gray-200 transition-all group">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#6A003A] group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-700 truncate max-w-[140px]">{name}</p>
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{type} • {date}</p>
      </div>
    </div>
    <div className="flex gap-1">
       <button className="p-2 text-gray-400 hover:text-[#6A003A] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
       </button>
    </div>
  </div>
);

export default AdminSubmissionReview;