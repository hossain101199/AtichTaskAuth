import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { changePasswordInitialValues } from "../../pages/ProfilePage/InitialValuesAndValidationSchema/changePasswordInitialValues";
import { changePasswordValidationSchema } from "../../pages/ProfilePage/InitialValuesAndValidationSchema/changePasswordValidationSchema";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import Card from "../atoms/Card";
import Error from "../atoms/Error";
import InputField from "../atoms/InputFeild";
import MHeading from "../atoms/MHeading";
import SpinnerButton from "../atoms/SpinnerButton";
import XLParagraph from "../atoms/XLParagraph";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);

  const [changePassword, { isLoading, isError, error }] =
    useChangePasswordMutation();

  const handleChangePassword = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const result = await changePassword(data);

      if (result?.data.statusCode == 200) {
        toast.success(
          "Great job! Your password has been updated successfully."
        );
        setSubmitting(false);
        resetForm();
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      <MHeading>Security</MHeading>
      <Card className="p-5 flex flex-col gap-5 hover:shadow-md">
        <XLParagraph className="font-bold">CHANGE PASSWORD</XLParagraph>
        {isError && (
          <Error
            error={
              error?.data?.message
                ? error?.data?.message
                : "Oops! Something went wrong. Please try again."
            }
          />
        )}
        <Formik
          onSubmit={handleChangePassword}
          initialValues={changePasswordInitialValues}
          validationSchema={changePasswordValidationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isLoading || isSubmitting}>
              <Form className="flex flex-col gap-5">
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
                <InputField
                  name="confirmPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  showPassword={showNewPassword}
                  setShowPassword={setNewShowPassword}
                  showIcon
                />
                <div className="flex justify-end">
                  <SpinnerButton
                    isLoading={isLoading || isSubmitting}
                    title="Save Changes"
                    className="w-full sm:w-36 "
                  />
                </div>
              </Form>
            </fieldset>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default ChangePassword;
