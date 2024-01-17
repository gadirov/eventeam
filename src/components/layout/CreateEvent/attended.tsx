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
import { MdNumbers } from "react-icons/md";

interface IAttendedProps {
  errors: any;
  control: any;
}

const Attended: React.FC<IAttendedProps> = ({ errors, control }) => {
  return (
    <VStack
      w={{ base: "90%", sm: "70%", md: "50%" }}
      alignItems="center"
      bg="white"
      p="60px"
    >
      <HStack w="100%">
        <Icon as={MdNumbers} w={12} h={12} color="purple.500" />
        <Box pl={{ base: 0, md: "32px" }}>
          <Text as="b">Attended</Text>
          <Text color="#98A2B3" pt="16px">
            Roughly how many people do you want to invite?
          </Text>
        </Box>
      </HStack>

      <FormControl
        w="100%"
        pt="60px"
        isInvalid={!!errors?.minmax?.min || !!errors?.minmax?.max}
        mb={
          errors?.minmax?.min || errors?.minmax?.max
            ? { base: "0", md: "6" }
            : "6"
        }
      >
        <FormLabel fontSize="20px">Expected number of attendees</FormLabel>
        <HStack>
          <Controller
            name="minmax.min"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                variant="flushed"
                placeholder="Min"
              />
            )}
          />

          <Controller
            name="minmax.max"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                variant="flushed"
                placeholder="Max"
              />
            )}
          />
        </HStack>
        <FormErrorMessage mt="0.5rem">
          {errors?.minmax?.min?.message || errors?.minmax?.max?.message}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default Attended;
