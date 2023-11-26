import { useState, useEffect } from 'react';
import Alert from "react-bootstrap/Alert";
import { Link } from 'react-router-dom';
import Input from '../input';

import { login } from '../../../services/auth.service';

export function Signin(props) {
    const formData = { email: "", password: "" };

    const [formColors, setFormColors] = useState({
        email: 'border-gray-300',
        password: 'border-gray-300'
    });

    const [hasError, setHasError] = useState({error: false, message: ''});

    useEffect(() => {
        setFormColors({
            email: hasError.message.includes('email') ? 'border-red-500' : 'border-gray-300',
            password: hasError.message.includes('password') ? 'border-red-500' : 'border-gray-300'
        });
    }, [hasError]);


    const [responseBody, setResponseBody] = useState(formData);
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target
        setResponseBody({ ...responseBody, [name]: value })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        login(responseBody).then(() => {
            setIsLoading(false);
            
        }).catch((err) => {
            setIsLoading(false);
            setHasError({ error: true, message: err.message });
            if (err.response.status === 401) {
                setHasError({ error: true, message: 'Incorrect email address  or password.' });
            }
        }).finally(() => {
            window.location.href = "/onboarding";
        });
    };


    return (
        <>
            <div className="Auth-form-container" style={{ backgroundImage: `url("/background.jpg")` }}>
                <form className="Auth-form" onSubmit={handleSubmitLogin}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Welcome Back</h3>
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
                        <svg className="w-4 h-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            <a href="/signup">
                            <span onClick={props.changeAuthMode}>Sign up Today?</span>
                            </a>
                        </button>
                        </div>
                        <div className="form-group mt-4">
                            <Input
                                border={formColors.email}
                                type="email"
                                name="email"
                                autoComplete="off"
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
                                type="password"
                                name="password"
                                required
                                autoComplete="off"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => inputChangeHandler(e)}
                                labelText={"Password"}
                                labelFor={"password"}
                                id={"password"}
                            />
                        <button type="button" className="-mt-1 w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-b-lg gap-x-2 sm:w-auto">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            <a href="/forgotpassword">
                            <span>Having Trouble?</span>
                            </a>
                        </button>
                        </div>
                        <br/>
                        <div className="d-grid gap-2 center">
                            <button type="submit" className="btn btn-primary w-full">
                                {isLoading
                                    ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : 'Login'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}