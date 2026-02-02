import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmissionTable = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("All");

  const submissions = [
    {
      id: 1,
      department: "CITE",
      program: "BSIT",
      level: "Level 1",
      status: "Pending",
      date: "Nov 12, 2025",
    },
    {
      id: 2,
      department: "COBE",
      program: "BSA",
      level: "Level 1",
      status: "Complied",
      date: "Nov 10, 2025",
    },
    {
      id: 3,
      department: "CITE",
      program: "BSCS",
      level: "Level 2",
      status: "Non-Compliant",
      date: "Nov 8, 2025",
    },
    {
      id: 4,
      department: "CET",
      program: "BSCE",
      level: "Level 3",
      status: "Pending",
      date: "Nov 7, 2025",
    },
    {
      id: 5,
      department: "CITE",
      program: "BSIT",
      level: "Level 2",
      status: "Complied",
      date: "Nov 5, 2025",
    },
    {
      id: 6,
      department: "COED",
      program: "BEED",
      level: "Level 1",
      status: "Non-Compliant",
      date: "Nov 4, 2025",
    },
    {
      id: 7,
      department: "COC",
      program: "ABComm",
      level: "Level 1",
      status: "Pending",
      date: "Nov 2, 2025",
    },
    {
      id: 8,
      department: "COBE",
      program: "BSBA",
      level: "Level 2",
      status: "Complied",
      date: "Nov 1, 2025",
    },
    {
      id: 9,
      department: "CET",
      program: "BSEE",
      level: "Level 3",
      status: "Pending",
      date: "Oct 30, 2025",
    },
    {
      id: 10,
      department: "CITE",
      program: "BSCS",
      level: "Level 1",
      status: "Complied",
      date: "Oct 28, 2025",
    },
  ];

  const getStatusBadge = (status) => {
    const base =
      "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter ";
    if (status === "Complied") return base + "bg-emerald-100 text-emerald-700";
    if (status === "Pending") return base + "bg-amber-100 text-amber-700";
    return base + "bg-rose-100 text-rose-700";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
        <h3 className="text-lg font-bold text-gray-800">Submissions</h3>
        <select
          className="bg-gray-50 border-none rounded-lg text-xs font-bold px-3 py-2 outline-none focus:ring-2 focus:ring-[#6A003A]/20"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Complied">Complied</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50">
            <tr>
              <th classqName="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase">
                Program Info
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-center">
                Level
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-center">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {submissions.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-800">{item.program}</p>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.department} • {item.date}
                  </p>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  {item.level}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={getStatusBadge(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => navigate(`/admin/submissions/${item.id}`)}
                    className="text-xs font-bold text-[#6A003A] hover:underline uppercase"
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
