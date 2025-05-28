import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/login-signup/login.css';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
    const [userType, setUserType] = useState('student');
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Only student login is implemented for now
            if (userType !== 'student') {
                setError('Teacher login is not yet available');
                setLoading(false);
                return;
            }

            await login(formData.username, formData.password);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            setError(error.detail || 'Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-card">
                                <div className="login-logo-container text-center mb-2">
                                    <img src="/Images/logo/logo-v/logo-v-gr.svg" alt="Strive Academics Logo" className="login-logo" />
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

                                {error && (
                                    <div className="alert alert-danger mb-3" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control login-input" 
                                            id="usernameInput" 
                                            name="username"
                                            placeholder="Username" 
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="usernameInput">
                                            <i className="bi bi-person login-input-icon"></i> Username
                                        </label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control login-input" 
                                            id="passwordInput" 
                                            name="password"
                                            placeholder="Password" 
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
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

                                    <button 
                                        type="submit" 
                                        className="btn login-submit-btn w-100 mb-4" 
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        ) : (
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                        )}
                                        Sign In
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
