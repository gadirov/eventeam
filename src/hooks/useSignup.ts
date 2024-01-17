import { useNavigate } from "react-router-dom";
import { post } from "../config/axiosConfig.ts";
import { useToast } from "@chakra-ui/react";

export const base64 = (e, setValues) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    setValues("profilePhoto", reader.result);
  });
  reader.readAsDataURL(file);
};

export const useSignup = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const submit = async (data) => {
    try {
      await post("user/login/register", data);
      toast({
        position: "top",
        title: "Successly sign up!",
        status: "success",
        isClosable: true,
      });
      navigate("/sign-in");
    } catch (error) {
      toast({
        position: "top",
        title: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
      console.log(error);
    }
  };
  return { submit };
};

//   import { useNavigate } from "react-router-dom";
// import { post } from "../config/axiosConfig.ts";
// import { useToast } from "@chakra-ui/react";

// export const useSignup = () => {
//   const navigate = useNavigate();
//   const toast = useToast();

//   const config = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//   };

//   const base64 = (file) => {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       return reader.result;
//     });
//     reader.readAsDataURL(file);
//   };

//   const submit = async (data) => {
//     const file = base64(data.profilePhoto[0]);
//     const formdata = new FormData();
//     formdata.append("profilePhoto", file as any);
//     formdata.append("userName", data.userName);
//     formdata.append("login", data.login);
//     formdata.append("password", data.password);
//     formdata.append("birthday", data.birthday);
//     formdata.append("gender", data.gender);
//     try {
//       await post("user/login/register", formdata, config);
//       toast({
//         position: "top",
//         title: "Successly login",
//         status: "success",
//         isClosable: true,
//       });
//       navigate("/sign-in");
//     } catch (error) {
//       toast({
//         position: "top",
//         title: "Incorrect username or password",
//         status: "error",
//         isClosable: true,
//       });
//       console.log(error);
//     }
//   };
//   return { submit };
// };
