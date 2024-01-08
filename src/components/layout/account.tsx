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

const Account = () => {
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
                Orginizer Name
            </FormLabel>
            <Input placeholder='Basic usage' />
          </FormControl>
          <FormControl mb={"40px"}>
            <FormLabel>
                About the Orginizer
            </FormLabel>
            <Textarea  />
          </FormControl >
          <FormControl display={"flex"} gap={"5px"} mb={"40px"}>
            <Checkbox size='lg' />
            <Text>Use This Description On My Event Pages</Text>
          </FormControl>
          <FormControl mb={"40px"}>
            <FormLabel>
                Your Website
            </FormLabel>
            <Input defaultValue={"htttp:/fuadevents.com"}  type="text"/>
          </FormControl>
          <FormControl>
            <FormLabel>
                 Organizer Page URL
            </FormLabel>
            <Input defaultValue={"htttp:/fuadevents.com"}  type="text"/>
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
