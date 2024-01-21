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
import { accountSchema } from "../../schemas/AccountSchema.ts";
import { IFormAccount } from "../../model.ts";
import { put } from "../../config/axiosConfig.ts";
import { useProfileImage } from "../../hooks/useProfileImage.ts";


const Account = () => {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const id = Cookies.get("userId");
  const { data: userData } = useUserDetails(id);

  const onSubmit = (data) => {
    put("http://173.212.221.237:38765/user/user/change-personal-details", data);
    setEditMode(!editMode);
  };
  const {
    watch,
    reset,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormAccount>({
    resolver: yupResolver(accountSchema),
  });
  useEffect(() => {
    reset({
      email: userData?.body?.userView?.email,
      username: userData?.body?.userView?.userName,
      dateOfBirth: userData?.body?.userView?.birthday,
      gender: userData?.body?.userView?.gender,
      profilePhoto: userData?.body?.userView?.profilePhoto,
    });
  }, [userData, reset]);
  const handleEditProfile = () => {
    setEditMode(!editMode);
  };
  //Image part
  const { submit } = useProfileImage(setValue);
  return (
    <Box py={"200px"}>
      <Container
        maxW="1000px"
        display={"Flex"}
        justifyContent={"space-between"}
      >
        <Flex gap={"24px"} direction={"column"} w={"562px"}>
          <Heading fontSize={{ base: "37px", md: "45px" }}>
            Organizer Profile
          </Heading>
          <Text w={"100%"} color={"#667085"} fontWeight={"500"}>
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
              w={"100%"}
              justify={"space-between"}
              align="center"
              mb={"40px"}
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: "0px", md: "80px" }}
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
                    w="200px"
                    cursor="pointer"
                    textAlign="center"
                    _hover={{ color: "white" }}
                    p="12px 0"
                    borderRadius="6px"
                    border="1px solid #bababc"
                    fontWeight="600"
                    color="#fff"
                    bg="#7848F4"
                    gap={"5px"}
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
                      onChange={(e) => submit(e?.target?.files?.[0])}
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors?.profilePhoto?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl mb={"40px"} isInvalid={!!errors?.username}>
              <FormLabel>USERNAME</FormLabel>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
              <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
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
            <FormControl mb={"40px"} isInvalid={!!errors.dateOfBirth}>
              <FormLabel>Birhtday</FormLabel>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <Input isDisabled={!editMode} {...field} />
                )}
              />
              <FormErrorMessage>
                {errors?.dateOfBirth?.message}
              </FormErrorMessage>
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
