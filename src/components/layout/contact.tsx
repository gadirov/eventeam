import React from "react";
import { Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from "../../schemas/ContactSchema.ts";
import { IContactFormData } from "../../model"

const Contact = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<IContactFormData>({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const { t } = useTranslation();
  return (
    <>
      <Box
        bgImage="../assests/AboutPage-Image/abstract-bluish-paint-background-wallpaper.jpg" backgroundRepeat={"no-repeat"} backgroundSize="cover"
        // bg="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .7) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .7) 266.25deg, rgba(7, 20, 80, .7) 1turn)"
        w="100vw"
        h="600px"
        pt="80px"
        position="relative"

      >
        <Text
          position="absolute"
          top="350px"
          left={{ base: "12px", md: "80px" }}
          fontStyle="italic"
          color="#071450"
          fontSize="100px"
        >
          {t("Contact")}
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          px={"40px"}
        >
          <Flex flexDirection={{ base: "column-reverse", md: "row" }} justifyContent="center" >
            <Box margin={{ base: "0px", md: "100px 0px" }} display={"flex"} flexDirection={"column"} >
              <Box w={{ base: "100%", md: "436px" }} height={"147px"} >
                <Box height={"153px"} display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} alignItems={"center"}>
                  <FontAwesomeIcon fontSize={"50px"} color="#071450" icon={faMapMarkerAlt} />
                  <Box>
                    <Heading textTransform={"uppercase"} color={"#071450"}>
                      Location
                    </Heading>
                    <Text color={"#071450"} fontWeight={"Bold"}>Baku</Text>
                  </Box>
                </Box>
              </Box>
              <Box w={{ base: "100%", md: "436px" }} height={"147px"} >
                <Box height={"147px"} display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} alignItems={"center"}>
                  <FontAwesomeIcon fontSize={"50px"} color="#071450" icon={faPhone} />
                  <Box>
                    <Heading textTransform={"uppercase"} color={"#071450"}>
                      Phone
                    </Heading>
                    <Text color={"#071450"} fontWeight={"Bold"}>+99412555555</Text>
                  </Box>
                </Box>
              </Box>
              <Box w={{ base: "100%", md: "436px" }} height={"147px"} >
                <Box height={"147px"} display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} alignItems={"center"}>
                  <FontAwesomeIcon fontSize={"50px"} color="#071450" icon={faEnvelope} />
                  <Box>
                    <Heading textTransform={"uppercase"} color={"#071450"}>
                      Email
                    </Heading>
                    <Text color={"#071450"} fontWeight={"Bold"}>eventteam@app.com</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box m={"50px 0px"} w={{ base: "100%", md: "645px" }}>
              <Flex direction={"column"} w={"70%"} mx={"auto"} gap={"28px"} mt={"20px"}>
                <Heading fontSize={{ base: "25px", md: "35px" }} color={"#071450"}>Write A Message</Heading>
                <FormControl isInvalid={!!errors.name}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} bg={"#fff"} placeholder="Your Name" />}
                  />
                  <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} bg={"#fff"} placeholder="Your Email" />}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name}>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} bg={"#fff"} placeholder="Your Phone" />}
                  />
                  <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name}>
                  <Controller
                    name="subject"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} bg={"#fff"} placeholder="Subject" />}
                  />
                  <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name}>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Textarea {...field} bg={"#fff"} placeholder="Write a message" />}
                  />
                  <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" color="#fff" bg="#8F64FF" mt={4}>
                  Submit
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </form>
    </>
  );
};
export default Contact;