import React from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import InputPassword from "./InputPassword.tsx";
import InputText from "./InputText.tsx";
import SocialIcons from "./SocialIcons.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignIn } from "../../../hooks/useSignIn.ts";
// import { DevTool } from "@hookform/devtools";

const SignIn = () => {
  const methods = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const { submit } = useSignIn();
  const onSubmit = (data: any) => {
    submit(data);
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
        <Box w="44%" display="flex" flexDirection="column" gap="30px">
          <Heading
            textAlign="center"
            m="-50px 0 10px 0"
            fontSize="48px"
            color="#7848F4"
            fontStyle="italic"
          >
            Sign in
          </Heading>
          <FormControl as="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <InputText />
            <InputPassword />
            <Box display="flex" justifyContent="flex-end" mt="5px">
              <Text
                cursor="pointer"
                color="#707070"
                fontWeight="600"
                lineHeight="16px"
              >
                <Link to="forgetpassword">Forgot your password?</Link>
              </Text>
            </Box>
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
              Sign in
            </Button>
          </FormControl>
          <Text textAlign="center" color="#707070" fontSize="18px">
            or
          </Text>
          <SocialIcons />
        </Box>
        <Footer />
      </VStack>
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
};

export default SignIn;
