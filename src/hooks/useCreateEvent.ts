import { useState } from "react";
import { post } from "../config/axiosConfig.ts";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const useCreateEvent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const toast = useToast();

  const submit = async (data) => {
    setLoading(!loading);
    try {
      await post("events-ms/api/v1/events", data);
      toast({
        position: "top",
        title: "Modiratora gönderildi",
        status: "success",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "Not create event",
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
