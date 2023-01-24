import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

export default function DefaultPage() {

    const [hamActive, setHamActive] = useState(false);
    
    <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Singup />} />
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

}