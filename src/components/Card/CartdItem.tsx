import { Card, CardBody } from '@chakra-ui/card'
import { Image } from '@chakra-ui/image'
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CardItem({id,imgUrl,title,date}) {
  return (
    <Card key={id}>
            <CardBody>
              <Image
                src={imgUrl}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                w={"100%"}
                h={"300px"} 
                objectFit={"cover"}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)"}}
              />
              <Stack mt="6" spacing="3">
                <Link to={`/${id}`}><Heading size="md" pb={"10px"} color="#070707" fontWeight="700" fontSize="18px"> {title}</Heading></Link>
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" p="4px 10px" justifyContent="center" alignItems="center" gap="6px" bg="#F2EDFE" borderRadius="4px"><Text  color="#7848F4" fontSize="14px" >Technology</Text></Box>
                  <Box display="flex" justifyContent="center" alignItems="center" gap="6px"><Image src="./assests/Group.png" w="18px" h="18px"/ ><Text fontSize="14px">{date}</Text></Box>
                  <Box display="flex" justifyContent="center" alignItems="center" gap="6px"><Image src="./assests/icon_location.png" w="18px" h="18px"/><Text fontSize="14px">Azerbaijan</Text></Box>
                </Box>
                <Text fontSize="14px" color= "#707070" lineHeight="20px">Discover Spain’s top universities, courses and scholarships at our Education Seminar. Meet experts network and plan your academic journey.</Text>
              </Stack>
            </CardBody>
            <Divider/>
          </Card>
  )
}

