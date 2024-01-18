import { useNavigate } from "react-router-dom";
import { post } from "../config/axiosConfig.ts";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export const useSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const toast = useToast();

  const submit = async (data) => {
    setLoading(!loading);
    try {
      const res = await post("user/login/signIn", data);
      Cookies.set("access", res.body.token);
      Cookies.set("userId", res.body.userId);
      toast({
        position: "top",
        title: "Successly login",
        status: "success",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "Incorrect username or password",
        status: "error",
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoading(!loading);
    }
  };
  return { submit, loading };
};
