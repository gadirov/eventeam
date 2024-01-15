import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { base64 } from "../../../hooks/useSignup.ts";

import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
  profilePhoto: FileList;
}

export default function InputFile() {
  const [file, setFile] = useState<string>("");
  const methods = useFormContext<FormValues>();

  return (
    <FormControl mt="20px" isInvalid={!!methods.formState.errors.profilePhoto} >
      <FormLabel htmlFor="file" color="#707070" fontSize="18px" width="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          cursor="pointer"
          textAlign="center"
          _hover={{ color: "white" }}
          p="12px 0"
          borderRadius="6px"
          border="1px solid #bababc"
          fontWeight="600"
          color="#fff"
          bg="#7848F4"
          gap="5px"
        >
          <Image
            src="../assests/login/photo.png"
            alt="Upload"
            w="20px"
            h="20px"
            cursor="pointer"
          />
          <Text>Upload photo</Text>
        </Box>
      </FormLabel>

      {file && (
        <Text textAlign="center" color="#7848F4">
          {file}
        </Text>
      )}
      <Controller
        name="profilePhoto"
        control={methods.control}
        rules={{
          required: "This field is required",
        }}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => {
              base64(e, methods.setValue);
              setFile(e.target.files?.[0]?.name as string);
            }}
            value={undefined}
            id="file"
            display="none"
            type="file"
            accept="image/*"
          />
        )}
      />
      <FormErrorMessage>
        {methods.formState.errors?.profilePhoto?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
