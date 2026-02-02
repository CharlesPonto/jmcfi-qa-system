const Guidelines = ({ materials, onSelect }) => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-[#6A003A] to-[#4A0028] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden text-left">
      <div className="relative z-10">
        <h3 className="text-3xl font-bold">Outcome-Based Focus</h3>
        <p className="text-magenta-100 mt-2 max-w-lg opacity-90">
          Level 2 requires evidence of program sustainability, research culture, and measurable learning outcomes.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
      {/* FOCUS AREAS CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Core Pillars</h4>
        <ul className="space-y-3">
          {["Learning Outcomes", "Research Outputs", "Extension Programs", "Faculty Performance"].map((area) => (
            <li key={area} className="flex items-center gap-3 text-sm font-bold text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6A003A]" />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* MATERIALS LIST */}
      <div className="lg:col-span-2 space-y-4">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Reference Library</h4>
        {materials.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="group w-full flex items-center justify-between bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#6A003A] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center text-[#6A003A] group-hover:bg-[#6A003A] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-400 font-medium tracking-tight">Updated {item.date}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6A003A] group-hover:text-white transition-all">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Guidelines;