import * as Yup from "yup";

export const changePasswordValidationSchema = Yup.object({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[^\w]/, "Password must contain at least one symbol")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "New passwords must match")
    .required("Confirm new password is required"),
});
