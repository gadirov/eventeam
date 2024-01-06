import React from "react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

 const DetailView = () => {
  const params = useParams();
  console.log(params);
  return <Heading pt="100px">{params.detailviewid}</Heading>;
};

export default DetailView;