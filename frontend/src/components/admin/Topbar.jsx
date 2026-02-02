const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
      
      {/* LEFT: MOBILE TOGGLE & TITLE */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* HAMBURGER BUTTON - Visible only on Mobile/Tablet */}
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-xl lg:hidden text-gray-600 transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="h-8 w-1 bg-[#6A003A] rounded-full hidden lg:block" />
        <h1 className="text-gray-900 font-bold text-[11px] md:text-sm tracking-widest uppercase truncate max-w-[180px] sm:max-w-none">
          Quality Assurance Management System
        </h1>
      </div>

      {/* RIGHT SIDE: ACTIONS & PROFILE */}
      <div className="flex items-center gap-2 md:gap-8">
        
        {/* Search Bar - Hidden on small screens */}
        <div className="hidden xl:flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl group focus-within:border-[#6A003A]/20 transition-all">
          <svg className="w-4 h-4 text-gray-400 group-focus-within:text-[#6A003A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search records..." 
            className="bg-transparent border-none outline-none text-xs ml-3 w-32 xl:w-48 font-medium text-gray-600 placeholder:text-gray-400"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-[#6A003A] hover:bg-[#6A003A]/5 rounded-xl transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 bg-[#6A003A] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
            6
          </span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 md:gap-3 group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 group-hover:text-[#6A003A] transition-colors">
              Rosener
            </p>
            <p className="text-xs text-gray-400 font-medium">
              System Admin
            </p>
          </div>
          
          <div className="relative">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 group-hover:border-[#6A003A]/30 transition-all">
              <img 
                src="https://ui-avatars.com/api/?name=Rosener&background=6A003A&color=fff" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Topbar;