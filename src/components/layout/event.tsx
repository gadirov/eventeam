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
// import { DevTool } from "@hookform/devtools";
import { useCreateEvent } from "../../hooks/useCreateEvent.ts";
function Event() {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      eventType: "PUBLIC",
      ticketType: "FREE",
      attendeesPermission: false,
      coverPhoto: "",
      minmax: { min: "", max: "" },
      btnPhoto: "",
      location: "",
      contact: "",
    },
  });

  const { submit } = useCreateEvent();
  const onSubmit = (data) => {
    submit(data);
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
          <Box w={{ base: "100%", lg: "70%" }} pt="20px" pl={{base:"15px", md:"0px"}}>
            <Heading textAlign="left">Create an Event</Heading>
          </Box>
          <EventDetails />
          <Description />
          <Attended />
          <Location />
          <Category />
          <Contact />
          <Ticket />

          <Button
            type="submit"
            w="70%"
            colorScheme="purple"
            variant="solid"
            color="white"
            mb="60px"
            isDisabled={!methods.formState.isValid}
          >
            Create
          </Button>
        </VStack>
        {/* <DevTool control={methods.control} /> */}
      </form>
    </FormProvider>
  );
}
export default Event;
