import { useParams } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminSubmissionReview = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state
  const [checklist, setChecklist] = useState([
    { id: 1, item: "Vision, Mission, and Goals are clearly stated", status: "Yes", comment: "" },
    { id: 2, item: "Adequate laboratory facilities are available", status: "Needs Revision", comment: "" },
    { id: 3, item: "Faculty credentials are complete", status: "No", comment: "" },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const updateStatus = (id, value) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, status: value } : item));
  };

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      {/* SIDEBAR - Responsive Enabled */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        {/* TOPBAR - Hamburger Enabled */}
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
          {/* HEADER - Stacks on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div>
              <nav className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">
                Accreditation / Review / #{id}
              </nav>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                Review Submission
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 sm:flex-none px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                Save Draft
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: DETAILS & FILES */}
            <div className="lg:col-span-1 space-y-6">
              <section className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-6">Submission Info</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  <Detail label="Program" value="BS in IT" />
                  <Detail label="Accreditation" value="Level 1" />
                  <Detail label="Department" value="CITE" />
                  <Detail label="Date" value="Nov 12, 2025" />
                </div>
              </section>

              <section className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">Evidence Files</h3>
                <div className="space-y-3">
                  <FileItem name="Self-Assessment Report.pdf" type="SAR" date="Nov 12" />
                  <FileItem name="Facilities Evidence.zip" type="Evidence" date="Nov 12" />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: CHECKLIST */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-white">
                  <h3 className="font-black text-gray-800 uppercase text-sm tracking-tight">Compliance Checklist</h3>
                </div>
                
                <div className="divide-y divide-gray-50">
                  {checklist.map((item) => (
                    <div key={item.id} className="p-6 space-y-4 hover:bg-slate-50/50 transition-all">
                      <p className="text-sm font-bold text-gray-700 leading-relaxed">{item.item}</p>
                      
                      {/* BUTTON GROUP - Horizontal scrollable on very small screens */}
                      <div className="flex flex-wrap gap-2">
                        {["Yes", "No", "Needs Revision"].map((option) => (
                          <button
                            key={option}
                            onClick={() => updateStatus(item.id, option)}
                            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
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
                        placeholder="Add specific observations..."
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-xs font-medium focus:ring-4 focus:ring-[#6A003A]/5 min-h-[100px] placeholder:text-gray-300 transition-all"
                      />
                    </div>
                  ))}
                </div>

                {/* DECISION FOOTER - Stacks buttons on mobile */}
                <div className="p-6 bg-slate-50/50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-rose-700 shadow-lg shadow-rose-200 transition-all">
                    Reject
                  </button>
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-amber-600 shadow-lg shadow-amber-200 transition-all">
                    Request Revision
                  </button>
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all">
                    Approve
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

/* HELPER STYLES */
const getOptionStyles = (option) => {
  if (option === "Yes") return "bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-100 scale-[1.02]";
  if (option === "No") return "bg-rose-500 border-rose-600 text-white shadow-md shadow-rose-100 scale-[1.02]";
  return "bg-amber-500 border-amber-600 text-white shadow-md shadow-amber-100 scale-[1.02]";
};

/* SMALL COMPONENTS */
const Detail = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{label}</p>
    <p className="text-xs font-black text-gray-800 mt-1">{value}</p>
  </div>
);

const FileItem = ({ name, type, date }) => (
  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-transparent hover:border-gray-200 transition-all group">
    <div className="flex items-center gap-3 min-w-0">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#6A003A] group-hover:scale-110 transition-transform shadow-sm">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-black text-gray-800 truncate">{name}</p>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-0.5">{type} • {date}</p>
      </div>
    </div>
    <button className="shrink-0 p-2 text-gray-400 hover:text-[#6A003A] bg-white rounded-lg border border-gray-100 shadow-sm transition-all ml-2">
       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    </button>
  </div>
);

export default AdminSubmissionReview;