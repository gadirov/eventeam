import { Box, Image, Text, Heading, Button , Link, Divider } from "@chakra-ui/react";
import React from "react";

export default function FeaturedEvents() {
    return (
        <Box m="10px 0px 120px 0"  >
            <Divider />
            <Box w="85%" margin="auto" padding="120px 0px" >
                <Box display="flex" justifyContent="center" alignItems="center" gap="160px" >
                    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="24x"  >
                        <Box display="flex" flexDirection="column" alignItems="flex-start" gap="12px" >
                            <Box>
                                <Text color="#7848F4" fontFamily="Euclid Circular B" fontSize="18px" fontStyle="normal" fontWeight="500" lineHeight="24px" >FEATURED EVENT</Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" gap="24px" width="399px">
                                <Heading
                                    color="var(--Black-Black, #000)" fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="46px"
                                >The Party Won’t Stop: DAY’N NIGHT FEST2018</Heading>
                                <Text
                                    color="#707070" fontFamily="Euclid Circular B" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="24px"

                                >Discover Spain’s top universities, courses and scholarships at our Education Seminar. </Text>
                            </Box>
                        </Box>
                        <Box mt="24px">
                            <Button
                                display="flex"
                                p=" 25px 29px"
                                justifyContent="center"
                                alignItems="center"
                                gap="10px"
                                borderRadius="5px"
                                background="#8f64ff"
                                color="#FEFEFF"
                            >Learn More</Button>
                        </Box>
                    </Box>
                    <Box >
                        <Link>
                            <Image src="./assests/FeaturedEvents-Images/EventImg.png" />
                        </Link>

                    </Box>
                </Box>
            </Box>
            <Divider/>
        </Box>
    )
}

