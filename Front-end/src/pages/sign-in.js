import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";
import SpinnerButton from "@/components/atoms/SpinnerButton";
import Navbar from "@/layout/Navbar";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { setCredentials } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { isLoading, error }] = useSignInMutation();

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const result = await signIn(data);

      if (result?.data.statusCode == 200) {
        dispatch(
          setCredentials({
            name: result?.data?.data.name,
            role: result?.data?.data.role,
            profileImg: result?.data?.data.profileImg,
          })
        );
        router.push("/");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="min-h-[70vh] flex justify-center items-center">
      <Card className="p-[50px] max-w-md w-full shadow-lg">
        <LHeading className="text-center pb-10">Sign In</LHeading>
        <form onSubmit={handleSubmit} disabled={isLoading}>
          <InputField name="email" type="email" placeholder="Email address" />
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showIcon
          />
          <Link href="#">
            <p className="text-end mb-5">Forgot Password?</p>
          </Link>
          <SpinnerButton isLoading={isLoading} title="Sign In" />
        </form>

        <p className="text-center text-[#828B9E] mt-5">
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
