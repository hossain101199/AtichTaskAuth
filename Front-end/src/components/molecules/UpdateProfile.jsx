import EditIcon from "@/assets/svgs/EditIcon";
import { updateProfileValidationSchema } from "@/utils/validationSchemas/updateProfileValidationSchema";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../atoms/Card";
import InputField from "../atoms/InputFeild";
import MHeading from "../atoms/MHeading";
import SpinnerButton from "../atoms/SpinnerButton";
import XLParagraph from "../atoms/XLParagraph";

const UpdateProfile = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);

  const initialValues = {
    name: profile?.data.name,
    email: profile?.data.email,
    contactNo: profile?.data.contactNo,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(false);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
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
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={updateProfileValidationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isSubmitting}>
              <Form className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                  {profile?.data?.profileImg && (
                    <Image
                      className="h-40 w-40 rounded-full"
                      width={0}
                      height={0}
                      src={profile?.data?.profileImg}
                      alt=""
                    />
                  )}
                  {isEdit ? (
                    <InputField
                      name="name"
                      type="text"
                      placeholder="Full Name"
                    />
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
                        isLoading={isSubmitting}
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
