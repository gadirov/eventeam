import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import data from "./eventdata.json";

const EventsSection = () => {
  return (
    <Box p={"150px"}>
      <Heading textAlign={"center"} mb={"30px"}>
        Premium <span style={{color:"#8f64ff"}}>Events</span>
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="60px">
        {data.map(({ id, title, date, imgUrl }) => (
          <Card key={id} height="100%">
            <CardBody>
              <Image
                src={imgUrl}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                w={"100%"}
                h={"350px"} 
                objectFit={"cover"}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)"}}
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
      </SimpleGrid>
    </Box>
  );
};

export default EventsSection;
