import React, { useState } from "react";
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Controller, useFormContext } from "react-hook-form";


interface FormValues {
  password: string;
}
export default function InputPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useFormContext<FormValues>();


  return (
    <FormControl isInvalid={!!methods.formState.errors.password}>
        <FormLabel mt="30px" color="#707070" fontSize="18px">Password</FormLabel>
        <InputGroup>
        <Controller
                name="password"
                control={methods.control}
                rules={{
                required: "This field is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
                  message:
                    "Password must include at least  one uppercase letter and one digit",
                },
                minLength:{
                  value: 8,
                  message: "Password must be at least 8 characters long",  
                }
                }}
                render={({ field }) => (
                  <Input
                  { ...field }
                  type={!showPassword ? "password" : "text"}
                  placeholder="8+ characters"
                  border="1px solid #bababc"
                  p="22px 14px"
                  _focus={{ zIndex: "-1" }}
                />
                )}
            />
            <InputRightElement>
              <IconButton
                m="10px 10px 0 0"
                color="#707070"
                variant="gray"
                cursor="pointer"
                outline="none"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                icon={showPassword ? <ViewIcon  w="24px" h="24px"/> : <ViewOffIcon  w="24px" h="24px"/>}
                onClick={() => setShowPassword(!showPassword)}
              />
            </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{ methods.formState.errors?.password?.message }</FormErrorMessage>
    </FormControl>
  );
}
