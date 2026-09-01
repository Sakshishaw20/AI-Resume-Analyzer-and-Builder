export const validatePDF = (file) => {
  if (!file) return false;

  return file.type === "application/pdf";
};
