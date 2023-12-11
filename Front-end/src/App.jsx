import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfflineAlert from "./components/atoms/OfflineAlert";
import Navbar from "./layout/Navbar";
import { setLoggedInUserInfo } from "./redux/features/auth/authSlice";
import { routes } from "./routes/routes";
import { getAccessToken, getUserInfo } from "./utils/auth.service";

const App = () => {
  const userData = getUserInfo();
  const accessToken = getAccessToken();
  const dispatch = useDispatch();
  dispatch(
    setLoggedInUserInfo({
      accessToken: accessToken == undefined ? null : accessToken,
      name: userData?.name == undefined ? null : accessToken?.accessToken,
      role: userData?.role == undefined ? null : accessToken?.accessToken,
      profileImg:
        userData?.profileImg == undefined ? null : accessToken?.accessToken,
    })
  );

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
