const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Complied: "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Non-Complied": "bg-rose-50 text-rose-600 border-rose-100",
    "Needs Revision": "bg-orange-50 text-orange-600 border-orange-100",
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border ${styles[status] || "bg-gray-50 text-gray-500 border-gray-100"}`}>
      {status}
    </span>
  );
};

export default StatusBadge;