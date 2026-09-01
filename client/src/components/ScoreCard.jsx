const ScoreCard = ({ title, value, color }) => {
  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: "#151515",
        border: `1px solid ${color}`,
      }}
    >
      <h3 className="text-gray-400">{title}</h3>

      <h1 className="text-5xl font-bold mt-5" style={{ color }}>
        {value}
      </h1>
    </div>
  );
};

export default ScoreCard;
