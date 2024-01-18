import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useUserDetails } from "../../hooks/useUserDetails.ts";
import axios from "axios";
import { accountSchema } from "../../schemas/AccountSchema.ts";
import { IFormAccount } from "../../model.ts";
const Account = () => {
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const id = Cookies.get("userId");
  const { data } = useUserDetails(id);

  const onSubmit = (data) => {
    axios
      .put("http://173.212.221.237/user/user/change-personal-details", data)
      .then((response) => {
        console.log("Update successful", response.data);
      })
      .catch((error) => {
        console.error("Error updating data", error);
      });
    setEditMode(!editMode);
  };
  const {
    watch,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormAccount>({
    resolver: yupResolver(accountSchema),
  });
  useEffect(() => {
    reset({
      email: data?.body?.userView?.email,
      userName: data?.body?.userView?.userName,
      birthday: data?.body?.userView?.birthday,
      gender: data?.body?.userView?.gender,
      profilePhoto: data?.body?.userView?.profilePhoto,
    });
  }, [data]);
  const handleEditProfile = () => {
    setEditMode(!editMode);
  };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              w={"700px"}
              justify={"space-between"}
              gap={"80px"}
              align="center"
              mb={"40px"}
            >
              <Box>
                <Image
                  boxSize="120px"
                  src={"http://173.212.221.237/images/" + watch("profilePhoto")}
                  alt="Dan Abramov"
                  margin="30px"
                  borderRadius="full"
                />
              </Box>

              <FormControl mt="20px" isInvalid={!!errors.profilePhoto}>
                <FormLabel
                  htmlFor="file"
                  color="#707070"
                  fontSize="18px"
                  width="50%"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    cursor="pointer"
                    textAlign="center"
                    _hover={{ color: "white" }}
                    p="12px 0"
                    borderRadius="6px"
                    border="1px solid #bababc"
                    fontWeight="600"
                    color="#fff"
                    bg="#7848F4"
                    gap="5px"
                  >
                    <Image
                      src="../assests/login/photo.png"
                      alt="Upload"
                      w="20px"
                      h="20px"
                      cursor="pointer"
                    />
                    <Text>Upload photo</Text>
                  </Box>
                </FormLabel>

                <Controller
                  name="profilePhoto"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={undefined}
                      id="file"
                      display="none"
                      type="file"
                      accept="image/*"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors?.profilePhoto?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl mb={"40px"} isInvalid={!!errors?.userName}>
              <FormLabel>USERNAME</FormLabel>
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
              <FormErrorMessage>{errors?.userName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mb={"40px"} isInvalid={!!errors.email}>
              <FormLabel>EMAIL</FormLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mb={"40px"} isInvalid={!!errors.birthday}>
              <FormLabel>Birhtday</FormLabel>
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
              <FormErrorMessage>{errors?.birthday?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mb={"40px"} isInvalid={!!errors.gender}>
              <FormLabel>gender</FormLabel>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
            </FormControl>
            <FormErrorMessage>{errors?.gender?.message}</FormErrorMessage>
            <Flex justify={"center"} mt={"40px"} gap={"20px"}>
              {!editMode && (
                <Button onClick={handleEditProfile} w={"349px"}>
                  Edit Profile
                </Button>
              )}
              {editMode && (
                <Button type="submit" w={"349px"} bg={"#7F56D9"} color={"#fff"}>
                  Save Profile
                </Button>
              )}
            </Flex>
          </form>
        </Container>
      </Box>
    </Box>
  );
};
export default Account;
