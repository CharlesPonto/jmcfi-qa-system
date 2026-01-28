const getProgressColor = (value) => {
  if (value >= 75) return "bg-green-600";
  if (value >= 40) return "bg-yellow-500";
  return "bg-red-600";
};

const getStatusLabel = (value) => {
  if (value >= 75) return "On Track";
  if (value >= 40) return "Needs Attention";
  return "Critical";
};

const ProgressBar = ({ label, value }) => {
  return (
    <div className="mb-6">
      
      {/* LABEL + PERCENT */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {label}
        </span>
        <span className="text-sm font-semibold text-gray-700">
          {value}%
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(
            value
          )}`}
          style={{ width: `${value}%` }}
        />
      </div>

      {/* STATUS LABEL */}
      <span className="text-xs text-gray-500 mt-1 inline-block">
        Status:{" "}
        <span className="font-medium">
          {getStatusLabel(value)}
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
