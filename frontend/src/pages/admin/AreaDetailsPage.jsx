import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AreaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const areaData = {
    "1": {
      title: "Philosophy and Objectives",
      sections: [
        {
          itemNo: "1.1",
          subArea: "STATEMENT OF MISSION, VISION, GOALS AND CORE VALUES OF THE INSTITUTION",
          isApproved: true,
          combinedEvidence: [
            { code: "1.1.1", text: "JMCFI Philosophy, Vision, Mission, and Goals" },
            { code: "1.1.2", text: "Articles of Incorporation/SEC Registration" },
            { code: "1.1.3", text: "JMCFI Core Values" },
            { code: "1.1.4", text: "JMCFI Roadmap" },
            { code: "1.1.5", text: "JMCFI Institutional Quality Framework" }
          ]
        },
        {
          itemNo: "1.2",
          subArea: "STATEMENT OF COLLEGE/DEPARTMENT MISSION, VISION AND OBJECTIVES",
          isApproved: false,
          combinedEvidence: [
            { code: "1.2.1", text: "Department Objectives" },
            { code: "1.2.2", text: "Picture of Posted Department Objectives in the Campus" }
          ]
        },
        {
          itemNo: "1.3",
          subArea: "EDUCATIONAL OBJECTIVES OF THE PROGRAM AND PROGRAM OUTCOMES",
          isApproved: false,
          combinedEvidence: [
            { code: "1.3.1", text: "Program Educational Objectives (PEOs)/Student Outcomes (SOs)" },
            { code: "1.3.2", text: "Sample Course Outline/Syllabi Showing PEOs and CLOs" },
            { code: "1.3.3", text: "Research/Report of Industry Awareness on Programs' PEOs and CLOs" },
            { code: "1.3.4", text: "Syllabus with PEOs and CLOs posted in the LMS" }
          ]
        },
        {
          itemNo: "1.4",
          subArea: "AWARENESS ACCEPTANCE AND IMPLEMENTATION OF THE VMG AND PROGRAM OUTCOMES",
          isApproved: false,
          combinedEvidence: [
            { code: "1.4.1", text: "Proceedings of Meetings/Programs with Faculty and Staff" },
            { code: "1.4.2", text: "Orientation Program of New Employees by HRMD" },
            { code: "1.4.3", text: "Sample Syllabi/Course Outline Showing VMG and CLOs" },
            { code: "1.4.4", text: "Received Copy of Promulgated PEOs and CLOs or Syllabi" },
            { code: "1.4.5", text: "Program on Freshmen Orientation and Campus Tour" },
            { code: "1.4.6", text: "Orientation Program/Attendance Sheets" },
            { code: "1.4.7", text: "Awareness & Acceptance: Loading Contract, Job Descriptions, and Posted Pictures" },
            { code: "1.4.8", text: "Faculty Loading Contract and Job Description" },
            { code: "1.4.9", text: "List of Co-Curricular Activities of Students" },
            { code: "1.4.10", text: "Evaluation Reports of Co-Curricular Activities" }
          ]
        }
      ]
    }
  };

  const currentArea = areaData[id] || { title: "Area", sections: [] };

  return (
    <div className="bg-[#F4F4F7] h-screen flex overflow-hidden font-sans text-slate-900 antialiased">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Container must have min-w-0 to allow flex children to shrink properly */}
      <div className="flex-1 flex flex-col min-w-0 h-full lg:ml-64 transition-all duration-300">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 flex flex-col p-6 space-y-6 overflow-hidden">
          
          {/* HEADER (Fixed) */}
          <div className="flex-none grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5">
              <button onClick={() => navigate(-1)} className="p-3 bg-slate-100 rounded-xl hover:bg-[#6A003A] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <div>
                <h1 className="text-2xl font-black text-slate-900 uppercase leading-tight">Area {id}: {currentArea.title}</h1>
                <p className="text-[#6A003A] font-bold text-[10px] uppercase tracking-widest mt-1">Institutional Compliance Dashboard</p>
              </div>
            </div>

            <div className="xl:col-span-5 grid grid-cols-3 gap-3">
                <StatCard label="Total Items" value="04" color="slate" />
                <StatCard label="Complied" value="01" color="emerald" />
                <StatCard label="Pending" value="03" color="amber" />
            </div>
          </div>

          {/* TABLE CONTAINER (The only scrollable part) */}
          <div className="flex-1 min-h-0 bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[3200px] table-fixed">
                <thead className="sticky top-0 z-[60]">
                  <tr className="bg-[#6A003A] text-white divide-x divide-[#800046]">
                    <th className="sticky left-0 z-[70] bg-[#6A003A] p-4 text-[10px] font-black uppercase tracking-wider w-20 text-center">No.</th>
                    <th className="sticky left-20 z-[70] bg-[#6A003A] p-4 text-[10px] font-black uppercase tracking-wider w-80 border-r border-[#800046]">Sub-Area Category</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[550px]">Required Evidence</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-44 text-center">Self-Eval</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-44 text-center">Docs</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[450px]">Actual Situation</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[380px] bg-[#5a0031]">Dean Review</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[380px] bg-[#5a0031]">Area Chair</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[380px] bg-[#5a0031]">Accred. Head</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-wider w-[380px] bg-[#5a0031]">Ext. Auditor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentArea.sections.map((section) => (
                    <tr key={section.itemNo} className="hover:bg-slate-50 transition-colors group">
                      <td className="sticky left-0 z-40 bg-white group-hover:bg-slate-50 p-6 align-top border-r border-slate-100 text-center">
                        <span className="text-xl font-black text-[#6A003A]">{section.itemNo}</span>
                      </td>
                      <td className="sticky left-20 z-40 bg-white group-hover:bg-slate-50 p-6 align-top border-r-2 border-slate-200 shadow-sm">
                        <div className="space-y-3">
                          <p className="text-[12px] font-black text-slate-800 leading-tight uppercase">{section.subArea}</p>
                          {section.isApproved && (
                            <span className="inline-flex px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded text-[9px] font-black text-emerald-700 uppercase">✓ Approved</span>
                          )}
                        </div>
                      </td>
                      <td className="p-6 align-top border-r border-slate-100">
                        <div className="space-y-2">
                          {section.combinedEvidence.map((ev, i) => (
                            <div key={i} className="flex gap-3 items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <span className="bg-[#6A003A] text-white text-[9px] font-black px-1.5 py-0.5 rounded shrink-0">{ev.code}</span>
                              <span className="text-[11px] font-bold text-slate-700 leading-tight">{ev.text}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-6 align-top border-r border-slate-100"><StatusSelector /></td>
                      <td className="p-6 align-top border-r border-slate-100">
                        <button className="bg-slate-900 text-white w-full py-4 rounded-xl text-[10px] font-black uppercase hover:bg-[#6A003A] transition-all">Upload</button>
                      </td>
                      <td className="p-6 align-top border-r border-slate-100">
                        <textarea className="w-full h-40 p-4 border-2 border-slate-100 rounded-xl text-[12px] font-semibold text-slate-800 focus:border-[#6A003A] outline-none bg-slate-50/20" />
                      </td>
                      <FeedbackCell label="Dean's Remark" />
                      <FeedbackCell label="Area Chair" />
                      <FeedbackCell label="Accred. Head" />
                      <FeedbackCell label="Ext. Auditor" isLast />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER (Fixed) */}
          <div className="flex-none flex justify-end gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
             <button className="px-10 py-3 bg-[#6A003A] text-white rounded-xl text-xs font-black shadow-lg hover:bg-black transition-all">Submit Evaluation</button>
          </div>

        </main>
      </div>

      {/* CSS for custom scrollbar to fix visibility */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { height: 12px; width: 12px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #6A003A; border-radius: 10px; border: 3px solid #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4a0029; }
      `}} />
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
    const themes = { emerald: "text-emerald-700 bg-emerald-50 border-emerald-200", amber: "text-amber-700 bg-amber-50 border-amber-200", slate: "text-slate-700 bg-slate-50 border-slate-200" };
    return (
        <div className={`p-4 rounded-2xl border-2 ${themes[color]} text-center shadow-sm`}>
            <p className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-70">{label}</p>
            <p className="text-2xl font-black">{value}</p>
        </div>
    );
};

const StatusSelector = ({ isSmall = false }) => (
    <select className={`w-full border-2 border-slate-200 rounded-lg font-black text-[#6A003A] bg-white outline-none cursor-pointer ${isSmall ? 'p-2 text-[9px]' : 'p-3 text-[11px]'}`}>
        <option>PENDING</option>
        <option value="complied">COMPLIED</option>
        <option value="not-complied">NOT COMPLIED</option>
    </select>
);

const FeedbackCell = ({ label, isLast }) => (
  <td className={`p-5 align-top ${!isLast ? 'border-r border-slate-200' : ''} bg-[#6A003A]/[0.01]`}>
    <div className="bg-white border border-slate-200 p-4 rounded-xl min-h-[220px] shadow-sm flex flex-col gap-3">
      <div className="flex flex-col gap-2 border-b border-slate-50 pb-2">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
          <StatusSelector isSmall />
      </div>
      <textarea className="w-full flex-grow text-[11px] italic font-bold text-slate-500 bg-transparent border-none outline-none resize-none" placeholder="Remarks..." />
    </div>
  </td>
);

export default AreaDetailsPage;