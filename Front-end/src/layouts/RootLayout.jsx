import { Outlet, useLocation } from "react-router-dom";
import { excludeFooterPaths } from "../routes/routes";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = () => {
  const location = useLocation();

  const shouldRenderFooter = !excludeFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        <Outlet />
      </div>
      {shouldRenderFooter && <Footer />}
    </div>
  );
};

export default RootLayout;
