import { changePassword } from "@/apis/authAPIs";
import EditIcon from "@/assets/svgs/EditIcon";
import Card from "@/components/atoms/Card";
import InputField from "@/components/atoms/InputFeild";
import MHeading from "@/components/atoms/MHeading";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import XLParagraph from "@/components/atoms/XLParagraph";
import RootLayout from "@/layout/RootLayout";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const userIfo = useSelector((state) => state.auth);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const data = {
        oldPassword: e.target.oldPassword.value,
        newPassword: e.target.newPassword.value,
      };

      const result = await changePassword(data);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-5">
      <MHeading>My Profile</MHeading>
      <Card className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <XLParagraph className="font-bold">PROFILE INFORMATION</XLParagraph>
          <button>
            <EditIcon />
          </button>
        </div>
        {userIfo?.profileImg && (
          <Image
            className="h-20 w-20 rounded-full"
            width={0}
            height={0}
            src={userIfo?.profileImg}
            alt=""
          />
        )}
      </Card>
      <MHeading>Security</MHeading>
      <Card className="p-5">
        <XLParagraph className="font-bold mb-5">CHANGE PASSWORD</XLParagraph>
        <form onSubmit={handleChangePassword}>
          <InputField
            name="oldPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Current Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showIcon
          />
          <InputField
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            showPassword={showNewPassword}
            setShowPassword={setNewShowPassword}
            showIcon
          />
          <PrimaryButton className="py-3 w-fit " type="submit">
            Save Changes
          </PrimaryButton>
        </form>
      </Card>
    </div>
  );
};

Profile.getLayout = function getLayout(page) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

export default Profile;
