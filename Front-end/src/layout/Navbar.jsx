import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import NavProfile from "../components/atoms/NavProfile";
import { isLoggedIn } from "../utils/auth.service";

const Navbar = () => {
  const isUserLoggedIn = isLoggedIn();

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <NavLink to="/">
          <Image src={logo} alt="logo" width={100} />
        </NavLink>
        {isUserLoggedIn ? (
          <NavProfile />
        ) : (
          <NavLink
            to="sign-in"
            className="px-5 py-2 w-fit font-medium text-[#353945]"
          >
            Sign In
          </NavLink>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
