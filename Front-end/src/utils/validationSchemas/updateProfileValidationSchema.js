import * as Yup from "yup";

export const updateProfileValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNo: Yup.string()
    .matches(/^\d+$/, "Contact number must contain only digits")
    .min(11, "Contact number must be exactly 11 digits")
    .max(11, "Contact number can't be longer than 11 digits")
    .required("Contact number is required"),
});
