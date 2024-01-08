import { AxiosInterceptorsSetup } from "../axiosConfig.ts";
import { useDependencies } from "../../hooks/hooks.ts";
import React from "react";
import { useNavigate } from "react-router-dom";

const AxiosInterceptorNavigate = () => {
  const { axiosInstance, axiosService } = useDependencies();
  const navigate = useNavigate();

  React.useEffect(() => {
    AxiosInterceptorsSetup(
      navigate,
      axiosInstance,
      axiosService.refreshTokenUrl
    );
  }, []);

  return null;
};
export default AxiosInterceptorNavigate;
