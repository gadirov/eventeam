import { Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Text fontSize="20px" fontWeight="400" fontStyle="italic" textAlign="center">
      By registring or login, you are agree with our{" "}
      <span style={{ color: "#7848f4" }}>Terms</span> and{" "}
      <span style={{ color: "#7848f4" }}>Privacy Policy</span>
    </Text>
  );
}
