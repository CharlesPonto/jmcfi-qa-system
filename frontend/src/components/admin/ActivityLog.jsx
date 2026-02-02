const ActivityLog = () => {
  const activities = [
    { id: 5, action: "Resubmission initiated", user: "Admin", date: "Dec 8, 2025" },
    { id: 4, action: "External reviewer requested revision", user: "External Accreditor", date: "Dec 7, 2025" },
    { id: 3, action: "Document marked as Complied", user: "QA Officer", date: "Nov 14, 2025" },
    { id: 2, action: "QA reviewed Facilities Compliance", user: "QA Officer", date: "Nov 13, 2025" },
    { id: 1, action: "Dean submitted Self-Assessment Report", user: "Dean - CITE", date: "Nov 12, 2025" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h3>
      <div className="space-y-0">
        {activities.map((item, index) => (
          <div key={item.id} className="relative flex gap-4 pb-6 group">
            {index !== activities.length - 1 && (
              <span className="absolute left-[9px] top-7 w-[2px] h-full bg-gray-100" />
            )}
            <div className="relative z-10 w-5 h-5 rounded-full bg-white border-2 border-[#6A003A] flex items-center justify-center shrink-0 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6A003A]" />
            </div>
            <div className="flex-1 bg-gray-50 group-hover:bg-gray-100 rounded-xl p-3 transition-colors">
              <p className="text-sm font-semibold text-gray-800">{item.action}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500">{item.user}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;