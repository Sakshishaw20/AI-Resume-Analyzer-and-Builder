import { Navigate, useLocation } from "react-router-dom";

import ResumeCard from "../components/ResumeCard";
import ProgressBar from "../components/ProgressBar";
import AnalysisCard from "../components/AnalysisCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {};

  const atsScore = data.ats_score || 0;

  const skills = data.skills || [];

  const summary = data.summary || "No summary available.";

  const suggestions = data.suggestions || [];

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingTop: "80px",
          paddingBottom: "40px",
          paddingLeft: "40px",
          paddingRight: "40px",
          textAlign: "center",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Resume Analysis Dashboard</h1>

        <p className="text-gray-400 mb-12 text-xl">
          AI analyzed your resume successfully.
        </p>

        {/* Score Cards */}

        <div
          className="grid md:grid-cols-3 
        justify-items-center"
          style={{
            gap: "30px",
            marginBottom: "20px",
            marginTop: "20px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <ResumeCard title="ATS Score" value={`${atsScore}%`} />

          <ResumeCard title="Skills Found" value={skills.length} />

          <ResumeCard title="Resume Status" value="Analyzed" />
        </div>

        {/* Skills */}

        <div
          className="bg-[#151515] rounded-2xl"
          style={{
            width: "95%",
            margin: "30px auto",
            padding: "30px",
          }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills Analysis</h2>

          {skills.map((skill, index) => (
            <ProgressBar key={index} title={skill.name} value={skill.score} />
          ))}
        </div>

        {/* AI Suggestions */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "85%",
            margin: " 50px auto",
            padding: "20px ",
          }}
        >
          <AnalysisCard
            title="AI Suggestions"
            description={
              suggestions.length
                ? suggestions.join(" ")
                : "No suggestions available."
            }
          />

          <AnalysisCard title="Resume Summary" description={summary} />

          <button
            onClick={() => Navigate("/")}
            style={{
              backgroundColor: "blueviolet",
              color: "black",
            }}
          >
            ⬅ Back to Home{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
