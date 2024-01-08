import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LeftSide() {
  const { t } = useTranslation();
  return (
    <Box
       background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(./assests/signin.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      width="1000px"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap="30px"
    >
      <Heading fontFamily="sans-serif">{t("signin.welcome")}</Heading>
      <Text fontFamily="sans-serif">{t("signin.welcomeText")}</Text>
      <Button  p="30px 50px"fontSize="20px" color="#fff" bg="rgba(118, 116, 140, 0.7)" _hover={{ background: "rgba(118, 116, 140, 0.9)" }}>{t("signin.signup")}</Button>
    </Box>
  );
}
