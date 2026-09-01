import { useState } from "react";

const useUpload = () => {
  const [file, setFile] = useState(null);

  const uploadFile = (selectedFile) => {
    setFile(selectedFile);
  };

  return {
    file,
    uploadFile,
  };
};

export default useUpload;
