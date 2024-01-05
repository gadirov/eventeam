import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

 const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
    <Image src="./assests/about.jpeg" pt="80px"/><Text position="relative" top="-250px" left="80px" fontStyle="italic" color="#66f5ff" fontSize="100px">{t("Contact")}</Text>
    </>
  );
};
export default Contact;