import { useEffect, useState } from "react";
import { post } from "../config/axiosConfig.ts";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};
export const useEventImage = () => {
  const [image, setImage] = useState();

//   useEffect(()=> {
//     // !!image && callback("browse", image);
//   },[image])


  const submit = async (data) => {
    const formdata = new FormData();
    formdata.append("file", data as any);
    try {
      const data = await post("photo-ms/images/upload", formdata, config);
      setImage(data.body);
    } catch (error) {
      console.log(error);
    }
  };
  return { image, submit };
};
