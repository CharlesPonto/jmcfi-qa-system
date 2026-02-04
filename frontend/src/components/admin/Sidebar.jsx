import { NavLink } from "react-router-dom";
import logo from "../../assets/jmcfi-logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside className={`fixed top-0 left-0 w-64 h-screen bg-[#6A003A] text-white flex flex-col z-[70] shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        
        {/* LOGO SECTION - VERTICALLY CENTERED */}
        <div className="relative px-7 pt-12 pb-10 flex-shrink-0">
          <div className="flex items-center gap-3 h-12">
            <div className="w-12 h-12 bg-white rounded-2xl p-2 shadow-lg flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="flex flex-col justify-center h-full">
              <span className="text-sm font-semibold tracking-tight leading-none uppercase text-white">
                Quality Assurance
              </span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mt-1.5">
                Management System
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="relative flex-1 px-4 space-y-8 overflow-y-auto no-scrollbar pt-2 font-sans">
          
          <div className="space-y-1">
            <p className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.25em] mb-3">Core Menu</p>
            <NavItem to="/admin/dashboard" label="Dashboard" icon="dashboard" onClick={toggleSidebar} />
            <NavItem to="/admin/review-submissions" label="Review Documents" icon="review" onClick={toggleSidebar} />
            <NavItem to="/admin/submission-timeline" label="Submission Timeline" icon="timeline" onClick={toggleSidebar} />
            <NavItem to="/admin/users" label="User Management" icon="users" onClick={toggleSidebar} />
          </div>

          <div className="space-y-1">
            <p className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.25em] mb-3">Accreditation</p>
            {[1, 2, 3, 4].map((num) => (
              <NavItem key={num} to={`/admin/accreditation/level/${num}`} label={`Level ${num} `} icon="level" onClick={toggleSidebar} />
            ))}
          </div>

          <div className="space-y-1">
            <p className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.25em] mb-3">Monitoring</p>
            <NavItem to="/admin/external-review" label="External Audit" icon="external" onClick={toggleSidebar} />
          </div>
        </nav>

        <div className="p-4 mt-auto border-t border-white/5 bg-black/10">
          <NavItem to="/admin/settings" label="System Settings" icon="settings" onClick={toggleSidebar} />
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ to, label, icon, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={() => window.innerWidth < 1024 && onClick()}
      className={({ isActive }) =>
        `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive ? "bg-white text-[#6A003A] shadow-lg" : "text-white/50 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon type={icon} isActive={isActive} />
          <span className={`text-sm font-semibold tracking-tight ${isActive ? "text-[#6A003A]" : "group-hover:text-white"}`}>
            {label}
          </span>
          {isActive && <div className="ml-auto w-1.5 h-1.5 bg-[#6A003A] rounded-full" />}
        </>
      )}
    </NavLink>
  );
};

const Icon = ({ type, isActive }) => {
  const color = isActive ? "text-[#6A003A]" : "text-white/20 group-hover:text-white/80";
  const paths = {
    dashboard: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
    review: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    level: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    external: "M9 17v-2m3 2v-4m3 2v-6m-8-4h8a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z",
    timeline: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    settings: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  };

  return (
    <svg className={`w-5 h-5 flex-shrink-0 transition-colors ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={paths[type]} />
    </svg>
  );
};

export default Sidebar;