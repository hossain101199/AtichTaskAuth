import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";
import NavigationLink from "../components/atoms/NavigationLink";
import AuthenticatedNavbar from "../components/molecules/AuthenticatedNavbar";

const Navbar = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link to="/">
          <Image src={logo} alt="logo" width={100} />
        </Link>
        {accessToken ? (
          <AuthenticatedNavbar />
        ) : (
          <NavigationLink to="sign-in">Sign In</NavigationLink>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
