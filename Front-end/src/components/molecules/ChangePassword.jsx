import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import Card from "../atoms/Card";
import InputField from "../atoms/InputFeild";
import MHeading from "../atoms/MHeading";
import SpinnerButton from "../atoms/SpinnerButton";
import XLParagraph from "../atoms/XLParagraph";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const data = {
        oldPassword: e.target.oldPassword.value,
        newPassword: e.target.newPassword.value,
      };

      await changePassword(data);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <>
      <MHeading>Security</MHeading>
      <Card className="p-5">
        <XLParagraph className="font-bold mb-5">CHANGE PASSWORD</XLParagraph>
        <form onSubmit={handleChangePassword} disabled={isLoading}>
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
          <SpinnerButton
            isLoading={isLoading}
            title="Save Changes"
            className="w-36"
          />
        </form>
      </Card>
    </>
  );
};

export default ChangePassword;
