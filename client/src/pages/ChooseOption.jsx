import { useNavigate } from "react-router-dom";

const ChooseOption = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full -mt-8">
        <h1
          className="text-5xl font-bold text-center "
          style={{ marginTop: "-60px", marginBottom: "30px" }}
        >
          Choose an Option
        </h1>

        <div className="grid md:grid-cols-2 gap-15">
          <div
            onClick={() => navigate("/upload")}
            className="cursor-pointer bg-[#151515] border border-cyan-500/20 rounded-3xl flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,.4)] duration-300"
            style={{ padding: "20px" }}
          >
            <div className="text-5xl mb-4">📄</div>

            <h2 className="text-3xl font-bold">Upload Resume</h2>

            <p className="text-gray-400 mt-4">
              Already have a resume? Upload it and analyze instantly.
            </p>
          </div>

          <div
            onClick={() => navigate("/create")}
            className="cursor-pointer bg-[#151515] border border-cyan-500/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,.4)] duration-300"
          >
            <div className="text-5xl mb-4">📝</div>

            <h2 className="text-3xl font-bold">Create Resume</h2>

            <p className="text-gray-400 mt-4">
              Don't have a resume? Create one from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseOption;
