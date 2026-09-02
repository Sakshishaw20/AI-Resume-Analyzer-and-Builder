import { useLocation, useNavigate } from "react-router-dom";

const ResumePreview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pdfUrl = location.state?.pdfUrl;

  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center text-white">
      <h1
        className="text-4xl font-bold "
        style={{
          marginBottom: "60px",
        }}
      >
        Resume Generated Successfully 🎉
      </h1>

      <div className="flex gap-5">
        <button
          onClick={() => navigate("/")}
          className=" bg-gray-700 text-xl"
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
          }}
        >
          ⬅ Back
        </button>

        <a
          href={pdfUrl}
          download
          className=" bg-cyan-500 rounded-xl text-black text-xl font-bold"
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default ResumePreview;
