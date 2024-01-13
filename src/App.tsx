import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/index.tsx";
import Home from "./components/layout/home/index.tsx";
import About from "./components/layout/about.tsx";
import Contact from "./components/layout/contact.tsx";
import LayoutLogin from "./components/login/index.tsx";
import SignIn from "./components/login/signIn/index.tsx";
import SignUp from "./components/login/signUp/index.tsx";
import ForgetPassword from "./components/login/forgetPassword.tsx/index.tsx";
import Event from "./components/layout/event.tsx";
import SearchEvent from "./components/layout/searchEvent.tsx";
import  DetailView from "./components/detail/index.tsx";
import Account from "./components/layout/account.tsx";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="events" element={<Event />}/>
            <Route path="searchevent" element={<SearchEvent />}/>
            <Route path="account" element={<Account/>}/>
            <Route path=":detailviewid" element={<DetailView />}/>
        </Route>
        <Route path="/sign-in" element={<LayoutLogin />}>
          <Route index  element={<SignIn />}/> 
          <Route path="signup"  element={<SignUp />}/> 
          <Route path="forgetpassword"  element={<ForgetPassword />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
