import {
  Box,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import CardItem from "../../Card/CartdItem.tsx";
import data from "./eventdata.json";

const EventsSection = () => {
  return (
    <Box p={"120px"}>
      <Heading textAlign={"center"} mb={"30px"}>
        Premium <span style={{color:"#8f64ff"}}>Events</span>
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="60px">
        {data.map((event) => (
          <CardItem {...event}/>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default EventsSection;
