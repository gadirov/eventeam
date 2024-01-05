import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Divider, Icon, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const LocationIcon = () => {
  return <Icon as={MdLocationOn} boxSize={6} color="white" />;
};
const FacebookIcon = () => {
  return (
      <Link href="https://www.facebook.com/eventeamapp" isExternal>
        <Icon as={FaFacebook} boxSize={8} color="white"  _hover={{ color: "#66f5ff", transition: "color 0.5s"}}/>
      </Link>
  );
};
const InstagramIcon = () => {
  return (
    <Link href="https://www.instagram.com/eventeam.app/" isExternal>
        <Icon as={FaInstagram} boxSize={8} color="white" _hover={{ color: "#66f5ff", transition: "color 0.5s"}}/>
    </Link>
  );
};
const LinkedinIcon = () => {
  return (
    <Link href="https://www.linkedin.com/eventeamapp" isExternal>
      <Icon as={FaLinkedin} boxSize={8} color="white" _hover={{ color: "#66f5ff", transition: "color 0.5s"}}/>
    </Link>
  );
};

 const Footer = () => {
  const { t } = useTranslation();
  return (
    <VStack minH="400px" bg="#111833" color="white" gap="20px" >
        <Box display="flex" w="70%" gap="200px" m="50px 0 20px 0">
            <VStack alignItems="flex-start">
                <Text fontSize="30px" fontWeight="600" pb="3px" ml="-5px">{t("Quick Link")}</Text>
                <UnorderedList  >
                  <ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px" cursor="pointer">{t("About")}</ListItem>
                  <ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px"cursor="pointer">{t("Contact")}</ListItem>
                  <ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px" cursor="pointer">{t("Privacy Policy")}</ListItem>
                  <ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px" cursor="pointer">{t("Terms&Conditions")}</ListItem>
                </UnorderedList>
            </VStack>
            <VStack alignItems="flex-start" mt="-5px">
                <Text fontSize="35px" fontWeight="600" pb="3px">{t("Contact")}</Text>
                <UnorderedList listStyleType="none" m="0">
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" gap="10px"><LinkIcon/><ListItem  cursor="pointer">eventeam.az</ListItem></Box>
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" ml="-6px" gap="10px"><LocationIcon/><ListItem  cursor="pointer">Baku, Azerbaijan</ListItem></Box>
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" gap="10px"><PhoneIcon/><ListItem  cursor="pointer">+994 55 967 72 82</ListItem></Box>
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" gap="10px"><EmailIcon/><ListItem  cursor="pointer">eventeam@gmail.com</ListItem></Box>
               </UnorderedList>
            </VStack>
        </Box>
        <Divider w="70%" />
        <Box display="flex" w="70%" justifyContent="space-between" mb="50px">
          <Text fontSize="20px">{t("CopyRight")}</Text>
          <Box display="flex" gap="20px" cursor="pointer">
              <FacebookIcon/>
              <InstagramIcon/>
              <LinkedinIcon/>
          </Box>
        </Box>
    </VStack>
  );
};


export default Footer;