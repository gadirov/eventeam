import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { Event } from "../../model";

const CardItem: React.FC<Event> = ({
  idEvent,
  coverPhoto,
  eventName,
  startDate,
  startTime,
  endDate,
  endTime,
}) => {
  return (
    <Card key={idEvent}>
      <CardBody>
        <Image
          src={`http://173.212.221.237/images/${coverPhoto}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"100%"}
          h={"300px"}
          // objectFit={"contain"}
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Stack mt="6" spacing="4">
          <Link to={`/${idEvent}`}>
            <Heading
              size="md"
              pb={"10px"}
              color="#070707"
              fontWeight="700"
              fontSize="18px"
            >
              {" "}
              {eventName}
            </Heading>
          </Link>
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              p="4px 10px"
              justifyContent="center"
              alignItems="center"
              gap="6px"
              bg="#F2EDFE"
              borderRadius="4px"
            >
              <Text color="#7848F4" fontSize="14px">
                Free
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
              marginLeft="50px"
            >
              <Image src="./assests/Group.png" w="18px" h="18px" />
              <Text fontWeight="600">Start Date:</Text>
              <Text fontSize="14px">{startDate}</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
            >
              <Image src="./assests/Group.png" w="18px" h="18px" />
              <Text fontWeight="600">Start Time:</Text>
              <Text fontSize="14px">{startTime}</Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
            >
              <Image src="./assests/icon_location.png" w="18px" h="18px" />
              <Text fontSize="14px">Azerbaijan</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
            >
              <Image src="./assests/Group.png" w="18px" h="18px" />
              <Text fontWeight="600">End Date:</Text>
              <Text fontSize="14px">{endDate}</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
              marginRight="6px"
            >
              <Image src="./assests/Group.png" w="18px" h="18px" />
              <Text fontWeight="600">End Time:</Text>
              <Text fontSize="14px">{endTime}</Text>
            </Box>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
