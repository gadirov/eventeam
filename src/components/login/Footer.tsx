import { Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Text fontSize="20px" fontWeight="400" fontStyle="italic" textAlign="center">
      By registring or login, you are agree with our{" "} <br />
      <span style={{ color: "#66f5ff" }}>Terms</span> and{" "}
      <span style={{ color: "#66f5ff" }}>Privacy Policy</span>
    </Text>
  );
}
