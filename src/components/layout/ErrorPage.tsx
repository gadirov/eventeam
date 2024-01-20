import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box w="100vw">
      <Image pt="60px" h="65.7vh" w="100vw" src="../assests/download.svg" />
    </Box>
  );
}
