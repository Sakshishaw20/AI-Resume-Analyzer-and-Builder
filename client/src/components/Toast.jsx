const Toast = ({ message }) => {
  return (
    <div className="fixed top-5 right-5 bg-cyan-500 text-black px-6 py-3 rounded-xl">
      {message}
    </div>
  );
};

export default Toast;
