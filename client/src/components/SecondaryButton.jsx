const SecondaryButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
