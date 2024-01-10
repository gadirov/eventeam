import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoriesdata from './categoriesdata.json'

import { Box, Heading, SimpleGrid, } from "@chakra-ui/react";
import CategoriesPageCardItem from "../../Card/CategoriesPageCardItem.tsx";

const Categories: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <Box display="flex" p="120px 0px" justifyContent="center" flexDirection="column" >
            <Box display="flex" justifyContent="center" mb="80px" >
                <Heading
                    color="#131313"
                    fontFamily="Euclid Circular B"
                    fontSize="40px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="40px"
                >Categories</Heading>
            </Box>

            <Box w="88%" margin="auto"  >
                <Slider  {...settings}>
                    <Box display="flex" m="20px 0px"  >
                        <SimpleGrid columns={[1, 2,]} justifyContent="center" spacing={4} height="400px" templateColumns='repeat(auto-fill, minmax(250px, 350px))'>
                            {categoriesdata.map((event) => (
                                <CategoriesPageCardItem {...event} />
                            ))}
                        </SimpleGrid>
                    </Box>
                    <Box display="flex" m="20px 0px"  >
                        <SimpleGrid justifyContent="center" spacing={4} height="400px" templateColumns='repeat(auto-fill, minmax(250px, 350px))'>
                            {categoriesdata.map((event) => (
                                <CategoriesPageCardItem {...event} />
                            ))}
                        </SimpleGrid>
                    </Box>
                </Slider>
            </Box>


        </Box>

    );
};

export default Categories;