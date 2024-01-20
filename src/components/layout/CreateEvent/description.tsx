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
import React, { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdDescription } from "react-icons/md";
import { useHandleImage } from "../../../hooks/useEventImage.ts";

const Description = () => {
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
      <VStack w="50%" p="60px" bg="white" alignItems="center">
        <HStack w="90%">
          <Icon as={MdDescription} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Description</Text>
            <Text color="#98A2B3" pt="16px">
              Provide more information about your event so that guests know what
              to expect.
            </Text>
          </Box>
        </HStack>
        <VStack alignItems="flex-start" w="90%">
          <Text fontSize="20px" pt="40px">
            Event pictures
          </Text>
          <Text pb="25px" color="gray">
            Add Your event's additional picture
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
                    Add photo
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
            <FormLabel pt="60px">About event</FormLabel>
            <Controller
              name="about"
              control={control}
              rules={{
                required: "About info is required!",
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Input any info about your event"
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
