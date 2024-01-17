import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import { MdLocationOn } from "react-icons/md";

interface ILocationProps {
  errors: any;
  control: any;
}

const Location: React.FC<ILocationProps> = ({ errors, control }) => {
  return (
    <>
      <VStack w="50%" alignItems="center" p="60px" bg="white">
        <HStack w="90%">
          <Icon as={MdLocationOn} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Location</Text>
            <Text color="#98A2B3" pt="16px">
              Add an exact location for people to join your event
            </Text>
          </Box>
        </HStack>

        <FormControl
          w="90%"
          pt="40px"
          isInvalid={!!errors?.location}
          mb={errors?.location ? 0 : 6}
        >
          <FormLabel pt="32px">Location</FormLabel>
          <Controller
            name="location"
            control={control}
            rules={{
              required: "Location is required!",
            }}
            render={({ field }) => <Input {...field} placeholder="Location" />}
          />
          <FormErrorMessage mt="0.5rem">
            {errors?.location?.message}
          </FormErrorMessage>
        </FormControl>
        <Input
          w="90%"
          mt="20px"
          variant="flushed"
          placeholder="Please, add external link about event"
        />
      </VStack>
    </>
  );
};
export default Location;