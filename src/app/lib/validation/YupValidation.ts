import { ENUM_USER_ROLE } from "@/app/types/Iuser";
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

export const ClassSchema = yup.object().shape({
  className: yup.string().required("Class name is required."),
  trainer: yup.string().required("Trainer is required."),
  date: yup.date().required("Date is required."),
  time: yup
    .string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format")
    .required("Time is required"),
});
export const UpdatTrainerScema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
  role: yup
    .string()
    .oneOf(Object.values(ENUM_USER_ROLE), "Role is required and must be valid")
    .required("Role is required"),
});
export const UpdateUserSchema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
});
