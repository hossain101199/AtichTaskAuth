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
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { initialValues } from "../utils/initialValues/signUpInitialValues";
import { validationSchema } from "../utils/validationSchemas/signUpValidationSchema";

const SignUpPage = () => {
  const [document, setDocument] = useState(null);
  const [documentError, setDocumentError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, { isLoading, error, isError }] = useSignUpMutation();

  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (document) {
        const formData = new FormData();

        formData.append("image", document);

        const imgURL = await imageUpload(formData);

        const data = {
          name: values.name,
          email: values.email,
          contactNo: values.contactNo,
          password: values.password,
          profileImg: imgURL,
        };

        const result = await signUp(data);

        if (result?.data?.statusCode == 200) {
          setSubmitting(false);
          router.push("/sign-in");
        }
      } else {
        setDocumentError("Profile picture is required");
      }
    } catch (error) {
      throw new Error("An unexpected error occurred:", error);
    }
  };

  const handlePicture = async (file) => {
    setDocument(null);
    setDocumentError("");
    setDocument(file);
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
                  document={document}
                  handlePicture={handlePicture}
                  documentError={documentError}
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
