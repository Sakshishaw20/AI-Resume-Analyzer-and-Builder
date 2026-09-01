import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ChooseOption from "../pages/ChooseOption";
import UploadResume from "../pages/UploadResume";
import CreateResume from "../pages/CreateResume";
import Processing from "../pages/Processing";
import Dashboard from "../pages/Dashboard";
import ResumePreview from "../pages/ResumePreview";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/choose" element={<ChooseOption />} />

      <Route path="/upload" element={<UploadResume />} />

      <Route path="/create" element={<CreateResume />} />

      <Route path="/processing" element={<Processing />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/resume-preview" element={<ResumePreview />} />
    </Routes>
  );
};

export default AppRoutes;
