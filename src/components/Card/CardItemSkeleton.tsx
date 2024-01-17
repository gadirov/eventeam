import { Box, Skeleton } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function UpcomingPageCardItemSkeleton() {
  return (
    <Box
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
          <Skeleton w="60px" h="25px" />
          <Skeleton w="80px" h="25px" />
        </Box>
        <Box>
          <Skeleton w="70%" h="30px" />
        </Box>
        <Box display="flex" alignItems="center" gap="3px">
          <FontAwesomeIcon fontSize="25px" icon={faUser} />
          <Skeleton w="100px" h="20px" pl="20px" ml="10px" />
          <Box mb="2px">
            <Skeleton w="25px" h="25px" />
          </Box>
          <Skeleton w="120px" h="20px" color="gray" />
        </Box>
      </Box>
      <Box w="40%" height="140px">
        <Skeleton w="100%" h="100%" />
      </Box>
    </Box>
  );
}
