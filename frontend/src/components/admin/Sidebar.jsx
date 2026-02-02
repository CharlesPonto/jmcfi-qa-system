import { NavLink } from "react-router-dom";
import logo from "../../assets/jmcfi-logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* MOBILE OVERLAY - Only visible when sidebar is toggled on small screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`fixed top-0 left-0 w-64 h-screen bg-[#6A003A] text-white flex flex-col z-[70] shadow-2xl border-r border-white/5 font-sans antialiased transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

        {/* LOGO SECTION */}
        <div className="relative flex flex-col items-center justify-center py-10 lg:py-12 flex-shrink-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={logo} 
              alt="JMCFI" 
              className="relative w-16 lg:w-20 h-16 lg:h-20 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <h1 className="mt-5 text-[10px] lg:text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">
            Jose Maria College
          </h1>
        </div>

        {/* SCROLLABLE MENU */}
        <nav className="relative flex-1 px-4 space-y-7 overflow-y-auto custom-scrollbar pb-10">
          
          {/* SECTION: MAIN */}
          <div className="space-y-1.5">
            <p className="px-4 text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-3">
              Navigation
            </p>
            <NavItem to="/admin/dashboard" label="Dashboard" icon="dashboard" onClick={toggleSidebar} />
            <NavItem to="/admin/review-submissions" label="Review Documents" icon="review" onClick={toggleSidebar} />
            <NavItem to="/admin/users" label="User Directory" icon="users" onClick={toggleSidebar} />
          </div>

          {/* SECTION: ACCREDITATION */}
          <div className="space-y-1.5">
            <p className="px-4 text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-3">
              Accreditation Levels
            </p>
            <div className="grid grid-cols-1 gap-1">
              {[1, 2, 3, 4].map((num) => (
                <NavItem key={num} to={`/admin/accreditation/level/${num}`} label={`Level ${num}`} icon="level" onClick={toggleSidebar} />
              ))}
            </div>
          </div>

          {/* SECTION: ANALYTICS */}
          <div className="space-y-1.5">
            <p className="px-4 text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-3">
              Reports & Analytics
            </p>
            <NavItem to="/admin/external-review" label="External Audit" icon="external" onClick={toggleSidebar} />
          </div>
        </nav>

        {/* BOTTOM SECTION */}
        <div className="relative px-4 py-6 mt-auto border-t border-white/10 bg-black/10 backdrop-blur-md">
          <NavItem to="/admin/settings" label="System Settings" icon="settings" onClick={toggleSidebar} />
        </div>
      </aside>
    </>
  );
};

/* NAV ITEM COMPONENT */
const NavItem = ({ to, label, icon, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={() => {
        if (window.innerWidth < 1024) onClick(); // Close sidebar on mobile after click
      }}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 active:scale-[0.97] ${
          isActive
            ? "bg-white text-[#6A003A] shadow-lg shadow-black/20"
            : "text-white/60 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3 relative z-10">
            <Icon type={icon} isActive={isActive} />
            <span className={`text-xs font-semibold tracking-wide transition-all duration-300 ${
              isActive ? "text-[#6A003A] translate-x-1" : "group-hover:text-white"
            }`}>
              {label}
            </span>
          </div>
          {isActive && (
            <div className="absolute right-4 w-1.5 h-1.5 bg-[#6A003A] rounded-full animate-pulse" />
          )}
        </>
      )}
    </NavLink>
  );
};

const Icon = ({ type, isActive }) => {
  const iconBase = "w-5 h-5 transition-all duration-300";
  const color = isActive ? "text-[#6A003A]" : "text-white/30 group-hover:text-white group-hover:rotate-3";

  switch (type) {
    case "dashboard":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      );
    case "review":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "users":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "level":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "external":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 17v-2m3 2v-4m3 2v-6m-8-4h8a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      );
    case "settings":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;