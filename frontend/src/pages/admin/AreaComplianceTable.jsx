import React from "react";

const AreaComplianceTable = ({ area, data }) => {
  if (!area) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="p-5 border-b border-slate-100 bg-[#6A003A] flex justify-between items-center">
        <div>
          <h3 className="font-bold text-white text-lg">{area.title}: {area.name}</h3>
          <p className="text-slate-200 text-xs uppercase tracking-widest">Compliance Matrix Details</p>
        </div>
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
          {data.length} Requirements
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              <th className="p-4 border-b">Item No.</th>
              <th className="p-4 border-b w-64">Sub-Area / Requirement</th>
              <th className="p-4 border-b w-64">Required Evidence</th>
              <th className="p-4 border-b">Self-Evaluation</th>
              <th className="p-4 border-b">Docu. Attachments</th>
              <th className="p-4 border-b">Actual Situation</th>
              <th className="p-4 border-b">Dean's Evaluation</th>
              <th className="p-4 border-b">Area Chair Findings</th>
              <th className="p-4 border-b">Accreditation Head</th>
              <th className="p-4 border-b">External Auditor</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors border-b border-slate-50">
                <td className="p-4 font-bold text-slate-400">{item.id}</td>
                <td className="p-4 text-slate-800 font-medium">{item.subArea}</td>
                <td className="p-4 text-slate-500 italic text-xs">{item.evidence}</td>
                <td className="p-4">
                  <select className="border border-slate-200 rounded-lg p-1.5 text-xs bg-white focus:ring-2 focus:ring-[#6A003A] outline-none">
                    <option>Select Status</option>
                    <option className="text-emerald-600 font-bold">Complied</option>
                    <option className="text-rose-600 font-bold">Not Complied</option>
                  </select>
                </td>
                <td className="p-4">
                  <button className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 text-[#6A003A] px-3 py-2 rounded-lg hover:bg-[#6A003A] hover:text-white transition-all">
                    <span>+</span> ADD LINK
                  </button>
                </td>
                <td className="p-4">
                  <textarea placeholder="Describe current status..." className="border border-slate-200 rounded-lg w-full h-12 p-2 text-xs focus:ring-1 focus:ring-[#6A003A] outline-none" />
                </td>
                {/* Peer Review Columns */}
                <td className="p-4 text-slate-400 text-xs italic bg-slate-50/30">Pending...</td>
                <td className="p-4 text-slate-400 text-xs italic bg-slate-50/30">Pending...</td>
                <td className="p-4 text-slate-400 text-xs italic bg-slate-50/30">Pending...</td>
                <td className="p-4 text-slate-400 text-xs italic bg-slate-50/30">Pending...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AreaComplianceTable;