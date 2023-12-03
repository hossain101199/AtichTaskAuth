import EditIcon from "@/assets/svgs/EditIcon";
import UploadIcon from "@/assets/svgs/UploadIcon";
import { updateProfileValidationSchema } from "@/helper/validationSchemas/updateProfileValidationSchema";
import { useUpdateProfileMutation } from "@/redux/features/profile/profileAPI";
import { getUserInfo, storeUserInfo } from "@/utils/auth.service";
import imageUpload from "@/utils/imageUpload";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../atoms/Card";
import Error from "../atoms/Error";
import InputField from "../atoms/InputFeild";
import MHeading from "../atoms/MHeading";
import SpinnerButton from "../atoms/SpinnerButton";
import XLParagraph from "../atoms/XLParagraph";

const UpdateProfile = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [state, setState] = useState({
    document: null,
    documentError: "",
  });

  const userData = getUserInfo();

  const initialValues = {
    name: profile?.data.name,
    email: profile?.data.email,
    contactNo: profile?.data.contactNo,
  };

  const [updateProfile, { isLoading, error, isError }] =
    useUpdateProfileMutation();

  const handleSubmit = async (
    { name, email, contactNo },
    { setSubmitting }
  ) => {
    try {
      const updatedData = {};

      if (state?.document) {
        const formData = new FormData();
        formData.append("image", state.document);

        const imgURL = await imageUpload(formData);

        if (imgURL && imgURL.success) {
          updatedData.profileImg = imgURL?.data.url;
        }
      }

      if (profile?.data.name != name) {
        updatedData.name = name;
      }

      if (profile?.data.email != email) {
        updatedData.email = email;
      }

      if (profile?.data.contactNo != contactNo) {
        updatedData.contactNo = contactNo;
      }

      const result = await updateProfile(updatedData)?.unwrap();

      if (result?.statusCode == 200) {
        storeUserInfo({
          ...userData,
          name: result.data.name,
          profileImg: result.data.profileImg,
        });
        toast.success("Profile updated successfully!");
        setSubmitting(false);
        setIsEdit(!isEdit);
      }

      setSubmitting(false);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handlePicture = async (file) => {
    setState({ ...state, document: file, documentError: "" });
  };

  return (
    <div className="flex flex-col gap-5 lg:w-[672px]">
      <MHeading>Profile</MHeading>
      <Card className="p-5 flex flex-col gap-5 hover:shadow-md">
        <div className="flex justify-between items-center">
          <XLParagraph className="font-bold">PROFILE INFORMATION</XLParagraph>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
        {isError && <Error error={error?.data?.message} />}
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={updateProfileValidationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isSubmitting || isLoading}>
              <Form className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                  {profile?.data?.profileImg && (
                    <div className="relative ">
                      <Image
                        className="rounded-full"
                        width={160}
                        height={160}
                        sizes="100vw"
                        src={
                          state?.document
                            ? URL.createObjectURL(state?.document)
                            : profile?.data?.profileImg
                        }
                        alt=""
                      />
                      {isEdit && (
                        <label className="w-8 h-8 backdrop-blur-xl flex justify-center items-center rounded-xl border-[1px] border-white absolute bottom-[10px] right-[10px]">
                          <UploadIcon />
                          <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            className="hidden"
                            onChange={(e) => handlePicture(e.target.files[0])}
                          />
                        </label>
                      )}
                    </div>
                  )}
                  {isEdit ? (
                    <div className="w-full lg:w-1/2">
                      <InputField
                        name="name"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                  ) : (
                    <XLParagraph className="font-bold">
                      {profile?.data?.name}
                    </XLParagraph>
                  )}
                </div>
                <div className="flex flex-col gap-5">
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Email address"
                    disabled={!isEdit}
                  />
                  <InputField
                    name="contactNo"
                    type="text"
                    placeholder="Mobile Number"
                    disabled={!isEdit}
                  />
                  {isEdit && (
                    <div className="flex justify-end">
                      <SpinnerButton
                        isLoading={isSubmitting || isLoading}
                        title="Save Changes"
                        className="w-full md:w-36 "
                      />
                    </div>
                  )}
                </div>
              </Form>
            </fieldset>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default UpdateProfile;
