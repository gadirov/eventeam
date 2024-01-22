import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormValues {
  gender: string;
}
export default function Gender() {
  const {t}=useTranslation();
  const methods = useFormContext<FormValues>();
  const [value, setValue] = useState("UNKNOWN");

  return (
    <FormControl isInvalid={!!methods.formState.errors.gender} mb="10px">
      <FormLabel mt="15px" color="#707070" fontSize="18px">
        {t("Gender")}
      </FormLabel>
      <Controller
        name="gender"
        control={methods.control}
        rules={{
          required: "This field is required",
        }}
        render={({ field }) => (
          <RadioGroup
            onChange={setValue}
            value={value}
            border="1px solid #bababc"
            p="7px 10px"
            borderRadius="5px"
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" {...field}>
              <Radio colorScheme="purple" size="md" value="UNKNOWN">
                N/A
              </Radio>
              <Radio colorScheme="purple" size="md" value="MALE">
              {t("Male")}
              </Radio>
              <Radio colorScheme="purple" size="md" value="FEMALE">
              {t("Female")}
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />
      <FormErrorMessage>
        {methods.formState.errors?.gender?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
