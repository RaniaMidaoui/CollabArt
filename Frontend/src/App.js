import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Auth } from './components/Auth';
import { DefaultPage } from './components/DefaultPage';
import { Learn } from "./components/Learn";
import { ForgotPassword } from './components/forgotPassword';
import { ResetPasswordForm } from "./components/ResetPassword";
import { MyCourses } from "./components/MyCourses";
import { MyModules } from "./components/MyModules";
import { AllSubjects } from "./components/AllSubjects";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} /> 
                <Route path="/reset/:userId/:token" element={<ResetPasswordForm/>} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/allsubjects" element={<AllSubjects />} />
                <Route path="/mycourses" element={<MyCourses />} />
                <Route path="/mymodules" element={<MyModules />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;