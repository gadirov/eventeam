import {
  Box,
  Heading,
  Circle,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Switch,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";

function Event() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      privacy: "1",
      attendees: "",
      browse: "",
      about: "",
      minmax: undefined,
      freePaid: "1",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
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
    <VStack
      bg="#F9FAFB"
      alignItems="center"
      gap="60px"
      pt="100px"
      w="100%"
      justifyContent="center"
    >
      <Box w="50%" pt="20px">
        <Heading textAlign="left">Create an Event</Heading>
      </Box>

      {/* Event Details */}
      <VStack bg="white" p="60px" w="50%">
        <HStack w="90%" alignItems="center">
          <Circle size="78px" bg="#FD9884" />
          <Box pl="32px">
            <Text as="b">Event details</Text>
            <Text color="#98A2B3" pt="16px">
              Please enter the details of the correctly. Event info is
              important.
            </Text>
          </Box>
        </HStack>

        <VStack
          alignItems="center"
          pt="60px"
          pb="60px"
          bg="#F2F4F7"
          w="90%"
          mt="30px"
        >
          <Image src="../assests/Outline.png" />
          <Text as="b" fontSize="36px">
            Drag and drop an image
          </Text>
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

          <Text w="90%" as="b" pt="60px" textAlign="center" color="#667085">
            This is the first image attendees will see at the top of your
            listing. Use a high quality image: 2160x1080px{" "}
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
                required: "This field is required!",
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
                  required: "This field is required!",
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
                  required: "This field is required!",
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
                  required: "This field is required!",
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
                  required: "This field is required!",
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
              {errors?.endTime?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            pt="18px"
            display="flex"
            alignItems="center"
            gap="20px"
            isInvalid={!!errors?.attendees}
          >
            <FormLabel htmlFor="email-alerts" mb="0" fontSize="20px">
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
              render={({ field }) => <Switch {...field} id="email-alerts" />}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.endTime?.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>

      {/* Description */}
      <VStack w="50%" p="60px" bg="white" alignItems="center">
        <HStack w="90%">
          <Circle size="78px" bg="#D19DFA" />
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

          <Button w="40%" colorScheme="gray">
            Add photo
          </Button>

          <FormControl
            mb={errors?.eventName ? 0 : 6}
            isInvalid={!!errors?.about}
          >
            <FormLabel pt="60px">About event</FormLabel>
            <Controller
              name="about"
              control={control}
              rules={{
                required: "This field is required!",
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Input any info about your event"
                />
              )}
            />

            <FormErrorMessage mt="0.5rem">
              {errors?.about?.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>

      {/* Attended */}
      <VStack w="50%" alignItems="center" bg="white" p="60px">
        <HStack w="90%">
          <Circle size="78px" bg="#A3B0FF" />
          <Box pl="32px">
            <Text as="b">Attended</Text>
            <Text color="#98A2B3" pt="16px">
              Roughly how many people do you want to invite?
            </Text>
          </Box>
        </HStack>

        <FormControl w="90%" pt="60px" isInvalid={!!errors?.minmax}>
          <FormLabel fontSize="20px">Expected number of attendees</FormLabel>
          <Controller
            name="minmax"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <HStack {...field} gap="16px">
                <Input type="number" variant="flushed" placeholder="Min" />
                <Input type="number" variant="flushed" placeholder="Max" />
              </HStack>
            )}
          />

          <FormErrorMessage mt="0.5rem">
            {errors?.minmax?.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      {/* Location */}
      <VStack w="50%" alignItems="center" p="60px" bg="white">
        <HStack w="90%">
          <Circle size="78px" bg="blue" />
          <Box pl="32px">
            <Text as="b">Location</Text>
            <Text color="#98A2B3" pt="16px">
              Add an exact location for people to join your event
            </Text>
          </Box>
        </HStack>

        <FormControl w="90%" pt="40px" pb="60px">
          <FormLabel pt="32px">Location</FormLabel>
          <Input mb="30px" placeholder="Location" />

          <Input
            variant="flushed"
            placeholder="Please, add external link about event"
          />
        </FormControl>
      </VStack>

      {/* Category */}
      <VStack w="50%" alignItems="center" bg="white" p="60px">
        <HStack w="90%">
          <Circle size="78px" bg="red" />
          <Box pl="32px">
            <Text as="b">Category</Text>
            <Text color="#98A2B3" pt="16px">
              Select the category to which the event belongs.
            </Text>
          </Box>
        </HStack>

        <Box w="90%" mt="30px">
          <Button alignSelf="flex-start" borderRadius="40px" w="30%" p="25px">
            <HStack gap="10px">
              <Button
                color="white"
                borderRadius="50%"
                w="15px"
                colorScheme="blue"
              >
                +
              </Button>
              <Text>Add category</Text>
            </HStack>
          </Button>
        </Box>
      </VStack>

      {/* Contact */}
      <VStack w="50%" alignItems="center" p="60px" bg="white">
        <HStack w="90%">
          <Circle size="78px" bg="yellow" />
          <Box pl="32px">
            <Text as="b">Contact</Text>
            <Text color="#98A2B3" pt="16px">
              It is important to include a mobile number or other means of
              communication to ensure the seriousness of the event.
            </Text>
          </Box>
        </HStack>

        <FormControl pt="40px" w="90%">
          <FormLabel>Mobile Number</FormLabel>
          <InputGroup>
            <InputLeftElement children="+994" />
            <Input type="tel" variant="flushed" pattern="[0-9]*" />
          </InputGroup>

          <FormLabel pt="40px">Facebook</FormLabel>
          <Input variant="flushed" placeholder="Facebook.com/" />

          <FormLabel pt="40px">Website</FormLabel>
          <Input type="url" variant="flushed" placeholder="Input website url" />
        </FormControl>
      </VStack>

      {/* Ticket type */}
      <VStack w="50%" alignItems="center" p="60px" bg="white">
        <HStack w="90%">
          <Circle size="78px" bg="green" />
          <Box pl="32px">
            <Text as="b">Ticket type</Text>
            <Text color="#98A2B3" pt="16px">
              Determine the type of ticket you need, depending on the type of
              event.
            </Text>
          </Box>
        </HStack>

        <FormControl w="90%" isInvalid={!!errors?.freePaid}>
          <FormLabel pt="40px" fontSize="20px">
            Ticket type
            <Text fontSize="12px" color="gray">
              Choose ticket type
            </Text>
          </FormLabel>
          <Controller
            name="freePaid"
            control={control}
            rules={{
              required: "This field is required!",
            }}
            render={({ field }) => (
              <RadioGroup {...field} pt="10px">
                <Stack direction="row">
                  <Radio value="1" defaultChecked>
                    Free
                  </Radio>
                  <Radio value="2">Paid</Radio>
                </Stack>
              </RadioGroup>
            )}
          />

          <FormErrorMessage mt="0.5rem">
            {errors?.freePaid?.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      <Button
        w="50%"
        colorScheme="blue"
        variant="solid"
        color="white"
        mb="60px"
        onClick={handleSubmit(onSubmit)}
        isDisabled={!isValid}
      >
        Create
      </Button>
    </VStack>
  );
}

export default Event;
