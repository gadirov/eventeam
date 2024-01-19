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
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDetails } from "../../hooks/useUserDetails.ts";

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

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="25px 10vw"
      bgColor="#fff"
      w="100vw"
      position="fixed"
      zIndex={"2"}
    >
      <Link to="/">
        <Image
          src="../assests/logo.png"
          alt="Dan Abramov"
          w="180px"
          h="40px"
          cursor="pointer"
        />
      </Link>
      <UnorderedList
        listStyleType="none"
        display="flex"
        gap="50px"
        fontWeight="500"
        fontSize="20px"
      >
        <ListItem
          _hover={{
            color: "#66f5ff",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/about">{t("About")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#66f5ff",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/contact">{t("Contact")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#66f5ff",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/events">{t("Events")}</Link>
        </ListItem>
        <ListItem
          _hover={{
            color: "#66f5ff",
            transition: "color 0.5s",
            textDecoration: "underline",
          }}
          cursor="pointer"
        >
          <Link to="/searchevent">SearchEvent</Link>
        </ListItem>
      </UnorderedList>
      <Box display="flex" alignItems="center" gap="20px">
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
                    src={`http://173.212.221.237/images/${data?.body?.userView?.profilePhoto}`}
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
                        <Text>Your profile</Text>
                      </Box>
                    )}
                  </MenuItemOption>
                </Link>
                <MenuDivider />
                <MenuItemOption color="red" onClick={logoutHandler} minH="24px">
                  Log out
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};

export default Header;
