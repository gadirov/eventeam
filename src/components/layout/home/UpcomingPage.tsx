import React from "react";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import upcomingeventdata from './upcomingeventdata.json'
import UpcomingPageCardItem from "../../Card/UpcomingPageCardItem.tsx";

export default function UpcomingPage() {
    return (
        <Box display="flex" p="120px 0px" justifyContent="center" flexDirection="column" >
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

            <Box w="80%" margin="auto" display="flex"   >
                
                <SimpleGrid columns={[1, 2]} spacing="60px">
                    {upcomingeventdata.map((event) => (
                        <UpcomingPageCardItem {...event} />
                    ))}
                </SimpleGrid>

            </Box>



        </Box>
    )


}