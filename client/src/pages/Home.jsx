import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CTA from "../components/CTA";
// import BackgroundGlow from "../components/BackgroundGlow";
// import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="bg-[#09090B] min-h-screen text-white overflow-hidden">
      {/* <BackgroundGlow /> */}

      <Navbar />

      <HeroSection />

      {/* <Stats /> */}

      {/* <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose
          <span className="text-cyan-400"> AI Resume Analyzer?</span>
        </h2>

        <Features />
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#151515] rounded-3xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-cyan-400">ATS Friendly</h2>

            <p className="text-gray-400 mt-5">
              Check how ATS systems evaluate your resume before applying.
            </p>
          </div>

          <div className="bg-[#151515] rounded-3xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-purple-400">AI Powered</h2>

            <p className="text-gray-400 mt-5">
              Machine Learning analyzes resume quality and important keywords.
            </p>
          </div>

          <div className="bg-[#151515] rounded-3xl p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-green-400">
              Instant Report
            </h2>

            <p className="text-gray-400 mt-5">
              Get resume analysis within a few seconds.
            </p>
          </div>
        </div>
      </section>

      <CTA />

      <Footer /> */}
    </div>
  );
};

export default Home;
