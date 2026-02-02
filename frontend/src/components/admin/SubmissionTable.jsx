import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmissionTable = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("All");

  const submissions = [
    { id: 1, department: "CITE", program: "BSIT", level: "Level 1", status: "Pending", date: "Nov 12, 2025" },
    { id: 2, department: "COBE", program: "BSA", level: "Level 1", status: "Complied", date: "Nov 10, 2025" },
    { id: 3, department: "CITE", program: "BSCS", level: "Level 2", status: "Non-Compliant", date: "Nov 8, 2025" },
  ];

  const getStatusBadge = (status) => {
    // Matching the font-bold and uppercase style from ActivityLog's date
    const base = "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ";
    if (status === "Complied") return base + "bg-emerald-100 text-emerald-700";
    if (status === "Pending") return base + "bg-amber-100 text-amber-700";
    return base + "bg-rose-100 text-rose-700";
  };

  const filteredSubmissions = submissions.filter(s => 
    statusFilter === "All" || s.status === statusFilter
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left font-sans">
      {/* HEADER: Matches ActivityLog "Recent Activity" style */}
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">Recent Submissions</h3>
        <select
          className="bg-gray-50 border-none rounded-lg text-xs font-semibold px-3 py-2 outline-none focus:ring-2 focus:ring-[#6A003A]/10 transition-all text-gray-600"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Complied">Complied</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white">
              {/* HEADERS: Using the uppercase font-bold 10px from your log */}
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Program Info</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Level</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredSubmissions.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {/* PROGRAM ICON: Styled to fit the lighter aesthetic */}
                    <div className="w-10 h-10 flex-shrink-0 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:border-[#6A003A] transition-colors">
                      <span className="text-xs font-bold text-[#6A003A]">
                        {item.program}
                      </span>
                    </div>
                    
                    <div className="flex flex-col">
                      {/* ACTION TEXT: Matches "item.action" font-semibold text-sm */}
                      <span className="text-sm font-semibold text-gray-800">
                        {item.department} Department
                      </span>
                      {/* USER/DATE TEXT: Matches item.user text-xs text-gray-500 */}
                      <span className="text-xs text-gray-500 mt-0.5">
                        Submitted: <span className="text-[10px] font-bold text-gray-400 uppercase">{item.date}</span>
                      </span>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-semibold text-gray-700">{item.level}</span>
                </td>
                
                <td className="px-6 py-4 text-center">
                  <span className={getStatusBadge(item.status)}>
                    {item.status}
                  </span>
                </td>
                
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => navigate(`/admin/submissions/${item.id}`)}
                    className="text-xs font-bold text-[#6A003A] hover:underline uppercase tracking-tight"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;