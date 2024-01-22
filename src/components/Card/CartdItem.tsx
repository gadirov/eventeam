import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { IEventProps } from "../../model.ts";
import { BaseUrl } from "../../const.ts";

const CardItem: React.FC<IEventProps> = ({
  idEvent,
  coverPhoto,
  eventName,
}) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={`${BaseUrl}/images/${coverPhoto}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"100%"}
          h={"300px"}
          // objectFit={"contain"}
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Stack mt="6" spacing="4">
          <Link to={`/${idEvent}`}>
            <Heading
              size="md"
              pb={"10px"}
              color="#070707"
              fontWeight="700"
              fontFamily="Euclid Circular B"
              fontSize="21px"
              lineHeight="30px"
              h="60px"
              _hover={{textDecoration: "underline", transition: "textDecoration 5s"}}
            >
              {" "}
              {eventName}
            </Heading>
          </Link>
          <Box display="flex" justifyContent="space-between" >
            <Box
              mt={"16px"}
              display="flex"
              p="4px 10px"
              justifyContent="center"
              alignItems="center"
              gap="6px"
              bg="#F2EDFE"
              borderRadius="4px"
            >
              <Text color="#7848F4" fontSize="14px">
                Free
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6px"
            >
              <Image src="./assests/icon_location.png" w="18px" h="18px" />
              <Text fontSize="14px">Azerbaijan</Text>
            </Box>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
