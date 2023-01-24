import { useState } from "react";
import { Link } from "react-router-dom";
import  Alert from "react-bootstrap/Alert";

import { forgotPassword } from "../services/auth.service";

export function ForgotPassword() {

    const [hasError, setHasError] = useState({error: false, message: '', variant:'warning'});
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        forgotPassword(email)
            .then((res) => {
                setHasError({error:true, message: res.data.message, variant: 'success'});
            })
            .catch((error) => {
                setHasError({error:true, message: error.response.data.message, variant: 'danger'});
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onCloseAlert = ()=> {
        setHasError({error:false, message: ''});
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    { hasError.error 
                        ? <Alert variant={hasError.variant} dismissible onClose={onCloseAlert} style={{ textAlign: 'center' }}>{hasError.message}</Alert> 
                        : '' 
                    }
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Forgot your password?</h3>
                        <div className="text-center">
                           Enter the email associated with your account and we will send an email with instructions to reset your password.
                        </div>
                        
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="form-control mt-1"
                                placeholder="Email address"
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading 
                                    ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : 'Reset my password'
                                }
                            </button>
                        </div>
                        <br />
                        <div className="text-center">
                            Didn’t request a password reset? <Link to="/auth" >Go back!</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}