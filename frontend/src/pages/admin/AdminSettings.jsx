import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminSettings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans antialiased text-left">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />

        <main className="p-8 space-y-8">
          {/* HEADER */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">System Settings</h2>
            <p className="text-sm text-gray-500 font-medium">Manage your administrative profile and platform preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* SETTINGS NAVIGATION */}
            <div className="lg:col-span-3 space-y-2">
              {[
                { id: "profile", label: "Admin Profile", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { id: "security", label: "Security", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { id: "notifications", label: "Notifications", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                    activeSection === item.id
                      ? "bg-[#6A003A] text-white shadow-lg shadow-[#6A003A]/20"
                      : "bg-white text-gray-400 hover:text-gray-600 border border-gray-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                  {item.label}
                </button>
              ))}
            </div>

            {/* CONTENT AREA */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10">
                {activeSection === "profile" && <ProfileSettings />}
                {activeSection === "security" && <SecuritySettings />}
                {activeSection === "notifications" && <NotificationSettings />}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ProfileSettings = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
      <div className="w-24 h-24 rounded-[2rem] bg-slate-100 flex items-center justify-center text-[#6A003A] border-4 border-white shadow-md">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      </div>
      <div>
        <button className="text-sm font-bold text-[#6A003A] hover:underline">Change Avatar</button>
        <p className="text-xs text-gray-400 font-medium mt-1">JPG, GIF or PNG. Max size of 2MB</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
        <input type="text" className="w-full bg-slate-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm font-semibold text-gray-800 focus:border-[#6A003A]/20 outline-none transition-all" defaultValue="Admin User" />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
        <input type="email" className="w-full bg-slate-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm font-semibold text-gray-800 focus:border-[#6A003A]/20 outline-none transition-all" defaultValue="admin@university.edu" />
      </div>
    </div>

    <div className="pt-6">
      <button className="px-10 py-4 bg-[#6A003A] text-white text-xs font-bold rounded-2xl shadow-xl shadow-[#6A003A]/30 hover:bg-[#4a0028] transition-all uppercase tracking-widest">
        Save Changes
      </button>
    </div>
  </div>
);

const SecuritySettings = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="space-y-6">
      <h4 className="text-sm font-bold text-gray-800">Change Password</h4>
      <div className="space-y-4 max-w-md">
        <input type="password" placeholder="Current Password" className="w-full bg-slate-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none" />
        <input type="password" placeholder="New Password" className="w-full bg-slate-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none" />
      </div>
    </div>
    <div className="pt-6 border-t border-gray-100">
      <button className="px-10 py-4 bg-[#6A003A] text-white text-xs font-bold rounded-2xl transition-all uppercase tracking-widest">Update Password</button>
    </div>
  </div>
);

const NotificationSettings = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
    {[
      { title: "Email Notifications", desc: "Receive daily summaries of program submissions." },
      { title: "Task Reminders", desc: "Get alerted when a task due date is approaching." },
      { title: "System Updates", desc: "Stay informed about platform maintenance and new features." }
    ].map((item, i) => (
      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-gray-100">
        <div>
          <p className="text-sm font-bold text-gray-800">{item.title}</p>
          <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
        </div>
        <div className="w-12 h-6 bg-[#6A003A] rounded-full relative p-1 cursor-pointer">
          <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
        </div>
      </div>
    ))}
  </div>
);

export default AdminSettings;