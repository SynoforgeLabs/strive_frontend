import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/login-signup/signup.css';
import { useAuth } from '../../contexts/AuthContext';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        full_name: '',
        password: '',
        password_confirm: ''
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        setLoading(true);

        try {
            await register(formData);
            navigate('/'); // Redirect to home page after successful registration
        } catch (error) {
            if (error.username) setError(prev => ({ ...prev, username: error.username }));
            if (error.email) setError(prev => ({ ...prev, email: error.email }));
            if (error.password) setError(prev => ({ ...prev, password: error.password }));
            if (error.password_confirm) setError(prev => ({ ...prev, password_confirm: error.password_confirm }));
            if (error.full_name) setError(prev => ({ ...prev, full_name: error.full_name }));
            if (error.phone_number) setError(prev => ({ ...prev, phone_number: error.phone_number }));
            if (error.message) setError(prev => ({ ...prev, general: error.message }));
        } finally {
            setLoading(false);
        }
    };

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

                                {error.general && (
                                    <div className="alert alert-danger mb-3" role="alert">
                                        {error.general}
                                    </div>
                                )}

                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className={`form-control signup-input ${error.full_name ? 'is-invalid' : ''}`} 
                                            id="nameInput" 
                                            name="full_name"
                                            placeholder="Full Name" 
                                            value={formData.full_name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="nameInput">
                                            <i className="bi bi-person signup-input-icon"></i> Full Name
                                        </label>
                                        {error.full_name && <div className="invalid-feedback">{error.full_name}</div>}
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className={`form-control signup-input ${error.username ? 'is-invalid' : ''}`} 
                                            id="usernameInput" 
                                            name="username"
                                            placeholder="Username" 
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="usernameInput">
                                            <i className="bi bi-person-badge signup-input-icon"></i> Username
                                        </label>
                                        {error.username && <div className="invalid-feedback">{error.username}</div>}
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="email" 
                                            className={`form-control signup-input ${error.email ? 'is-invalid' : ''}`} 
                                            id="emailInput" 
                                            name="email"
                                            placeholder="Email address" 
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="emailInput">
                                            <i className="bi bi-envelope signup-input-icon"></i> Email address
                                        </label>
                                        {error.email && <div className="invalid-feedback">{error.email}</div>}
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="tel" 
                                            className={`form-control signup-input ${error.phone_number ? 'is-invalid' : ''}`} 
                                            id="telephoneInput" 
                                            name="phone_number"
                                            placeholder="Telephone Number" 
                                            value={formData.phone_number}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="telephoneInput">
                                            <i className="bi bi-telephone signup-input-icon"></i> Telephone Number
                                        </label>
                                        {error.phone_number && <div className="invalid-feedback">{error.phone_number}</div>}
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="password" 
                                            className={`form-control signup-input ${error.password ? 'is-invalid' : ''}`} 
                                            id="passwordInput" 
                                            name="password"
                                            placeholder="Password" 
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="passwordInput">
                                            <i className="bi bi-lock signup-input-icon"></i> Password
                                        </label>
                                        {error.password && <div className="invalid-feedback">{error.password}</div>}
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input 
                                            type="password" 
                                            className={`form-control signup-input ${error.password_confirm ? 'is-invalid' : ''}`} 
                                            id="retypePasswordInput" 
                                            name="password_confirm"
                                            placeholder="Retype Password" 
                                            value={formData.password_confirm}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label htmlFor="retypePasswordInput">
                                            <i className="bi bi-lock signup-input-icon"></i> Retype Password
                                        </label>
                                        {error.password_confirm && <div className="invalid-feedback">{error.password_confirm}</div>}
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn signup-submit-btn w-100 mb-4"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        ) : (
                                            <i className="bi bi-person-plus me-2"></i>
                                        )}
                                        Sign Up
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
