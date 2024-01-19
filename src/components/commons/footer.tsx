import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Icon, ListItem, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


const LocationIcon = () => {
  return <Icon as={MdLocationOn} boxSize={6} color="white" />;
};
const FacebookIcon = () => {
  return (
      <Link  href="https://www.facebook.com/eventeamapp" isExternal>
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack minH="350px" bg="#090632" color="white" gap="20px" >
        <Box display="flex"  gap="200px" m="50px 0 20px 0">
            <VStack alignItems="center">
                <Text fontSize="30px" fontWeight="600" pb="3px" ml="-5px">{t("Quick Link")}</Text>
                <UnorderedList>
                  <Link href="/about"><ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px" cursor="pointer">{t("About")}</ListItem></Link>
                  <Link href="/contact"><ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px"cursor="pointer">{t("Contact")}</ListItem></Link>
                  <ListItem  _hover={{ color: "#66f5ff", transition: "color 0.5s"}} pb = "10px" cursor="pointer" onClick={onOpen}>{t("Terms&Conditions")}</ListItem>
                </UnorderedList>
            </VStack>
            <VStack alignItems="flex-start" mt="-5px">
                <Text fontSize="35px" fontWeight="600" pb="3px" ml="-5px">{t("Contact")}</Text>
                <UnorderedList listStyleType="none" m="0">
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" ml="-6px" gap="10px"><LocationIcon/><ListItem  cursor="pointer">Baku, Azerbaijan</ListItem></Box>
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" gap="10px"><PhoneIcon/><ListItem  cursor="pointer">+994 55 967 72 82</ListItem></Box>
                  <Box _hover={{ color: "#66f5ff", transition: "color 0.5s"}} display="flex" alignItems="center" pb = "10px" gap="10px"><EmailIcon/><ListItem  as="a" href={`mailto:${"eventeam@gmail.com"}`} cursor="pointer">eventeam@gmail.com</ListItem></Box>
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
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          style={{
            background: "linear-gradient(45deg, #5A67D8, #7848f4)",
            borderRadius: "10px",
            maxWidth: "600px",
            padding: "30px",
            color: "white",
          }}
        >
          <ModalHeader borderBottom="1px solid white" fontSize="24px" p="20px 0 10px 0">
            EventTeam Terms and Privacy Policy
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody textAlign="justify" fontSize="16px" padding="20px 0 10px 0">
            By accessing or using the EventTeam platform ("the Platform"), you
            agree to comply with and be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use the Platform.
            <br /><br />
            <strong>Registration:</strong> To access certain features of the
            Platform, you may be required to register for an account. You agree
            to provide accurate, current, and complete information during the
            registration process.
            <br /> <br />
            <strong>Account Security:</strong> You are responsible for
            maintaining the confidentiality of your account credentials. Notify
            us immediately of any unauthorized use of your account or any other
            security breaches.
            <br /> <br />
            <strong> Prohibited Activities:</strong> Users shall not engage in
            any unlawful, abusive, or otherwise inappropriate conduct while
            using the Platform. This includes, but is not limited to, violating
            any applicable laws or regulations.
          </ModalBody>
          <ModalFooter>
            <Button bg="white" color="black" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};


export default Footer;