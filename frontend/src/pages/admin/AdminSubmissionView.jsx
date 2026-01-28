import { useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminSubmissionView = () => {
  const { id } = useParams(); // hardcoded id for now

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* FIXED SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT (OFFSET FOR FIXED SIDEBAR) */}
      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* PAGE TITLE */}
          <h2 className="text-xl font-semibold text-[#6A003A]">
            View Submission
          </h2>

          {/* SUBMISSION SUMMARY */}
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#6A003A]">
            <h3 className="font-semibold mb-4 text-gray-700">
              Submission Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Detail label="Submission ID" value={id} />
              <Detail label="Program" value="BS in Information Technology" />
              <Detail label="Department" value="CITE" />
              <Detail label="Accreditation Level" value="Level 1" />
              <Detail label="Date Submitted" value="November 12, 2025" />
              <Detail label="Submitted By" value="Program Head" />
              <Detail label="Current Status" value="Pending Review" />
            </div>
          </div>

          {/* UPLOADED DOCUMENTS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-700">
              Uploaded Documents
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">File Name</th>
                    <th className="pb-2">Type</th>
                    <th className="pb-2">Uploaded On</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <DocumentRow
                    name="Self-Assessment Report.pdf"
                    type="SAR"
                    date="Nov 12, 2025"
                  />
                  <DocumentRow
                    name="Facilities Evidence.zip"
                    type="Evidence"
                    date="Nov 12, 2025"
                  />
                  <DocumentRow
                    name="Faculty Credentials.pdf"
                    type="Evidence"
                    date="Nov 11, 2025"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* ACCREDITATION CHECKLIST (VIEW ONLY) */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-700">
              Accreditation Checklist (View Only)
            </h3>

            <ul className="space-y-3 text-sm">
              <ChecklistItem
                text="Vision, Mission, and Goals are clearly stated"
                status="Complied"
              />
              <ChecklistItem
                text="Adequate laboratory facilities are available"
                status="Pending"
              />
              <ChecklistItem
                text="Faculty credentials are complete"
                status="Pending"
              />
              <ChecklistItem
                text="Curriculum aligns with CHED standards"
                status="Pending"
              />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ===== SMALL COMPONENTS ===== */

const Detail = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium text-gray-700">{value}</p>
  </div>
);

const DocumentRow = ({ name, type, date }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="py-2">{name}</td>
    <td>{type}</td>
    <td>{date}</td>
    <td>
      <button className="text-[#6A003A] hover:underline">
        View
      </button>
    </td>
  </tr>
);

const ChecklistItem = ({ text, status }) => {
  const color =
    status === "Complied"
      ? "text-green-600"
      : status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <li className="flex justify-between items-center">
      <span>{text}</span>
      <span className={`font-medium ${color}`}>
        {status}
      </span>
    </li>
  );
};

export default AdminSubmissionView;
