import React from "react";
import {
  Box,
  HStack,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useDetails } from "./hooks/useDetails.ts";

function App() {
  const { data } = useDetails();
  console.log("-----", data);
  return (
    <Box w="100vw" minH="100vh">
      <HStack
        display="flex"
        justifyContent="space-between"
        p="10px 64px"
        bgColor="lightgray"
      >
        <Heading>Eventeam</Heading>
        <UnorderedList
          listStyleType="none"
          display="flex"
          gap="20px"
          fontWeight="bold"
        >
          <ListItem>AZ</ListItem>
          <ListItem>EN</ListItem>
          <ListItem>RU</ListItem>
        </UnorderedList>
      </HStack>
      <Heading
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        Eventeam
      </Heading>
    </Box>
  );
}

export default App;
