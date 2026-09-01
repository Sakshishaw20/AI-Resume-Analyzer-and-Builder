import { useState } from "react";

const DragDropUpload = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    setFile(selectedFile);

    // Send selected file to parent component
    if (onFileSelect) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div
      className="border-2 border-dashed border-cyan-500 rounded-2xl p-10 text-center bg-[#151515] text-center flex flex-col item-center justify-center"
      style={{
        width: "650px",
        height: "280px",
        margin: "0 auto",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2 className="text-2xl text-white font-bold">Upload Resume</h2>

      <p className="text-gray-400 mt-3">PDF Only</p>

      <input
        id="resume-upload"
        type="file"
        accept=".pdf"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <label
        htmlFor="resume-upload"
        style={{
          display: "block",
          margin: "20px auto",
          background: "#06b6d4",
          color: "black",
          width: "180px",
          height: "45px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          textAlign: "center",
          lineHeight: "45px",
          margin: "20px auto 0",
        }}
      >
        Choose Resume
      </label>

      {file && <p className="mt-6 text-cyan-400">{file.name}</p>}
    </div>
  );
};

export default DragDropUpload;
