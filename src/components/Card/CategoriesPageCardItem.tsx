import React from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesPageCardItem({ count, categoryName }) {
  const category = categoryName.split(".")[1].toUpperCase();
  return (
    <Card
      borderRadius="20px"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      margin="0 10px"
    >
      <CardHeader p="30px 30px 0px 30px">
        <Heading
          color="#FFF"
          fontFamily="Euclid Circular B"
          fontSize="25px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="40px"
        >
          {count} Events
        </Heading>
      </CardHeader>
      <CardBody p="6px 30px 30px 30px">
        <Text
          color="#FFF"
          fontFamily="Euclid Circular B"
          fontSize="35px"
          fontStyle="normal"
          fontWeight="600"
        >
          {category}
        </Text>
      </CardBody>
      <CardFooter p="6px 30px 30px 30px">
        <FontAwesomeIcon color="white" fontSize="40px" icon={faFilm} />
      </CardFooter>
    </Card>
  );
}
