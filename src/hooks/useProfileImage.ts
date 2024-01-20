import { post } from "../config/axiosConfig.ts";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};
export const useProfileImage = (callback) => {

  const submit = async (data) => {
    const formdata = new FormData();
    formdata.append("file", data as any);
    try {
      const data = await post("photo-ms/images/upload", formdata, config);
      callback("profilePhoto", data.body);
    } catch (error) {
      console.log(error);
    }
  };
  return { submit };
};
