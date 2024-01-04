import React from "react";

import { useDetails } from "./hooks/useDetails.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/index.tsx";
import Home from "./components/layout/home/index.tsx";
import About from "./components/layout/about.tsx";
import Contact from "./components/layout/contact.tsx";
function App() {
  const { data } = useDetails();
  console.log("-----", data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            {/* <Route path="events" element={</>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
