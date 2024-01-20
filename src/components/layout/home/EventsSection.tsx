import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardItem from "../../Card/CartdItem.tsx";
import { useDetails } from "../../../hooks/useDetails.ts";
import { ApiResponse } from "../../../model.ts";

const EventsSection = () => {
  //Request part
  const [datas, setDatas] = useState<ApiResponse>();
  const { data } = useDetails();
  useEffect(() => {
    setDatas(data);
  }, [data]);

  return (
    <Box 
      padding={{ base: "100px 20px"  , md: "120px 120px" }}
     
    >
      <Heading textAlign={"center"} mb={"30px"}>
        Premium <span style={{ color: "#8f64ff" }}>Events</span>
      </Heading>
      <SimpleGrid
        columns={{base:1,md:3}}
         spacing="60px">
        {datas?.body?.map((event) => (
          <CardItem {...event} key={event.idEvent} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default EventsSection;
