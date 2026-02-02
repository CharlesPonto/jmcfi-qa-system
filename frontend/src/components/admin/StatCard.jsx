import { useNavigate } from "react-router-dom";

const StatCard = ({ title, value, type, viewPath }) => {
  const navigate = useNavigate();
  const styles = {
    submitted: "border-purple-600 text-purple-600 bg-purple-50",
    pending: "border-amber-500 text-amber-600 bg-amber-50",
    complied: "border-emerald-600 text-emerald-600 bg-emerald-50",
    noncompliant: "border-rose-600 text-rose-600 bg-rose-50",
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm p-6 border-l-4 ${styles[type].split(' ')[0]} hover:shadow-md transition-all`}>
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{title}</p>
      <h2 className={`text-3xl font-extrabold mt-2 ${styles[type].split(' ')[1]}`}>{value}</h2>
      <button
        onClick={() => viewPath && navigate(viewPath)}
        className="mt-4 text-xs font-bold text-gray-400 hover:text-[#6A003A] uppercase tracking-tighter transition-colors"
      >
        View Details →
      </button>
    </div>
  );
};

export default StatCard;