import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import InputPassword from "../signIn/InputPassword.tsx";
// import SocialIcons from "../signIn/SocialIcons.tsx";
import { FormProvider, useForm } from "react-hook-form";
import InputFullname from "./InputFullname.tsx";
import InputDate from "./InputDate.tsx";
import InputRadio from "./inputGender.tsx";
import InputFile from "./InputFile.tsx";
import { useSignup } from "../../../hooks/useSignup.ts";
import SignupEmail from "./signupEmail.tsx";
// import { DevTool } from "@hookform/devtools";

const SignUp = () => {
  const methods = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
      birthday: "",
      gender: "UNKNOWN",
      profilePhoto: "2022/JANUARY/1/avatarProfile.png",
    },
  });
  const { submit } = useSignup();
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
            <InputFullname />
            <SignupEmail />
            <InputPassword />
            <Box>
              <InputDate />
              <InputRadio />
            </Box>
            <InputFile />
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
              Sign up
            </Button>
          </form>
          {/* <Text textAlign="center" color="#707070" fontSize="18px">or</Text> */}
          {/* <SocialIcons /> */}
        </Box>
        <Footer />
      </VStack>
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
};

export default SignUp;
