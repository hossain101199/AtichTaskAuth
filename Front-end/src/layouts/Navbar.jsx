import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AitchTaskLogo from "../assets/svgs/AitchTaskLogo";
import Container from "../components/atoms/Container";
import NavigationLink from "../components/atoms/NavigationLink";
import AuthenticatedNavbar from "../components/molecules/AuthenticatedNavbar";

const Navbar = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <nav>
      <Container className="flex justify-between items-center py-2">
        <Link to="/">
          <AitchTaskLogo className="h-10 w-fit" />
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
