import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-analyzer-and-builder-1.onrender.com/api",
});

export default api;
