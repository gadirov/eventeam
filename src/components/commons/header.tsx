import React from "react";
import { i18nInstance } from '../../i18n.ts';
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Image,
  ListItem,
  Select,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Header = () => {

  const { t } = useTranslation();
  const changeLanguage = (lang: string) => {
    document.documentElement.setAttribute("lang", lang)
    i18nInstance.changeLanguage(lang)
  }   //i18 parts
  
  return (
    <Box display="flex"
        justifyContent="space-between"
        p="25px 10vw"
        bgColor="#EDF2F7"
        w="100vw"
        position="fixed"
      >
        <Image src="./assests/logo.png" alt='Dan Abramov' w="180px" h="40px" />
        <UnorderedList
          listStyleType="none"
          display="flex"
          gap="50px"
          fontWeight="500"
          fontSize="20px"
        >
          <ListItem cursor="pointer"><Link to="/">{t("Home")}</Link></ListItem>
          <ListItem cursor="pointer"><Link to="/about">{t("About")}</Link></ListItem>
          <ListItem cursor="pointer"><Link to="/contact">{t("Contact")}</Link></ListItem>
          <ListItem cursor="pointer"><Link to="/events">{t("Events")}</Link></ListItem>
        </UnorderedList>
        <Box display="flex" alignItems="center" gap="20px">
        <Select
        width="100px"
        gap="8px"
        alignItems="center"
        bg="transparent"
        p="8px"
        borderRadius="100px" 
        cursor="pointer"
        border="1px solid gray"
        onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="az">AZ</option>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </Select>
            <Button cursor="pointer" p="18px 24px" borderRadius="100px" border="1px solid gray">Sign in</Button>
        </Box>
      </Box>
  )
};

export default Header;