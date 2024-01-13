import React, { useState } from "react";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import upcomingeventdata from './upcomingeventdata.json'
import UpcomingPageCardItem from "../../Card/UpcomingPageCardItem.tsx";

export default function UpcomingPage() {
    const imagePerRow = 2;
    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
      };
    return (
        <Box display="flex" p="120px 0px" justifyContent="center" flexDirection="column" w="100vw" >
            <Box display="flex" justifyContent="center" mb="70px" >
                <Heading
                    color="#131313"
                    fontFamily="Euclid Circular B"
                    fontSize="40px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="40px"
                >Upcoming</Heading>
            </Box>
            <Box w="100vw" display="flex"   >
                <SimpleGrid columns={[1, 2]} spacing="60px" margin="0 auto">
                    {upcomingeventdata?.slice(0, next)?.map((event) => (
                        <UpcomingPageCardItem {...event} key={event.id} />
                    ))}
                </SimpleGrid>
            </Box>
            {next < upcomingeventdata?.length && (
                <Button
                mt="30px"
                mx="auto"
                w="10vw"
                cursor="pointer"
                _hover={{ color: "white" }}
                p="25px 0"
                borderRadius="6px"
                border="1px solid #bababc"
                fontSize="18px"
                fontWeight="600"
                color="#fff"
                bg="#7848F4"
                onClick={handleMoreImage}
                display="flex"
                justifyContent="center"
                >
                    Load more
                </Button>
        )}
        </Box>
    )


}