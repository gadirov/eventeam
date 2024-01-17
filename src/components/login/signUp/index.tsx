import React, { useState } from "react";
import { Box, Button, Heading, Spinner, VStack } from "@chakra-ui/react";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import Password from "../signIn/Password.tsx";
import { FormProvider, useForm } from "react-hook-form";
import Fullname from "./Fullname.tsx";
import Date from "./Date.tsx";
import Gender from "./Gender.tsx";
import File from "./File.tsx";
import { useSignup } from "../../../hooks/useSignup.ts";
import Email from "./Email.tsx";


const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
      birthday: "",
      gender: "UNKNOWN",
      profilePhoto: "",
    },
  });
  const { submit } = useSignup();
  const onSubmit = (data: any) => {

    submit(data);
    if(data.profilePhoto !== ""){
      setIsLoading(!isLoading);
    }
  };

  return (
    <FormProvider {...methods}>
      <VStack
        width="768px"
        flex={{ base: "1", lg: "1", xl: "5 1 0" }}
        minH="100vh"
        justifyContent="space-between"
        p="10px 0"
      >
        <Header />
        <Box w="50%" display="flex" flexDirection="column" gap="10px">
          <Heading
            textAlign="center"
            m="-50px 0 30px 0"
            fontSize="48px"
            color="#7848F4"
            fontStyle="italic"
          >
            Sign up
          </Heading>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Fullname />
            <Email />
            <Password />
            <Box>
              <Date />
              <Gender />
            </Box>
            <File />
            <Button
              mt="30px"
              w="100%"
              cursor="pointer"
              _hover={{ color: "white" }}
              p="25px 0"
              type="submit"
              borderRadius="6px"
              border="1px solid #bababc"
              fontSize="18px"
              fontWeight="600"
              color="#fff"
              bg="#7848F4"
            >
              {isLoading ? <Spinner/> : "Sign up"}
            </Button>
          </form>
          {/* <Text textAlign="center" color="#707070" fontSize="18px">or</Text> */}
          {/* <SocialIcons /> */}
        </Box>
        <Footer />
      </VStack>
    </FormProvider>
  );
};

export default SignUp;
