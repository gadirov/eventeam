import * as Yup from "yup";

export const accountSchema = Yup.object().shape({
    username: Yup.string().required("userName is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: Yup.string().required(),
    gender: Yup.string().required(),
    profilePhoto: Yup.string().required(),
  });