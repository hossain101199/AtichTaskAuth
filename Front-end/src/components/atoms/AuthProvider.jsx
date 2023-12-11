import { useDispatch } from "react-redux";
import { setLoggedInUserInfo } from "../../redux/features/auth/authSlice";
import { getAccessToken, getUserInfo } from "../../utils/auth.service";

const AuthProvider = ({ children }) => {
  const userData = getUserInfo();
  const accessToken = getAccessToken();
  const dispatch = useDispatch();
  dispatch(
    setLoggedInUserInfo({
      accessToken: accessToken == undefined ? null : accessToken,
      name: userData?.name == undefined ? null : userData?.name,
      role: userData?.role == undefined ? null : userData?.role,
      profileImg:
        userData?.profileImg == undefined ? null : userData?.profileImg,
    })
  );
  return <>{children}</>;
};

export default AuthProvider;
