import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import NavProfile from "../components/atoms/NavProfile";

const Navbar = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <NavLink to="/">
          <Image src={logo} alt="logo" width={100} />
        </NavLink>
        {accessToken ? (
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
