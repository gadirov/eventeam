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
import useSWR from "swr";
import { fetcher } from "../../config/axiosConfig.ts";
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

interface IFilterStateType {
  key:string,
  filter:string
}


const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export default function SearchEvent() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [searchData, setsearchData] = useState<any[]  >([]);
  const [filterAttandance,setFilterAttandance] = React.useState<string>();
  const [filterDate,setFilterDate] = React.useState<string>("")
  const [filterTicketType,setFilterTicketType] = React.useState<string>()
  const [nameOfInput,setNameOfInput] = React.useState<string>()
  const { data:filteredData, isLoading:loadingFilter } = useSWR(
    `/events-ms/api/v1/events/filter?${nameOfInput}=${filterAttandance}`,
    fetcher,
    swrOptions
  );
  //Request part
  const { data,isLoading } = useDetails();

  useEffect(() => {
    setsearchData(data);
    console.log(data)
    if(!isLoading)
    {
      setsearchData(data.body);
    }
  }, [data]);

  const handleChange = (e) => {
  setSearchField(e.target.value)
  
  };

  const handleClearFilter = () => {
    setsearchData(data?.body);
    setSearchField("");
  };

  const handleFilterChange = (event) => {
    setFilterAttandance(event.target.value)
    setNameOfInput(event.target.name)
    if(!loadingFilter)
    {
      setsearchData(filteredData.body.eventsList)
    } 
  }

 
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
            {MonthList.map((value, index) => (
              <option value={value} key={index}>{value}</option>
            ))}
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

        <SimpleGrid columns={[1, 2, 3]} spacing="60px">
          {searchData
            ? searchData
                .filter((event) => {
                  return event.eventName
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
                })
                ?.map((event) => <CardItem  {...event} key={event.idEvent}/>)
            : "loading..."}{" "}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
