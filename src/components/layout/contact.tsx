import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        bg="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .7) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .7) 266.25deg, rgba(7, 20, 80, .7) 1turn)"
        w="100vw"
        h="600px"
        pt="80px"
      >
        <Text
          position="relative"
          top="250px"
          left="80px"
          fontStyle="italic"
          color="#071450"
          fontSize="100px"
        >
          {t("Contact")}
        </Text>
      </Box>
    </>
  );
};
export default Contact;
