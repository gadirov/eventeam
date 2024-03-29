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
  login: string;
}
export default function Fullname() {
  const {t}=useTranslation();
  const methods = useFormContext<FormValues>();

  return (
    <FormControl isInvalid={!!methods.formState.errors.login} mb="20px">
      <FormLabel color="#707070" fontSize="18px">
      {t("Username")}
      </FormLabel>
      <Controller
        name="login"
        control={methods.control}
        rules={{
          required: "This field is required",
          pattern: {
            value: /^[A-Z][a-zA-Z]*$/,
            message: "Please use uppercase for the first letter of username",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            placeholder="username"
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
