import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useCategory } from "../../../hooks/useCategory.ts";
import CategoriesPageCardItem from "../../Card/CategoriesPageCardItem.tsx";

const Categories: React.FC = () => {
  const [categoryData, setCategoryData] = useState<any>();
  const { data } = useCategory();

  useEffect(() => {
    setCategoryData(data);
  }, [data]);

  const gapBetweenBoxes = 20;

  return (
    <Box
      display="flex"
      p="120px 0px"
      justifyContent="center"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="center" mb="80px">
        <Heading
          color="#131313"
          fontFamily="Euclid Circular B"
          fontSize="40px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="40px"
        >
          Categories
        </Heading>
      </Box>

      <Box w="88%" margin="auto">
        <Slider
          dots
          infinite
          speed={3000}
          slidesToShow={4}
          slidesToScroll={1}
          swipeToSlide
          autoplay
          autoplaySpeed={3000}
        >
          {categoryData?.body?.map((event, index) => (
            <Box
              key={index}
              display="grid"
              justifyContent="center"
              mb={gapBetweenBoxes}
            >
              <Box display="grid" height="400px">
                <CategoriesPageCardItem
                  count={event.count}
                  categoryName={event.categoryName}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Categories;
