const ProgressBar = ({ title, value }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{title}</span>

        <span>{value}%</span>
      </div>

      <div className="bg-gray-700 h-3 rounded-full">
        <div
          style={{ width: `${value}%` }}
          className="h-3 bg-cyan-400 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
