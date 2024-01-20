import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdContactSupport } from "react-icons/md";

const Contact = () => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <VStack w="50%" alignItems="center" p="60px" bg="white">
        <HStack w="90%">
          <Icon as={MdContactSupport} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Contact</Text>
            <Text color="#98A2B3" pt="16px">
              It is important to include a mobile number or other means of
              communication to ensure the seriousness of the event.
            </Text>
          </Box>
        </HStack>

        <FormControl
          pt="40px"
          isInvalid={!!errors?.contact}
          mb={errors?.contact ? 0 : 6}
        >
          <FormLabel>Mobile Number</FormLabel>

          <Controller
            name="contact"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <InputGroup {...field}>
                <InputLeftElement children="+994" />
                <Input type="tel" variant="flushed" pattern="[0-9]*" />
              </InputGroup>
            )}
          />

          <FormErrorMessage mt="0.5rem">
            {errors?.contact?.message as string}
          </FormErrorMessage>
        </FormControl>
        <VStack alignItems="flex-start" w="100%">
          <FormLabel pt="40px">Facebook</FormLabel>
          <Input variant="flushed" placeholder="Facebook.com/" />

          <FormLabel pt="40px">Website</FormLabel>
          <Input type="url" variant="flushed" placeholder="Input website url" />
        </VStack>
      </VStack>
    </>
  );
};
export default Contact;
