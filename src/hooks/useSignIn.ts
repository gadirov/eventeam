import { useNavigate } from "react-router-dom";
import { post } from "../config/axiosConfig.ts";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

export const useSignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const submit = async (data) => {
    try {
      const res = await post("user/login/signIn", data);
      Cookies.set("accsess", res.body.token);
      Cookies.set("userId", res.body.userId);
      toast({
        position: "top",
        title: "success",
        status: "success",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "error",
        status: "error",
        isClosable: true,
      });
      console.log(error);
    }
  };
  return { submit };
};
