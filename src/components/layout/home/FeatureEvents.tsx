import { Box, Image, Text, Heading, Button, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDetails } from "../../../hooks/useDetails.ts";
import { IEvent } from "../../../model.ts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BaseUrl } from "../../../const.ts";

export default function FeaturedEvents() {
  const {t}=useTranslation();
  const [datas, setDatas] = useState<IEvent>();
  const { data } = useDetails();
  useEffect(() => {
    setDatas(data?.body[0]);
  }, [data]);
  return (
    <Box m="10px 0px 120px 0">
      <Divider />
      <Box w="80%" margin="auto" padding="70px 0px">
        <Box
          flexDirection={{ base: "column", md: "row" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={{ base: " 50px", md: "130px" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="24x"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="12px"
            >
              <Box>
                <Text
                  color="#7848F4"
                  fontFamily="Euclid Circular B"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  margin={{ base: " 0px 30px", md: "0px" }}
                >
                  {t("FEATURED EVENT")}
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={{base:"10px",md:"24px"}}
                width="399px"
              >
                <Heading
                  color="var(--Black-Black, #000)"
                  fontFamily="Inter"
                  fontSize={{base:"22",md:"32px"}}
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="46px"
                  margin={{ base: " 0px 30px", md: "0px" }}
                >
                  {datas?.eventName}
                </Heading>
                <Text
                  color="#707070"
                  fontFamily="Euclid Circular B"
                  fontSize={{base:"14",md:"19px"}}
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24px"
                  margin={{ base: " 0px 30px", md: "0px" }}
                >
                  {t("Embarking on")}
                  {datas?.eventName}"`
                </Text>
              </Box>
            </Box>
            <Box mt="24px">
              <Link to={`/${datas?.idEvent}`}>
                <Button
                  display="flex"
                  p=" 25px 29px"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  borderRadius="5px"
                  background="#8F64FF"
                  color="#FEFEFF"
                  _hover={{ background: "#8F64FF" }}
                  cursor="pointer"
                  margin={{ base: " 0px 30px", md: "0px" }}
                >
                  {t("Learn More")}
                </Button>
              </Link>
            </Box>
          </Box>
          <Box boxShadow={"0px 15px 20px gray;"}>
            <Image
              width={"750px"}
              height={{base:"37vh",md:"60vh"}}
              objectPosition={"center"}
              src={`${BaseUrl}/images/${datas?.coverPhoto}`}
            />
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
