import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdDescription } from "react-icons/md";
import { useHandleImage } from "../../../hooks/useEventImage.ts";
import { useTranslation } from "react-i18next";

const Description = () => {
  const {t}=useTranslation();
  const { control, formState, setValue, watch } = useFormContext();
  const { errors } = formState;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { submit } = useHandleImage("btnPhoto", setValue);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <VStack
        w={{ base: "100%", lg: "70%" }}
        p={{ base: "10px", md: "60px" }}
        bg="white"
        alignItems="center"
      >
        <HStack w="90%">
          <Icon as={MdDescription} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">{t("Description")}</Text>
            <Text color="#98A2B3" pt="16px">
              {t("Desc Info")};
            </Text>
          </Box>
        </HStack>
        <VStack alignItems="flex-start" w="90%">
          <Text fontSize="20px" pt="40px">
          {t("Event Pictures")}
          </Text>
          <Text pb="25px" color="gray">
            {t("Picture Info")}
          </Text>
          <FormControl
            mb={errors?.btnPhoto ? 0 : 6}
            isInvalid={!!errors?.btnPhoto}
          >
            <Controller
              name="btnPhoto"
              control={control}
              rules={{
                required: "Photo is required!",
              }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    type="file"
                    accept="image/*"
                    value={undefined}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={(e) => submit(e?.target?.files?.[0])}
                  />
                  <Button
                    onClick={() => {
                      handleBrowseClick();
                    }}
                    colorScheme="purple"
                  >
                    {t("Add Photo")}
                  </Button>

                  {watch("btnPhoto") && (
                    <div>
                      <Image
                        src={`http://173.212.221.237/images/${watch(
                          "btnPhoto"
                        )}`}
                        alt="Add photo"
                        mt="20px"
                      />
                    </div>
                  )}
                </>
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.btnPhoto?.message as string}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={errors?.about ? 0 : 6} isInvalid={!!errors?.about}>
            <FormLabel pt="60px">{t("About Event")}</FormLabel>
            <Controller
              name="about"
              control={control}
              rules={{
                required: "About info is required!",
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder={t("İnput Event")}
                />
              )}
            />

            <FormErrorMessage mt="0.5rem">
              {errors?.about?.message as string}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
export default Description;
