import React from "react";
import Header from "../commons/header.tsx";
import Footer from "../commons/footer.tsx";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;