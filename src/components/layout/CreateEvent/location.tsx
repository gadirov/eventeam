import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  const {t}=useTranslation()
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
          <Icon as={MdLocationOn} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">{t("Location")}</Text>
            <Text color="#98A2B3" pt="16px">
            {t("Location İnfo")}
            </Text>
          </Box>
        </HStack>

        <FormControl
          w="90%"
          pt="40px"
          isInvalid={!!errors?.location}
          mb={errors?.location ? 0 : 6}
        >
          <FormLabel pt="32px">{t("Location")}</FormLabel>
          <Controller
            name="location"
            control={control}
            rules={{
              required: "Location is required!",
            }}
            render={({ field }) => <Input {...field} placeholder={t("Location")} />}
          />
          <FormErrorMessage mt="0.5rem">
            {errors?.location?.message as string}
          </FormErrorMessage>
        </FormControl>
        <Input
          w="90%"
          mt="20px"
          variant="flushed"
          placeholder={t("External Link")}
        />
      </VStack>
    </>
  );
};
export default Location;
