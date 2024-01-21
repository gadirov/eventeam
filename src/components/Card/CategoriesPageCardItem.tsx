import React from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image
} from "@chakra-ui/react";
import { ICategory } from "../../model.ts";

const CategoriesPageCardItem: React.FC<ICategory> = ({
  name,  
  categoryKey ,
  backgroundLink, 
  iconLink,
  eventCount,

}) => {

  return (
    <Card
      borderRadius="20px"
      bgImage={`url(http://173.212.221.237/images/${backgroundLink})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
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
          {eventCount} Events
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
          {name}
        </Text>
      </CardBody>
      <CardFooter p="6px 30px 30px 30px">
        <Image  src={`http://173.212.221.237/images/${iconLink}`}/>
      </CardFooter>
    </Card>
  );
};

export default CategoriesPageCardItem;
