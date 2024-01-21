import { HStack, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { i18nInstance } from "..//..//i18n.ts";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();
  const changeLanguage = (lang: string) => {
    document.documentElement.setAttribute("lang", lang);
    i18nInstance.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <HStack w="100%" justify="space-between" padding="28px 32px">
      <Image
        cursor="pointer"
        alt="Eventteam Logo"
        src="../assests/logo.png"
        w="180px"
        h="40px"
        onClick={() => navigate("/")}
      />
      <UnorderedList
        listStyleType="none"
        display="flex"
        gap="20px"
        fontWeight="500"
        fontSize="20px"
      >
        <ListItem
          _hover={{ color: "#7848f4", transition: "color 0.5s" }}
          cursor="pointer"
          onClick={() => changeLanguage("az")}
          color={selectedLanguage === "az" ? "#7848f4" : "inherit"}
        >
          AZ
        </ListItem>
        <ListItem
          _hover={{ color: "#7848f4", transition: "color 0.5s" }}
          cursor="pointer"
          onClick={() => changeLanguage("en")}
          color={selectedLanguage === "en" ? "#7848f4" : "inherit"}
        >
          EN
        </ListItem>
        <ListItem
          _hover={{ color: "#7848f4", transition: "color 0.5s" }}
          cursor="pointer"
          onClick={() => changeLanguage("ru")}
          color={selectedLanguage === "ru" ? "#7848f4" : "inherit"}
        >
          RU
        </ListItem>
      </UnorderedList>
    </HStack>
  );
}
