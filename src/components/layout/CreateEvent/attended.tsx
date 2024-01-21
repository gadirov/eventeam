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
import { Controller, useFormContext } from "react-hook-form";
import { MdNumbers } from "react-icons/md";

const Attended = () => {
  const { control } = useFormContext();
  // const { errors } = formState;
  return (
    <VStack
    w={{base: "100%", lg: "70%"}}
      alignItems="center"
      bg="white"
      p={{base: "10px",md:"60px" }}
    >
      <HStack w="90%">
        <Icon as={MdNumbers} w={12} h={12} color="purple.500" />
        <Box pl={{ base: 0, md: "32px" }}>
          <Text as="b">Attended</Text>
          <Text color="#98A2B3" pt="16px">
            Roughly how many people do you want to invite?
          </Text>
        </Box>
      </HStack>

      <FormControl
        pt="60px"
        w="90%"
        // isInvalid={!!errors?.minmax?.min as || !!errors?.minmax?.max}
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
          {/* {errors?.minmax?.min?.message || errors?.minmax?.max?.message} */}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default Attended;
