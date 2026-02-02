import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import UserModal from "../../components/admin/UserModal";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Janette Claro", email: "janette.claro@jmc.edu.ph", role: "Dean", department: "CITE", status: "Active" },
    { id: 2, name: "Jerwin Carreon", email: "jerwin.carreon@jmcfi.edu.ph", role: "Dean", department: "COBE", status: "Active" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to disable this user?")) {
      setUsers(users.map(u => u.id === id ? {...u, status: 'Inactive'} : u));
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
    <div className="bg-slate-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
              <p className="text-sm text-gray-500 font-medium">Configure access levels for University staff</p>
            </div>
            <button
              onClick={() => { setEditingUser(null); setIsModalOpen(true); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#6A003A] text-white text-sm font-bold rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
              Add New User
            </button>
          </div>

          {/* TABLE CONTAINER */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">User Profile</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Department</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-magenta-50 border border-magenta-100 flex items-center justify-center text-[#6A003A] font-bold text-xs">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter border ${getRoleStyle(user.role)}`}>
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-600 tracking-tight">{user.department}</p>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${user.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-100  transition-opacity">
                          <button
                            onClick={() => { setEditingUser(user); setIsModalOpen(true); }}
                            className="p-2 text-gray-400 hover:text-[#6A003A] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="p-2 text-gray-400 hover:text-rose-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"/></svg>
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
          if(editingUser) {
            setUsers(users.map(u => u.id === editingUser.id ? newUser : u));
          } else {
            setUsers([...users, { ...newUser, id: Date.now() }]);
          }
        }}
      />
    </div>
  );
};

export default AdminUserManagement;