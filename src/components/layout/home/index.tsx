import React from "react";
import { Box } from "@chakra-ui/react";
import EventsSection from './EventsSection.tsx'
import EventCountSection from "./EventCountSection.tsx";
import SliderMainPage from "./SliderMainPage.tsx";
import FeaturedEvents from "./FeatureEvents.tsx";
import UsersReviews from "./UsersReviews.tsx";
import Categories from "./CategoriesPage.tsx";
import UpcomingPage from "./UpcomingPage.tsx";
 const Home = () => {
  return (
    <Box>
      <SliderMainPage />
      <EventsSection/>
      <FeaturedEvents/>
      <EventCountSection />
      <UsersReviews/>
      <Categories/>
      <UpcomingPage/>
    </Box>
  );
};

export default Home;