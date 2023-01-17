import { useState } from 'react';
import Alert from "react-bootstrap/Alert";
import { Link } from 'react-router-dom';

import { login } from '../services/auth.service';

export function Signin(props) {
    const formData = { email: "", password: "" };
    const [hasError, setHasError] = useState({ error: false, message: '' });
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
        });
    };

    const onCloseAlert = () => {
        setHasError({ error: false, message: '' });
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmitLogin}>
                    {hasError.error
                        ? <Alert variant="danger" dismissible onClose={onCloseAlert} style={{ textAlign: 'center' }}>{hasError.message}</Alert>
                        : ''
                    }
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={props.changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="off"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                autoComplete="off"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                {isLoading
                                    ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : 'Submit'
                                }
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <Link to="/forgotpassword">password?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}