import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useUserDetails } from "../../hooks/useUserDetails.ts";
import Cookies from "js-cookie";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



const schema = Yup.object().shape({
  userName: Yup.string().required('userName is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  birthday: Yup.string().required(),
  gender: Yup.string().required(),
});


interface IContactFormAccount{
  userName: string;
  email: string;
  birthday:string;
  gender: string;

}
const Account = () => {
   const [editMode,setEditMode] = React.useState<boolean>(false)
  const { handleSubmit, control, formState: { errors } } = useForm<IContactFormAccount>({
    resolver: yupResolver(schema),
  });

 
  const id = Cookies.get("userId");
  const {data} = useUserDetails(id)
  useEffect(() => {
    console.log(data)
  },[data])

  const onSubmit = (data) => {
    console.log(data); 
  };
  
  const handleEditProfile = () => {
    setEditMode(!editMode)
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={"40px"} isInvalid={!!errors?.userName}>
            <FormLabel>
                 USERNAME
            </FormLabel>
            <Controller
          name="userName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field}  disabled value={data?.body?.userView?.userName} />}
          />
             <FormErrorMessage>{errors?.userName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mb={"40px"} isInvalid={!!errors.email}>
            <FormLabel>
                 EMAIL
            </FormLabel>
            <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) =>   <Input {...field} placeholder='Basic usage' disabled value={data?.body?.userView?.email} />}
          />
           <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mb={"40px"} isInvalid={!!errors.birthday}>
            <FormLabel>
                 Birhtday
            </FormLabel>
            <Controller
          name="birthday"
          control={control}
          defaultValue=""
          render={({ field }) =>  <Input {...field} placeholder='Basic usage' disabled value={data?.body?.userView?.birthday} />}
          />
            <FormErrorMessage>{errors?.birthday?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mb={"40px"} isInvalid={!!errors.gender}>
            <FormLabel>
                 gender
            </FormLabel>
            <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} placeholder='Basic usage' disabled value={data?.body?.userView?.gender} />
        }
          />
          </FormControl>
          <FormErrorMessage>{errors?.gender?.message}</FormErrorMessage>
            </form>
            <Flex justify={"center"} mt={"40px"} gap={"20px"}>
            <Button  w={"349px"}>Edit Profile</Button>
            <Button w={"349px"} bg={"#7F56D9"} color={"#fff"}>Save Profile</Button>
            </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Account;