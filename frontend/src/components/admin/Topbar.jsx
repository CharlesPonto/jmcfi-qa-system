const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 transition-all">
      
      {/* LEFT SIDE: TOGGLE & SEARCH */}
      <div className="flex items-center gap-4 flex-1">
        {/* HAMBURGER BUTTON */}
        <button 
          onClick={toggleSidebar}
          className="p-2.5 hover:bg-gray-100 rounded-2xl lg:hidden text-gray-500 transition-all active:scale-90"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        {/* Search Bar - Subtle & Neutral */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 focus-within:border-gray-200 focus-within:bg-white px-4 py-2.5 rounded-2xl transition-all group w-64 lg:w-80">
          <svg className="w-4 h-4 text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-xs ml-3 w-full font-semibold text-gray-600 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* RIGHT SIDE: ACTIONS & PROFILE */}
      <div className="flex items-center gap-3 md:gap-6">
        
        {/* Notifications */}
        <button className="relative p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-2xl transition-all group">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2.5 right-2.5 bg-rose-500 w-2 h-2 rounded-full border-2 border-white" />
        </button>

        {/* Profile Chip */}
        <div className="flex items-center gap-3 pl-3 md:pl-6 border-l border-gray-100 ml-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 leading-none">
              Rosener
            </p>
            <p className="text-[10px] text-[#6A003A] font-bold uppercase tracking-tighter mt-1">
              System Admin
            </p>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm transition-transform active:scale-95">
              <img 
                src="https://ui-avatars.com/api/?name=Rosener&background=6A003A&color=fff&bold=true" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;