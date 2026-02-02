import StatusBadge from "../StatusBadge";

const Submissions = () => {
  const submissions = [
    { 
      id: 1, 
      title: "Program Learning Outcomes.pdf", 
      program: "BSIT", 
      status: "Pending", 
      date: "Dec 10, 2025",
      version: "v2",
      historyCount: 3
    },
    { 
      id: 2, 
      title: "Research Outputs Summary.pdf", 
      program: "BSIT", 
      status: "Needs Revision", 
      date: "Dec 08, 2025",
      version: "v1",
      historyCount: 1
    },
    { 
      id: 3, 
      title: "Extension Program Report.pdf", 
      program: "BSIT", 
      status: "Complied", 
      date: "Dec 05, 2025",
      version: "v3",
      historyCount: 5
    },
  ];

  return (
    <div className="space-y-8 text-left">
      {/* HEADER STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatItem label="Total" value="12" color="bg-slate-100 text-slate-600" />
        <StatItem label="Pending" value="5" color="bg-amber-100 text-amber-600" />
        <StatItem label="Complied" value="4" color="bg-emerald-100 text-emerald-600" />
        <StatItem label="Rejected" value="3" color="bg-rose-100 text-rose-600" />
      </div>

      {/* SUBMISSIONS TABLE */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
          <h3 className="font-bold text-gray-800 tracking-tight">Active Submissions</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Submission Details</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Version</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {submissions.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-800 group-hover:text-[#6A003A] transition-colors">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.program}</span>
                        <span className="text-gray-200">•</span>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter">Updated {item.date}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-gray-600">{item.version}</span>
                      <span className="text-[9px] font-bold text-magenta-400 uppercase tracking-tighter">
                        {item.historyCount} entries in history
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <StatusBadge status={item.status} />
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button className="px-5 py-2 bg-[#6A003A] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-100">
                      Review
                    </button>
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

/* --- SUB-COMPONENT FOR STATS --- */
const StatItem = ({ label, value, color }) => (
  <div className={`${color} p-6 rounded-3xl border border-white/50 shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-[1.02]`}>
    <span className="text-3xl font-black tracking-tight">{value}</span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-80 text-center">{label}</span>
  </div>
);

export default Submissions;