import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";


const SliderMainPage: React.FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200
  };

  return (
    <Box pt="80px"  >
      <Slider  {...settings}>
        <Box display="flex !important" alignItems="center"  >
          <Box pl="50px" flex="0 0 auto" width="50%" >
            <Heading
              color="#111833"
              fontFamily="Barlow,sans-serif"
              fontSize="60px"
              fontWeight="800"
              letterSpacing="1px"
              lineHeight="80px"
              pt="7px"
            >Join and hurry to make new friends</Heading>
            <Text
              color="#111833"
              display="flex"
              flexWrap="wrap"
              fontSize="17px"
              fontWeight="500"
              letterSpacing="1px"
              mr="50px"
              mt="20px"
              pt="10px"
            >Gain new friendships from the Eventeam experience</Text>
          </Box>
          <Box>
            <Image w="100%" src="./assests/Slider-Images/firstImg.png" alt='Dan Abramov' />

          </Box>
        </Box>
        <Box display="flex !important" alignItems="center"  >
          <Box pl="50px" flex="0 0 auto" width="50%" >
            <Heading
              color="#111833"
              fontFamily="Barlow,sans-serif"
              fontSize="60px"
              fontWeight="800"
              letterSpacing="1px"
              lineHeight="80px"
              pt="7px"
            >Events, training and lots of fun</Heading>
            <Text
              color="#111833"
              display="flex"
              flexWrap="wrap"
              fontSize="17px"
              fontWeight="500"
              letterSpacing="1px"
              mr="50px"
              mt="20px"
              pt="10px"
            >The first event-based social network in Azerbaijan</Text>
          </Box>
          <Box>
          <Image w="100%" src="./assests/Slider-Images/secondImg.png" alt='' />

          </Box>
        </Box>

      </Slider>
    </Box>

  );
};

export default SliderMainPage;
