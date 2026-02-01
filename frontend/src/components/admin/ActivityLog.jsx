const ActivityLog = () => {
  const activities = [
    {
      id: 5,
      action: "Resubmission initiated",
      user: "Admin",
      date: "Dec 8, 2025",
    },
    {
      id: 4,
      action: "External reviewer requested revision",
      user: "External Accreditor",
      date: "Dec 7, 2025",
    },
    {
      id: 3,
      action: "Document marked as Complied",
      user: "QA Officer",
      date: "Nov 14, 2025",
    },
    {
      id: 2,
      action: "QA reviewed Facilities Compliance",
      user: "QA Officer",
      date: "Nov 13, 2025",
    },
    {
      id: 1,
      action: "Dean submitted Self-Assessment Report",
      user: "Dean - CITE",
      date: "Nov 12, 2025",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">
        Recent Log
      </h3>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={item.id}
            className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
          >
            {/* TIMELINE DOT */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#6A003A] mt-1" />
              {index !== activities.length - 1 && (
                <div className="w-px h-full bg-gray-300 mt-1" />
              )}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                {item.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {item.user}
              </p>
            </div>

            {/* DATE */}
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
