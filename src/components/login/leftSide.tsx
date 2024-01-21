import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
export default function LeftSide() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  //back arrow part
  const backHandler = () => {
    if (location.pathname === "/sign-in") {
      if (Cookies.get("access")) {
        navigate(-1);
      } else {
        toast({
          position: "top",
          title: "Please sign in!",
          status: "error",
          isClosable: true,
        });
      }
    } else {
      navigate(-1);
    }
  };
  return (
    <Box
      background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(../assests/signin.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      // width="1000px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap="30px"
    >
      <ChevronLeftIcon
        w="60px"
        h="60px"
        position="absolute"
        top="35px"
        left="10px"
        cursor="pointer"
        onClick={backHandler}
      />
      <Heading fontFamily="sans-serif">{t("signin.welcome")}</Heading>
      <Text fontFamily="sans-serif">{t("signin.welcomeText")}</Text>
    </Box>
  );
}
