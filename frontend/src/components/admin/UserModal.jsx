import { useState, useEffect } from "react";

const UserModal = ({ isOpen, onClose, editingUser, onSave }) => {
  const [formData, setFormData] = useState({
    name: "", email: "", role: "Dean", department: "", status: "Active",
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
    else setFormData({ name: "", email: "", role: "Dean", department: "", status: "Active" });
  }, [editingUser, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-[#6A003A] p-6 text-white">
          <h3 className="text-xl font-bold">{editingUser ? "Edit University User" : "Register New User"}</h3>
          <p className="text-magenta-200 text-xs mt-1 font-medium opacity-80 uppercase tracking-widest">User Information & Access Level</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSave(formData); onClose(); }} className="p-8 space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Full Name</label>
            <input
              type="text" required placeholder="e.g. John Doe"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6A003A]/20"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email Address</label>
            <input
              type="email" required placeholder="john@jmc.edu.ph"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6A003A]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Role</label>
              <select
                value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6A003A]/20"
              >
                <option>Dean</option>
                <option>Program Head</option>
                <option>Common User</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Status</label>
              <select
                value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6A003A]/20"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="space-y-1 pb-4">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Department</label>
            <input
              type="text" placeholder="e.g. CITE"
              value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6A003A]/20"
            />
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-widest">
              Cancel
            </button>
            <button type="submit" className="flex-1 px-4 py-3 bg-[#6A003A] text-white text-sm font-bold rounded-xl hover:bg-[#8A1456] transition-all shadow-lg shadow-magenta-100 uppercase tracking-widest">
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;