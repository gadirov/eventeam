import React from "react";
import { Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required(),
  subject: Yup.string().required(),
  message: Yup.string().required('Message is required'),
});
interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  subject:string,
  message:string
}
const Contact = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<IContactFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const { t } = useTranslation();
 return (
    <>
      <Box
        bg="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .7) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .7) 266.25deg, rgba(7, 20, 80, .7) 1turn)"
        w="100vw"
        h="600px"
        pt="80px"
      >
        <Text
          position="relative"
          top="250px"
          left="80px"
          fontStyle="italic"
          color="#071450"
          fontSize="100px"
        >
          {t("Contact")}
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box bg={"#6082B6"} px={"40px"}>
      <Flex >
      <Box display={"flex"} flexDirection={"column"} >
        <Box w={"636px"} height={"147px"} >
          <Box height={"153px"} display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} bg={"#6082B6"} alignItems={"center"}>
              <FontAwesomeIcon fontSize={"50px"} color="white" icon={faMapMarkerAlt}/>
            <Box>
              <Heading textTransform={"uppercase"} color={"#fff"}>
                Location
              </Heading>
              <Text color={"#fff"} fontWeight={"Bold"}>Baku</Text>
            </Box>
          </Box>
        </Box>
        <Box w={"636px"} height={"147px"} >
          <Box height={"147px"}  display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} bg={"#6082B6"} alignItems={"center"}>
              <FontAwesomeIcon fontSize={"50px"} color="white" icon={faPhone}/>
            <Box>
              <Heading textTransform={"uppercase"} color={"#fff"}>
                Phone
              </Heading>
              <Text color={"#fff"} fontWeight={"Bold"}>+99412555555</Text>
            </Box>
          </Box>
        </Box>
        <Box w={"636px"} height={"147px"} >
          <Box height={"147px"}  display={"flex"} justifyContent={"flex-start"} p={"20px"} gap={"20px"} bg={"#6082B6"} alignItems={"center"}>
              <FontAwesomeIcon fontSize={"50px"} color="white" icon={faEnvelope}/>
            <Box>
              <Heading textTransform={"uppercase"} color={"#fff"}>
                Email
              </Heading>
              <Text color={"#fff"} fontWeight={"Bold"}>eventteam@app.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg={"#6082B6"} w={"745px"}>
        <Heading textAlign={"center"} color={"#fff"}>Write A Message</Heading>
        <Flex direction={"column"} w={"50%"} mx={"auto"} gap={"20px"} mt={"20px"}>
        <FormControl isInvalid={!!errors.name}>
          <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field}  bg={"#fff"} placeholder="Your Name" />}
          />
           <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field}  bg={"#fff"} placeholder="Your Email" />}
          />
           <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.phone}>
          <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field}  bg={"#fff"} placeholder="Your Phone" />}
          />
           <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.subject}>
          <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field}  bg={"#fff"} placeholder="Subject" />}
          />
           <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => <Textarea {...field}  bg={"#fff"} placeholder="Write a message" />}
          />
           <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>
        <Button  type="submit" colorScheme="teal" mt={4}> 
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