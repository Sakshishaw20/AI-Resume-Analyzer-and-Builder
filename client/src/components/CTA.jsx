import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Ready To Analyze?</h2>

        <button
          onClick={() => navigate("/choose")}
          className="mt-10 bg-cyan-500 px-8 py-4 rounded-xl text-black font-bold"
        >
          Start Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
