import {  Grid } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftSide from './leftSide.tsx';

function LayoutLogin() {
  return (
    <Grid templateColumns={{base:"1fr",md:"1fr 768px"}} w="100vw" maxH="100vh" flexDirection={{ base: "column", md: "row" }}>
      <LeftSide />
      <Outlet />
    </Grid>
  )
}

export default LayoutLogin;