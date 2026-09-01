const ResumeCard = ({ title, value }) => {
  return (
    <div
      className="bg-[#151515] rounded-2xl border border-cyan-500/20  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:border hover:border-cyan-400"
      style={{
        padding: "30px 50px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h3 className="text-gray-400">{title}</h3>

      <h1 className="text-4xl text-cyan-400 font-bold mt-5">{value}</h1>
    </div>
  );
};

export default ResumeCard;
