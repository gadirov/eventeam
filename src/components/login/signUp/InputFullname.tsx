import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
    fullname: string;
  }
export default function InputFullname() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.fullname} mb="20px">
        <FormLabel color="#707070" fontSize="18px">Fullname</FormLabel>
        <Controller
            name="fullname"
            control={methods.control}
            rules={{
            required: "This field is required",
            // pattern: {
            //     value: /^[A-Z][a-z]*\s[A-Z][a-z]*$/,
            //     message: "Please use uppercase for the first letter of both name and surname.",
            //   },
              
            }}
            render={({ field }) => (
            <Input
                {...field}
                type="text"
                placeholder="Name Surname"
                border="1px solid #bababc"
                p="22px 14px"
            />
            )}
        />
        <FormErrorMessage>{methods.formState.errors?.fullname?.message }</FormErrorMessage>
    </FormControl>
  );
}
