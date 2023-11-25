import Container from "@/components/atoms/Container";
import NavProfile from "@/components/atoms/NavProfile";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { getStoredData } from "@/utils/localStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
