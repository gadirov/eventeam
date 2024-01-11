import {
  Box,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
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
  console.log(datas)

  return (
    <Box p={"120px"}>
      <Heading textAlign={"center"} mb={"30px"}>
        Premium <span style={{color:"#8f64ff"}}>Events</span>
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="60px">
        {datas?.body?.map((event) => (
          <CardItem {...event} key={event.idEvent}/>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default EventsSection;
