import { useNavigate } from "react-router-dom";

const StatCard = ({ title, value, type, viewPath }) => {
  const styles = {
    submitted: {
      border: "border-[#6A003A]",
      text: "text-[#6A003A]",
    },
    pending: {
      border: "border-yellow-500",
      text: "text-yellow-600",
    },
    complied: {
      border: "border-green-600",
      text: "text-green-600",
    },
    noncompliant: {
      border: "border-red-600",
      text: "text-red-600",
    },
  };

  const navigate = useNavigate();
  const style = styles[type];

  return (
    <div
      className={`bg-white rounded-xl shadow p-6 border-l-4 ${style.border} flex flex-col justify-between`}
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className={`text-2xl font-bold mt-2 ${style.text}`}>
          {value}
        </h2>
      </div>

      {/* VIEW BUTTON */}
      <button
        onClick={() => viewPath && navigate(viewPath)}
        className="mt-4 text-sm font-medium text-[#6A003A] hover:underline self-start"
      >
        View
      </button>
    </div>
  );
};

export default StatCard;
