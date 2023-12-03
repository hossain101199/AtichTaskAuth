import Container from "@/components/atoms/Container";
import NavProfile from "@/components/atoms/NavProfile";
import { isLoggedIn } from "@/utils/auth.service";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const isUserLoggedIn = isLoggedIn();
  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={100}></Image>
        </Link>
        {isUserLoggedIn ? (
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
