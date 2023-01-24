import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Authentication/Auth";
import ForgotPassword from "./components/Authentication/forgotPassword";
import ResetPasswordForm from "./components/Authentication/resetPassword";
import { Signin } from "./components/Authentication/signin";
import { Singup } from "./components/Authentication/signup";
import DefaultPage from "./components/defaultPage";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Singup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} /> 
            <Route path="/reset/:userId/:token" element={<ResetPasswordForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
