import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={`px-5 py-2 w-fit font-medium text-[#353945] border-2 border-action rounded-lg click-animation ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
