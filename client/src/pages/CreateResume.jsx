import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const CreateResume = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    education: "",
    experience: "",
    projects: "",
    skills: "",
    certifications: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateResume = async () => {
    try {
      const response = await axios.post(
        "https://ai-resume-analyzer-and-builder-1.onrender.com/api/generate-resume",
        formData,
      );

      if (response.data.success) {
        navigate("/resume-preview", {
          state: {
            pdfUrl: response.data.pdf_url,
          },
        });
      }
    } catch (error) {
      console.log(error);
      alert("Resume generation failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div
        className="max-w-4xl "
        style={{
          margin: "0 auto",
          padding: "40px 10px",
        }}
      >
        <h1
          className="text-5xl font-bold mb-4 "
          style={{ textAlign: "center" }}
        >
          Create Your Resume
        </h1>

        <p className="text-gray-400 text-center">
          Fill in your details and generate a professional resume.
        </p>

        {/* Personal Details */}

        <div
          className="bg-[#151515] rounded-2xl"
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
            marginBottom: "20px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Personal Details
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <InputField
              label="Full Name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="john@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Phone Number"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
            />

            <InputField
              label="Address"
              name="address"
              placeholder="City, State"
              value={formData.address}
              onChange={handleChange}
            />

            <InputField
              label="LinkedIn"
              name="linkedin"
              placeholder="https://linkedin.com/in/..."
              value={formData.linkedin}
              onChange={handleChange}
            />

            <InputField
              label="GitHub"
              name="github"
              placeholder="https://github.com/..."
              value={formData.github}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Education */}

        <div
          className="bg-[#151515]  rounded-2xl "
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Education</h2>

          <textarea
            rows="5"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Degree, College, Passing Year..."
            className="w-full rounded-xl bg-[#09090B] border border-gray-700 p-4"
          />
        </div>

        {/* Experience */}

        <div
          className="bg-[#151515]  rounded-2xl "
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Experience</h2>

          <textarea
            rows="5"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Internship / Job Experience"
            className="w-full rounded-xl bg-[#09090B] border border-gray-700 p-4"
          />
        </div>

        {/* Projects */}

        <div
          className="bg-[#151515]  rounded-2xl "
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Projects</h2>

          <textarea
            rows="5"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            placeholder="Describe your projects..."
            className="w-full rounded-xl bg-[#09090B] border border-gray-700 p-4"
          />
        </div>

        {/* Skills */}

        <div
          className="bg-[#151515]  rounded-2xl "
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Skills</h2>

          <textarea
            rows="4"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="React, Node.js, Python, MongoDB..."
            className="w-full rounded-xl bg-[#09090B] border border-gray-700 p-4"
          />
        </div>

        {/* Certifications */}

        <div
          className="bg-[#151515] rounded-2xl "
          style={{
            width: "100%",
            // maxWidth: "85px",
            margin: "0 auto 30px",
            padding: "30px",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Certifications
          </h2>

          <textarea
            rows="4"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="IBM, Google, AWS..."
            className="w-full rounded-xl bg-[#09090B] border border-gray-700 p-4"
          />
        </div>

        <button
          onClick={handleGenerateResume}
          className="w-full py-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default CreateResume;
