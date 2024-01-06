import { Box, Container, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

export default function SearchEvent() {
  return (
    <Box pt="200px">
      <Container maxW="1170px">
        <Input
          py={"20px"}
          size={"lg"}
          placeholder="Search Here..."
          fontWeight={"bold"}
        />
       <Flex justify={"flex-start"} gap={"20px"} my={"40px"}>
       <Select placeholder="Month" fontWeight={"bold"} w={"141px"} bg={"#F2F4F7"}>
          <option value="option1">Option </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Category" fontWeight={"bold"} w={"141px"} bg={"#F2F4F7"}>
          <option value="option1">Option </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Free" fontWeight={"bold"} w={"141px"} bg={"#F2F4F7"}>
          <option value="option1">Option </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
       </Flex>
      </Container>
    </Box>
  );
}
