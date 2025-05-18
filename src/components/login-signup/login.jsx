import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/login-signup/login.css';

function Login() {
    const [userType, setUserType] = useState('student');
    const [rememberMe, setRememberMe] = useState(false);

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    return (
        <div className="login-container">
            <div className="login-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-card">
                                <div className="login-logo-container text-center mb-2">
                                    <img src="/Images/logo/logo v/logo-v-gr.svg" alt="Strive Academics Logo" className="login-logo" />
                                </div>

                                <h2 className="login-title text-center mb-2">Welcome Back</h2>
                                <p className="login-subtitle text-center mb-4">Please sign in to continue</p>

                                <div className="login-toggle-container mb-4">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <button 
                                                className={`login-toggle-btn ${userType === 'student' ? 'active' : ''}`}
                                                onClick={() => handleUserTypeChange('student')}>
                                                Student
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button 
                                                className={`login-toggle-btn ${userType === 'teacher' ? 'active' : ''}`}
                                                onClick={() => handleUserTypeChange('teacher')}>
                                                Teacher
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <form className="login-form">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control login-input" 
                                            id="emailInput" 
                                            placeholder="Email address" 
                                        />
                                        <label htmlFor="emailInput">
                                            <i className="bi bi-envelope login-input-icon"></i> Email address
                                        </label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control login-input" 
                                            id="passwordInput" 
                                            placeholder="Password" 
                                        />
                                        <label htmlFor="passwordInput">
                                            <i className="bi bi-lock login-input-icon"></i> Password
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between mb-4 align-items-center">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input login-checkbox" 
                                                type="checkbox" 
                                                id="rememberMe" 
                                                checked={rememberMe}
                                                onChange={() => setRememberMe(!rememberMe)}
                                            />
                                            <label className="form-check-label login-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link to="/forgot-password" className="login-forgot-link">Forgot password?</Link>
                                    </div>

                                    <button type="button" className="btn login-submit-btn w-100 mb-4">
                                        <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
                                    </button>

                                    <div className="login-signup-prompt text-center">
                                        <span>Don't have an account?</span>
                                        <Link to="/signup" className="login-signup-link ms-1">Sign up</Link>
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

export default Login;
