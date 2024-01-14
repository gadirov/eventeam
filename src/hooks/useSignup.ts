import { useNavigate } from "react-router-dom";
import { post } from "../config/axiosConfig.ts";
import { useToast } from "@chakra-ui/react";

export const useSignup = () => {
    const navigate = useNavigate();
    const toast = useToast();
  
    const submit = async (data) => {
      //convert image base64
      const file = btoa(data.profilePhoto);
      data.profilePhoto = `data:image/png;base64,${file}`;     
      try {
        const res = await post("user/login/register", data);
        toast({
          position: "top",
          title: "Successly login",
          status: "success",
          isClosable: true,
        });
        navigate("/sign-in");
      } catch (error) {
        toast({
          position: "top",
          title: "Incorrect username or password",
          status: "error",
          isClosable: true,
        });
        console.log(error);
      }
    };
    return { submit };
  };