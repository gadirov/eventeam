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
import { useDetails } from "../../hooks/useDetails.ts";
import useSWR from "swr";
import { fetcher } from "../../config/axiosConfig.ts";
import { useNavigate } from "react-router-dom";
import { swrOptions } from "../../const.ts";


export default function SearchEvent() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [searchData, setsearchData] = useState<any[]>([]);
  const [filterValue, setFilterValue] = React.useState<string>();
  const [nameOfInput, setNameOfInput] = React.useState<string>();
  const { data: filteredData, isLoading: loadingFilter } = useSWR(
    `/events-ms/api/v1/events/filter?${nameOfInput}=${filterValue}`,
    fetcher,
    swrOptions
  );
  //Request part
  const { data, isLoading } = useDetails();
  useEffect(() => {
    if (!isLoading) {
      setsearchData(data.body);
    }
  }, [data, isLoading]);

  // input value changing for search part
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchField(e.target.value);
  };

  // Filter button click event handler
  const handleClearFilter = () => {
    setsearchData(data?.body);
    setSearchField("");
    window.location.reload();
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
    setNameOfInput(event.target.name);
    if (!loadingFilter) {
      setsearchData(filteredData?.body?.eventsList);
    }
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
            placeholder="Attandance"
            fontWeight={"bold"}
            w={"207px"}
            bg={"#F2F4F7"}
            name={"ATTENDANCE"}
            onChange={(event) => handleFilterChange(event)}
          >
            <option value="OFFLINE">Ofline</option>
            <option value="ONLINE">Online</option>
          </Select>
          <Select
            placeholder="DATE"
            fontWeight={"bold"}
            w={"141px"}
            bg={"#F2F4F7"}
            onChange={handleFilterChange}
            name="date"
          >
            <option value="TODAY">TODAY</option>
            <option value="TOMORROW">TOMORROW</option>
            <option value="THISWEEK">THISWEEK</option>
            <option value="THISWEEK">THISWEEK</option>
          </Select>
          <Select
            placeholder="Price"
            fontWeight={"bold"}
            w={"141px"}
            bg={"#F2F4F7"}
            onChange={handleFilterChange}
            name="ticketType"
          >
            <option value="FREE">Free</option>
            <option value="PAID">Paid</option>
          </Select>
          <Button onClick={handleClearFilter} bg={"blue"} color={"#fff"}>
            Clear Filter
          </Button>
        </Flex>

        {/* Search part */}
        <SimpleGrid columns={[1, 2, 3]} spacing="60px">
          {searchData
            ? searchData
                .filter((event) => {
                  return event.eventName
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
                })
                ?.map((event) => <CardItem {...event} key={event.idEvent} />)
            : "loading..."}{" "}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
