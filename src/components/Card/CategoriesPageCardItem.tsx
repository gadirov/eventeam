import React from "react";
import { Heading, Text, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesPageCardItem({ id, eventDay, title, iconEvent, backgroundColor }) {
    return (
        <Card key={id} borderRadius="20px" bgGradient={backgroundColor}  >
            <CardHeader p="30px 30px 0px 30px">
                <Heading
                    color="#FFF"
                    fontFamily="Euclid Circular B"
                    fontSize="25px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="40px"
                >{eventDay}</Heading>
            </CardHeader>
            <CardBody p="6px 30px 30px 30px">
                <Text
                    color="#FFF"
                    fontFamily="Euclid Circular B"
                    fontSize="35px"
                    fontStyle="normal"
                    fontWeight="600"
                >{title}</Text>
            </CardBody>
            <CardFooter p="6px 30px 30px 30px">
                <FontAwesomeIcon color="white" fontSize="40px" icon={faFilm} />
            </CardFooter>
        </Card>
    )
}