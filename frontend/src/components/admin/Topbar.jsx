const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* TITLE */}
      <h1 className="text-[#6A003A] font-semibold text-lg">
        Quality Assurance Management System
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <button className="relative">
          <span className="text-gray-600 text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            6
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            👤
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-700">Rosener</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
