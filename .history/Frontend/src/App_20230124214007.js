import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";

// Components import
import ForgotPassword from "./components/Authentication/forgotPassword";
import ResetPasswordForm from "./components/Authentication/resetPassword";
import { Signin } from "./components/Authentication/signin";
import { Singup } from "./components/Authentication/signup";
import DefaultPage from "./components/defaultPage";
import HomePage from "./components/homePage";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/home" element={<HomePage />} />
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
