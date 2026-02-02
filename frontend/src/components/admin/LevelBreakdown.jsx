const LevelBreakdown = ({ level, onBack }) => {
  const departments = [
    { name: "BSIT", progress: 85 },
    { name: "BSBA", progress: 60 },
    { name: "BSHM", progress: 45 },
    { name: "BSED", progress: 90 },
    { name: "BSCrim", progress: 30 },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 group">
          <div className="p-2 bg-white rounded-lg border border-gray-100 group-hover:border-[#6A003A] transition-all">
            <svg className="w-4 h-4 text-[#6A003A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Back to Overview</span>
        </button>
        <div className="text-right">
            <h3 className="text-xl font-black text-gray-800 uppercase tracking-tighter">
                {level.label} <span className="text-[#6A003A]">Analysis</span>
            </h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Departmental Breakdown</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {departments.map((dept, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center group hover:border-[#6A003A] transition-all hover:shadow-xl hover:shadow-magenta-100/20">
            {/* SVG CIRCLE */}
            <div className="relative w-28 h-28 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-50" />
                <circle 
                  cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" 
                  strokeDasharray={2 * Math.PI * 48}
                  strokeDashoffset={2 * Math.PI * 48 * (1 - dept.progress / 100)}
                  strokeLinecap="round"
                  className="text-[#6A003A] transition-all duration-1000 ease-out" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-black text-gray-800">{dept.progress}%</span>
              </div>
            </div>
            
            <h4 className="text-sm font-black text-gray-700 uppercase tracking-[0.2em]">{dept.name}</h4>
            <div className="mt-4 px-4 py-1 bg-slate-50 rounded-full border border-gray-100 group-hover:bg-magenta-50 transition-colors">
                <p className="text-[9px] font-black text-gray-400 group-hover:text-[#6A003A] uppercase tracking-tighter">View Evidence</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelBreakdown;