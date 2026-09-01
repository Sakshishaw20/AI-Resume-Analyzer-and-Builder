import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";

const MainLayout = () => {
  return (
    <div className="bg-[#09090B] min-h-screen text-white">
      <BackgroundGlow />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
