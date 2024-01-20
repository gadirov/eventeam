import {  Grid } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftSide from './leftSide.tsx';

 function LayoutLogin() {
  return (
    <Grid templateColumns="1fr 768px" w="100vw" maxH="100vh">
      <LeftSide />
      <Outlet />
    </Grid>
  )
}

export default LayoutLogin;