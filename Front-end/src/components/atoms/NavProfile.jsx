import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setLoggedInUserInfo } from "../../redux/features/auth/authSlice";
import {
  getUserInfo,
  removeAccessToken,
  removeUserInfo,
} from "../../utils/auth.service";
import Card from "./Card";
import Image from "./Image";
import Paragraph from "./Paragraph";

const NavProfile = () => {
  const userData = getUserInfo();

  const [isProfileOn, setProfileOn] = useState(false);

  const navigate = useNavigate();

  const cardRef = useRef(null);

  const handleProfile = () => {
    setProfileOn((isOn) => !isOn);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setProfileOn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(
      setLoggedInUserInfo({
        accessToken: null,
        name: null,
        role: null,
        profileImg: null,
      })
    );
    removeUserInfo();
    removeAccessToken();
    toast.success("Successfully signed out");
    navigate("/");
  };

  return (
    <div className="relative">
      <button onClick={handleProfile} ref={cardRef}>
        {userData?.profileImg && (
          <Image
            className="h-10 w-10 rounded-full"
            src={userData?.profileImg}
            alt="user profile icon"
          />
        )}
      </button>

      <Card
        className={`py-5 absolute z-50 end-0 top-[53px] flex flex-col gap-3 justify-start w-28 hover:shadow-md ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <NavLink to="/profile" className="w-fit px-5">
          <Paragraph className="font-bold">Profile</Paragraph>
        </NavLink>
        <hr />
        <button onClick={handleSignOut} className="w-fit px-5">
          <Paragraph className="text-danger font-bold">Sign Out</Paragraph>
        </button>
      </Card>
    </div>
  );
};

export default NavProfile;
