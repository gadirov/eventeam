import React from "react";
import { Box } from "@chakra-ui/react";
import EventsSection from './EventsSection.tsx'
import EventCountSection from "./EventCountSection.tsx";
import SimpleSlider from "./SimpleSlider.tsx";
 const Home = () => {
  return (
    <Box>
      <SimpleSlider />
      <EventsSection/>
      <EventCountSection />
    </Box>
  );
};

export default Home;