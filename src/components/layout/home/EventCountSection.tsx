import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiCalendarHeart} from 'react-icons/bi';
import { FaUser } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdPeople } from "react-icons/md";

export default function EventCountSection() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

  useEffect(() => {
    const targetCount1 = 5225;
    const increment1 = 100;

    const targetCount2 = 229;
    const increment2 = 5;

    const targetCount3 = 4230;
    const increment3 = 80;

    const targetCount4 = 23400;
    const increment4 = 500;

    const maxDuration = Math.max( targetCount1 / increment1, targetCount2 / increment2,targetCount3 / increment3,targetCount4 / increment4 );

    const interval = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + increment1, targetCount1));
      setCount2((prevCount) => Math.min(prevCount + increment2, targetCount2));
      setCount3((prevCount) => Math.min(prevCount + increment3, targetCount3));
      setCount4((prevCount) => Math.min(prevCount + increment4, targetCount4));
    }, maxDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box  display="flex" justifyContent="center" alignItems={"center"} gap="200px" mb="150px" h= "500px" background={`linear-gradient(rgba(45, 55, 80, 0.8) 100%, rgba(45, 55, 60, 0.9) 0), url(./assests/about.jpeg)`}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={BiCalendarHeart} boxSize={6} color="#66f5ff"  w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="white" fontWeight="500">{count1}</Heading>
            <Text fontSize="40px" color="white">Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={FaUser} boxSize={6} color="#66f5ff"  w="70px" h="70px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="white" fontWeight="500">{count2}</Heading>
            <Text fontSize="40px" color="white">Online Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={IoMdHeart} boxSize={6} color="#66f5ff" w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="white" fontWeight="500">{count3}</Heading>
            <Text fontSize="40px" color="white">In Person Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={MdPeople} boxSize={6} color="#66f5ff" w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="white" fontWeight="500">{count4}</Heading>
            <Text fontSize="40px" color="white">Users</Text>
        </Box>
    </Box>
  )
}
