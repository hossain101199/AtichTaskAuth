import {
  getUserInfo,
  removeAccessToken,
  removeUserInfo,
} from "@/utils/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Paragraph from "./Paragraph";

const NavProfile = () => {
  const userData = getUserInfo();

  const [isProfileOn, setProfileOn] = useState(false);

  const router = useRouter();

  const cardRef = useRef(null);

  const handleProfile = () => {
    setProfileOn((isOn) => !isOn);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setProfileOn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    removeUserInfo();
    removeAccessToken();
    router.push("/");
  };

  return (
    <div className="relative" ref={cardRef}>
      <button onClick={handleProfile}>
        {userData?.profileImg && (
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={userData?.profileImg}
            alt=""
          />
        )}
      </button>

      <Card
        className={`py-5 absolute z-50 end-0 top-[53px] flex flex-col gap-3 justify-start w-28 hover:shadow-md ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <Link href="/profile" className="w-fit px-5">
          <Paragraph className="font-bold">Profile</Paragraph>
        </Link>
        <hr />
        <button onClick={handleSignOut} className="w-fit px-5">
          <Paragraph className="text-danger font-bold">Sign Out</Paragraph>
        </button>
      </Card>
    </div>
  );
};

export default NavProfile;
