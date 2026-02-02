import { useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminSubmissionView = () => {
  const { id } = useParams();

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-6">
          {/* HEADER: MATCHED TO USER MANAGEMENT STYLE */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">View Submission</h2>
              <p className="text-sm text-gray-500 font-medium">Reviewing files and compliance for Submission #{id}</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              Generate Report
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT COLUMN: SUBMISSION SUMMARY */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Submission Details</h3>
                
                <div className="space-y-5">
                  <Detail label="Program" value="BS in Information Technology" />
                  <Detail label="Department" value="CITE" />
                  <Detail label="Accreditation" value="Level 1" />
                  <Detail label="Date Submitted" value="Nov 12, 2025" />
                  <Detail label="Submitted By" value="Program Head" />
                  
                  <div className="pt-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Current Status</p>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-amber-600 border border-amber-100">
                      Pending Review
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DOCUMENTS AND CHECKLIST */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* DOCUMENTS TABLE */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h3 className="text-sm font-bold text-gray-800">Uploaded Documents</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50/50 border-b border-gray-100">
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">File Name</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <DocumentRow name="Self-Assessment Report.pdf" type="SAR" date="Nov 12" />
                      <DocumentRow name="Facilities Evidence.zip" type="Evidence" date="Nov 12" />
                      <DocumentRow name="Faculty Credentials.pdf" type="Evidence" date="Nov 11" />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CHECKLIST SECTION */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold text-gray-800">Accreditation Checklist</h3>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">View Only Mode</span>
                </div>
                
                <ul className="space-y-3">
                  <ChecklistItem text="Vision, Mission, and Goals are clearly stated" status="Complied" />
                  <ChecklistItem text="Adequate laboratory facilities are available" status="Pending" />
                  <ChecklistItem text="Faculty credentials are complete" status="Pending" />
                  <ChecklistItem text="Curriculum aligns with CHED standards" status="Pending" />
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ===== CONSISTENT SUB-COMPONENTS ===== */

const Detail = ({ label, value }) => (
  <div>
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
    <p className="text-sm font-semibold text-gray-700 mt-0.5">{value}</p>
  </div>
);

const DocumentRow = ({ name, type, date }) => (
  <tr className="hover:bg-slate-50/50 transition-colors group">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-magenta-50 rounded-lg text-[#6A003A] group-hover:bg-[#6A003A] group-hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-[10px] text-gray-400 font-medium uppercase">{date}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-tight">
      {type}
    </td>
    <td className="px-6 py-4 text-right">
      <button className="text-xs font-bold text-[#6A003A] hover:underline uppercase tracking-tighter">
        Preview
      </button>
    </td>
  </tr>
);

const ChecklistItem = ({ text, status }) => {
  const isComplied = status === "Complied";
  return (
    <li className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-transparent hover:border-gray-200 transition-all">
      <span className="text-sm font-semibold text-gray-700">{text}</span>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${isComplied ? "text-emerald-600" : "text-amber-500"}`}>
        {isComplied ? "✓ " + status : "○ " + status}
      </span>
    </li>
  );
};

export default AdminSubmissionView;