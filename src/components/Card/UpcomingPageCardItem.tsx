import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function UpcomingPageCardItem({
  idEvent,
  ticketType,
  eventName,
  startDate,
  startTime,
  coverPhoto
}) {
  return (
    <Box
      key={idEvent}
      w="670px"
      height="250px"
      display="flex"
      alignItems="center"
      borderRadius="2px"
      p="20px"
      gap="10px"
      borderBottom="5px solid #8F64FF"
    >
      <Box w="70%" display="flex" flexDirection="column" gap="30px">
        <Box display="flex" alignItems="center" gap="20px">
          <Box
            p="6px 10px"
            backgroundColor="green"
            borderRadius="15px"
            color="white"
          >
            {ticketType}
          </Box>
          <Text>
            {startDate} , {startTime}
          </Text>
        </Box>
        <Box>
          <Link to={idEvent}>
            <Text
              color="black"
              fontFamily="Euclid Circular B"
              fontSize="30px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="30px"
            >
              {eventName}
            </Text>
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap="3px">
          <FontAwesomeIcon fontSize="25px" icon={faUser} />
          <Text pl="10px">"entertaimentevents"</Text>
          <Box mb="2px">
            <Text color="gray" style={{ fontSize: 25 }}>{`\u2022`}</Text>
          </Box>
          <Text color="gray" display="flex" alignItems="center">
            {" "}
            "Buzovna, Delmar"
          </Text>
        </Box>
      </Box>
      <Box w="40%" height="140px"  backgroundImage={`http://173.212.221.237/images/${coverPhoto}`} m="0" p="0" backgroundPosition={"center"} >
      </Box>
    </Box>
  );
}
