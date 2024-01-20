import { Box, Button, Select, SimpleGrid } from "@chakra-ui/react";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useUpcoming } from "../../../hooks/useUpcoming.ts";
import UpcomingPageCardItemSkeleton from "../../Card/CardItemSkeleton.tsx";
import UpcomingPageCardItem from "../../Card/UpcomingPageCardItem.tsx";
import DataNotFound from "..//..//..//dataNotFound.json";

export default function UpcomingPage() {
  const [selectValue, setSelectValue] = useState<string>("upcoming");
  const imagePerRow = 2;
  const [next, setNext] = useState(imagePerRow);
  const [allData, setallData] = useState<any>();

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  // request part section
  const { data, isLoading, error } = useUpcoming(selectValue);
  useEffect(() => {
    setallData(data);
  }, [data, isLoading, error]);

  const changeHandlerSelect = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectValue(e.target.value);
    setallData(data);
  };

  return (
    <Box
      display="flex"
      p="120px 0px "
      justifyContent="center"
      flexDirection="column"
      w="100vw"
    >
      <Box display="flex" justifyContent="center" mb="70px">
        <Select
          onChange={changeHandlerSelect}
          fontFamily="revert-layer"
          fontSize="25px"
          fontStyle="normal"
          fontWeight="500"
          bg="#8F64FF"
          p="5px"
          borderRadius="10px"
          cursor="pointer"
          border="1px solid black"
          w="17vw"
        >
          <option value="upcoming">Upcoming</option>
          <option value="popular-events/v2">Popular events</option>
          <option value="friends-event-list">Friends event list</option>
          <option value="going">Going</option>
          <option value="interested">Interested</option>
        </Select>
      </Box>
      {data?.message === "NOT_FOUND" ? (
        <Box w="100vw" display="flex" justifyContent="center" ml="30px" mt="-20px" height="500px">
          <Lottie animationData={DataNotFound} />
        </Box>
      ) : isLoading ? (
        <Box w="100vw" display="flex">
          <SimpleGrid columns={[1, 2]} spacing="60px" margin="0 auto">
            {Array.from({ length: next }).map((_, index) => (
              <UpcomingPageCardItemSkeleton key={index} />
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <Box w="100vw" display="flex">
          <SimpleGrid columns={[1, 2]} spacing="60px" margin="0 auto">
            {allData?.body?.listOfEvents?.slice(0, next)?.map((event) => (
              <UpcomingPageCardItem {...event} key={event.idEvent} />
            ))}
          </SimpleGrid>
        </Box>
      )}

      {next < allData?.body?.listOfEvents?.length && (
        <Button
          mt="30px"
          mx="auto"
          w="10vw"
          cursor="pointer"
          _hover={{ color: "white" }}
          p="25px 0"
          borderRadius="6px"
          border="1px solid #bababc"
          fontSize="18px"
          fontWeight="600"
          color="#fff"
          bg="#7848F4"
          onClick={handleMoreImage}
          display="flex"
          justifyContent="center"
        >
          Load more
        </Button>
      )}
    </Box>
  );
}
