import { setCredentials } from "@/redux/features/auth/authSlice";
import { getStoredData } from "@/utils/localStorage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "./Spinner";

const Root = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = getStoredData("user");

    if (userData) {
      dispatch(
        setCredentials({
          name: userData.name,
          role: userData.role,
          profileImg: userData.profileImg,
        })
      );
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch]);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return <>{children}</>;
};

export default Root;
