import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmissionTable = () => {
  const navigate = useNavigate();

  // HARD-CODED DATA (PROTOTYPE)
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
  ];

  // FILTER STATES
  const [statusFilter, setStatusFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredSubmissions = submissions.filter((item) => {
    const statusMatch =
      statusFilter === "All" || item.status === statusFilter;
    const levelMatch =
      levelFilter === "All" || item.level === levelFilter;
    const searchMatch =
      item.program.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase());

    return statusMatch && levelMatch && searchMatch;
  });

  const getStatusColor = (status) => {
    if (status === "Complied") return "text-green-600";
    if (status === "Pending") return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Submissions
        </h3>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search program or department"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6A003A]"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6A003A]"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Complied">Complied</option>
            <option value="Non-Compliant">Non-Compliant</option>
          </select>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6A003A]"
          >
            <option value="All">All Levels</option>
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2">Department</th>
              <th className="pb-2">Program</th>
              <th className="pb-2">Level</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.length > 0 ? (
              filteredSubmissions.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{item.department}</td>
                  <td>{item.program}</td>
                  <td>{item.level}</td>
                  <td>{item.date}</td>
                  <td className={`font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(`/admin/submissions/${item.id}`)
                      }
                      className="text-[#6A003A] hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500"
                >
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;
