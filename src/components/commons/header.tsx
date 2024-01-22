import React, { useEffect, useState } from "react";
import { i18nInstance } from "../../i18n.ts";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  IconButton,
  Image,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Text,
  UnorderedList,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  RadioGroup,
  Radio,
  CloseButton,
  List,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDetails } from "../../hooks/useUserDetails.ts";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from '@chakra-ui/react'
import { BaseUrl } from "../../const.ts";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [token, setToken] = useState<Boolean>(false);

  // Fetch user details
  const { data } = useUserDetails(Cookies.get("userId"));
  const profileImage = data?.body.userView.profilePhoto;
  const userName = data?.body.userView.userName.slice(0, 2);

  // Language change handler
  const changeLanguage = (lang: string) => {
    document.documentElement.setAttribute("lang", lang);
    i18nInstance.changeLanguage(lang);
  };

  // log out parts
  const logoutHandler = () => {
    if (Cookies.get("access")) {
      Cookies.remove("access");
      navigate("/sign-in");
    } else {
      console.log("Access cookie not found");
    }
  };

  useEffect(() => {
    const accessToken = Cookies.get("access");
    if (accessToken) {
      setToken(!token);
    }
  }, []);

  // hamburger 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={{ base: "25px 4vw", md: "25px 10vw" }}
      bgColor="#fff"
      w="100%"
      margin={"auto"}
      position="fixed"
      zIndex={"2"}
    >
      <Link to="/">
        <Image
          src="../assests/logo.png"
          alt="Dan Abramov"
          w={{ base: "110px", md: "180px" }}
          h={{ base: "23px", md: "40px" }}
          cursor="pointer"
        />
      </Link>

      <UnorderedList
        display={{ base: "none", md: "flex" }}
        listStyleType="none"
        // display="flex"
        gap="50px"
        fontWeight="500"
        fontSize="20px"
      >
        <ListItem
          _hover={{
            color: "#8F64FF",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/about">{t("About")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#8F64FF",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/contact">{t("Contact")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#8F64FF",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/events">{t("Events")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#8F64FF",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/searchevent">{t("SearchEvent")}</Link>
        </ListItem>
      </UnorderedList>
      <Box display="flex" alignItems="center" gap={{ base: "10px", md: "20px" }}>
        {/* Language Select */}
        <Select
          width="100px"
          gap="8px"
          alignItems="center"
          bg="transparent"
          p="8px"
          borderRadius="100px"
          cursor="pointer"
          border="1px solid #8F64FF"
          fontWeight="600"
          onChange={(e) => changeLanguage(e.target.value)}
          color="#8F64FF"
        >
          <option value="en">EN</option>
          <option value="az">AZ</option>
          <option value="ru">RU</option>
        </Select>

        {/* Sign In Button */}
        {!token && (
          <Link to="/sign-in">
            <Button
              cursor="pointer"
              color="#fff"
              bg="#8F64FF"
              fontSize="20px"
              p=" 20px 14px"
              fontWeight="400"
              borderRadius="50px"
              border="1px solid gray"
              _hover={{ transition: "color 0.5s", textDecoration: "underline" }}
            >
              Sign in
            </Button>
          </Link>
        )}

        {/* User Menu */}
        {token && (
          <Menu>
            <MenuButton
              as={IconButton}
              borderRadius="full"
              aria-label="Options"
              icon={
                profileImage !== undefined ? (
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={`${BaseUrl}/images/${data?.body?.userView?.profilePhoto}`}
                    alt="Profile Image"
                    w={"45px"}
                    height={"45px"}
                  />
                ) : (
                  <Text
                    pt="12px"
                    bg="#8F64FF"
                    color="white"
                    borderRadius="full"
                    boxSize="150px"
                    w={"45px"}
                    height={"45px"}
                  >
                    {userName}
                  </Text>
                )
              }
              variant="outline"
            />
            <MenuList minWidth="180px">
              <MenuOptionGroup title="Profile" type="radio">
                <Link to="/account">
                  <MenuItemOption minH="24px">
                    {token && (
                      <Box display="flex" alignItems="center" gap="5px">
                        <Text>{t("Your profile")}</Text>
                      </Box>
                    )}
                  </MenuItemOption>
                </Link>
                <MenuDivider />
                <MenuItemOption color="red" onClick={logoutHandler} minH="24px">
                {t("Log out")}
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        )}
        {/* Hamburger Menu */}
        <Box display={{ base: "flex", md: "none" }}>
          <Box>
            <HamburgerIcon fontSize={"25px"} onClick={onOpen} />
            <Drawer onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader display={"flex"} justifyContent={"space-between"} gap={"10px"} borderBottomWidth='1px' color={"8F64FF"}>Pages<CloseButton w={"30px"} onClick={onClose} /></DrawerHeader>
                <DrawerBody>
                  <Box display={"flex"} flexDirection={"column"} >
                    <Box
                      onClick={onClose} 
                      _hover={{
                        color: "#8F64FF",
                        transition: "color 0.5s",
                        textDecoration: "underline",

                      }} >
                      <Box
                        fontSize={"25px"}
                        fontWeight={"400"}>
                        <Link to="/about">{t("About")} </Link>

                      </Box>

                    </Box>
                    <Box
                      _hover={{
                        color: "#8F64FF",
                        transition: "color 0.5s",
                        textDecoration: "underline",
                        fontSize: "25px",
                        fontWeight: "400"
                      }} >
                      <Box
                        onClick={onClose} 
                        fontSize={"25px"}
                        fontWeight={"400"}>
                        <Link to="/contact">{t("Contact")}</Link>
                      </Box>
                    </Box>
                    <Box
                      _hover={{
                        color: "#8F64FF",
                        transition: "color 0.5s",
                        textDecoration: "underline",
                        fontsize: "25px",
                        fontWeight: "400"
                      }} >
                      <Box
                        onClick={onClose} 
                        fontSize={"25px"}
                        fontWeight={"400"}>
                        <Link to="/events">{t("Events")}</Link>
                      </Box>
                    </Box>
                    <Box
                      _hover={{
                        color: "#8F64FF",
                        transition: "color 0.5s",
                        textDecoration: "underline",
                        fontsize: "25px",
                        fontWeight: "400"
                      }} >
                      <Box
                      onClick={onClose} 
                        fontSize={"25px"}
                        fontWeight={"400"}>
                        <Link to="/searchevent">{t("SearchEvent")}</Link>
                      </Box>
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
