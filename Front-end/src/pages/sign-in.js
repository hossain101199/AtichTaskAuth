import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import Error from "@/components/atoms/Error";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";
import SpinnerButton from "@/components/atoms/SpinnerButton";
import Navbar from "@/layout/Navbar";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { initialValues } from "../utils/initialValues/signInInitialValues";
import { validationSchema } from "../utils/validationSchemas/signInValidationSchema";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { isLoading, error, isError }] = useSignInMutation();

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await signIn(values);

      if (result?.data.statusCode == 200) {
        dispatch(
          setCredentials({
            name: result?.data?.data.name,
            role: result?.data?.data.role,
            profileImg: result?.data?.data.profileImg,
          })
        );
        setSubmitting(false);
        router.push("/");
      }
    } catch (error) {
      throw new Error("Could not logged in at this time. Try again", error);
    }
  };
  return (
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
          <Link href="/sign-up">
            <span className="font-semibold mx-1 text-action">Join Now</span>
          </Link>
        </p>
      </Card>
    </Container>
  );
};

SignInPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default SignInPage;
