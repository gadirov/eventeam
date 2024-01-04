import Cookies from "js-cookie";
import { axiosInstance } from "../services/index.ts";

export const fetcher = (url: string, config?: any) =>
  axiosInstance.get(url, { headers: config }).then((res) => {
    return res.data;
  });
export const blobFetcher = (url: any) =>
  axiosInstance
    .get(url, {
      responseType: "blob",
    })
    .then((res) => res.data);
export const post = (url: string, data: any, config?: any) =>
  axiosInstance.post(url, data, config).then((res) => res.data);
export const put = (url: string, data: any, config?: any) =>
  axiosInstance.put(url, data, config).then((res) => res.data);
export const remove = (url: string, data: any) =>
  axiosInstance.delete(url, data).then((res) => res.data);

export const AxiosInterceptorsSetup = (
  navigate,
  axiosInstance,
  refreshTokenUrl
) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;
      if (originalRequest?.url === refreshTokenUrl) {
        localStorage.clear();
        Cookies.remove("access");
        Cookies.remove("refresh");
        navigate("/login");
        return;
      }

      return Promise.reject(error.response?.data);
    }
  );
};
export default axiosInstance;
