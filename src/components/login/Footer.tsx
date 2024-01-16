import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text fontSize="20px" fontWeight="400" textAlign="center" mb="5px">
        By registering or logging in, you agree to our{" "}
        <span style={{ color: "#7848f4", cursor: "pointer" }} onClick={onOpen}>
          Terms and Privacy Policy
        </span>
      </Text>

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
    </>
  );
}
