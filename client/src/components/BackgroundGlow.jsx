const BackgroundGlow = () => {
  return (
    <>
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="fixed bottom-20 right-20 w-80 h-80 bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="fixed top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2"></div>
    </>
  );
};

export default BackgroundGlow;
