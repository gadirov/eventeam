// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Image,
//   Input,
//   Stack,
//   Text,
//   Textarea,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import CustomDatePicker from "../Datepicker/Datepicker.tsx";
// import { AddIcon, EditIcon } from "@chakra-ui/icons";
// import AddTextIcon from "../../icons/AddTextIcon.tsx";
// import AddImageIcon from "../../icons/AddImageIcon.tsx";
// import AddVideoIcon from "../../icons/AddVideoIcon.tsx";

// const Account: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   return (
//     <>
//       <Box py={"100px"}>
//         <Container maxW={"800px"}>
//           <Heading as={"h1"}>Create an Event</Heading>

//           <form>
//             <FormControl display={"flex"} alignItems={"center"} gap={"20px"}>
//               <Image
//                 borderRadius="full"
//                 boxSize="150px"
//                 src="https://bit.ly/dan-abramov"
//                 alt="Dan Abramov"
//                 w={"78px"}
//                 height={"78px"}
//               />
//               <Flex direction={"column"}>
//                 <Heading as={"h5"} size={"30px"}>
//                   Basic Info
//                 </Heading>
//                 <Text color="#98A2B3">
//                   Name your event and tell event-goers why they should come. All
//                   details that highlight makes it unique
//                 </Text>
//               </Flex>
//             </FormControl>
//             <FormControl mt={"40px"}>
//               <FormLabel fontWeight={"bold"}>Event Title</FormLabel>
//               <Input placeholder="Enter title of event" py={"26px"} />
//             </FormControl>
//             <FormControl mt={"40px"}>
//               <FormLabel fontWeight={"bold"}>Places</FormLabel>
//               <Input placeholder="Enter place of event" py={"26px"} />
//             </FormControl>
//             <Flex justify={"space-between"} gap={"10px"}>
//               <FormControl mt={"40px"} borderRadius={"4px"}>
//                 <FormLabel>Start Date</FormLabel>
//                 <CustomDatePicker
//                   selectedDate={selectedDate}
//                   onChange={handleDateChange}
//                   placeHolder={"Enter Start Date"}
//                 />
//               </FormControl>

//               <FormControl mt={"40px"} borderRadius={"4px"}>
//                 <FormLabel>End Date</FormLabel>

//                 <CustomDatePicker
//                   selectedDate={selectedDate}
//                   onChange={handleDateChange}
//                   placeHolder={"Enter End Date"}
//                 />
//               </FormControl>
//             </Flex>
//           </form>
//         </Container>
//       </Box>

//       <Box>
//         <Container maxW={"800px"}>
//           <FormControl display={"flex"} alignItems={"center"} gap={"20px"}>
            
//             <Box 
//               borderRadius="full"
//               boxSize="150px"
//               bg={"#d19dfa"}
//               w={"78px"}
//               height={"78px"}
//             />
//             <Flex direction={"column"}>
//               <Heading as={"h5"} size={"30px"}>
//                 Upload Image
//               </Heading>
//               <Text color="#98A2B3">
//                 Name your event and tell event-goers why they should come. All
//                 details that highlight makes it unique
//               </Text>
//             </Flex>
//           </FormControl>
//           <Box  bg={"#F2F4F7"} borderRadius={"8px"} py={"100px"}>
//             <Box mx={"auto"} w={"77px"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="78"
//                 height="77"
//                 viewBox="0 0 78 77"
//                 fill="none"
//               >
//                 <path
//                   d="M52.475 67.375H22.7381C20.7945 67.375 19.8227 67.375 19.3726 66.9907C18.9822 66.6572 18.775 66.1569 18.8152 65.645C18.8617 65.055 19.5489 64.3678 20.9232 62.9934L48.2035 35.7131C49.4741 34.4426 50.1094 33.8073 50.8419 33.5693C51.4863 33.3599 52.1804 33.3599 52.8248 33.5693C53.5573 33.8073 54.1926 34.4426 55.4631 35.7131L67.875 48.125V51.975M52.475 67.375C57.8655 67.375 60.5608 67.375 62.6197 66.3259C64.4307 65.4032 65.9032 63.9307 66.8259 62.1197C67.875 60.0608 67.875 57.3655 67.875 51.975M52.475 67.375H25.525C20.1345 67.375 17.4392 67.375 15.3803 66.3259C13.5693 65.4032 12.0968 63.9307 11.1741 62.1197C10.125 60.0608 10.125 57.3655 10.125 51.975V25.025C10.125 19.6345 10.125 16.9392 11.1741 14.8803C12.0968 13.0693 13.5693 11.5968 15.3803 10.6741C17.4392 9.625 20.1345 9.625 25.525 9.625H52.475C57.8655 9.625 60.5608 9.625 62.6197 10.6741C64.4307 11.5968 65.9032 13.0693 66.8259 14.8803C67.875 16.9392 67.875 19.6345 67.875 25.025V51.975M34.1875 27.2708C34.1875 30.8147 31.3147 33.6875 27.7708 33.6875C24.227 33.6875 21.3542 30.8147 21.3542 27.2708C21.3542 23.727 24.227 20.8542 27.7708 20.8542C31.3147 20.8542 34.1875 23.727 34.1875 27.2708Z"
//                   stroke="#98A2B3"
//                   stroke-width="4"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </Box>
//             <Heading fontSize={"36px"} textAlign={"center"}>
//               Drag and Drop an image
//             </Heading>
//             <Text mt={"20px"}  textAlign={"center"} color={"#667085"} fontWeight={"bold"}>Or <span style={{color:"#7F56D9"}}>Browse </span>to Choose a file</Text>
//             <Text mt={"20px"} maxW={"760px"} textAlign={"center"} color={"#667085"} fontWeight={"bold"}>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px </Text>
//           </Box>
//           <FormControl mt={"40px"}>
//             <FormLabel>Event Description</FormLabel>
//             <Textarea rows={10} placeholder="Here is a sample placeholder" />
//           </FormControl>

        

//           <Stack spacing={4} direction="row" align="center" my={"40px"}>
//             <Button
//               bg={"#EAECF0"}
//               color={"#000"}
//               w={"220px"}
//               gap={"5px"}
//               colorScheme="teal"
//               size="lg"
//             >
//               Add Text
//               <AddTextIcon />
//             </Button>
//             <Button
//               bg={"#EAECF0"}
//               color={"#000"}
//               w={"220px"}
//               gap={"5px"}
//               size="lg"
//             >
//               Add Image
//               <AddImageIcon />
//             </Button>
//             <Button
//               bg={"#EAECF0"}
//               color={"#000"}
//               w={"220px"}
//               gap={"5px"}
//               size="lg"
//             >
//               Add Video <AddVideoIcon />
//             </Button>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Account;
