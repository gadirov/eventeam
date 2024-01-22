import {
  Box,
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t}=useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const modalAcceptHandler = () => {
    setCheckbox(!checkbox);
    onClose();
  };

  const modalCloseHandler = () => {
    setCheckbox(!checkbox);
    onClose();
  };

  return (
    <>
      <Box display="flex" p={{base:"0px 30px", md:"0px"}}>
        <Checkbox
          colorScheme="purple"
          size="lg"
          mr="10px"
          isChecked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        ></Checkbox>
        <Text fontSize="16px" fontWeight="400" textAlign="center" mb="5px">
          {t("Agreement")}{" "}
          <span
            style={{ color: "#7848f4", cursor: "pointer" }}
            onClick={onOpen}
          >
            {t("Terms Privacy")}
          </span>
        </Text>
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
            By accessing or using the EventTeam platform ("the Platform"), you
            agree to comply with and be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use the Platform.
            <br />
            <br />
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
          <ModalFooter display="flex" justifyContent="space-between">
            <Button bg="white" color="black" onClick={modalCloseHandler}>
              Close
            </Button>
            <Button
              bg="white"
              color="black"
              mr={3}
              onClick={modalAcceptHandler}
            >
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
