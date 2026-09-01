const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#151515] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,229,255,.3)] duration-300">
      <div className="text-5xl mb-5">{icon}</div>

      <h2 className="text-2xl font-bold text-white">{title}</h2>

      <p className="mt-4 text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
