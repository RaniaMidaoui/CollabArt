import React, { useState } from "react";
import { Signin } from './Signin';
import { Singup } from './Signup';

export function Auth() {

    const [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    }

    const component = authMode === "signin" 
        ? <Signin changeAuthMode={changeAuthMode} /> 
        : <Singup changeAuthMode={changeAuthMode} />;
    return (component);
}
