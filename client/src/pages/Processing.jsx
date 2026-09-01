import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Processing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col justify-center items-center">
      <LoadingSpinner />

      <h1 className="text-4xl font-bold mt-8">
        AI is analyzing your resume...
      </h1>

      <p className="text-gray-400 mt-4">Please wait a few seconds.</p>
    </div>
  );
};

export default Processing;
