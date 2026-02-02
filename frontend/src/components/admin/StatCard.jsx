import { useNavigate } from "react-router-dom";

const StatCard = ({ title, value, type, viewPath }) => {
  const navigate = useNavigate();

  const config = {
    submitted: {
      border: "border-purple-600",
      text: "text-purple-700",
      bg: "bg-purple-50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    pending: {
      border: "border-amber-500",
      text: "text-amber-700",
      bg: "bg-amber-50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    complied: {
      border: "border-emerald-600",
      text: "text-emerald-700",
      bg: "bg-emerald-50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    noncompliant: {
      border: "border-rose-600",
      text: "text-rose-700",
      bg: "bg-rose-50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const theme = config[type] || config.submitted;

  return (
    <div className={`relative overflow-hidden bg-white rounded-2xl shadow-sm p-4 border-l-4 ${theme.border} hover:shadow-md transition-all duration-300 group`}>
      {/* Ghost Icon Background (Smaller) */}
      <div className={`absolute -right-1 -bottom-1 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity scale-125 ${theme.text}`}>
        {theme.icon}
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          {/* Description style for title */}
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {title}
          </p>
          <div className={`p-1.5 rounded-lg ${theme.bg} ${theme.text}`}>
            {theme.icon}
          </div>
        </div>
        
        <h2 className={`text-2xl font-bold mt-1 tracking-tight ${theme.text}`}>
          {value}
        </h2>

        <button
          onClick={() => viewPath && navigate(viewPath)}
          className="mt-4 flex items-center gap-1.5 w-fit group/btn"
        >
          {/* Primary Action style for the button */}
          <span className="text-sm font-semibold text-gray-500 group-hover/btn:text-[#6A003A] transition-colors">
            View Details
          </span>
          <svg 
            className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#6A003A] group-hover/btn:translate-x-0.5 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StatCard;