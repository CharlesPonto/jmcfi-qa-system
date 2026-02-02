const Complied = () => {
  const compliedDocs = [
    { id: 1, title: "Final Self-Assessment.pdf", program: "BSIT", approvedBy: "QA Office", date: "Nov 20, 2025" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left">
      <h4 className="font-bold text-gray-800 mb-6">Archive of Complied Documents</h4>
      <div className="space-y-3">
        {compliedDocs.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">{doc.title}</p>
                <p className="text-xs text-gray-500 font-medium">Approved by {doc.approvedBy} on {doc.date}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border border-emerald-200 text-emerald-600 text-xs font-bold rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complied;