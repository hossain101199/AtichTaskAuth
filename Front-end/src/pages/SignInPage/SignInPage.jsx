import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/atoms/Card";
import Container from "../../components/atoms/Container";
import Error from "../../components/atoms/Error";
import InputField from "../../components/atoms/InputFeild";
import LHeading from "../../components/atoms/LHeading";
import SpinnerButton from "../../components/atoms/SpinnerButton";
import { useSignInMutation } from "../../redux/features/auth/authApi";
import { initialValues } from "./InitialValuesAndValidationSchema/signInInitialValues";
import { validationSchema } from "./InitialValuesAndValidationSchema/signInValidationSchema";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { isLoading, error, isError }] = useSignInMutation();

  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await signIn(values);

      if (result?.data.statusCode == 200) {
        toast.success("Welcome back! You've successfully logged in.");
        setSubmitting(false);
        navigate("/");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };
  return (
    <>
      <Container className="min-h-[70vh] flex justify-center items-center">
        <Card className="p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5">
          <LHeading className="text-center">Sign In</LHeading>
          {isError && <Error error={error?.data?.message} />}
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <fieldset disabled={isLoading || isSubmitting}>
                <Form className="flex flex-col gap-5">
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                  <InputField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showIcon
                  />
                  {/* <Link href="#">
            <p className="text-end mb-5">Forgot Password?</p>
          </Link> */}
                  <SpinnerButton
                    isLoading={isLoading || isSubmitting}
                    title="Sign In"
                  />
                </Form>
              </fieldset>
            )}
          </Formik>

          <p className="text-center text-[#828B9E]">
            Don’t have an account?
            <Link to="/sign-up">
              <span className="font-semibold mx-1 text-action">Join Now</span>
            </Link>
          </p>
        </Card>
      </Container>
    </>
  );
};

export default SignInPage;