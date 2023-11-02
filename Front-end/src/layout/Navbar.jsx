import Container from "@/components/atoms/Container";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getStoredData, removeStorageData } from "@/utils/localStorage";
import { logOut, setCredentials } from "@/redux/features/auth/authSlice";
import { removeAccessToken } from "@/utils/cookies";

const Navbar = () => {
  const { name, profileImg } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const userData = getStoredData("profile");
    if (userData) {
      dispatch(
        setCredentials({
          id: userData.id,
          name: userData.name,
          role: userData.role,
          profileImg: userData.profileImg,
        })
      );
    }
  }, [dispatch]);

  const handleSignOut = () => {
    removeStorageData("profile");
    removeAccessToken();
    dispatch(logOut());
  };

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={100}></Image>
        </Link>
        {name ? (
          <div className="flex items-center justify-between">
            {/* <Image
              className="h-8 w-8 rounded-full"
              width={8}
              height={8}
              src={profileImg}
              alt=""
            /> */}
            <button
              onClick={handleSignOut}
              className="px-5 py-2 w-fit font-medium text-danger"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href="sign-in"
            className="px-5 py-2 w-fit font-medium text-[#353945]"
          >
            Sign In
          </Link>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
