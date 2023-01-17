import { useState } from "react";
import  Alert from "react-bootstrap/Alert";

import { createUser } from "../services/auth.service";

export function Singup(props) {

    const formData = { email: "", password: "" };
    const [hasError, setHasError] = useState({error: false, message: ''});
    const [responseBody, setResponseBody] = useState(formData);
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createUser(responseBody).then((res) => {
            if (res.data.statusCode === 201) {
                props.changeAuthMode();
            }
        }).catch((error) => {
            setHasError({error:true, message: error.response.data.message});
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const onCloseAlert = ()=> {
        setHasError({error:false, message: ''});
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmitRegister}>
                    { hasError.error 
                        ? <Alert variant="danger" dismissible onClose={onCloseAlert} style={{ textAlign: 'center' }}>{hasError.message}</Alert> 
                        : '' 
                    }
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" onClick={props.changeAuthMode}>
                                Sign In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>First Name</label>
                            <input
                                name="First Name"
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g Mourad"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Last Name</label>
                            <input
                                name="Last Name"
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g Ben Foulen"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="form-control mt-1"
                                placeholder="Email Address"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                className="form-control mt-1"
                                placeholder="Password"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Verify Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                className="form-control mt-1"
                                placeholder="Verify Your Password"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group mt-3" >
                            <label>Role</label>
                            <select>
                                <option value="instructor">Instructor</option>
                                <option selected value="student">Student</option>
                            </select>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading ?
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : 'Submit'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}