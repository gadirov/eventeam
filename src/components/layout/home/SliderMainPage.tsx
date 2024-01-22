import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const SliderMainPage: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      w={"100%"}
      pt="60px"
      pb={"40px"}
      overflow={"hidden"}
      height={{ base: "40vh", sm: "50vh", md: "100vh" }}
      background="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .25) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .3) 266.25deg, rgba(7, 20, 80, .25) 1turn)"
    >
      <Slider  {...settings}>
        <Box paddingTop={{ base: "64px", md: "0px" }} display="flex !important" alignItems="center">
          <Box pl={{ base: "24px", md: "220px" }} flex="0 0 auto" width="50%">
            <Heading
              color="#111833"
              fontFamily="Barlow,sans-serif"
              fontWeight="800"
              letterSpacing="1px"
              pl={{ base: "0px", md: "7px" }}
              fontSize={{ base: "18px", md: "60px" }}
              lineHeight={{ base: "29px", md: "80px" }}
            >
              Join and hurry to make new friends
            </Heading>
            <Text
              color="#111833"
              display="flex"
              flexWrap="wrap"
              fontSize={{ base: "12px", md: "17px" }}
              fontWeight="500"
              letterSpacing="1px"
              mr={{ base: "0px", md: "50px" }}
              mt={{ base: "0px", md: "20px" }}
              pt="10px"
            >
              Gain new friendships from the Eventeam experience
            </Text>
          </Box>
          <Box   >
            <Image
              overflow={"hidden"}
              w="100%"
              src="./assests/Slider-Images/firstImg.png"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
        {/* <Box paddingTop={{ base: "64px", md: "0px" }} display="flex !important" alignItems="center">
          <Box pl={{ base: "24px", md: "220px" }} flex="0 0 auto" width="50%">
            <Heading
              color="#111833"
              fontFamily="Barlow,sans-serif"
              fontWeight="800"
              letterSpacing="1px"
              pt={{ base: "0px", md: "7px" }}
              fontSize={{ base: "18px", md: "60px" }}
              lineHeight={{ base: "29px", md: "80px" }}
            >
              Events, training and lots of fun
            </Heading>
            <Text
              color="#111833"
              display="flex"
              flexWrap="wrap"
              pt="10px"
              fontSize={{ base: "12px", md: "17px" }}
              fontWeight="500"
              letterSpacing="1px"
              mr={{ base: "0px", md: "50px" }}
              mt={{ base: "0px", md: "20px" }}
            >
              The first event-based social network in Azerbaijan
            </Text>
          </Box>
          <Box  >
            <Image
              overflow={"hidden"}
              w="100%"
              src="./assests/Slider-Images/secondImg.png"
              alt=""
            />
          </Box>
        </Box> */}
      </Slider>
    </Box>
  );
};

export default SliderMainPage;
