import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import EditIcon from "../../assets/svgs/EditIcon";
import UploadIcon from "../../assets/svgs/UploadIcon";
import { updateProfileValidationSchema } from "../../pages/ProfilePage/InitialValuesAndValidationSchema/updateProfileValidationSchema";
import { setLoggedInUserInfo } from "../../redux/features/auth/authSlice";
import { useUpdateProfileMutation } from "../../redux/features/profile/profileAPI";
import imageUpload from "../../utils/imageUpload";
import Card from "../atoms/Card";
import Error from "../atoms/Error";
import Image from "../atoms/Image";
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

  const initialValues = {
    name: profile?.data.name,
    email: profile?.data.email,
    contactNo: profile?.data.contactNo,
  };

  const [updateProfile, { isLoading, error, isError }] =
    useUpdateProfileMutation();

  const dispatch = useDispatch();

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
        dispatch(
          setLoggedInUserInfo({
            profileImg: result.data.profileImg,
          })
        );
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
    <>
      <MHeading>Profile</MHeading>
      <Card className="p-5 flex flex-col gap-5 hover:shadow-md">
        <div className="flex justify-between items-center">
          <XLParagraph className="font-bold">PROFILE INFORMATION</XLParagraph>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
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
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={updateProfileValidationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isSubmitting || isLoading}>
              <Form className="flex flex-col sm:flex-row gap-5">
                <div className="relative rounded-lg w-40 sm:w-5/12 h-fit overflow-hidden">
                  <Image
                    className="rounded-lg"
                    src={
                      state?.document
                        ? URL.createObjectURL(state?.document)
                        : profile?.data?.profileImg
                    }
                    alt=""
                  />
                  {isEdit && (
                    <label className="cursor-pointer w-8 h-8 backdrop-blur-xl flex justify-center items-center rounded-lg border-[1px] border-white absolute bottom-1 right-1">
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
                <div className="flex flex-col gap-5 sm:w-9/12">
                  <InputField
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    disabled={!isEdit}
                  />
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
                        className="w-full sm:w-36 "
                      />
                    </div>
                  )}
                </div>
              </Form>
            </fieldset>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default UpdateProfile;
