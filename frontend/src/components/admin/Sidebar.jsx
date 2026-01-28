import { NavLink } from "react-router-dom";
import logo from "../../assets/jmcfi-logo.png";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-[#6A003A] to-[#4B0028] text-white flex flex-col z-50">
      
      {/* LOGO */}
      <div className="flex items-center justify-center py-6 border-b border-white/20 flex-shrink-0">
        <img
          src={logo}
          alt="Jose Maria College"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* SCROLLABLE MENU */}
      <nav className="flex-1 px-4 py-6 space-y-6 text-sm overflow-y-auto">
        
        <div>
          <p className="text-xs text-white/60 mb-2">PAGES</p>
          <NavItem to="/admin/dashboard" label="Dashboard" />
          <NavItem to="/admin/review-submissions" label="Review Submissions" />
          <NavItem to="/admin/users" label="User Management" />
        </div>

        <div>
          <p className="text-xs text-white/60 mb-2">ACCREDITATION LEVELS</p>
          <NavItem to="/admin/accreditation/level/1" label="Level 1" />
          <NavItem to="/admin/accreditation/level/2" label="Level 2" />
          <NavItem to="/admin/accreditation/level/3" label="Level 3" />
        </div>

        <div>
          <p className="text-xs text-white/60 mb-2">COMPILED DOCUMENTS</p>
          <NavItem to="/admin/external-review" label="External Review" />
          <NavItem to="/admin/external-revisions" label="External Revisions" />
        </div>
      </nav>

      {/* SETTINGS (ALWAYS VISIBLE) */}
      <div className="px-4 py-4 border-t border-white/20 flex-shrink-0">
        <NavItem to="/admin/settings" label="Settings" />
      </div>
    </aside>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md transition ${
        isActive
          ? "bg-white/20 font-semibold"
          : "hover:bg-white/10"
      }`
    }
  >
    {label}
  </NavLink>
);

export default Sidebar;
