const Features = () => {
  const features = [
    "ATS Score",
    "Resume Analysis",
    "Machine Learning",
    "Fast Processing",
  ];

  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#151515] p-8 rounded-2xl border border-cyan-500/20"
          >
            <h2 className="text-xl font-bold text-cyan-400">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
