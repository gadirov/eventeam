import React, { useRef } from "react";
import { Box, FormControl, FormLabel, Image, Input as ChakraInput, Text, Input } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
  file: FileList;
}

export default function InputFile() {
  // const [file, setFile] = useState();
  const fileRef = useRef<HTMLInputElement>(null);
  const methods = useFormContext<FormValues>();

  const uploaderHandler = () => {
    fileRef.current?.click();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile(e.target.files)
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      methods.setValue("file", selectedFiles);
    }
  };

  return (
    <FormControl mt="5px">
      <FormLabel color="#707070" fontSize="18px">
        File
      </FormLabel>
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
        onClick={uploaderHandler}
      >
        <Image src="../assests/login/photo.png" alt="Upload" w="20px" h="20px" cursor="pointer" />
        <Text>Upload photo</Text>
      </Box>
      {methods.watch("file") && (
        <Text textAlign="center" color="#7848F4">
          {methods.watch("file")[0]?.name}
        </Text>
      )}
      <Controller
        name="file"
        control={methods.control}
        render={({ field }) => (
          <Input
            {...field}
            onChange={changeHandler}
            ref={fileRef}
            display="none"
            type="file"
            accept="image/*"
            value={undefined}
          />
        )}
      />
    </FormControl>
  );
}
