import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../redux/api/apiSlice";
import { setLoggedInUserInfo } from "../../redux/features/auth/authSlice";
import { removeAccessToken } from "../../utils/auth.service";
import Card from "./Card";
import Image from "./Image";
import Paragraph from "./Paragraph";

const NavProfile = () => {
  const { profileImg } = useSelector((state) => state.auth);

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
    dispatch(API.util.resetApiState());
    removeAccessToken();
    toast.success("Successfully signed out");
    navigate("/sign-in");
  };

  return (
    <div className="relative flex">
      <button onClick={handleProfile} ref={cardRef} className="click-animation">
        <Image
          className="h-10 w-10 rounded-full"
          src={profileImg}
          alt="user profile icon"
        />
      </button>

      <Card
        className={`py-5 absolute z-50 end-0 top-[53px] flex flex-col gap-4 justify-start w-28 hover:shadow-md ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <Link to="/profile" className="w-full px-5">
          <Paragraph className="font-bold">Profile</Paragraph>
        </Link>
        <hr />
        {/* <Link to="/billing" className="w-fit px-5">
          <Paragraph className="font-bold">Billing</Paragraph>
        </Link>
        <hr /> */}
        <button onClick={handleSignOut} className="w-full px-5">
          <Paragraph className="text-danger font-bold">Sign Out</Paragraph>
        </button>
      </Card>
    </div>
  );
};

export default NavProfile;
