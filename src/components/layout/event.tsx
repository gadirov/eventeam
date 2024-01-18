import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import EventDetails from "./CreateEvent/eventDetails.tsx";
import Description from "./CreateEvent/description.tsx";
import Attended from "./CreateEvent/attended.tsx";
import Location from "./CreateEvent/location.tsx";
import Category from "./CreateEvent/category.tsx";
import Contact from "./CreateEvent/contact.tsx";
import Ticket from "./CreateEvent/ticket.tsx";

function Event() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
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
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <EventDetails errors={errors} control={control} />

        <Description errors={errors} control={control} />

        <Attended errors={errors} control={control} />

        <Location errors={errors} control={control} />

        <Category errors={errors} control={control} />

        <Contact errors={errors} control={control} />

        <Ticket errors={errors} control={control} />

        <Button
          w="50%"
          colorScheme="purple"
          variant="solid"
          color="white"
          mb="60px"
          onClick={handleSubmit(onSubmit)}
          isDisabled={!isValid}
        >
          Create
        </Button>
      </VStack>
    </form>
  );
}

export default Event;
