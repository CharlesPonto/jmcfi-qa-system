import { NavLink } from "react-router-dom";
import logo from "../../assets/jmcfi-logo.png";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#6A003A] text-white flex flex-col z-50 shadow-2xl">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* LOGO SECTION (Simplified) */}
      <div className="relative flex flex-col items-center justify-center py-10 flex-shrink-0">
        <img 
          src={logo} 
          alt="JMCFI" 
          className="w-24 h-24 object-contain drop-shadow-md" 
        />
      </div>

      {/* SCROLLABLE MENU */}
      <nav className="relative flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar pb-10">
        
        {/* SECTION: MAIN */}
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
            Main Menu
          </p>
          <NavItem to="/admin/dashboard" label="Dashboard" icon="dashboard" />
          <NavItem to="/admin/review-submissions" label="Review Submissions" icon="review" />
          <NavItem to="/admin/users" label="User Management" icon="users" />
        </div>

        {/* SECTION: ACCREDITATION */}
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
            Accreditation
          </p>
          <NavItem to="/admin/accreditation/level/1" label="Level 1" icon="level" />
          <NavItem to="/admin/accreditation/level/2" label="Level 2" icon="level" />
          <NavItem to="/admin/accreditation/level/3" label="Level 3" icon="level" />
          <NavItem to="/admin/accreditation/level/4" label="Level 4" icon="level" />
        </div>

        {/* SECTION: REPORTS */}
        <div className="space-y-1">
          <p className="px-4 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
            Reports
          </p>
          <NavItem to="/admin/external-review" label="External Review" icon="external" />
        </div>
      </nav>

      {/* BOTTOM SECTION */}
      <div className="relative px-4 py-6 mt-auto border-t border-white/10 bg-black/10">
        <NavItem to="/admin/settings" label="Settings" icon="settings" />
      </div>
    </aside>
  );
};

/* NAV ITEM COMPONENT */
const NavItem = ({ to, label, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 overflow-hidden ${
          isActive
            ? "bg-white text-[#6A003A] shadow-lg shadow-black/20"
            : "text-white/70 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3 relative z-10">
            <Icon type={icon} isActive={isActive} />
            <span className={`text-xs font-bold tracking-wide ${isActive ? "opacity-100" : "opacity-90"}`}>
              {label}
            </span>
          </div>
          {isActive && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#6A003A] rounded-l-full" />
          )}
        </>
      )}
    </NavLink>
  );
};

/* MINI ICON LIBRARY */
const Icon = ({ type, isActive }) => {
  const iconBase = "w-5 h-5 transition-colors";
  const color = isActive ? "text-[#6A003A]" : "text-white/40 group-hover:text-white";

  switch (type) {
    case "dashboard":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case "review":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "users":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "level":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "external":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      );
    case "settings":
      return (
        <svg className={`${iconBase} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;