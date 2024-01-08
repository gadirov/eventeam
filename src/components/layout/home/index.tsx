import React from "react";
import { Box } from "@chakra-ui/react";
import EventsSection from './EventsSection.tsx'
import EventCountSection from "./EventCountSection.tsx";
import SliderMainPage from "./SliderMainPage.tsx";
import FeaturedEvents from "./FeatureEvents.tsx";
 const Home = () => {
  return (
    <Box>
      <SliderMainPage />
      <EventsSection/>
      <FeaturedEvents/>
      <EventCountSection />
    </Box>
  );
};

export default Home;