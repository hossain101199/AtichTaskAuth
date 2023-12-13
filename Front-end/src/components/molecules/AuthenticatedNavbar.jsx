import NavProfile from "../atoms/NavProfile";
import NavigationLink from "../atoms/NavigationLink";
import Paragraph from "../atoms/Paragraph";

const AuthenticatedNavbar = () => {
  return (
    <div className="flex items-center gap-2" id="AuthenticatedNavbar">
      <NavigationLink to="/dashboard" className="w-fit px-5">
        <Paragraph className="font-bold">Dashboard</Paragraph>
      </NavigationLink>
      <NavProfile />
    </div>
  );
};

export default AuthenticatedNavbar;
