import { useState } from "react";

const Complied = () => {
  const [filter, setFilter] = useState("All");

  const compliedDocs = [
    { id: 1, title: "Final Self-Assessment.pdf", program: "BSIT", approvedBy: "QA Office", date: "Nov 20, 2025" },
    { id: 2, title: "Curriculum Verification.pdf", program: "BSBA", approvedBy: "QA Office", date: "Nov 22, 2025" },
    { id: 3, title: "Faculty Portfolio - Level 1.docx", program: "BSIT", approvedBy: "QA Office", date: "Nov 25, 2025" },
  ];

  const filteredDocs = compliedDocs.filter(doc => 
    filter === "All" || doc.program === filter
  );

  return (
    <div className="space-y-6 text-left">
      
      {/* HEADER & FILTER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
          <h4 className="text-sm font-semibold text-gray-800 tracking-tight">Archive of Complied Documents</h4>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sort by:</span>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2 text-xs font-bold text-[#6A003A] focus:ring-2 focus:ring-[#6A003A]/10 outline-none cursor-pointer shadow-sm transition-all"
            >
              <option value="All">All Programs</option>
              <option value="BSIT">BSIT</option>
              <option value="BSBA">BSBA</option>
              <option value="BSHM">BSHM</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6A003A]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* DOCUMENT LIST */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <div 
                key={doc.id} 
                className="flex items-center justify-between p-5 bg-emerald-50/30 border border-emerald-100 border-l-4 border-l-emerald-500 rounded-2xl group transition-all hover:shadow-md hover:bg-emerald-50/50"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">{doc.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter bg-white px-2 py-0.5 rounded border border-emerald-100">
                        {doc.program}
                      </span>
                      <p className="text-xs text-gray-500 font-medium italic">Approved by {doc.approvedBy} • {doc.date}</p>
                    </div>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-emerald-200 text-emerald-600 text-xs font-bold rounded-xl hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-200 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download
                </button>
              </div>
            ))
          ) : (
            <div className="py-12 text-center border-2 border-dashed border-slate-100 rounded-2xl">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No complied documents for {filter}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Complied;