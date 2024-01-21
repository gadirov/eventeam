import React from "react";
import { Box, Button, FormControl, Heading, VStack } from "@chakra-ui/react";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import { FormProvider, useForm } from "react-hook-form";
import Password from "../signIn/Password.tsx";
// import { DevTool } from "@hookform/devtools";

const ForgetPassword = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
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
        <Box w="50%" display="flex" flexDirection="column" gap="30px">
          <Heading
            textAlign="center"
            m="-50px 0 10px 0"
            fontSize="36px"
            color="#7848F4"
            fontStyle="italic"
          >
            Forget Password
          </Heading>
          <FormControl as="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <Password />
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
              Forget Password
            </Button>
          </FormControl>
        </Box>
        <Footer />
      </VStack>
    </FormProvider>
  );
};

export default ForgetPassword;
