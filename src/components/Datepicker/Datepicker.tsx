import React from 'react';
import { Box, chakra } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@chakra-ui/icons';


 const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    minWidth:'15rem',
    width:'100%',
    height:'2.5rem',
    padding: '0 7px',
    ':focus': {
      outline: '3px solid #0E86D4',
      borderRadius: '2px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
      border: 'none',
    },
    border: '1px solid #d3d3d3',
    borderRadius: '5px'
  },
});

const CustomDatePicker = ({ selectedDate, onChange  }) => {
  return (
    <Box> 
      <ChakraDatePicker   
        showIcon
        icon = {<CalendarIcon/>}
        selected={selectedDate}
        onChange={date => onChange(date)}
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
      />
    </Box>
  );
};



export default CustomDatePicker;

