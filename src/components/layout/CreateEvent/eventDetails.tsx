import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Image,
  Input,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Stack,
  Radio,
  Switch,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdEvent } from "react-icons/md";
import { useEventImage } from "../../../hooks/useEventImage.ts";


const EventDetails = () => {
  const methods = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { submit, image } = useEventImage()

  useEffect(() => {
    image && methods?.setValue("browse", image);
  },[image])


  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <VStack bg="white" p="60px" w="50%">
        <HStack w="90%" alignItems="center">
          <Icon as={MdEvent} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Event details</Text>
            <Text color="#98A2B3" pt="16px">
              Please enter the details correctly. Event info is important.
            </Text>
          </Box>
        </HStack>
        <VStack
          alignItems="center"
          pt="30px"
          pb="30px"
          bg="#F2F4F7"
          w="90%"
          mt="30px"
        >
          {/* {!selectedImage && (
            <>
              <Image src="../assests/Outline.png" alt="Event outline" />
              <Text as="b" fontSize="36px">
                Drag and drop an image
              </Text>
            </>
          )} */}
          <Text pt="16px">
            Or{" "}
            <Controller
              name="browse"
              control={methods?.control}
              rules={{ required: "This field is required!" }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) =>submit(e?.target?.files?.[0])}
                  />
                  <Link onClick={handleBrowseClick} color="purple">
                    browse{" "}
                  </Link>
                </>
              )}
            />{" "}
            to choose a file{" "}
          </Text>
          {/* {selectedImage && (
            <div>
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
              />
            </div>
          )} */}
          <Text w="90%" as="b" pt="30px" textAlign="center" color="#667085">
            This is the first image attendees will see at the top of your
            listing. Use a high-quality image: 2160x1080px{" "}
          </Text>
        </VStack>
        {methods?.formState?.errors?.browse && (
          <Text color="red" mt="0.5rem">
            {/* {methods.formState?.errors?.browse?.message} */}
          </Text>
        )}
        <VStack w="90%">
          <FormControl
            mb={methods?.formState?.errors?.eventName ? 0 : 6}
            pt="30px"
            isInvalid={!!methods?.formState?.errors?.eventName}
          >
            <FormLabel>Name</FormLabel>
            <Controller
              name="eventName"
              control={methods?.control}
              rules={{
                required: "Event name is required!",
              }}
              render={({ field }) => (
                <Input {...field} id="eventName" placeholder="Event name" />
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {/* {methods?.formState?.errors?.eventName?.message} */}
            </FormErrorMessage>
          </FormControl>
          <HStack w="100%">
            <FormControl
              mb={methods?.formState?.errors?.startDate ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.startDate}
            >
              <FormLabel>Start Date</FormLabel>
              <Controller
                name="startDate"
                control={methods?.control}
                rules={{
                  required: "Start date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />
              <FormErrorMessage mt="0.5rem">
                {/* {methods.formState?.errors?.startDate?.message} */}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              mb={methods?.formState?.errors?.startTime ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.startTime}
            >
              <Controller
                name="startTime"
                control={methods?.control}
                rules={{
                  required: "Start time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />
              <FormErrorMessage mt="0.5rem">
                {/* {methods.formState?.errors?.startTime?.message} */}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack w="100%">
            <FormControl
              mb={methods?.formState?.errors?.endDate ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.endDate}
            >
              <FormLabel>End Date</FormLabel>
              <Controller
                name="endDate"
                control={methods?.control}
                rules={{
                  required: "End date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />
              <FormErrorMessage mt="0.5rem">
                {/* {methods.formState?.errors?.endDate?.message} */}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              mb={methods?.formState?.errors?.endTime ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.endTime}
            >
              <Controller
                name="endTime"
                control={methods?.control}
                rules={{
                  required: "End time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />
              <FormErrorMessage mt="0.5rem">
                {/* {methods.formState?.errors?.endTime?.message} */}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl isInvalid={!!methods?.formState?.errors?.privacy}>
            <FormLabel pt="30px" fontSize="20px">
              Privacy
              <Text fontSize="12px" color="gray">
                Choose event privacy type
              </Text>
            </FormLabel>
            <Controller
              name="privacy"
              control={methods?.control}
              rules={{
                required: "This field is required!",
              }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <Stack direction="row">
                    <Radio value="1" defaultChecked>
                      Public
                    </Radio>
                    <Radio value="2">Private</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {/* {errors?.privacy?.message} */}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            pt="18px"
            display="flex"
            alignItems="center"
            gap="20px"
            // isInvalid={!!errors?.attendees}
            // mb={errors?.attendees ? 0 : 6}
          >
            <FormLabel htmlFor="attendees" mb="0" fontSize="20px">
              Attendees permission
              <Text fontSize="14px" color="gray">
                Attendees can invite others
              </Text>
            </FormLabel>
            <Controller
              name="attendees"
              control={methods?.control}
              rules={{
                required: "This field is required!",
              }}
              render={({ field }) => (
                <Switch
                  {...field}
                  id="attendees"
                  value={field.value ? "true" : ""}
                />
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {/* {errors?.attendees?.message} */}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
export default EventDetails;














