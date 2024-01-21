import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdTypeSpecimen } from "react-icons/md";

const Ticket = () => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <VStack w={{base: "100%", lg: "70%"}} alignItems="center" p={{base: "10px",md:"60px" }} bg="white">
        <HStack w="90%">
          <Icon as={MdTypeSpecimen} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Ticket type</Text>
            <Text color="#98A2B3" pt="16px">
              Determine the type of ticket you need, depending on the type of
              event.
            </Text>
          </Box>
        </HStack>

        <FormControl
          w="90%"
          isInvalid={!!errors?.ticketType}
          mb={errors?.location ? 0 : 6}
        >
          <FormLabel pt="40px" fontSize="20px">
            Ticket type
            <Text fontSize="12px" color="gray">
              Choose ticket type
            </Text>
          </FormLabel>
          <Controller
            name="ticketType"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <RadioGroup {...field} pt="10px">
                <Stack direction="row">
                  <Radio value="FREE" defaultChecked>
                    Free
                  </Radio>
                  <Radio value="PAID">Paid</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
          <FormErrorMessage mt="0.5rem">
            {errors?.ticketType?.message as string}
          </FormErrorMessage>
        </FormControl>
      </VStack>
    </>
  );
};
export default Ticket;
