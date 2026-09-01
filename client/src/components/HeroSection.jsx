import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-7xl font-bold text-white"
        >
          AI Resume <span className="text-cyan-400">Analyzer & Builder</span>
        </motion.h1>

        <p className="text-gray-400 mt-8 text-xl" style={{ marginTop: "20px" }}>
          Analyze and build your resume using Machine Learning to improve your
          ATS score instantly.
        </p>

        <div className="flex justify-center ">
          {" "}
          <Link
            to="/choose"
            style={{ padding: "7px 10px", marginTop: "20px" }}
            className=" inline-flex items-center justify-center px-16 py-20 text-lg font-semibold text-white bg-cyan-900 rounded-full shadow shadow-cyan-500/40 transition-all duration-300 ease-in-out hover:bg-cyan-700 hover:shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee] hover:scale-105 active:scale-95 "
          >
            {" "}
            Get Started →{" "}
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
