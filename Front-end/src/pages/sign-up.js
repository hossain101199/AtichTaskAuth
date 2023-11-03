import { signUp } from "@/apis/authAPIs";
import UploadIcon from "@/assets/svgs/UploadIcon";
import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";
import Navbar from "@/layout/Navbar";
import imageUpload from "@/utils/imageUpload";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SignUpPage = () => {
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", document);
      const imgURL = await imageUpload(formData);

      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        contactNo: e.target.contactNo.value,
        password: e.target.password.value,
        profileImg: imgURL,
      };

      const result = await signUp(data);

      if (result.statusCode == 200) {
        router.push("/sign-in");
      } else {
        console.error("API call failed:", result);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
    setIsLoading(false);
  };

  const handlePicture = async (file) => {
    setDocument(null);
    setDocument(file);
  };

  return (
    <Container className="min-h-[70vh] flex justify-center items-center">
      <Card className="p-[50px] max-w-md w-full shadow-lg">
        <LHeading className="text-center pb-10">Sign Up</LHeading>
        <form onSubmit={handleSubmit}>
          <InputField name="name" type="text" placeholder="Full Name" />
          <InputField name="email" type="email" placeholder="Email address" />
          <InputField
            name="contactNo"
            type="number"
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

          <label className="flex justify-center items-center border-2 border-dashed rounded-md cursor-pointer hover:border-gray-400 focus:outline-none mb-5 p-4 h-20">
            <div className="w-full text-center">
              {document ? (
                <p className="text-sm font-medium max-w-md truncate">
                  {document.name}
                </p>
              ) : (
                <>
                  <UploadIcon className="mx-auto" width={24} height={24} />
                  <span className="text-sm font-medium text-slategray">
                    Upload a profile picture
                  </span>
                </>
              )}
            </div>
            <input
              className="hidden"
              id="filesUpload"
              type="file"
              onChange={(e) => handlePicture(e.target.files[0])}
            />
          </label>

          <button
            className="w-full bg-action rounded-lg py-3 text-white font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-[#828B9E] mt-5">
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
