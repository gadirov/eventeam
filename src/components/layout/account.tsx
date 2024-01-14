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
import React from "react";
import { useUserDetails } from "../../hooks/useUserDetails.ts";

const Account = () => {
  const {data} = useUserDetails("08630c7d-b88a-4013-b32f-b44e4dd66d5f ")
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
        <Select fontWeight={"bold"} py={"26px"} w={"191px"}>
          <option value="Fuad Məmmədov">Fuad Məmmədov</option>
        </Select>
      </Container>
      <Box my={"50px"}>
        <Container
          maxW="1000px"
          display={"flex"}
          flexDirection={"column"}
          bg={'#F9FAFB'}
          borderRadius={"10px"}
          p={"60px"}
          
        >
       
         <Flex w={"566px"} justify={"flex-start"} gap={"32px"} align="center" mb={"40px"}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w={"160px"}
              height={"160px"}
            />
            <Button color={"#EAECF0"} bg={"#7F56D9"}>Upload New Picture</Button>
            <Button bg={"#EAECF0"}>Remove</Button>
          </Flex>
          <FormControl mb={"40px"}>
            <FormLabel>
                 USERNAME
            </FormLabel>
            <Input placeholder='Basic usage' disabled value={"heisnberg"} />
          </FormControl>
          <FormControl mb={"40px"}>
            <FormLabel>
                 EMAIL
            </FormLabel>
            <Input placeholder='Basic usage' disabled value={"heisnberg"} />
          </FormControl>
       
         
      
      
            <Flex justify={"center"} mt={"40px"} gap={"20px"}>
            <Button w={"349px"}>View Profile</Button>
            <Button w={"349px"} bg={"#7F56D9"} color={"#fff"}>Save Profile</Button>
            </Flex>
        </Container>
      </Box>

    
    </Box>
  );
};

export default Account;
