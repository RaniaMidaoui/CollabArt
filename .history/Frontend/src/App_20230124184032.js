import React, { useState } from "react";
import { BrowserRouter, Route} from 'react-router-dom';

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Authentication/Auth";
import ForgotPassword from "./components/Authentication/forgotPassword";
import ResetPasswordForm from "./components/Authentication/resetPassword";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} /> 
            <Route path="/reset/:userId/:token" element={<ResetPasswordForm/>} />
        </Routes>
      </BrowserRouter>
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
