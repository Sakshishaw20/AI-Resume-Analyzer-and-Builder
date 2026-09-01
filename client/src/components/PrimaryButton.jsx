const PrimaryButton = ({ title, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition duration-300 shadow-[0_0_25px_rgba(0,229,255,.5)]"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
