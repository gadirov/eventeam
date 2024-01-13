import { Box, Image, Text, Heading, Button , Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDetails } from "../../../hooks/useDetails.ts";
import { Event } from "../../../model.ts";
import { Link } from "react-router-dom";

export default function FeaturedEvents() {

    const [datas, setDatas] = useState<Event>();
    const { data } = useDetails();
    useEffect(() => {
      setDatas(data?.body[0]);
    }, [data]);
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
                                >{datas?.eventName}</Heading>
                                <Text color="#707070" fontFamily="Euclid Circular B" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="24px">`Embarking on a Soulful Journey: Candid Conversations on Spirituality and Life's True Essence "{datas?.eventName}"`</Text>
                            </Box>
                        </Box>
                        <Box mt="24px">
                            <Link to={`/${datas?.idEvent}`}>
                                <Button
                                    display="flex"
                                    p=" 25px 29px"
                                    justifyContent="center"
                                    alignItems="center"
                                    gap="10px"
                                    borderRadius="5px"
                                    background="#8f64ff"
                                    color="#FEFEFF"
                                    _hover={{ background: "#8f64ff",}}
                                      cursor="pointer"
                                >Learn More</Button>
                            </Link>
                        </Box>
                        
                    </Box>
                    <Box >
                        <Image src="./assests/FeaturedEvents-Images/EventImg.png" />
                    </Box>
                </Box>
            </Box>
            <Divider/>
        </Box>
    )
}

