import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div>
      <Link
        href="#"
        className="rounded-xl hover:bg-action hover:bg-opacity-10 px-5 py-2 block w-fit font-medium text-[#353945]"
      >
        Services
      </Link>
    </div>
  );
};

export default NavLinks;
