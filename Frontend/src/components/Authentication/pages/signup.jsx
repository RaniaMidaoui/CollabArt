import { useState, useEffect } from "react";
import  Alert from "react-bootstrap/Alert";

import { createUser } from "../../../services/auth.service";

import Input from "../input";
import Select from "../select";


export function Signup(props) {

    const formData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'student',
        verifyPassword: ''
    };

    const [formColors, setFormColors] = useState({
        firstName: 'border-gray-300',
        lastName: 'border-gray-300',
        email: 'border-gray-300',
        password: 'border-gray-300',
        verifyPassword: 'border-gray-300',
    });

    const [hasError, setHasError] = useState({error: false, message: ''});

    useEffect(() => {
        setFormColors({
            firstName: hasError.message.includes('firstName') ? 'border-red-500' : 'border-gray-300',
            lastName: hasError.message.includes('lastName') ? 'border-red-500' : 'border-gray-300',
            email: hasError.message.includes('email') ? 'border-red-500' : 'border-gray-300',
            password: hasError.message.includes('password') ? 'border-red-500' : 'border-gray-300',
            verifyPassword: hasError.message.includes('verifyPassword') ? 'border-red-500' : 'border-gray-300'
        });
    }, [hasError]);
    
    const [responseBody, setResponseBody] = useState(formData);
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
        console.log(responseBody);
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createUser(responseBody).then((res) => {
            if (res.data.statusCode === 201) {
                props.changeAuthMode();
            }
        }).catch((error) => {
            console.log(error.response.data.message);
            setHasError({error:true, message: error.response.data.message.toString()});
        }).finally(() => {
            setIsLoading(false);
            //redirect to signin page
            window.location.href = "/signin";
        });
    };

    return (
        <>
            <div className="Auth-form-container" style={{ backgroundImage: `url("/background.jpg")` }}>
                <form className="Auth-form" onSubmit={handleSubmitRegister}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center flex gap-1 pb-3">
                        <button type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto">
                            <svg className="w-4 h-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <a href="/">
                            <span>Go back</span>
                            </a>
                        </button>
                        <button type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-200 transition-colors duration-200 bg-gray-900 hover:bg-gray-7   00 border-gray-700 rounded-lg gap-x-2 sm:w-auto">
                        <svg className="w-4 h-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
                            <a href="/signin">
                            <span onClick={props.changeAuthMode}>Login instead?</span>
                            </a>
                        </button>
                           
                        </div>
                        <div className="form-group mt-3 flex gap-1">
                            <Input
                                border={formColors.firstName}
                                name="firstName"
                                type="text"
                                className="form-control mt-1"
                                placeholder="Mourad"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"First Name"}
                                labelFor={"firstname"}
                                id={"firstname"}
                            />
                            <Input
                                border={formColors.lastName}
                                name="lastName"
                                type="text"
                                className="form-control mt-1"
                                placeholder="Ben Foulen"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"Last Name"}
                                labelFor={"lastname"}
                                id={"lastname"}
                            />
                        </div>
                      

                        <div className="form-group mt-3">
                            <Input
                                border={formColors.email}
                                name="email"
                                type="email"
                                required
                                minLength={6}
                                className="form-control mt-1"
                                placeholder="mouradbenfoulen@gmail.com"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"Email Address"}
                                labelFor={"email"}
                                id={"email"}
                            />
                        </div>
                            
                        <div className="form-group mt-3">
                            <Input
                                border={formColors.password}
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                className="form-control mt-1"
                                placeholder="Password"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"Password"}
                                labelFor={"password"}
                                id={"password"}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <Input
                                border={formColors.verifyPassword}
                                name="verifyPassword"
                                type="password"
                                required
                                minLength={6}
                                className="form-control mt-1"
                                placeholder="Confirm Password"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"Confirm Password"}
                                labelFor={"confirmpassword"}
                                id={"confirmpassword"}
                            />
                        </div>
                        <div className="form-group mt-3" >
                            <Select
                            name="role"
                                labelText={"Role"}
                                labelFor={"role"}
                                id={"role"}
                            >
                                <option value="instructor">Instructor</option>
                                <option selected value="student">Student</option>
                            </Select>
                        </div>
                        <br/>
                        <div className="d-grid gap-2 center">
                            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                                {isLoading ?
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : 'Sign Up'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
