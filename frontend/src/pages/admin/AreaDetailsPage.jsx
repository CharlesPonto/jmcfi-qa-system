import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AreaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data mapping with unique Item Numbers for different Sub-Areas
  const areaData = {
    "1": {
      title: "Philosophy and Objectives",
      sections: [
        {
          itemNo: "1",
          subArea: "STATEMENT OF MISSION, VISION, GOALS AND CORE VALUES OF THE INSTITUTION",
          evidenceList: [
            { id: "1.1.1", text: "JMCFI Philosophy, Vision, Mission, and Goals" },
            { id: "1.1.2", text: "Articles of Incorporation/SEC Registration" },
            { id: "1.1.3", text: "JMCFI Core Values" },
            { id: "1.1.4", text: "JMCFI Roadmap" },
            { id: "1.1.5", text: "JMCFI Institutional Quality Framework" },
          ]
        },
        {
          itemNo: "2",
          subArea: "STATEMENT OF COLLEGE/DEPARTMENT MISSION, VISION AND OBJECTIVES",
          evidenceList: [
            { id: "1.2.1", text: "Department Objectives" },
            { id: "1.2.2", text: "Picture of Posted Department Objectives in the Campus" },
          ]
        },
        {
          itemNo: "3",
          subArea: "EDUCATIONAL OBJECTIVES OF THE PROGRAM AND PROGRAM OUTCOMES / STUDENT LEARNING OUTCOMES",
          evidenceList: [
            { id: "1.3.1", text: "Program Educational Objectives (PEOs) / Student Outcomes (SOs)" },
            { id: "1.3.2", text: "Sample Course Outline/Syllabi Showing PEOs and CLOs" },
            { id: "1.3.3", text: "Research/Report of Industry Awareness on Programs' PEOs and CLOs" },
            { id: "1.3.4", text: "Syllabus with PEOs and CLOs posted in the LMS" },
          ]
        }
      ]
    }
  };

  const currentArea = areaData[id] || { title: "Area", sections: [] };

  return (
    <div className="bg-[#F4F7FE] min-h-screen flex font-sans antialiased text-left">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="w-full p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <button onClick={() => navigate(-1)} className="p-2 bg-slate-50 rounded-xl hover:bg-[#6A003A] hover:text-white transition-all text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div>
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">Area {id}: {currentArea.title}</h1>
              <p className="text-xs font-bold text-[#6A003A] uppercase tracking-widest">Compliance Matrix Overview</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[1800px] border-collapse">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase bg-slate-50/50">
                    <th className="p-4 border-b w-24">ITEM NO.</th>
                    <th className="p-4 border-b w-80">SUB-AREA</th>
                    <th className="p-4 border-b w-80">REQUIRED EVIDENCE</th>
                    <th className="p-4 border-b w-40">SELF-EVALUATION</th>
                    <th className="p-4 border-b w-44">DOCU. ATTACHMENTS</th>
                    <th className="p-4 border-b w-80">ACTUAL SITUATION</th>
                    <th className="p-4 border-b bg-slate-50/50">DEAN'S EVALUATION</th>
                    <th className="p-4 border-b bg-slate-50/50">AREA CHAIR FINDINGS</th>
                    <th className="p-4 border-b bg-slate-50/50">ACCRED. HEAD FINDINGS</th>
                    <th className="p-4 border-b bg-slate-50/50">EXTERNAL AUDITOR</th>
                  </tr>
                </thead>
                <tbody>
                  {currentArea.sections.map((section, sIdx) => (
                    <React.Fragment key={sIdx}>
                      {section.evidenceList.map((item, iIdx) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 text-xs">
                          {/* Item Number column only shows on the first row of a section */}
                          <td className="p-4 font-black text-slate-800 text-base align-top">
                            {iIdx === 0 ? section.itemNo : ""}
                          </td>
                          
                          {/* Sub-Area column only shows on the first row of a section */}
                          <td className="p-4 font-bold text-slate-700 uppercase align-top">
                            {iIdx === 0 ? section.subArea : ""}
                          </td>

                          {/* Evidence ID and Text (Shows for every row) */}
                          <td className="p-4 font-medium text-slate-600 leading-relaxed">
                            <span className="font-bold text-[#6A003A] mr-2">{item.id}</span>
                            {item.text}
                          </td>

                          <td className="p-4">
                            <select className="w-full border border-slate-200 rounded-lg p-2 font-bold text-[#6A003A] outline-none bg-white">
                              <option>Select</option>
                              <option>Complied</option>
                              <option>Not Complied</option>
                            </select>
                          </td>

                          <td className="p-4">
                            <button className="flex items-center gap-2 text-[10px] font-black bg-[#6A003A] text-white px-4 py-2 rounded-lg">
                              + ADD LINK
                            </button>
                          </td>

                          <td className="p-4">
                            <textarea className="w-full border border-slate-100 rounded-xl p-2 h-16 text-xs outline-none focus:ring-1 focus:ring-[#6A003A]" placeholder="Enter actual situation..." />
                          </td>

                          <td className="p-4 text-slate-400 italic text-[11px] bg-slate-50/10">Pending...</td>
                          <td className="p-4 text-slate-400 italic text-[11px] bg-slate-50/10">Pending...</td>
                          <td className="p-4 text-slate-400 italic text-[11px] bg-slate-50/10">Pending...</td>
                          <td className="p-4 text-slate-400 italic text-[11px] bg-slate-50/10">Pending...</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AreaDetailsPage;