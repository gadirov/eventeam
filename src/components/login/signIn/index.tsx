import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer.tsx";
import Header from "../Header.tsx";
import Email from "./Email.tsx";
import Password from "./Password.tsx";
// import SocialIcons from "./SocialIcons.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSignIn } from "../../../hooks/useSignIn.ts";

// import { DevTool } from "@hookform/devtools";

const SignIn = () => {
  const { t } = useTranslation();
  const methods = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const { submit, loading } = useSignIn();
  const onSubmit = (data: any) => {
    submit(data);
  };
  if (loading) {
    return (
      <Box
        position={"absolute"}
        w="100vw"
        h={"100vh"}
        bg="#fff"
        zIndex={99}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image top="50%" left="50%" src="../assests/login/loadingGif.gif" />
      </Box>
    );
  }
  return (
    <FormProvider {...methods}>
      <VStack minH="100vh" justifyContent="space-between" p="10px 0">
        <Header />
        <Box w="54%" display="flex" flexDirection="column" gap="30px">
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
            <Email />
            <Password />
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
            Don't have an account?{" "}
            <Link to="signup">
              <span style={{ color: "#7848f4", fontWeight: "600" }}>
                {t("signin.signup")}
              </span>
            </Link>
          </Text>
        </Box>
        <Footer />
      </VStack>
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
};

export default SignIn;
