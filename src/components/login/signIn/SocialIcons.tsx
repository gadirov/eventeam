import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SocialIcons() {

  return (
    <Flex className="icons" justify="space-between" w="100%" mt="10px">
      <Box
        className="icon"
        w="20%"
        p="12px 16px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="72px"
        cursor="pointer"
        border="1px solid #E3E7EB"
        background="#f8f8f8"
      >
        <Image
          src="../assests/login/google-icon.svg"
          alt=""
          w="24px"
          h="24px"
        />
      </Box>
      <Box
        className="icon"
        w="20%"
        p="12px 16px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="72px"
        cursor="pointer"
        border="1px solid #E3E7EB"
        background="#f8f8f8"
      >
        <Image src="../assests/login/fb-icon.svg" alt="" w="24px" h="24px" />
      </Box>
      <Box
        className="icon"
        w="20%"
        p="12px 16px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="72px"
        cursor="pointer"
        border="1px solid #E3E7EB"
        background="#f8f8f8"
      >
        <Image src="../assests/login/apple-icon.svg" alt="" w="24px" h="24px" />
      </Box>
    </Flex>
  );
}
