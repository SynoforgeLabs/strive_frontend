import React, { useState, useEffect } from 'react';
import "../../css/pricing/pricing-hdiw.css";

function PricingHdiw() {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [confirmedWithTutor, setConfirmedWithTutor] = useState('');
    const [numFriends, setNumFriends] = useState(0);
    const [tutorName, setTutorName] = useState('');
    
    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => {
            setFormSubmitted(false);
            setConfirmedWithTutor('');
            setNumFriends(0);
        }, 500);
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
    
    // Generate friend form fields based on number selected
    const renderFriendFields = () => {
        const fields = [];
        
        for (let i = 0; i < numFriends; i++) {
            fields.push(
                <div key={i} className="friend-section mt-4 mb-4 p-3 bg-light rounded">
                    <h5 className="mb-3">Friend {i + 1} Details</h5>
                    <div className="mb-3">
                        <label htmlFor={`friendName${i}`} className="form-label pricing-hdiw-form-label">
                            Name of your friend that would like to join:
                        </label>
                        <input 
                            type="text" 
                            className="form-control pricing-hdiw-form-input" 
                            id={`friendName${i}`} 
                            placeholder="Enter friend's full name" 
                            required 
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor={`friendEmail${i}`} className="form-label pricing-hdiw-form-label">
                            Email address:
                        </label>
                        <input 
                            type="email" 
                            className="form-control pricing-hdiw-form-input" 
                            id={`friendEmail${i}`} 
                            placeholder="Enter friend's email address" 
                            required 
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor={`friendPhone${i}`} className="form-label pricing-hdiw-form-label">
                            Phone number:
                        </label>
                        <input 
                            type="tel" 
                            className="form-control pricing-hdiw-form-input" 
                            id={`friendPhone${i}`} 
                            placeholder="Enter friend's phone number" 
                            required 
                        />
                    </div>
                </div>
            );
        }
        
        return fields;
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
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 pricing-hdiw-main" id="pricing-hdiw">
                <div className="row col-11 col-lg-9 d-flex pricing-hdiw-sec">
                    <div className="col-12 text-center mb-5">
                        <h2 className="pricing-hdiw-title mb-5">How do I sign up?</h2>
                        
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10">
                                <ol className="pricing-hdiw-list ps-3">
                                    <li className="mb-4 d-flex align-items-start">
                                        <span className="fw-bold me-2 pricing-hdiw-number">1</span>
                                        <span className="pricing-hdiw-step-text">   
                                            Fill out <a href="#" onClick={handleShow} className="fw-bold pricing-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
                                        </span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="fw-bold me-2 pricing-hdiw-number">2</span>
                                        <span className="pricing-hdiw-step-text">
                                            <span className="fw-bold">Please note:</span> free academic skills consultations are not offered for group interview preparation sessions.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                
                {showModal && (
                    <div className="pricing-hdiw-modal-backdrop" onClick={handleClose}>
                        <div className="pricing-hdiw-modal" onClick={(e) => e.stopPropagation()}>
                            <div className="pricing-hdiw-modal-dialog">
                                <div className="pricing-hdiw-modal-content">
                                    <div className="pricing-hdiw-modal-header">
                                        <h3 className="pricing-hdiw-modal-title">Group Session Registration</h3>
                                        <button 
                                            type="button" 
                                            className="btn-close pricing-hdiw-close-button" 
                                            onClick={handleClose}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    
                                    {!formSubmitted ? (
                                        <form onSubmit={handleSubmit} className="pricing-hdiw-form">
                                            <div className="mb-3">
                                                <label htmlFor="formName" className="form-label pricing-hdiw-form-label">Your Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control pricing-hdiw-form-input" 
                                                    id="formName" 
                                                    placeholder="Enter your full name" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-4">
                                                <label className="form-label pricing-hdiw-form-label">
                                                    Have you confirmed interest with a Strive Academics tutor by filling out the Contact Me form?
                                                </label>
                                                <div className="d-flex gap-3 mt-2">
                                                    <div className="form-check">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio" 
                                                            name="confirmedInterest" 
                                                            id="confirmedYes" 
                                                            value="yes"
                                                            checked={confirmedWithTutor === 'yes'}
                                                            onChange={() => setConfirmedWithTutor('yes')}
                                                            required
                                                        />
                                                        <label className="form-check-label" htmlFor="confirmedYes">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio" 
                                                            name="confirmedInterest" 
                                                            id="confirmedNo" 
                                                            value="no"
                                                            checked={confirmedWithTutor === 'no'}
                                                            onChange={() => setConfirmedWithTutor('no')}
                                                        />
                                                        <label className="form-check-label" htmlFor="confirmedNo">
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {confirmedWithTutor === 'no' && (
                                                <div className="alert alert-info" role="alert">
                                                    Please <a href="/find-tutor" className="alert-link">find a tutor</a> and complete the Contact Me form first.
                                                </div>
                                            )}
                                            
                                            {confirmedWithTutor === 'yes' && (
                                                <>
                                                    <div className="mb-3">
                                                        <label htmlFor="formPhone" className="form-label pricing-hdiw-form-label">Your Phone Number</label>
                                                        <input 
                                                            type="tel" 
                                                            className="form-control pricing-hdiw-form-input" 
                                                            id="formPhone" 
                                                            placeholder="Enter your phone number" 
                                                            required 
                                                        />
                                                    </div>
                                                    
                                                    <div className="mb-3">
                                                        <label htmlFor="formEmail" className="form-label pricing-hdiw-form-label">Your Email</label>
                                                        <input 
                                                            type="email" 
                                                            className="form-control pricing-hdiw-form-input" 
                                                            id="formEmail" 
                                                            placeholder="Enter your email address" 
                                                            required 
                                                        />
                                                    </div>
                                                    
                                                    <div className="mb-3">
                                                        <label htmlFor="formTutorName" className="form-label pricing-hdiw-form-label">What is the name of your tutor you have requested?</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control pricing-hdiw-form-input" 
                                                            id="formTutorName" 
                                                            placeholder="Enter tutor's name" 
                                                            value={tutorName}
                                                            onChange={(e) => setTutorName(e.target.value)}
                                                            required 
                                                        />
                                                    </div>
                                                    
                                                    <div className="mb-4">
                                                        <label htmlFor="formNumFriends" className="form-label pricing-hdiw-form-label">How many friends would you like to join sessions with you?</label>
                                                        <select 
                                                            className="form-select pricing-hdiw-form-select" 
                                                            id="formNumFriends"
                                                            value={numFriends}
                                                            onChange={(e) => setNumFriends(parseInt(e.target.value))}
                                                            required
                                                        >
                                                            <option value="0">Select number of friends</option>
                                                            <option value="1">1 friend</option>
                                                            <option value="2">2 friends</option>
                                                            <option value="3">3 friends</option>
                                                        </select>
                                                    </div>
                                                    
                                                    {numFriends > 0 && renderFriendFields()}
                                                    
                                                    <div className="mb-4">
                                                        <div className="form-check pricing-hdiw-form-checkbox">
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                id="formTerms" 
                                                                required 
                                                            />
                                                            <label className="form-check-label" htmlFor="formTerms">
                                                                I agree with the <a href="#" className="pricing-hdiw-link">terms and conditions</a> and <a href="#" className="pricing-hdiw-link">privacy policy</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn pricing-hdiw-submit-btn">
                                                            Submit Registration
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </form>
                                    ) : (
                                        <div className="pricing-hdiw-confirmation text-center py-4">
                                            <div className="pricing-hdiw-confirmation-icon mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                </svg>
                                            </div>
                                            <h3 className="pricing-hdiw-confirmation-title mb-3">Thank you for filling out this form!</h3>
                                            <p className="pricing-hdiw-confirmation-text mb-3">
                                                We'll add you and your friend(s) to your classes with your tutor: <strong>{tutorName}</strong>
                                            </p>
                                            <p className="pricing-hdiw-confirmation-text">
                                                Once sessions have been set up, we will change your prices when you do your next session - you'll each receive a discount!
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default PricingHdiw;
