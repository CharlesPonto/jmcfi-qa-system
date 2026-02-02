const MaterialViewer = ({ material, onClose }) => {
  if (!material) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="bg-[#6A003A] p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">{material.title}</h3>
          <button onClick={onClose} className="text-white hover:opacity-70">✕</button>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-sm text-gray-600">{material.description}</p>
          <div className="space-y-3">
            {material.files?.map((file, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                <span className="text-sm font-bold text-gray-700">{file.name}</span>
                <a href={file.url} className="text-[#6A003A] text-xs font-bold uppercase">View</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialViewer;