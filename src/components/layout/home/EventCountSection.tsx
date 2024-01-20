import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiCalendarHeart } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdPeople } from "react-icons/md";

const CountIcon = ({ icon, count, label }) => (
  <Box
    textAlign="center"
    className="count-icon"
    style={{ transition: "transform 0.3s ease-in-out" }}
  >
    <Box w="300px">
      <Icon as={icon} boxSize={6} color="#7848f4" w="80px" h="80px" mb="20px" />
    </Box>
    <Box w="300px">
      <Heading
        fontSize="80px"
        fontStyle="italic"
        color="#7848f4"
        fontWeight="500"
        mb="15px"
      >
        {count}
      </Heading>
    </Box>
    <Box w="300px">
      <Text fontSize="40px" color="#7848f4">
        {label}
      </Text>
    </Box>
  </Box>
);

const EventCountSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const targetCount1 = 5439;
    const increment1 = 100;

    const targetCount2 = 309;
    const increment2 = 5;

    const targetCount3 = 5130;
    const increment3 = 80;

    const targetCount4 = 23707;
    const increment4 = 500;

    const maxDuration = Math.max(
      targetCount1 / increment1,
      targetCount2 / increment2,
      targetCount3 / increment3,
      targetCount4 / increment4
    );

    const interval = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + increment1, targetCount1));
      setCount2((prevCount) => Math.min(prevCount + increment2, targetCount2));
      setCount3((prevCount) => Math.min(prevCount + increment3, targetCount3));
      setCount4((prevCount) => Math.min(prevCount + increment4, targetCount4));
    }, maxDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="40px"
      mb="100px"
      h="450px"
      bgGradient="conic-gradient(from 243.17deg at 52.66% 45.72%, rgba(7, 20, 80, .25) 0deg, hsla(0, 0%, 100%, 0) 66.85deg, rgba(18, 33, 102, .3) 266.25deg, rgba(7, 20, 80, .25) 1turn)"
    >
      <Box
        w="80%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
      >
        <CountIcon icon={BiCalendarHeart} count={count1} label="Events" />
        <CountIcon icon={FaUser} count={count2} label="Online Events" />
        <CountIcon icon={IoMdHeart} count={count3} label="In Person Events" />
        <CountIcon icon={MdPeople} count={count4} label="Users" />
      </Box>
    </Box>
  );
};

export default EventCountSection;
