import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const UsersReviews: React.FC = () => {
  const {t}=useTranslation();
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box
      display="flex"
      padding={{ base: "50px 0px", md: "120px 0px" }}
      justifyContent="center"
      alignItems="center"
      gap="24px"
    >
      <Box>
        <Image
          display={{ base: "none", md: "block" }}
          w="100%"
          src="/assests/UsersReviews-Images/HumansIcon-LestSide.png"
          alt=""
        />
      </Box>
      <Box
        overflow={"hidden"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="0px"
      >
        <Box
          width="323px"
          height="126px"
          display="flex"
          justifyContent="center"
        >
          <Text
            color="#131315"
            fontFamily="Euclid Circular B"
            fontSize="34px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="40px"
          >
             {t("Clients Say")}
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "780px" }}>
          <Slider {...settings}>
            <Box p="0px 20px">
              <Text
                textAlign="center"
                color="#575758"
                fontFamily="Euclid Circular B"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="36px"
              >
                Lorem ipsum dolor sit amet consectetur. At sed dignissim
                pulvinar et. Non adipiscing scelerisque vulputate elit auctor
                libero leo fringilla. Nunc at tortor aliquet ultricies proin non
              </Text>
            </Box>
            <Box p="0px 20px">
              <Text
                textAlign="center"
                color="#575758"
                fontFamily="Euclid Circular B"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="36px"
              >
                Lorem ipsum dolor sit amet consectetur. At sed dignissim
                pulvinar et. Non adipiscing scelerisque vulputate elit auctor
                libero leo fringilla. Nunc at tortor aliquet ultricies proin non
              </Text>
            </Box>
          </Slider>
        </Box>
      </Box>

      <Box>
        <Image
          display={{ base: "none", md: "block" }}
          w="100%"
          src="/assests/UsersReviews-Images/HumansIcon-RightSide.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default UsersReviews;
