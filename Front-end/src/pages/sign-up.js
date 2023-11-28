import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import Error from "@/components/atoms/Error";
import FileUpload from "@/components/atoms/FileUpload";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";
import SpinnerButton from "@/components/atoms/SpinnerButton";
import Navbar from "@/layout/Navbar";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import imageUpload from "@/utils/imageUpload";
import { initialValues } from "@/utils/initialValues/signUpInitialValues";
import { validationSchema } from "@/utils/validationSchemas/signUpValidationSchema";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [state, setState] = useState({
    document: null,
    documentError: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, { isLoading, error, isError }] = useSignUpMutation();

  const router = useRouter();

  const handleSubmit = async (
    { name, email, contactNo, password },
    { setSubmitting }
  ) => {
    try {
      const formData = new FormData();

      if (!state.document) {
        setState({ ...state, documentError: "Profile picture is required" });
        return;
      }

      formData.append("image", state.document);

      const imgURL = await imageUpload(formData);

      if (imgURL && imgURL.success) {
        const data = {
          name: name,
          email: email,
          contactNo: contactNo,
          password: password,
          profileImg: imgURL?.data.url,
        };

        const result = await signUp(data);

        if (result?.data?.statusCode == 200) {
          toast.success("Welcome! Your account has been successfully created.");
          setSubmitting(false);
          router.push("/sign-in");
        }
      } else {
        setState({ ...state, documentError: `${imgURL?.error?.message}` });
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };

  const handlePicture = async (file) => {
    setState({ ...state, document: file, documentError: "" });
  };

  return (
    <Container className="min-h-[70vh] flex justify-center items-center">
      <Card className="p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5">
        <LHeading className="text-center">Sign Up</LHeading>
        {isError && <Error error={error?.data?.message} />}
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isLoading || isSubmitting}>
              <Form className="flex flex-col gap-5">
                <InputField name="name" type="text" placeholder="Full Name" />
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <InputField
                  name="contactNo"
                  type="text"
                  placeholder="Mobile Number"
                />
                <InputField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showIcon
                />
                <InputField
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showIcon
                />
                <FileUpload
                  document={state?.document}
                  handlePicture={handlePicture}
                  documentError={state?.documentError}
                />
                <SpinnerButton isLoading={isLoading} title="Sign Up" />
              </Form>
            </fieldset>
          )}
        </Formik>

        <p className="text-center text-[#828B9E]">
          Already have an account?
          <Link href="/sign-in">
            <span className="font-semibold mx-1 text-action">Sign In</span>
          </Link>
        </p>
      </Card>
    </Container>
  );
};

SignUpPage.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default SignUpPage;
