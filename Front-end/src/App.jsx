import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfflineAlert from "./components/atoms/OfflineAlert";
import Navbar from "./layout/Navbar";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <OfflineAlert />
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
