const UploadBox = () => {
  return (
    <div className="border-2 border-dashed border-cyan-500 rounded-2xl p-12 text-center">
      <div className="text-6xl">📄</div>

      <h2 className="text-2xl mt-4 font-bold">Upload Resume</h2>

      <p className="text-gray-400 mt-2">Drag & Drop PDF here</p>

      <input type="file" accept=".pdf" className="mt-8" />
    </div>
  );
};

export default UploadBox;
