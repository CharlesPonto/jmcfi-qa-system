const Complied = () => {
  const compliedDocs = [
    {
      id: 1,
      title: "Approved Research Outputs.pdf",
      category: "Research & Publication",
      approvedBy: "QA Office",
      date: "Dec 18, 2025",
    },
    {
      id: 2,
      title: "Community Extension Program Summary.pdf",
      category: "Extension Programs",
      approvedBy: "QA Office",
      date: "Dec 15, 2025",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="font-bold text-xl text-gray-800">Archive of Approved Evidence</h4>
          <p className="text-sm text-gray-500 font-medium mt-1">
            Documents listed here have passed final validation for Level 2.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Export Archive
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {compliedDocs.length > 0 ? (
          compliedDocs.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 bg-emerald-50/30 border border-emerald-100 rounded-2xl hover:bg-emerald-50/60 transition-all"
            >
              <div className="flex items-center gap-5">
                {/* ICON INDICATOR */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-gray-800">{item.title}</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-black uppercase rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    Verified by <span className="text-emerald-700 font-bold">{item.approvedBy}</span> • Approved on {item.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button className="px-5 py-2 bg-white border border-emerald-200 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm shadow-emerald-100/50">
                  Download File
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-gray-100">
            <p className="text-gray-400 font-medium italic">No documents have been approved for Level 2 yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Complied;