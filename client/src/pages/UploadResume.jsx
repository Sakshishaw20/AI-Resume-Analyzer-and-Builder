import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DragDropUpload from "../components/DragDropUpload";

const UploadResume = () => {
  const navigate = useNavigate();

  // Store selected file
  const [file, setFile] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Analyze Resume
  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);

      // Create form data
      const formData = new FormData();

      formData.append("resume", file);

      // Send file to Flask
      const response = await axios.post(
        "https://ai-resume-analyzer-and-builder-1.onrender.com/api/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);

      // Go to Dashboard
      navigate("/dashboard", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);

      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div className="max-w-full mx-auto py-24 px-8 flex flex-col items-center">
        <h1
          className="text-5xl font-bold mb-6 text-center"
          style={{ marginTop: "30px" }}
        >
          Upload Resume
        </h1>

        <p
          className="text-gray-400 mb-12 text-center"
          style={{ marginTop: "20px" }}
        >
          Upload your PDF resume and let AI analyze it.
        </p>

        <DragDropUpload onFileSelect={setFile} />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-10 w-70 py-4 rounded-xl bg-cyan-500 text-black text-xl font-bold hover:bg-cyan-400"
          style={{ marginTop: "30px", padding: "8px" }}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
