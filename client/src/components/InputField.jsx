const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label className="block mb-2">{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#151515] border border-gray-700 rounded-xl p-4 text-white"
      />
    </div>
  );
};

export default InputField;
