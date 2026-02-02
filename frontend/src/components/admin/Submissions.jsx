import { useState } from "react";

const Submissions = () => {
  const [filter, setFilter] = useState("All");

  const submissions = [
    { id: 1, title: "Self-Assessment Report.pdf", program: "BSIT", submittedBy: "Dean - CITE", date: "Nov 12, 2025", status: "Pending" },
    { id: 2, title: "Compliance Report.docx", program: "BSBA", submittedBy: "Dean - COBE", date: "Nov 10, 2025", status: "Needs Revision" },
    { id: 3, title: "Curriculum Map.pdf", program: "BSIT", submittedBy: "Dean - CITE", date: "Nov 08, 2025", status: "Pending" },
  ];

  const filteredSubmissions = submissions.filter(s => 
    filter === "All" || s.program === filter
  );

  return (
    <div className="space-y-8 text-left">
      
      {/* STAT CARDS WITH MATCHING LEFT BORDER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 border-l-4 border-l-slate-400 shadow-sm group transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</p>
              <h3 className="text-3xl font-black text-slate-700 mt-1">12</h3>
            </div>
            <div className="text-slate-300 group-hover:text-slate-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 font-medium italic">General Overview</p>
        </div>

        {/* Pending Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 border-l-4 border-l-amber-500 shadow-sm group transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-amber-600/60 uppercase tracking-widest">Pending</p>
              <h3 className="text-3xl font-black text-amber-600 mt-1">05</h3>
            </div>
            <div className="text-amber-200 group-hover:text-amber-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <p className="text-xs text-amber-600/60 mt-4 font-medium italic">Awaiting review</p>
        </div>

        {/* Complied Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 border-l-4 border-l-emerald-500 shadow-sm group transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest">Complied</p>
              <h3 className="text-3xl font-black text-emerald-600 mt-1">04</h3>
            </div>
            <div className="text-emerald-200 group-hover:text-emerald-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <p className="text-xs text-emerald-600/60 mt-4 font-medium italic">Requirements met</p>
        </div>

        {/* Rejected Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 border-l-4 border-l-rose-500 shadow-sm group transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-rose-600/60 uppercase tracking-widest">Rejected</p>
              <h3 className="text-3xl font-black text-rose-600 mt-1">03</h3>
            </div>
            <div className="text-rose-200 group-hover:text-rose-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <p className="text-xs text-rose-600/60 mt-4 font-medium italic">Needs revision</p>
        </div>
      </div>

      {/* FILTER & TABLE */}
      <div className="space-y-4">
        <div className="flex justify-end items-center gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sort by:</span>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-[#6A003A] outline-none shadow-sm cursor-pointer pr-10 hover:border-[#6A003A]/30 transition-all"
            >
              <option value="All">All Programs</option>
              <option value="BSIT">BSIT</option>
              <option value="BSBA">BSBA</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6A003A]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Document</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredSubmissions.map((item) => (
                <tr key={item.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-5 border-l-4 border-l-transparent group-hover:border-l-[#6A003A]">
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-400 font-medium italic">{item.program} • {item.date}</p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      item.status === 'Pending' ? 'bg-amber-100/50 text-amber-600' : 'bg-rose-100/50 text-rose-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-xs font-bold text-[#6A003A] uppercase tracking-wider hover:underline transition-all">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Submissions;