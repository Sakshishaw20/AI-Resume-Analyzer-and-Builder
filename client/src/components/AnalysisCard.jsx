const AnalysisCard = ({ title, description }) => {
  return (
    <div
      className="bg-[#151515] p-8 rounded-2xl border border-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:border hover:border-cyan-400"
      style={{
        padding: "30px",
        marginBottom: "20px",
      }}
    >
      <h2 className="text-2xl text-white font-bold">{title}</h2>

      <p className="text-gray-400 mt-4">{description}</p>
    </div>
  );
};

export default AnalysisCard;
