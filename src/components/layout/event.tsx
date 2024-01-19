import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import EventDetails from "./CreateEvent/eventDetails.tsx";
import Description from "./CreateEvent/description.tsx";
import Attended from "./CreateEvent/attended.tsx";
import Location from "./CreateEvent/location.tsx";
import Category from "./CreateEvent/category.tsx";
import Contact from "./CreateEvent/contact.tsx";
import Ticket from "./CreateEvent/ticket.tsx";
import { DevTool } from "@hookform/devtools";
function Event() {
  const  methods = useForm({
    mode: "all",
    defaultValues: {
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      privacy: "1",
      attendees: false,
      browse: "",
      about: "",
      minmax: { min: "", max: "" },
      freePaid: "1",
      btnPhoto: "",
      location: "",
      contact: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
      <VStack
        bg="#F9FAFB"
        alignItems="center"
        gap="60px"
        pt="100px"
        w="100%"
        justifyContent="center"
      >
        <Box w="50%" pt="20px">
          <Heading textAlign="left">Create an Event</Heading>
        </Box>
      <EventDetails />
      <Description />
      <Attended />
      {/* <Location /> */}
      {/* <Category /> */}
      {/* <Contact /> */}
      {/* <Ticket /> */}
      
      <Button
        w="50%"
        colorScheme="purple"
        variant="solid"
        color="white"
        mb="60px"
        isDisabled={!methods.formState.isValid}
      >
        Create
      </Button>
    </VStack>
    <DevTool control={methods.control} />
    </form>
    </FormProvider>


  )
}
export default Event;