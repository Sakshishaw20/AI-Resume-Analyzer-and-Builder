const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-[#151515] rounded-2xl p-10">{children}</div>
    </div>
  );
};

export default Modal;
