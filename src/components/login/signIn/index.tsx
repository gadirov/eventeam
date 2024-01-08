import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <VStack
      width="768px"
      flex={{ base: "1", lg: "1", xl: "5 1 0" }}
      minH="100vh"
      justifyContent="space-between"
      p="10px 0"
    >
      <Header />
      <Text fontSize="48px">{t("Sign in")}</Text>
      <Footer />
    </VStack>
  );
};

export default SignIn;
