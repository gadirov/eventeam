import {
  Box,
  Button,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import React, { useEffect, useState, useTransition } from "react";
import { useUpcoming } from "../../../hooks/useUpcoming.ts";
import UpcomingPageCardItemSkeleton from "../../Card/CardItemSkeleton.tsx";
import UpcomingPageCardItem from "../../Card/UpcomingPageCardItem.tsx";
import DataNotFound from "..//..//..//dataNotFound.json";
import { useTranslation } from "react-i18next";

export default function UpcomingPage() {
  const {t}=useTranslation();
  const [selectValue, setSelectValue] = useState<string>("upcoming");
  const imagePerRow = 2;
  const [next, setNext] = useState(imagePerRow);
  const [allData, setAllData] = useState<any>();

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const { data, isLoading } = useUpcoming(selectValue);

  useEffect(() => {
    setAllData(data);
  }, [data, isLoading]);

  const changeHandlerSelect = (index: number) => {
    const values = [
      "upcoming",
      "popular-events/v2",
      "friends-event-list",
      "going",
      "interested",
    ];
    setSelectValue(values[index]);
    setAllData(data);
  };

  const renderTabPanelContent = () => {
    if (data?.message === "NOT_FOUND") {
      return (
        <Box
          w="100vw"
          display="flex"
          justifyContent="center"
          ml="30px"
          mt="20px"
          height="500px"
        >
          <Lottie animationData={DataNotFound} />
        </Box>
      );
    } else if (isLoading) {
      return (
        <Box w="100vw" display="flex">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing="60px"
            margin="0 auto"
          >
            {Array.from({ length: next }).map((_, index) => (
              <UpcomingPageCardItemSkeleton key={index} />
            ))}
          </SimpleGrid>
        </Box>
      );
    } else {
      return (
        <Box w="100vw" display="flex">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing="60px"
            margin="0 auto"
          >
            {" "}
            {allData?.body?.listOfEvents
              ? allData?.body?.listOfEvents
                  ?.slice(0, next)
                  ?.map((event) => (
                    <UpcomingPageCardItem {...event} key={event.idEvent} />
                  ))
              : allData?.body
                  ?.slice(0, next)
                  ?.map((event) => (
                    <UpcomingPageCardItem {...event} key={event.idEvent} />
                  ))}
          </SimpleGrid>
        </Box>
      );
    }
  };

  return (
    <Box
      display="flex"
      p={{base:"0px 0px 120px 0px",md:"0px 0px 120px 0px"}}
      justifyContent="center"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="center" mb="70px">
        <Tabs onChange={(index) => changeHandlerSelect(index)}>
          <TabList w={{base:"80%",md:"69%"}} m="0 auto" gap={"15px"}>
            <Tab  p={{base:"0px",md:"8px 16px"}} fontSize={{base:"12px",md:"22px"}} >{t("Upcoming")}</Tab>
            <Tab  p={{base:"0px",md:"8px 16px"}} fontSize={{base:"12px",md:"22px"}}>{t("Popular Events")}</Tab>
            <Tab  p={{base:"0px",md:"8px 16px"}} fontSize={{base:"12px",md:"22px"}}>{t("Friend Events")}</Tab>
            <Tab  p={{base:"0px",md:"8px 16px"}} fontSize={{base:"12px",md:"22px"}}>{t("Going")}</Tab>
            <Tab  p={{base:"0px",md:"8px 16px"}} fontSize={{base:"12px",md:"22px"}}>{t("Interested")}</Tab>
          </TabList>

          <TabPanels>
            {[0, 1, 2, 3, 4].map((index) => (
              <TabPanel key={index}>{renderTabPanelContent()}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>

      {next < allData?.body?.listOfEvents?.length && (
        <Button
          mt="30px"
          mx="auto"
          w="150px"
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
          {t("Load More")}
        </Button>
      )}
    </Box>
  );
}
