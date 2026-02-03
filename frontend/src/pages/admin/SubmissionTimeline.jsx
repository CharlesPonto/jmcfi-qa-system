import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const SubmissionTimeline = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCollege, setActiveCollege] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // DEPARTMENT OVERVIEW DATA
  const departments = [
    { id: 1, name: "CITE", fullName: "College of ICT Engineering", count: 24, rate: "92%", status: "On Track", deadline: "Feb 10", trend: "up" },
    { id: 2, name: "COBE", fullName: "College of Business & Economics", count: 18, rate: "78%", status: "Urgent", deadline: "Feb 05", trend: "down" },
    { id: 3, name: "CAS", fullName: "College of Arts and Sciences", count: 15, rate: "85%", status: "On Track", deadline: "Feb 12", trend: "up" },
    { id: 4, name: "CON", fullName: "College of Nursing", count: 30, rate: "98%", status: "On Track", deadline: "Feb 15", trend: "up" },
  ];

  // COMPREHENSIVE DEMO DATA
  const allLogs = [
    { id: 1, dean: "Alan Turing", college: "CITE", doc: "Cloud Infrastructure Security Plan", status: "Approved", date: "Feb 04, 2026", deadline: "Feb 05, 2026", isSuccessful: true, level: "Level 3" },
    { id: 2, dean: "Alan Turing", college: "CITE", doc: "Network Vulnerability Assessment", status: "In Review", date: "Feb 03, 2026", deadline: "Feb 01, 2026", isSuccessful: false, level: "Level 2" },
    { id: 3, dean: "Adam Smith", college: "COBE", doc: "Economic Impact Analysis 2025", status: "Approved", date: "Feb 02, 2026", deadline: "Feb 05, 2026", isSuccessful: true, level: "Level 1" },
    { id: 4, dean: "Marie Curie", college: "CAS", doc: "Interdisciplinary Research Journal", status: "Revision Required", date: "Feb 01, 2026", deadline: "Feb 01, 2026", isSuccessful: true, level: "Level 4" },
    { id: 5, dean: "Florence Nightingale", college: "CON", doc: "Clinical Duty Rotation Schedule", status: "Approved", date: "Jan 30, 2026", deadline: "Feb 02, 2026", isSuccessful: true, level: "Level 2" },
    { id: 6, dean: "Alan Turing", college: "CITE", doc: "Capstone Project Repository", status: "Approved", date: "Jan 28, 2026", deadline: "Jan 28, 2026", isSuccessful: true, level: "Level 3" },
  ];

  const filteredLogs = allLogs.filter(log => 
    (!activeCollege || log.college === activeCollege) &&
    (log.doc.toLowerCase().includes(searchTerm.toLowerCase()) || log.dean.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-8 overflow-y-auto">
          
          {/* HEADER SECTION - MIRRORS ADMIN DASHBOARD */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                {activeCollege ? `${activeCollege} Audit Trail` : "Submission Timeline"}
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-medium tracking-tight italic">
                {activeCollege ? `Monitoring performance for ${activeCollege}` : "Real-time institutional activity and department compliance monitoring"}
              </p>
            </div>
            
            <div className="flex gap-3">
              {activeCollege && (
                <button 
                  onClick={() => setActiveCollege(null)}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm"
                >
                  ← All Departments
                </button>
              )}
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#6A003A] text-white text-sm font-bold rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export History
              </button>
            </div>
          </div>

          {!activeCollege ? (
            /* DEPARTMENT BOXES (OVERVIEW MODE) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveCollege(dept.name)}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#6A003A]/30 transition-all text-left relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-black text-gray-800 group-hover:text-[#6A003A] transition-colors">{dept.name}</span>
                    <div className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${
                      dept.status === "On Track" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    }`}>
                      {dept.status}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-tight mb-1">{dept.fullName}</p>
                  <p className="text-xs text-gray-400 font-medium">Next Deadline: {dept.deadline}</p>
                  
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-none">{dept.count} Files</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-tighter">Total Logged</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-[#6A003A] leading-none">{dept.rate}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-tighter">Success Rate</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* DETAILED TIMELINE (DRILL-DOWN MODE) */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              
              <div className="lg:col-span-2 space-y-6">
                {/* Search in Timeline */}
                <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center px-4">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input 
                    type="text" 
                    placeholder={`Search through ${activeCollege} history...`}
                    className="w-full bg-transparent border-none py-2 text-sm font-semibold text-gray-600 outline-none placeholder:text-gray-300"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Vertical Timeline Stem */}
                <div className="relative ml-6 pb-20">
                  <div className="absolute left-0 top-0 w-px h-full bg-gray-200 ml-[11px]" />
                  
                  <div className="space-y-10">
                    {filteredLogs.map((log) => (
                      <div key={log.id} className="relative pl-12 group">
                        {/* Status Marker */}
                        <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-slate-50 z-10 shadow-sm transition-transform group-hover:scale-125 ${
                          log.isSuccessful ? "bg-emerald-500" : "bg-rose-500"
                        }`} />
                        
                        {/* Log Card */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:border-[#6A003A]/20 transition-all duration-300">
                          <div className="flex flex-col sm:flex-row justify-between mb-6">
                            <div>
                               <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded italic">{log.level}</span>
                                  <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-tight leading-none">{log.doc}</h4>
                               </div>
                               <p className="text-xs text-gray-400 font-medium">Target Deadline: {log.deadline}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                               <span className="text-[10px] font-bold text-gray-400 uppercase bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                 Timestamp: {log.date}
                               </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                            <div className="w-10 h-10 rounded-xl bg-[#6A003A] flex items-center justify-center text-[11px] font-black text-white shadow-md shadow-[#6A003A]/20">
                              {log.dean.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                               <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1 tracking-widest">Authenticated By</p>
                               <p className="text-sm font-bold text-gray-700">Dean {log.dean}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-lg ${
                                  log.isSuccessful ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
                                }`}>
                                  {log.isSuccessful ? "✓ On-Time" : "⚠ Late"}
                                </span>
                                <span className="text-[9px] font-bold text-sky-500 uppercase tracking-tighter italic">{log.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SIDEBAR CONTENT AREA (Performance Sidebar) */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Audit Performance</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between">
                          <span className="text-sm font-bold text-gray-700">Compliance Rate</span>
                          <span className="text-sm font-black text-[#6A003A]">88%</span>
                       </div>
                       <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#6A003A] rounded-full transition-all" style={{ width: '88%' }} />
                       </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
                         "Performance is calculated based on successful submissions before institutional deadlines across all accreditation levels."
                       </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubmissionTimeline;