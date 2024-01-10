import React from "react";
import { Box, Text, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function UpcomingPageCardItem({ id, price, imgUrl, title, date, eventName, location }) {
    return (
        <Box key={id} w="670px" height="250px" display="flex" alignItems="center" borderRadius="2px" p="20px" gap="10px" borderBottom="5px solid #8F64FF" >
            <Box w="70%" display="flex" flexDirection="column" gap="30px" >
                <Box display="flex" alignItems="center" gap="20px">
                    <Box p="6px 10px" backgroundColor="green" borderRadius="15px" color="white">{price}</Box>
                    <Text>{date}</Text>
                </Box>
                <Box >
                    <Link>
                        <Text
                            color="black"
                            fontFamily="Euclid Circular B"
                            fontSize="40px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="40px"
                        >{title}</Text>
                    </Link>
                </Box>
                <Box display="flex" alignItems="center" gap="3px" >
                    <FontAwesomeIcon fontSize="25px" icon={faUser} />
                    <Text pl="10px" >{eventName}</Text>
                    <Box mb="2px">
                        <Text color="gray" style={{ fontSize: 25 }}>{`\u2022`}</Text>
                    </Box>
                    <Text color="gray" display="flex" alignItems="center" > {location}</Text>
                </Box>
            </Box>
            <Box w="30%" borderRadius="20px"  >
                <Link>
                    <Image maxWidth="100%" src={imgUrl} alt='' />
                </Link>

            </Box>
        </Box>
    )
}
