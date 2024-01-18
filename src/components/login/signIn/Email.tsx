import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
  login: string;
}
export default function Email() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.login}>
      <FormLabel color="#707070" fontSize="18px">
        Username / Email address
      </FormLabel>
      <Controller
        name="login"
        control={methods.control}
        rules={{
          required: "This field is required",
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            placeholder="username / example@gmail.com"
            border="1px solid #bababc"
            p="22px 14px"
          />
        )}
      />
      <FormErrorMessage>
        {methods.formState.errors?.login?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
