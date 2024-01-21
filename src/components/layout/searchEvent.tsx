import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/axiosConfig.ts";
import { swrOptions } from "../../const.ts";
import { useDetails } from "../../hooks/useDetails.ts";
import CardItem from "../Card/CartdItem.tsx";
import { useCategory } from "../../hooks/useCategory.ts";

export default function SearchEvent() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [searchData, setsearchData] = useState<any[]>([]);
  const [filterValue, setFilterValue] = React.useState<string>("");
  const [nameOfInput, setNameOfInput] = React.useState<string>("");
  const [attendanceFilter, setAttendanceFilter] = React.useState<string>("");
  const [dateFilter, setDateFilter] = React.useState<string>("");
  const [priceFilter, setPriceFilter] = React.useState<string>("");
  const [categoryFilter, setCategoryFilter] = React.useState<string>("");

  // Request part
  const { data, isLoading } = useDetails();
  const { data: categoryData } = useCategory();
  const { data: filteredData, isLoading: loadingFilter } = useSWR(
    `/events-ms/api/v1/events/filter?${nameOfInput}=${filterValue}`,
    fetcher,
    swrOptions
  );

  useEffect(() => {
    if (!isLoading) {
      setsearchData(data.body);
    }
  }, [data, isLoading]); 

  // Input value changing for search part
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchField(e.target.value);
  };

  // Filter button click event handler
  const handleClearFilter = () => {
    setFilterValue("11111");
    setNameOfInput("");
    setCategoryFilter("")
    setAttendanceFilter("");
    setDateFilter("");
    setPriceFilter("");
    setsearchData(data?.body);
    setSearchField("");
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
    setNameOfInput(event.target.name);

    // Update filter state based on the selected filter
    switch (event.target.name) {
      case "ATTENDANCE":
        setAttendanceFilter(event.target.value);
        break;
      case "date":
        setDateFilter(event.target.value);
        break;
        case "CATEGORY":
        setCategoryFilter(event.target.value);
        break;
      case "ticketType":
        setPriceFilter(event.target.value);
        break;
      default:
        break;
    }

    if (!loadingFilter) {
      setsearchData(filteredData?.body?.eventsList);
    }
  };

  return (
    <Box p={{ base: "165px 0px", md: "200px 0 " }}>
      <Container maxW="95vw">
        <Input
          py={"20px"}
          size={"lg"}
          placeholder="Search Here..."
          fontWeight={"bold"}
          onChange={handleChange}
        />
        <Flex
          justify={"flex-start"}
          gap={"20px"}
          my={"40px"}
          flexDirection={{ base: "column", sm: "row", md: "row" }}
        >
          
          <Box
            display={"flex"}
            gap={"20px"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Select
              placeholder="Category"
              fontWeight={"bold"}
              size={{ base: "lg", md: "md" }}
              bg={"#F2F4F7"}
              name={"CATEGORY"}
              onChange={(event) => handleFilterChange(event)}
              value={categoryFilter}
            >
              {categoryData?.body.map(({name, categoryKey}) => <option key={categoryKey} value={name}>{name}</option>)}
            </Select>
            <Select
              placeholder="Attendance"
              fontWeight={"bold"}
              size={{ base: "lg", md: "md" }}
              bg={"#F2F4F7"}
              name={"ATTENDANCE"}
              onChange={(event) => handleFilterChange(event)}
              value={attendanceFilter}
            >
              <option value="OFFLINE">Offline</option>
              <option value="ONLINE">Online</option>
            </Select>
            <Select
              placeholder="DATE"
              fontWeight={"bold"}
              size={{ base: "lg", md: "md" }}
              bg={"#F2F4F7"}
              onChange={handleFilterChange}
              name="date"
              value={dateFilter}
            >
              <option value="TODAY">TODAY</option>
              <option value="TOMORROW">TOMORROW</option>
              <option value="THISWEEK">THISWEEK</option>
              <option value="THISWEEK">THISWEEK</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Select
              placeholder="Price"
              fontWeight={"bold"}
              size={{ base: "lg", md: "md" }}
              bg={"#F2F4F7"}
              onChange={handleFilterChange}
              name="ticketType"
              value={priceFilter}
            >
              <option value="FREE">Free</option>
              <option value="PAID">Paid</option>
            </Select>
            <Button
              onClick={handleClearFilter}
              bg={"blue"}
              color={"#fff"}
              size={{ base: "lg", md: "md" }}
              padding="0 30px!important"
            >
              Clear Filter
            </Button>
          </Box>
        </Flex>

        {/* Search part */}
        <Box mb="30px" w="50%" mx="auto">
          <CardItem {...searchData[0]} />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="60px">
          {searchData ? (
            searchData
              ?.slice(1)
              ?.filter((event) => {
                return event.eventName
                  .toLowerCase()
                  .includes(searchField.toLowerCase());
              })
              ?.map((event, index) => <CardItem {...event} key={index} />)
          ) : (
            <Text>Loading</Text>
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
