const ProgressBar = ({ label, value }) => {
  const getTheme = (v) => {
    if (v >= 75) return { bar: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50", label: "On Track" };
    if (v >= 40) return { bar: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50", label: "Warning" };
    return { bar: "bg-rose-500", text: "text-rose-700", bg: "bg-rose-50", label: "Critical" };
  };

  const theme = getTheme(value);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
          <div className={`mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase inline-block ${theme.bg} ${theme.text}`}>
            {theme.label}
          </div>
        </div>
        <span className="text-sm font-bold text-gray-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-700 ${theme.bar}`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
};

export default ProgressBar;