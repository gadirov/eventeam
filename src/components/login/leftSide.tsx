import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function LeftSide() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  
  const backHandler = () => {
    if(location.pathname === "/sign-in"){
      if (Cookies.get('access')){
        navigate(-1)
      }
      else{
        toast({
          position: "top",
          title: "Please sign in!",
          status: "error",
          isClosable: true,
        });
      }
    }
    else{
      navigate(-1)
    }
  }
  return (
    <Box
       background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(../assests/signin.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      width="1000px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap="30px"
    >
      <ChevronLeftIcon w="60px" h="60px" position="absolute" top="35px"  left="10px" cursor="pointer" onClick={backHandler}/>
      <Heading fontFamily="sans-serif">{t("signin.welcome")}</Heading>
      <Text fontFamily="sans-serif">{t("signin.welcomeText")}</Text>
      <Button  p="30px 50px"fontSize="20px" color="#fff" bg="rgba(118, 116, 140, 0.7)" _hover={{ background: "rgba(118, 116, 140, 0.9)" }}><Link to="signup">{t("signin.signup")}</Link></Button>
    </Box>
  );
}
