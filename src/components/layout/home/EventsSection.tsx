import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import data from "./eventdata.json";

const EventsSection = () => {
  return (
    <Box py={"200px"} >
      <Heading textAlign={"center"} mb={"30px"}>
        Premium Events
      </Heading>
      <Flex justify={"space-between"} wrap={"wrap"}>
        {data.map(({id,title,date,imgUrl}) => (
          <Card mb={"20px"} w={"400px"} key={id} height={"max-content"}>
            <CardBody>
              <Image
                src={imgUrl}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                w={"100%"}
                objectFit={"contain"}
              />
              <Stack mt="6" spacing="3">
                <Text color={"#111833"}>{date}</Text>
                <Heading size="md" pb={"10px"}>
                  {title}
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default EventsSection;
