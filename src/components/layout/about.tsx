import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageData from "../layout/aboutpageimage.json";

const About: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 543,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Responsive Background Image */}
      <Box
        bgImage="../assests/AboutPage-Image/abstract-bluish-paint-background-wallpaper.jpg"
        backgroundSize="cover"
        backgroundRepeat={"no-repeat"}
        w="100vw"
        h={{ base: "300px", md: "500px", lg: "600px" }}
        pt={{ base: "40px", md: "80px" }}
        position="relative"
      >
        {/* Responsive Text Position and Font Size */}
        <Text
          position="absolute"
          top={{ base: "200px", md: "350px" }}
          left={{ base: "20px", md: "80px" }}
          fontStyle="italic"
          color="#071450"
          fontSize={{ base: "50px", md: "100px" }}
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
          {t("Our Story")}
        </Heading>
        <Text lineHeight="35px" pt="24px">
        {t("Welcome to Eventeam")}
        </Text>
        <Text lineHeight="35px" pt="24px">
        {t("Established 2021")}
        </Text>
        <Text lineHeight="35px" pt="24px">
        {t("At the outset")}
        </Text>
        <Text lineHeight="35px" pt="24px">
        {t("We wholeheartedly")}
        </Text>
        <Text lineHeight="35px" pt="24px">
        {t("Yours sincerely")}
        </Text>
        <Text lineHeight="35px" pt="24px">
        {t("Eventeam Team")}
        </Text>
      </Box>
      {/* Responsive Slider Section */}
      <Box width={{ base: "95%", md: "82%" }} margin="auto">
        <Heading textAlign="center">{t("Our Events")}</Heading>
        <Box m="40px 0px">
          <Slider {...settings}>
            {Array.from({ length: 2 }).map((_, index) => (
              <Box
                key={index}
                padding="0px 7px"
                display="flex !important"
                gap="20px"
              >
                <Box width="400px" height="350px" display="flex" gap="10px">
                  {imageData?.slice(index * 4, index * 4 + 4)?.map((event) => (
                    <Image
                      w="100%"
                      objectFit="fill"
                      src={event.src}
                      key={event.id}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Slider>
          {/* Slider Separator Line */}
          <Box
            marginTop="20px"
            height="10px"
            width="100%"
            backgroundColor="#071450"
            borderRadius="3px"
            boxShadow="0px -5px 25px #071450"
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
