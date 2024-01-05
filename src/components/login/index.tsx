import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftSide from './leftSide.tsx';
 function LayoutLogin() {
  return (
    <Box display="flex" w="100%" maxH="100vh">
    <Outlet />
    <LeftSide />
    </Box>
  )
}

export default LayoutLogin;