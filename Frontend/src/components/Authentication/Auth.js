
import React, { useState } from "react";
import { Signin } from './signin';
import { Singup } from './signup';

export default function Auth() {

    const [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    }

    const component = authMode === "signin" 
        ? <Signin changeAuthMode={changeAuthMode} /> 
        : <Singup changeAuthMode={changeAuthMode} />;
    return (component);
}