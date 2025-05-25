import React, { useState, useEffect } from 'react';
import "../../css/interview/interview-hdiw.css";

function InterviewHdiw() {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => {
            setFormSubmitted(false);
            setPassword('');
            setConfirmPassword('');
            setPasswordError('');
        }, 500);
    };
    
    const handleShow = (e) => {
        e.preventDefault();
        setShowModal(true);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        
        setFormSubmitted(true);
        // Here you would typically handle form submission to backend
    };
    
    // Close modal when clicking outside or pressing escape
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 interview-hdiw-main" id="interview-hdiw">
            <div className="row col-lg-9 col-md-12 d-flex interview-hdiw-sec">
                <div className="container-fluid interview-hdiw-container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mb-5">
                            <h2 className="fw-bold interview-hdiw-title">How do I sign up?</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            <div className="interview-hdiw-steps">
                                <div className="interview-hdiw-step">
                                    <div className="interview-hdiw-step-number">1</div>
                                    <div className="interview-hdiw-step-content">
                                        <h3 className="interview-hdiw-step-title">Fill Out the Registration Form</h3>
                                        <p className="interview-hdiw-step-text">
                                            Fill out <a href="#" onClick={handleShow} className="fw-bold interview-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="interview-hdiw-step">
                                    <div className="interview-hdiw-step-number">2</div>
                                    <div className="interview-hdiw-step-content">
                                        <h3 className="interview-hdiw-step-title">Important Note</h3>
                                        <p className="interview-hdiw-step-text">
                                            <span className="fw-bold">Please note:</span> free academic skills consultations are not offered for group interview preparation sessions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {showModal && (
                <div className="interview-hdiw-modal-backdrop" onClick={handleClose}>
                    <div className="interview-hdiw-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="interview-hdiw-modal-dialog">
                            <div className="interview-hdiw-modal-content">
                                <div className="interview-hdiw-modal-header">
                                    <h3 className="interview-hdiw-modal-title">Registration Form</h3>
                                    <button 
                                        type="button" 
                                        className="btn-close interview-hdiw-close-button" 
                                        onClick={handleClose}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="interview-hdiw-modal-body">
                                    {!formSubmitted ? (
                                        <form onSubmit={handleSubmit} className="interview-hdiw-form">
                                            <div className="mb-3">
                                                <label htmlFor="formName" className="form-label interview-hdiw-form-label">Your Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control interview-hdiw-form-input" 
                                                    id="formName" 
                                                    placeholder="Enter your full name" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formEmail" className="form-label interview-hdiw-form-label">Your Email</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control interview-hdiw-form-input" 
                                                    id="formEmail" 
                                                    placeholder="Enter your email address" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formPhone" className="form-label interview-hdiw-form-label">Your Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    className="form-control interview-hdiw-form-input" 
                                                    id="formPhone" 
                                                    placeholder="Enter your phone number" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formPassword" className="form-label interview-hdiw-form-label">Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control interview-hdiw-form-input" 
                                                    id="formPassword" 
                                                    placeholder="Enter your password" 
                                                    required 
                                                    minLength="8"
                                                    value={password}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                        setPasswordError('');
                                                    }}
                                                />
                                                <div className="interview-hdiw-form-help-text">
                                                    Password must be at least 8 characters long
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="formConfirmPassword" className="form-label interview-hdiw-form-label">Confirm Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control interview-hdiw-form-input" 
                                                    id="formConfirmPassword" 
                                                    placeholder="Confirm your password" 
                                                    required 
                                                    value={confirmPassword}
                                                    onChange={(e) => {
                                                        setConfirmPassword(e.target.value);
                                                        setPasswordError('');
                                                    }}
                                                />
                                                {passwordError && (
                                                    <div className="interview-hdiw-form-error text-danger mt-2">
                                                        {passwordError}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formApplying" className="form-label interview-hdiw-form-label">Are you applying to dentistry, medicine, or both?</label>
                                                <select className="form-select interview-hdiw-form-select" id="formApplying" required>
                                                    <option value="dentistry">Dentistry</option>
                                                    <option value="medicine">Medicine</option>
                                                    <option value="both">Both</option>
                                                </select>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className="form-check interview-hdiw-form-checkbox">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id="formConsultation" 
                                                    />
                                                    <label className="form-check-label" htmlFor="formConsultation">
                                                        I require a consultation for preferencing and application to all medical/dental schools in Australia
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className="form-check interview-hdiw-form-checkbox">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id="formAttendance" 
                                                        required 
                                                    />
                                                    <label className="form-check-label" htmlFor="formAttendance">
                                                        I confirm my attendance in sessions once organised
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4">
                                                <div className="form-check interview-hdiw-form-checkbox">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id="formTerms" 
                                                        required 
                                                    />
                                                    <label className="form-check-label" htmlFor="formTerms">
                                                        I agree with the <a href="#" className="interview-hdiw-link">terms and conditions</a> and <a href="#" className="interview-hdiw-link">privacy policy</a>
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="d-grid">
                                                <button type="submit" className="btn interview-hdiw-submit-btn">
                                                    Submit Registration
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="interview-hdiw-confirmation text-center py-4">
                                            <div className="interview-hdiw-confirmation-icon mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                </svg>
                                            </div>
                                            <h3 className="interview-hdiw-confirmation-title mb-3">Thank you for filling out this form!</h3>
                                            <p className="interview-hdiw-confirmation-text">We'll be in touch with the next steps.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default InterviewHdiw;
