import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";

// Components import
import { Signin } from "./components/Authentication/pages/signin";
import { Signup } from "./components/Authentication/pages/signup";
import DefaultPage from "./components/defaultPage";
import HomePage from "./components/homePage";
import Subjects from "./components/Learn/subjects";
import Modules from "./components/Learn/modules";
import Courses from "./components/Learn/courses";
import Help from "./components/Learn/help";

import { isAuthenticated } from "./services/auth.service";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subjects" element={isAuthenticated() ? <Subjects /> : <Signin />} />
            <Route path="/modules" element={isAuthenticated() ? <Modules /> : <Signin />} />
            <Route path="/courses" element={isAuthenticated() ? <Courses /> : <Signin />} />
            <Route path="/help" element={isAuthenticated() ? <Help /> : <Signin />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
