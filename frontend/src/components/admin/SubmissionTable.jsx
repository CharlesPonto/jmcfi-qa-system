const SubmissionTable = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Recent Submissions
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Department</th>
            <th className="pb-2">Program</th>
            <th className="pb-2">Level</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">CITE</td>
            <td>BSIT</td>
            <td>Level 1</td>
            <td>
              <span className="text-yellow-600 font-medium">Pending</span>
            </td>
            <td>
              <button className="text-purple-700 hover:underline">
                Review
              </button>
            </td>
          </tr>

          <tr>
            <td className="py-2">COBE</td>
            <td>BSA</td>
            <td>Level 1</td>
            <td>
              <span className="text-green-600 font-medium">Complied</span>
            </td>
            <td>
              <button className="text-purple-700 hover:underline">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
