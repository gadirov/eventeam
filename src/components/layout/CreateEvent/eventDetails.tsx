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
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { MdEvent } from "react-icons/md";

interface IEventDetailsProps {
  errors: any;
  control: any;
}

const EventDetails: React.FC<IEventDetailsProps> = ({ errors, control }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

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
          {!selectedImage && (
            <>
              <Image src="../assests/Outline.png" alt="Event outline" />
              <Text as="b" fontSize="36px">
                Drag and drop an image
              </Text>
            </>
          )}
          <Text pt="16px">
            Or{" "}
            <Controller
              name="browse"
              control={control}
              rules={{ required: "This field is required!" }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <Link onClick={handleBrowseClick} color="purple">
                    browse{" "}
                  </Link>
                </>
              )}
            />{" "}
            to choose a file{" "}
          </Text>
          {selectedImage && (
            <div>
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
              />
            </div>
          )}

          <Text w="90%" as="b" pt="30px" textAlign="center" color="#667085">
            This is the first image attendees will see at the top of your
            listing. Use a high-quality image: 2160x1080px{" "}
          </Text>
        </VStack>
        {errors?.browse && (
          <Text color="red" mt="0.5rem">
            {errors?.browse?.message}
          </Text>
        )}

        <VStack w="90%">
          <FormControl
            mb={errors?.eventName ? 0 : 6}
            pt="30px"
            isInvalid={!!errors?.eventName}
          >
            <FormLabel>Name</FormLabel>
            <Controller
              name="eventName"
              control={control}
              rules={{
                required: "Event name is required!",
              }}
              render={({ field }) => (
                <Input {...field} id="eventName" placeholder="Event name" />
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.eventName?.message}
            </FormErrorMessage>
          </FormControl>

          <HStack w="100%">
            <FormControl
              mb={errors?.startDate ? 0 : 6}
              isInvalid={!!errors?.startDate}
            >
              <FormLabel>Start Date</FormLabel>
              <Controller
                name="startDate"
                control={control}
                rules={{
                  required: "Start date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />

              <FormErrorMessage mt="0.5rem">
                {errors?.startDate?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mb={errors?.startTime ? 0 : 6}
              isInvalid={!!errors?.startTime}
            >
              <Controller
                name="startTime"
                control={control}
                rules={{
                  required: "Start time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />

              <FormErrorMessage mt="0.5rem">
                {errors?.startTime?.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>

          <HStack w="100%">
            <FormControl
              mb={errors?.endDate ? 0 : 6}
              isInvalid={!!errors?.endDate}
            >
              <FormLabel>End Date</FormLabel>
              <Controller
                name="endDate"
                control={control}
                rules={{
                  required: "End date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />

              <FormErrorMessage mt="0.5rem">
                {errors?.endDate?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mb={errors?.endTime ? 0 : 6}
              isInvalid={!!errors?.endTime}
            >
              <Controller
                name="endTime"
                control={control}
                rules={{
                  required: "End time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />

              <FormErrorMessage mt="0.5rem">
                {errors?.endTime?.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>

          <FormControl isInvalid={!!errors?.privacy}>
            <FormLabel pt="30px" fontSize="20px">
              Privacy
              <Text fontSize="12px" color="gray">
                Choose event privacy type
              </Text>
            </FormLabel>
            <Controller
              name="privacy"
              control={control}
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
              {errors?.privacy?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            pt="18px"
            display="flex"
            alignItems="center"
            gap="20px"
            isInvalid={!!errors?.attendees}
            mb={errors?.attendees ? 0 : 6}
          >
            <FormLabel htmlFor="attendees" mb="0" fontSize="20px">
              Attendees permission
              <Text fontSize="14px" color="gray">
                Attendees can invite others
              </Text>
            </FormLabel>
            <Controller
              name="attendees"
              control={control}
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
              {errors?.attendees?.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
export default EventDetails;
