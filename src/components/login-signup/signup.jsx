import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/login-signup/signup.css';

function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="signup-card">
                                <div className="signup-logo-container text-center mb-2">
                                    <img src="/Images/logo/logo-v/logo-v-gr.svg" alt="Strive Academics Logo" className="signup-logo" />
                                </div>

                                <h2 className="signup-title text-center mb-2">Create Account</h2>
                                <p className="signup-subtitle text-center mb-4">Please fill in your details to register</p>

                                <form className="signup-form">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control signup-input" 
                                            id="nameInput" 
                                            placeholder="Full Name" 
                                        />
                                        <label htmlFor="nameInput">
                                            <i className="bi bi-person signup-input-icon"></i> Full Name
                                        </label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control signup-input" 
                                            id="emailInput" 
                                            placeholder="Email address" 
                                        />
                                        <label htmlFor="emailInput">
                                            <i className="bi bi-envelope signup-input-icon"></i> Email address
                                        </label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="tel" 
                                            className="form-control signup-input" 
                                            id="telephoneInput" 
                                            placeholder="Telephone Number" 
                                        />
                                        <label htmlFor="telephoneInput">
                                            <i className="bi bi-telephone signup-input-icon"></i> Telephone Number
                                        </label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control signup-input" 
                                            id="passwordInput" 
                                            placeholder="Password" 
                                        />
                                        <label htmlFor="passwordInput">
                                            <i className="bi bi-lock signup-input-icon"></i> Password
                                        </label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input 
                                            type="password" 
                                            className="form-control signup-input" 
                                            id="retypePasswordInput" 
                                            placeholder="Retype Password" 
                                        />
                                        <label htmlFor="retypePasswordInput">
                                            <i className="bi bi-lock signup-input-icon"></i> Retype Password
                                        </label>
                                    </div>

                                    <button type="button" className="btn signup-submit-btn w-100 mb-4">
                                        <i className="bi bi-person-plus me-2"></i> Sign Up
                                    </button>

                                    <div className="signup-login-prompt text-center">
                                        <span>Already have an account?</span>
                                        <Link to="/login" className="signup-login-link ms-1">Sign in</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
