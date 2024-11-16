import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});
export const AdminSchema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  secret_key: yup.string(),
});
