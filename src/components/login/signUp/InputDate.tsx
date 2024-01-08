import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
    date: string;
  }
export default function InputDate() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.date} mb="10px" >
        <FormLabel mt="15px" color="#707070" fontSize="18px">Date</FormLabel>
        <Controller
            name="date"
            control={methods.control}
            rules={{
            required: "This field is required",
            }}
            render={({ field }) => (
            <Input
                {...field}
                border="1px solid #bababc"
                placeholder="Select Date and Time"
                size="md"
                type="date"
            />
            )}
        />
        <FormErrorMessage>{methods.formState.errors?.date?.message }</FormErrorMessage>
    </FormControl>
  );
}
