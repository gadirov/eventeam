import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdContactSupport } from "react-icons/md";

const Contact = () => {
  const { t } = useTranslation();
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <VStack
        w={{ base: "100%", lg: "70%" }}
        alignItems="center"
        p={{ base: "10px", md: "60px" }}
        bg="white"
      >
        <HStack w="90%">
          <Icon as={MdContactSupport} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">{t("Contact")}</Text>
            <Text color="#98A2B3" pt="16px">
            {t("Contact info")}
            </Text>
          </Box>
        </HStack>

        <FormControl
          pt="40px"
          isInvalid={!!errors?.contact}
          mb={errors?.contact ? 0 : 6}
          w="90%"
        >
          <FormLabel>{t("Mobile")}</FormLabel>

          <Controller
            name="contact"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <InputGroup {...field}>
                <InputLeftElement children="+994" />
                <Input type="tel" variant="flushed" pattern="[0-9]*" />
              </InputGroup>
            )}
          />

          <FormErrorMessage mt="0.5rem">
            {errors?.contact?.message as string}
          </FormErrorMessage>
        </FormControl>
        <VStack alignItems="flex-start" w="90%">
          <FormLabel pt="40px">{t("Facebook")}</FormLabel>
          <Input variant="flushed" placeholder="Facebook.com/" />

          <FormLabel pt="40px">{t("Website")}</FormLabel>
          <Input type="url" variant="flushed" placeholder={t("Input Website")} />
        </VStack>
      </VStack>
    </>
  );
};
export default Contact;
