import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
  birthday: string;
}
export default function Date() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.birthday} mb="10px">
      <FormLabel mt="15px" color="#707070" fontSize="18px">
        Date
      </FormLabel>
      <Controller
        name="birthday"
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
      <FormErrorMessage>
        {methods.formState.errors?.birthday?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
