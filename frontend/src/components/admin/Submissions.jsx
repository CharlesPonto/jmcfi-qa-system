const Submissions = () => {
  const submissions = [
    { id: 1, title: "Self-Assessment Report.pdf", program: "BSIT", submittedBy: "Dean - CITE", date: "Nov 12, 2025", status: "Pending" },
    { id: 2, title: "Compliance Report.docx", program: "BSIT", submittedBy: "Dean - CITE", date: "Nov 10, 2025", status: "Needs Revision" },
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatItem label="Total" value="12" color="bg-slate-100 text-slate-600" />
        <StatItem label="Pending" value="5" color="bg-amber-100 text-amber-600" />
        <StatItem label="Complied" value="4" color="bg-emerald-100 text-emerald-600" />
        <StatItem label="Rejected" value="3" color="bg-rose-100 text-rose-600" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase">Document</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-center">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {submissions.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.program} • {item.date}</p>
                </td>
                <td className="px-6 py-4 text-center">
                   <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-50 text-amber-600">{item.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#6A003A] font-bold text-xs uppercase hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, color }) => (
  <div className={`${color} p-4 rounded-2xl border border-white/50 shadow-sm flex flex-col items-center`}>
    <span className="text-2xl font-black">{value}</span>
    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{label}</span>
  </div>
);

export default Submissions;