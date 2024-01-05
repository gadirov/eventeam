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
    <Box  display="flex" justifyContent="center" alignItems={"center"} gap="200px" mb="150px" h= "500px" background="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .25) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .3) 266.25deg, rgba(7, 20, 80, .25) 1turn)">
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={BiCalendarHeart} boxSize={6} color="#7848f4"  w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="#7848f4" fontWeight="500">{count1}</Heading>
            <Text fontSize="40px" color="#7848f4">Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={FaUser} boxSize={6} color="#7848f4"  w="70px" h="70px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="#7848f4" fontWeight="500">{count2}</Heading>
            <Text fontSize="40px" color="#7848f4">Online Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={IoMdHeart} boxSize={6} color="#7848f4" w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="#7848f4" fontWeight="500">{count3}</Heading>
            <Text fontSize="40px" color="#7848f4">In Person Events</Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Icon as={MdPeople} boxSize={6} color="#7848f4" w="80px" h="80px" mb="20px" />
            <Heading fontSize="80px" fontStyle="italic" color="#7848f4" fontWeight="500">{count4}</Heading>
            <Text fontSize="40px" color="#7848f4">Users</Text>
        </Box>
    </Box>
  )
}
