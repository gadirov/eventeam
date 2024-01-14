import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useUserDetails } from "../../hooks/useUserDetails.ts";
import Cookies from "js-cookie";

const Account = () => {
  const id = Cookies.get("userId");
  const { data } = useUserDetails(id);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Box py={"200px"}>
      <Container
        maxW="1000px"
        display={"Flex"}
        justifyContent={"space-between"}
      >
        <Flex gap={"24px"} direction={"column"} w={"562px"}>
          <Heading fontSize={"45px"}>Organizer Profile</Heading>
          <Text w={"467px"} color={"#667085"} fontWeight={"500"}>
            Create an organizer profile so attendees can browse all your events
            in one place
          </Text>
        </Flex>
      </Container>
      <Box my={"50px"}>
        <Container
          maxW="1000px"
          display={"flex"}
          flexDirection={"column"}
          bg={"#F9FAFB"}
          borderRadius={"10px"}
          p={"60px"}
        >
          <Flex
            w={"566px"}
            justify={"flex-start"}
            gap={"32px"}
            align="center"
            mb={"40px"}
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w={"160px"}
              height={"160px"}
            />
            <Button color={"#EAECF0"} bg={"#7F56D9"}>
              Upload New Picture
            </Button>
            <Button bg={"#EAECF0"}>Remove</Button>
          </Flex>
          <FormControl mb={"40px"}>
            <FormLabel>USERNAME</FormLabel>
            <Input
              placeholder="Basic usage"
              disabled
              value={data?.body?.userView?.userName}
            />
          </FormControl>
          <FormControl mb={"40px"}>
            <FormLabel>EMAIL</FormLabel>
            <Input
              placeholder="Basic usage"
              disabled
              value={data?.body?.userView?.email}
            />
          </FormControl>

          <Flex justify={"center"} mt={"40px"} gap={"20px"}>
            <Button w={"349px"}>View Profile</Button>
            <Button w={"349px"} bg={"#7F56D9"} color={"#fff"}>
              Save Profile
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Account;
