import Container from "@/components/atoms/Container";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getStoredData } from "@/utils/localStorage";
import { setCredentials } from "@/redux/features/auth/authSlice";
import NavProfile from "@/components/atoms/NavProfile";

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);

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

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={100}></Image>
        </Link>
        {name ? (
          <NavProfile />
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
