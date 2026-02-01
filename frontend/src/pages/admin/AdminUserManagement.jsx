import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminUserManagement = () => {
  /* =====================
     MOCK USERS
     ===================== */
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Janette Claro",
      email: "janette.claro@jmc.edu.ph",
      role: "Dean",
      department: "CITE",
      status: "Active",
    },
    {
      id: 2,
      name: "Jerwin Carreon",
      email: "jerwin.carreon@jmcfi.edu.ph",
      role: "Dean",
      department: "COBE",
      status: "Active",
    },
  ]);

  /* =====================
     MODAL STATE
     ===================== */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  /* =====================
     FORM STATE
     ===================== */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Dean",
    department: "",
    status: "Active",
  });

  /* =====================
     HANDLERS
     ===================== */
  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      role: "Dean",
      department: "",
      status: "Active",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData(user);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser.id ? { ...formData } : u
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        { ...formData, id: Date.now() },
      ]);
    }

    closeModal();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#6A003A]">
                User Management
              </h2>
              <p className="text-sm text-gray-500">
                Manage system users and roles
              </p>
            </div>

            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-[#6A003A] text-white rounded-lg hover:bg-[#8A1456] transition"
            >
              Add User
            </button>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white rounded-2xl shadow">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-700">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {user.email}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {user.department}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right space-x-4">
                        <button
                          onClick={() => openEditModal(user)}
                          className="text-[#6A003A] hover:underline"
                        >
                          Edit
                        </button>
                        <button className="text-red-600 hover:underline">
                          Disable
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {editingUser ? "Edit User" : "Add User"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-sm"
              >
                <option>Dean</option>
                <option>Program Head</option>
                <option>Common User</option>
              </select>

              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-sm"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm text-gray-600 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6A003A] text-white rounded-lg hover:bg-[#8A1456]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;
