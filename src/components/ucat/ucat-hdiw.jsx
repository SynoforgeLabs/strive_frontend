import React, { useState, useEffect } from 'react';
import "../../css/ucat/ucat-hdiw.css";

function UcatHdiw() {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => setFormSubmitted(false), 500); // Reset form submitted state after modal closes
    };
    
    const handleShow = (e) => {
        e.preventDefault();
        setShowModal(true);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
        <section className="row container-fluid section d-flex g-0 z-index-0 ucat-hdiw-main" id="ucat-hdiw">
            <div className="row col-lg-9 col-md-12 d-flex ucat-hdiw-sec">
                
                    <div className="container-fluid ucat-hdiw-container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-4">
                                <h2 className="fw-bold ucat-hdiw-title">How do I sign up?</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10">
                                <ol className="ucat-hdiw-list ps-3">
                                    <li className="mb-4 d-flex align-items-start">
                                        <span className="fw-bold me-2 ucat-hdiw-number">1</span>
                                        <span className="ucat-hdiw-step-text">
                                            Fill out <a href="#" onClick={handleShow} className="fw-bold ucat-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
                                        </span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="fw-bold me-2 ucat-hdiw-number">2</span>
                                        <span className="ucat-hdiw-step-text">
                                            <span className="fw-bold">Please note:</span> free academic skills consultations are not offered for group interview preparation sessions.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
            </div>
            
            {showModal && (
                <div className="ucat-hdiw-modal-backdrop" onClick={handleClose}>
                    <div className="ucat-hdiw-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ucat-hdiw-modal-dialog">
                            <div className="ucat-hdiw-modal-content">
                                <div className="ucat-hdiw-modal-header">
                                    <h3 className="ucat-hdiw-modal-title">Registration Form</h3>
                                    <button 
                                        type="button" 
                                        className="btn-close ucat-hdiw-close-button" 
                                        onClick={handleClose}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="ucat-hdiw-modal-body">
                                    {!formSubmitted ? (
                                        <form onSubmit={handleSubmit} className="ucat-hdiw-form">
                                            <div className="mb-3">
                                                <label htmlFor="formName" className="form-label ucat-hdiw-form-label">Your Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control ucat-hdiw-form-input" 
                                                    id="formName" 
                                                    placeholder="Enter your full name" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formEmail" className="form-label ucat-hdiw-form-label">Your Email</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control ucat-hdiw-form-input" 
                                                    id="formEmail" 
                                                    placeholder="Enter your email address" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formPhone" className="form-label ucat-hdiw-form-label">Your Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    className="form-control ucat-hdiw-form-input" 
                                                    id="formPhone" 
                                                    placeholder="Enter your phone number" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="formExamYear" className="form-label ucat-hdiw-form-label">Which year are you sitting the UCAT exam?</label>
                                                <select className="form-select ucat-hdiw-form-select" id="formExamYear" required>
                                                    <option value="">Select year</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                </select>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className="form-check ucat-hdiw-form-checkbox">
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
                                                <div className="form-check ucat-hdiw-form-checkbox">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id="formTerms" 
                                                        required 
                                                    />
                                                    <label className="form-check-label" htmlFor="formTerms">
                                                        I agree with the <a href="#" className="ucat-hdiw-link">terms and conditions</a> and <a href="#" className="ucat-hdiw-link">privacy policy</a>
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="d-grid">
                                                <button type="submit" className="btn ucat-hdiw-submit-btn">
                                                    Submit Registration
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="ucat-hdiw-confirmation text-center py-4">
                                            <div className="ucat-hdiw-confirmation-icon mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                </svg>
                                            </div>
                                            <h3 className="ucat-hdiw-confirmation-title mb-3">Thank you for filling out this form!</h3>
                                            <p className="ucat-hdiw-confirmation-text">We'll be in touch with the next steps.</p>
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

export default UcatHdiw;
