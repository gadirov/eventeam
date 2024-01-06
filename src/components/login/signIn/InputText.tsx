import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
    email: string;
  }
export default function InputText() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.email}>
        <FormLabel color="#707070" fontSize="18px">Email address</FormLabel>
        <Controller
            name="email"
            control={methods.control}
            rules={{
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            }}
            render={({ field }) => (
            <Input
                {...field}
                type="email"
                placeholder="example@gmail.com"
                border="1px solid #bababc"
                p="22px 14px"
            />
            )}
        />
        <FormErrorMessage>{methods.formState.errors?.email?.message }</FormErrorMessage>
    </FormControl>
  );
}
