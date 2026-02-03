import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import UserModal from "../../components/admin/UserModal";

const AdminUserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // YOUR DATA RETURNED & CLEANED
const [users, setUsers] = useState([
  {
    id: 1,
    name: "Janette Claro",
    email: "janette.claro@jmc.edu.ph",
    role: "Dean",
    department: "CITE",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Jerwin Carreon",
    email: "jerwin.carreon@jmcfi.edu.ph",
    role: "Dean",
    department: "COBE",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Bianca Leona MARIE Puno",
    email: "bianca.puno@jmc.edu.ph",
    role: "Student",
    department: "CITE",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    name: "Charles Darwin Ponto",
    email: "charles.ponto@jmc.edu.ph",
    role: "User",
    department: "CITE",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    id: 7,
    name: "Dr. Helena Soriano",
    email: "helena.soriano@jmc.edu.ph",
    role: "Dean",
    department: "CAS",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 8,
    name: "Engr. Patrick Dizon",
    email: "patrick.dizon@jmcfi.edu.ph",
    role: "Dean",
    department: "CCS",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 9,
    name: "Leo Manlangit",
    email: "leo.manlangit@jmcfi.edu.ph",
    role: "Common User",
    department: "Finance",
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to disable this user?")) {
      setUsers(users.map((u) => (u.id === id ? { ...u, status: "Inactive" } : u)));
    }
  };

  const getRoleStyle = (role) => {
    const roles = {
      Dean: "bg-purple-50 text-purple-700 border-purple-100",
      "Program Head": "bg-blue-50 text-blue-700 border-blue-100",
      "Common User": "bg-slate-50 text-slate-600 border-slate-100",
    };
    return roles[role] || roles["Common User"];
  };

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-8 space-y-6">
          {/* HEADER SECTION */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight  ">
                User Management
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-medium tracking-tight">
                Configure access levels for University staff
              </p>
            </div>
            <button
              onClick={() => {
                setEditingUser(null);
                setIsModalOpen(true);
              }}
              className="text-sm font-semibold flex items-center justify-center gap-2 px-5 py-2.5 bg-[#6A003A] text-white rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-[#6A003A]/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              Add New User
            </button>
          </div>

          {/* TABLE CONTAINER */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">User Profile</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Role</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Department</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center shadow-sm">
                            {user.avatar ? (
                              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-[#6A003A] font-black text-xs uppercase">
                                {user.name.split(" ").map((n) => n[0]).join("")}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{user.email}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${getRoleStyle(user.role)}`}>
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-600">{user.department}</p>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : "bg-rose-50 text-rose-600 border-rose-100"
                        }`}>
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() => { setEditingUser(user); setIsModalOpen(true); }}
                            className="text-sm font-semibold p-2 text-gray-400 hover:text-[#6A003A] transition-colors rounded-lg hover:bg-slate-50"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-sm font-semibold p-2 text-gray-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingUser={editingUser}
        onSave={(newUser) => {
          if (editingUser) {
            setUsers(users.map((u) => (u.id === editingUser.id ? newUser : u)));
          } else {
            setUsers([...users, { ...newUser, id: Date.now() }]);
          }
        }}
      />
    </div>
  );
};

export default AdminUserManagement;