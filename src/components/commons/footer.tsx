import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Icon,
  ListItem,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const LocationIcon = () => {
  return <Icon as={MdLocationOn} boxSize={6} color="white" />;
};
const FacebookIcon = () => {
  return (
    <Link href="https://www.facebook.com/eventeamapp" isExternal>
      <Icon
        as={FaFacebook}
        boxSize={8}
        color="white"
        _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
      />
    </Link>
  );
};
const WhatsappIcon = () => {
  return (
    <Link href="https://web.whatsapp.com/" isExternal>
      <Icon
        as={FaWhatsapp}
        boxSize={8}
        color="white"
        _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
      />
    </Link>
  );
};
const LinkedinIcon = () => {
  return (
    <Link href="https://www.linkedin.com/eventeamapp" isExternal>
      <Icon
        as={FaLinkedin}
        boxSize={8}
        color="white"
        _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
      />
    </Link>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack minH="400px" bg="#090632" color="white" gap="20px">
      <Box
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "50px", md: "200px" }}
        display="flex"
        m="50px 0 20px 0"
      >
        <VStack alignItems={{ base: "start", md: "center" }}>
          <Text fontSize="30px" fontWeight="600" pb="3px" ml="-5px">
            {t("Quick Link")}
          </Text>
          <UnorderedList>
            <Link  href="/about" _hover={{ textDecoration: "none"}}>
              <ListItem
                _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
                pb="10px"
                cursor="pointer"
              >
                {t("About")}
              </ListItem>
            </Link>
            <Link href="/contact" _hover={{ textDecoration: "none"}}>
              <ListItem
                _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
                pb="10px"
                cursor="pointer"
                
              >
                {t("Contact")}
              </ListItem>
            </Link>
            <ListItem
              _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
              pb="10px"
              cursor="pointer"
              onClick={onOpen}
            >
              {t("Terms&Conditions")}
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack alignItems="flex-start" mt="-5px">
          <Text fontSize="35px" fontWeight="600" pb="3px" ml="-5px">
            {t("Contact")}
          </Text>
          <UnorderedList listStyleType="none" m="0">
            <Box
              _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
              display="flex"
              alignItems="center"
              pb="10px"
              ml="-6px"
              gap="10px"
            >
              <LocationIcon />
              <ListItem cursor="pointer">{t("Footer Location")}</ListItem>
            </Box>
            <Box
              _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
              display="flex"
              alignItems="center"
              pb="10px"
              gap="10px"
            >
              <PhoneIcon />
              <ListItem cursor="pointer">+994 55 967 72 82</ListItem>
            </Box>
            <Box
              _hover={{ color: "#8F64FF", transition: "color 0.5s" }}
              display="flex"
              alignItems="center"
              pb="10px"
              gap="10px"
            >
              <EmailIcon />
              <ListItem
                as="a"
                href={`mailto:${"eventeam@gmail.com"}`}
                cursor="pointer"
              >
                eventeam@gmail.com
              </ListItem>
            </Box>
          </UnorderedList>
        </VStack>
      </Box>
      <Divider w="70%" />
      <Box
        display={{ base: "column", md: "flex" }}
        w="70%"
        justifyContent="space-between"
        mb="50px"
      >
        <Text pb={{ base: "20px", md: "0px" }} fontSize="20px">
          {t("CopyRight")}
        </Text>
        <Box display="flex" gap="20px" cursor="pointer">
          <FacebookIcon />
          <WhatsappIcon />
          <LinkedinIcon />
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
          <ModalHeader
            borderBottom="1px solid white"
            fontSize="24px"
            p="20px 0 10px 0"
          >
            {t("Eventeam Terms")}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody
            textAlign="justify"
            fontSize="16px"
            padding="20px 0 10px 0"
          >
            {t("By accessing")}
            <br />
            <br />
            <strong>{t("Registration")}:</strong> {t("Registration info")}
            <br /> <br />
            <strong>{t("Account Security")}:</strong> {t("Account info")}
            <br /> <br />
            <strong>{t("Prohibited Activities")}:</strong> {t("Prohibited info")}
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
