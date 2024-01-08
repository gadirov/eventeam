import {
  Box,
  Heading,
  Circle,
  Flex,
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
} from "@chakra-ui/react";
import React from "react";

function Event() {
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
            <Link color="#7F56D9" href="#">
              browse
            </Link>{" "}
            to choose a file{" "}
          </Text>
          <Text w="90%" as="b" pt="60px" textAlign="center" color="#667085">
            This is the first image attendees will see at the top of your
            listing. Use a high quality image: 2160x1080px{" "}
          </Text>
        </VStack>

        <VStack w="90%">
          <FormControl pt="30px">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Event name" />
          </FormControl>

          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <HStack gap="10px">
              <Input w="50%" placeholder="Choose date" />
              <Input w="50%" placeholder="Choose Time" />
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>End Date</FormLabel>
            <HStack>
              <Input w="50%" placeholder="Choose date" />
              <Input w="50%" placeholder="Choose Time" />
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel pt="30px" fontSize="20px">
              Privacy
              <Text fontSize="12px" color="gray">
                Choose event privacy type
              </Text>
            </FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Public</Radio>
                <Radio value="2">Private</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl pt="18px" display="flex" alignItems="center" gap="20px">
            <FormLabel htmlFor="email-alerts" mb="0" fontSize="20px">
              Attendees permission
              <Text fontSize="14px" color="gray">
                Attendees can invite others
              </Text>
            </FormLabel>
            <Switch id="email-alerts" />
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

          <FormLabel pt="60px">About event</FormLabel>
          <Textarea placeholder="Input any info about of your event" />
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

        <FormControl w="90%" pt="60px">
          <FormLabel fontSize="20px">Expected number of attendees</FormLabel>
          <HStack gap="16px">
            <Input variant="flushed" placeholder="Min" />
            <Input variant="flushed" placeholder="Max" />
          </HStack>
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
          <Input mb="30px" placeholder="Choose any location" />

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
              <Button color="white" borderRadius="50%" w="15px" bg="blue">
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
            <InputLeftElement>+994</InputLeftElement>
            <Input type="tel" variant="flushed" />
          </InputGroup>

          <FormLabel pt="40px">Facebook</FormLabel>
          <Input variant="flushed" placeholder="Facebook.com/" />

          <FormLabel pt="40px">Website</FormLabel>
          <Input variant="flushed" placeholder="Input website url" />
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

        <FormControl w="90%">
          <FormLabel pt="40px" fontSize="20px">
            Ticket type
            <Text fontSize="12px" color="gray">
              Choose ticket type
            </Text>
          </FormLabel>
          <RadioGroup pt="10px">
            <Stack direction="row">
              <Radio value="1">Free</Radio>
              <Radio value="2">Paid</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </VStack>
      <Button
        w="50%"
        colorScheme="blue"
        variant="solid"
        color="white"
        mb="60px"
      >
        Create
      </Button>
    </VStack>
  );
}

export default Event;
