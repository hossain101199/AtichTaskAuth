import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
