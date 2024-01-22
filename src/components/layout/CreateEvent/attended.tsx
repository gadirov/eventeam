import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdNumbers } from "react-icons/md";

const Attended = () => {
  const {t}=useTranslation();
  const { control } = useFormContext();
  return (
    <VStack
      w={{ base: "100%", lg: "70%" }}
      alignItems="center"
      bg="white"
      p={{ base: "10px", md: "60px" }}
    >
      <HStack w="90%">
        <Icon as={MdNumbers} w={12} h={12} color="purple.500" />
        <Box pl={{ base: 0, md: "32px" }}>
          <Text as="b">{t("Attended")}</Text>
          <Text color="#98A2B3" pt="16px">
          {t("Attended İnfo")}
          </Text>
        </Box>
      </HStack>

      <FormControl pt="60px" w="90%">
        <FormLabel fontSize="20px">{t("Expected number")}</FormLabel>
        <HStack>
          <Controller
            name="minmax.min"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                variant="flushed"
                placeholder="Min"
              />
            )}
          />

          <Controller
            name="minmax.max"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                variant="flushed"
                placeholder="Max"
              />
            )}
          />
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default Attended;
