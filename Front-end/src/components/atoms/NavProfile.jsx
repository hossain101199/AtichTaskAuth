import { logOut } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paragraph from "./Paragraph";

const NavProfile = () => {
  const { profileImg } = useSelector((state) => state.auth);

  const [isProfileOn, setProfileOn] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleProfile = () => {
    setProfileOn((isOn) => !isOn);
  };

  const handleSignOut = () => {
    dispatch(logOut());
    router.push("/");
  };

  return (
    <div className="relative">
      <button onClick={handleProfile}>
        {profileImg && (
          <Image
            className="h-10 w-10 rounded-full"
            width={10}
            height={10}
            src={profileImg}
            alt=""
          />
        )}
      </button>
      <Card
        className={`p-5 absolute z-50 end-0 top-[53px] flex flex-col gap-3 justify-start w-28 ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <Link href="/profile" className="w-fit">
          <Paragraph className="font-bold">Profile</Paragraph>
        </Link>
        <button onClick={handleSignOut} className="w-fit">
          <Paragraph className="text-danger font-bold">Sign Out</Paragraph>
        </button>
      </Card>
    </div>
  );
};

export default NavProfile;
