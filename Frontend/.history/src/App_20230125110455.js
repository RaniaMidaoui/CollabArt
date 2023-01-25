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
import Subjects from "./components/Learn/subjects";
import Modules from "./components/Learn/modules";
import Courses from "./components/Learn/courses";
import Help from "./components/Learn/help";
import Instructors from "./components/Learn/instructors";

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
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/help" element={<Help />} />
            <Route path="/instructors" element={<Instructors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
