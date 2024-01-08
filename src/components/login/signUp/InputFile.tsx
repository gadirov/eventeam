import { Box, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormValues {
    file: string;
  }
export default function InputFile() {
    const  fileref = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState();
    const methods = useFormContext<FormValues>();
    const uploaderHandler = () => {
        fileref.current?.click()
    }
    const changeHandler = (e:any) => {   // change any type
        setFile(e.target.files[0].name)
    }
  return (
        <FormControl mt="5px">
            <FormLabel color="#707070" fontSize="18px">File</FormLabel>
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
                <Image
                src="../assests/login/photo.png"
                alt="Dan Abramov"
                w="20px"
                h="20px"
                cursor="pointer"
                />
                <Text>Upload photo</Text>
            </Box>
            {file && <Text textAlign="center" color="#7848F4">{file}</Text>}
            <Controller
            name="file"
            control={methods.control}
            render={({ field }) => (
            <Input
            {...field}
            onChange={changeHandler}
            ref={fileref}
            display="none"
            type="file"
            w="50px" 
            h="50px" 
            />
        )}
      />
        </FormControl>
  );
}
