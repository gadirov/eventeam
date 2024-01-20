import { useState } from "react";
import { post } from "../config/axiosConfig.ts";

export const useCreateEvent = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async (data) => {
    setLoading(!loading);
    try {
      await post("events-ms/api/v1/events", data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(!loading);
    }
  };
  return { submit, loading };
};
