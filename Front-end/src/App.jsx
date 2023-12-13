import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfflineAlert from "./components/atoms/OfflineAlert";
import Dashboard from "./layouts/Dashboard";
import RootLayout from "./layouts/RootLayout";
import DashboardHomePage from "./pages/DashboardHomePage";
import HomePage from "./pages/HomePage";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <OfflineAlert />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />

          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHomePage />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
