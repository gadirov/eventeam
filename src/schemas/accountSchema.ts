import * as Yup from "yup";
export const accountSchema = Yup.object().shape({
    userName: Yup.string().required("userName is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    birthday: Yup.string().required(),
    gender: Yup.string().required(),
    profilePhoto: Yup.string().required(),
  });
  