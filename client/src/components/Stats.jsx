const Stats = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="bg-[#151515] rounded-2xl p-8 text-center">
          <h1 className="text-5xl text-cyan-400 font-bold">98%</h1>

          <p className="text-gray-400 mt-3">ATS Accuracy</p>
        </div>

        <div className="bg-[#151515] rounded-2xl p-8 text-center">
          <h1 className="text-5xl text-purple-400 font-bold">20K+</h1>

          <p className="text-gray-400 mt-3">Resumes</p>
        </div>

        <div className="bg-[#151515] rounded-2xl p-8 text-center">
          <h1 className="text-5xl text-green-400 font-bold">120+</h1>

          <p className="text-gray-400 mt-3">Skills</p>
        </div>

        <div className="bg-[#151515] rounded-2xl p-8 text-center">
          <h1 className="text-5xl text-pink-400 font-bold">AI</h1>

          <p className="text-gray-400 mt-3">Powered</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
