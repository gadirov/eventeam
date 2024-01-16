import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        bgImage="../assests/AboutPage-Image/abstract-bluish-paint-background-wallpaper.jpg" backgroundSize="100%"
        // bg="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .7) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .7) 266.25deg, rgba(7, 20, 80, .7) 1turn)"
        w="100vw"
        h="600px"
        pt="80px"
      >
        <Text
          position="relative"
          top="250px"
          left="80px"
          fontStyle="italic"
          color="#071450"
          fontSize="100px"
        >
          {t("About")}
        </Text>
      </Box>
      <Box
        width="80vw"
        display="flex"
        flexDirection="column"
        margin="50px auto"
        color="#515154"
        textAlign="justify"
      >
        <Heading fontSize="35px" color="#071450" fontWeight="700">
          Our Story
        </Heading>
        <Text lineHeight="35px" pt="24px">
          Welcome to Eventeam LLC App, the foremost platform for organizing and
          managing exceptional events. Committed to providing unparalleled
          services, we prioritize enhancing connectivity, facilitating the
          formation of new friendships, and creating thrilling opportunities.
        </Text>
        <Text lineHeight="35px" pt="24px">
          Established in 2021 by a team fueled by unwavering enthusiasm,
          Eventeam LLC has traversed a remarkable journey since its inception in
          the vibrant city of Baku, Azerbaijan. Our inspiration stems from the
          profound impact of the year-long series of lockdowns and stringent
          measures that brought social life and cherished pastimes to a grinding
          halt. Recognizing the profound yearning of individuals worldwide to
          rebuild their social circles, rekindle their passion for social
          activities, and embrace the boundless possibilities of post-pandemic
          life, we embarked on a mission to facilitate these aspirations. Thus,
          we sought to provide a universal and user-friendly solution,
          empowering individuals to forge meaningful connections through an
          innovative and comprehensive event management application.
        </Text>
        <Text lineHeight="35px" pt="24px">
          At the outset, Eventeam LLC was driven by an ardent desire to help
          people revel in memorable experiences. This fervor led us to abandon
          conventional employment, embark on exhaustive research endeavors, and
          invest unwavering dedication to develop the world's most advanced
          event management app. Today, we proudly extend our services to
          customers across Azerbaijan, exhilarated by the opportunity to
          transform our passion into a flourishing digital platform.
        </Text>
        <Text lineHeight="35px" pt="24px">
          We wholeheartedly hope that our products captivate your senses and
          invigorate your event planning endeavors, as much as we relish
          offering them to you. Should you have any inquiries or suggestions,
          please do not hesitate to reach out to us.
        </Text>
        <Text lineHeight="35px" pt="24px">
          Yours sincerely,
        </Text>
        <Text lineHeight="35px" pt="24px">
          The Eventeam Team
        </Text>
      </Box>
      <Box width={"100%"} margin={"auto"} >
        <Heading></Heading>
        {/* <SimpleGrid columns={[1, 2, 3, 4]} justifyContent="center" spacing={4} height="400px" templateColumns='repeat(auto-fill, minmax(250px, 350px))'>
          <Box width="300px">
            <Image w={"100%"} src="./assests/AboutPage-Image/imageSignin.jpg" />
          </Box>
          <Box width="300px">
            <Image w={"100%"} src="./assests/AboutPage-Image/imageSignin.jpg" />
          </Box>
          <Box width="300px">
            <Image w={"100%"} src="./assests/AboutPage-Image/imageSignin.jpg" />
          </Box>
          <Box width="300px">
            <Image w={"100%"} src="./assests/AboutPage-Image/imageSignin.jpg" />
          </Box>
        </SimpleGrid> */}
      </Box>
    </>
  );
};
export default About;
