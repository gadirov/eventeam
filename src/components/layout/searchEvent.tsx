import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardItem from "../Card/CartdItem.tsx";
import { Months } from "../../const.ts";
import { useDetails } from "../../hooks/useDetails.ts";

interface ApiResponse {
  code: number;
  message: string;
  body: Event[];
}

interface Event {
  idEvent: string;
  coverPhoto: string;
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export default function SearchEvent() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [MonthList] = React.useState<string[]>(Object.keys(Months));
  const [searchData, setsearchData] = useState<ApiResponse>();

  //Request part
  const { data } = useDetails();
  useEffect(() => {
    setsearchData(data);
  }, [data]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleClearFilter = (event) => {
    setsearchData(data);
    setSearchField("");
  };
  return (
    <Box p="200px 0 ">
      <Container maxW="80vw">
        <Input
          py={"20px"}
          size={"lg"}
          placeholder="Search Here..."
          fontWeight={"bold"}
          onChange={handleChange}
        />
        <Flex justify={"flex-start"} gap={"20px"} my={"40px"}>
          <Select
            placeholder="Month"
            fontWeight={"bold"}
            w={"141px"}
            bg={"#F2F4F7"}
          >
            {MonthList.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Select>
          <Select
            placeholder="Category"
            fontWeight={"bold"}
            w={"141px"}
            bg={"#F2F4F7"}
          >
            <option value="option1">Option </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            placeholder="Free"
            fontWeight={"bold"}
            w={"141px"}
            bg={"#F2F4F7"}
          >
            <option value="option1">Option </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button onClick={handleClearFilter} bg={"blue"} color={"#fff"}>
            Clear Filter
          </Button>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing="60px">
          {searchData
            ? searchData.body
                .filter((event) => {
                  return event.eventName
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
                })
                ?.map((event) => <CardItem {...event} />)
            : "loading..."}{" "}
          {/* Burda data Apidan Gelende serti deyisecem */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
