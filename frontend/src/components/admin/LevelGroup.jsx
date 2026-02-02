import { useState } from "react";
import StatusBadge from "./StatusBadge";

const LevelGroup = ({ level, items, onReview }) => {
  const [open, setOpen] = useState(level === "Level 1");

  const getBorderColor = (status) => {
    const borders = {
      Pending: "border-amber-400",
      Complied: "border-emerald-500",
      "Non-Complied": "border-rose-500",
      "Needs Revision": "border-orange-500"
    };
    return borders[status] || "border-gray-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all mb-4">
      {/* ACCORDION HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center px-6 py-5 transition-colors ${open ? 'bg-gray-50/50' : 'hover:bg-gray-50'}`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${items.length > 0 ? 'bg-[#6A003A]' : 'bg-gray-300'}`} />
          <span className="font-bold text-gray-700 tracking-tight">{level}</span>
          <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-400 uppercase">
            {items.length} Items
          </span>
        </div>
        <span className={`transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>

      {/* ACCORDION CONTENT */}
      {open && (
        <div className="px-6 pb-6 pt-2 divide-y divide-gray-50">
          {items.length === 0 ? (
            <div className="py-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 mt-2">
              <p className="text-sm text-gray-400 font-medium italic">No submissions found in this category.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col md:flex-row md:items-center justify-between py-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Status Indicator Bar */}
                  <div className={`w-1 h-10 rounded-full border-l-4 ${getBorderColor(item.status)}`} />
                  <div>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-[#6A003A] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest mt-0.5">
                      {item.program}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0 ml-5 md:ml-0">
                  <StatusBadge status={item.status} />
                  <button
                    onClick={() => onReview(item.id)}
                    className="px-4 py-1.5 bg-white border border-gray-200 text-[11px] font-bold text-gray-600 uppercase tracking-wider rounded-lg hover:bg-[#6A003A] hover:text-white hover:border-[#6A003A] transition-all shadow-sm"
                  >
                    Review
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default LevelGroup;