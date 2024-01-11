
import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
  profilePhoto: FileList;
}

export default function InputFile() {
  const methods = useFormContext<FormValues>();

  return (
    <FormControl mt="5px">
      <FormLabel htmlFor="file" color="#707070" fontSize="18px">
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

      {methods.watch("profilePhoto") && (
        <Text textAlign="center" color="#7848F4">
          {methods.watch("profilePhoto")[0]?.name}
        </Text>
      )}
      <Controller
        name="profilePhoto"
        control={methods.control}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => field.onChange(e.target.files)}
            value={undefined}
            id="file"
            display="none"
            type="file"
            accept="image/*"
          />
        )}
      />
    </FormControl>
  );
}
