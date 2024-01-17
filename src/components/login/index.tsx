import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftSide from './leftSide.tsx';

 function LayoutLogin() {
  return (
    <Box display="flex" w="100vw" maxH="100vh">
      <LeftSide />
      <Outlet />
    </Box>
  )
}

export default LayoutLogin;