import React, { useState, useEffect } from 'react';
import '../../css/tutor/tutor-contact.css';

function TutorContact({ isOpen, onClose, tutorName, tutorSubjects }) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        grade: '',
        message: '',
    });
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle form submission to backend
        setFormSubmitted(true);
    };
    
    // Close modal when clicking escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    
    const subjects = tutorSubjects || [
        "IB Chemistry HL Year 11-12",
        "IB Biology HL Year 11-12",
        "IB Biology SL Year 11-12",
        "Maths Year 5-10",
        "Science Year 5-10",
        "Maths Year 1-4",
        "Mathematics Applications Year 11-12"
    ];
    
    const displayName = tutorName || "Enola Holmes";
    
    return (
        <div className="tutor-top-contact-overlay">
            <div className="tutor-top-contact-backdrop" onClick={onClose}></div>
            <div className="tutor-top-contact-modal">
                <div className="container">
                    <div className="row">
                        <div className="col-12 tutor-top-contact-form-container">
                            <button 
                                className="tutor-top-contact-close-btn" 
                                onClick={onClose}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            
                            {!formSubmitted ? (
                                <>
                                    <h2 className="tutor-top-contact-form-title">Contact Your Tutor</h2>
                                    <h3 className="tutor-top-contact-form-subtitle">Request a Session with {displayName}</h3>
                                    
                                    <form onSubmit={handleSubmit} className="tutor-top-contact-form">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Your Name *</label>
                                            <input 
                                                type="text" 
                                                className="form-control tutor-top-contact-input" 
                                                id="name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Your Email *</label>
                                            <input 
                                                type="email" 
                                                className="form-control tutor-top-contact-input" 
                                                id="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email address" 
                                                required 
                                            />
                                            <small className="text-muted">We'll send you a confirmation email</small>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Your Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                className="form-control tutor-top-contact-input" 
                                                id="phone" 
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="subject" className="form-label">Subject *</label>
                                            <select 
                                                className="form-select tutor-top-contact-select" 
                                                id="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                {subjects.map((subject, index) => (
                                                    <option key={index} value={subject}>{subject}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="grade" className="form-label">Current Grade/Year Level *</label>
                                            <input 
                                                type="text" 
                                                className="form-control tutor-top-contact-input" 
                                                id="grade" 
                                                value={formData.grade}
                                                onChange={handleChange}
                                                placeholder="e.g. Year 11" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label htmlFor="message" className="form-label">Additional Information</label>
                                            <textarea 
                                                className="form-control tutor-top-contact-textarea" 
                                                id="message" 
                                                rows="3"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Let us know about your goals, specific topics you need help with, or any questions you have"
                                            ></textarea>
                                        </div>
                                        
                                        <div className="d-grid">
                                            <button type="submit" className="btn tutor-top-contact-submit-btn">
                                                Send Request
                                            </button>
                                        </div>
                                        
                                        <div className="mt-3 text-center tutor-top-contact-note">
                                            <small>By submitting this form, you agree to our <a href="/terms" className="tutor-top-contact-link">Terms of Service</a></small>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="tutor-top-contact-success">
                                    <div className="tutor-top-contact-success-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                    </div>
                                    <h3 className="tutor-top-contact-success-title">Request Sent Successfully!</h3>
                                    <p className="tutor-top-contact-success-text">
                                        Thank you for contacting {displayName}. We've received your request 
                                        and will get back to you within 24 hours to schedule your session.
                                    </p>
                                    <div className="d-grid mt-4">
                                        <button 
                                            type="button" 
                                            className="btn tutor-top-contact-close-btn-success"
                                            onClick={onClose}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorContact;
