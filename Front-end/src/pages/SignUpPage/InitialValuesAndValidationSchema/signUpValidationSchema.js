import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
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
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[^\w]/, "Password must contain at least one symbol")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
