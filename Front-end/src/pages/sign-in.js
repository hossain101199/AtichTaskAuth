import { signIn } from "@/apis/authAPIs";
import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";

import Navbar from "@/layout/Navbar";
import { setCredentials } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const result = await signIn(data);
      if (result) {
        dispatch(
          setCredentials({
            id: result.id,
            name: result.name,
            role: result.role,
            profileImg: result.profileImg,
          })
        );
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <Container className="min-h-[70vh] flex justify-center items-center">
      <Card className="p-[50px] max-w-md w-full shadow-lg">
        <LHeading className="text-center pb-10">Sign In</LHeading>
        <form onSubmit={handleSubmit}>
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
          <button
            className="w-full bg-action rounded-lg py-3 text-white font-semibold"
            type="submit"
          >
            Sign in
          </button>
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
