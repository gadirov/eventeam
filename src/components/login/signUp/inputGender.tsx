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

interface FormValues {
  gender: string;
}
export default function InputRadio() {
  const methods = useFormContext<FormValues>();
  const [value, setValue] = useState("N/A");

  return (
    <FormControl isInvalid={!!methods.formState.errors.gender} mb="10px">
      <FormLabel mt="15px" color="#707070" fontSize="18px">
        Gender
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
                Male
              </Radio>
              <Radio colorScheme="purple" size="md" value="FEMALE">
                Female
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
