import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          <span className="text-white">AI Powered</span>

          <br />

          <span className="text-cyan-400">Resume Analyzer</span>
        </h1>

        <p className="mt-8 text-gray-300 text-xl leading-9">
          Upload your existing resume or create a new one from scratch. Our
          Machine Learning model analyzes your resume and provides instant
          insights.
        </p>

        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() => navigate("/choose")}
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400
            text-black font-bold shadow-[0_0_35px_#00E5FF]
            transition-all duration-300"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/choose")}
            className="px-8 py-4 rounded-xl border border-cyan-400
            text-cyan-300 hover:bg-cyan-400 hover:text-black
            transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
