import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IUpcomingPageCardItem } from "../../model";
import { BaseUrl } from "../../const.ts";

const UpcomingPageCardItem: React.FC<IUpcomingPageCardItem> = ({
  idEvent,
  ticketType,
  eventName,
  startDate,
  startTime,
  coverPhoto,
}) => {
  return (
    <Box
      key={idEvent}
      w={{ base: "360px", sm: "550px", md: "670px" }}
      height="250px"
      display="flex"
      alignItems="center"
      borderRadius="2px"
      p={{ base: "0px", sm: "20px", md: "20px" }}
      gap="10px"
      borderBottom="5px solid #8F64FF"
    >
      <Box display={"flex"} flexDirection={"column"} width={"100%"}  >
        <Box display={"flex"} gap="10px">
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
                  fontSize={{base:"18px",md:"30px"}}
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="30px"
                >
                  {eventName}
                </Text>
              </Link>
            </Box>

          </Box>
          <Box w="45%" m="0" p="0" backgroundPosition={"center"}>
            <Image
              height={"170px"}
              w={"100%"}
              objectFit={"fill"}
              src={`${BaseUrl}/images/${coverPhoto}`}
            />
          </Box>
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





    </Box>
  );
};

export default UpcomingPageCardItem;
