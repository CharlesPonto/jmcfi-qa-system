const Guidelines = ({ materials, onSelect }) => (
  <div className="space-y-8">
    <div className="bg-[#6A003A] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-3xl font-bold">Standard Procedures</h3>
        <p className="text-magenta-100 mt-2 max-w-md opacity-90 text-sm">
          Access official templates and procedural manuals required for Level 1 compliance.
        </p>
      </div>
      {/* Subtle decorative circle */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Tasks</h4>
        <div className="py-4 border-2 border-dashed border-slate-50 rounded-xl flex items-center justify-center">
          <p className="text-xs text-gray-400 font-medium italic">No urgent tasks assigned.</p>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Official Materials</h4>
        {materials.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="group w-full flex items-center justify-between bg-white rounded-2xl p-5 border border-gray-100 border-l-4 border-l-[#6A003A] hover:shadow-md hover:border-y-gray-200 hover:border-r-gray-200 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#6A003A] group-hover:bg-[#6A003A] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] bg-slate-100 text-gray-500 px-2 py-0.5 rounded-md font-bold uppercase tracking-tighter">
                    {item.department || "General"}
                  </span>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">
                    Posted {item.date}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#6A003A] opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                View Material
              </span>
              <svg className="w-4 h-4 text-[#6A003A] opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Guidelines;