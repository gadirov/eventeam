import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormValues {
  email: string;
}
export default function SignupEmail() {
  const { t } = useTranslation();
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.email}>
      <FormLabel color="#707070" fontSize="18px">
      { t ("Email address") }
      </FormLabel>
      <Controller
        name="email"
        control={methods.control}
        rules={{
          required: "Email is required!",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            placeholder="example@gmail.com"
            border="1px solid #bababc"
            p="22px 14px"
          />
        )}
      />
      <FormErrorMessage>
        {methods.formState.errors?.email?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
