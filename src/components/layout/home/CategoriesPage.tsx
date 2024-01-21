import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useCategory } from "../../../hooks/useCategory.ts";
import CategoriesPageCardItem from "../../Card/CategoriesPageCardItem.tsx";
import { ICategory } from "../../../model.ts";

const Categories: React.FC = () => {
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const { data } = useCategory();

  useEffect(() => {
    if (data?.body) {
      setCategoryData(data.body);
    }
  }, [data]);

  const gapBetweenBoxes = 20;

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
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
        <Slider {...settings}>
          {categoryData.map((category, index) => (
            <Box
              key={index}
              display="grid"
              justifyContent="center"
              mb={gapBetweenBoxes}
            >
              <Box display="grid" height="400px">
                <CategoriesPageCardItem
                  count={category.count}
                  categoryName={category.categoryName}
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
