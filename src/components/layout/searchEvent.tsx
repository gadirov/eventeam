import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import CardItem from "../Card/CartdItem.tsx";
import data from "./home/eventdata.json";
import { Months } from "../../const.ts";
import { IEventData } from "../../model.ts";
export default function SearchEvent() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [MonthList] = React.useState<string[]>(Object.keys(Months));
  const [eventData,setEventData] = React.useState<IEventData[]>()
  const handleChange = e => {
    setSearchField(e.target.value);
    

  };

  React.useEffect(() => {
    setEventData(data)
  },[])
  const handleClearFilter = (event) => {
    setEventData(data)
    setSearchField("")
    
  }
  return (
    <Box pt="200px">
      <Container maxW="1170px">
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
          <Button onClick={handleClearFilter} bg={"blue"} color={"#fff"}>Clear Filter</Button>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing="60px">
          {eventData?eventData
            .filter((event) => {
              return event.title
                .toLowerCase()
                .includes(searchField.toLowerCase());
            })
            .map((event) => (
              <CardItem {...event} /> 
            )) : "loading..."}    {/* Burda data Apidan Gelende serti deyisecem */}
         
        </SimpleGrid>
      </Container>
    </Box>
  );
}
