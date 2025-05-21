import React, { useState, useEffect } from 'react';
import "../../css/tutor/tutor-top.css";
import TutorContact from './tutor-contact';

function TutorTop() {
    const [showContactModal, setShowContactModal] = useState(false);
    
    const handleOpenContact = () => {
        setShowContactModal(true);
    };
    
    const handleCloseContact = () => {
        setShowContactModal(false);
    };
    
    return (
        <section className="row container-fluid section d-flex justify-content-center g-0 tutor-top-main" id="tutor-top">
            <div className="row col-lg-10 col-md-11 col-sm-12 d-flex tutor-top-sec">
                <div className="tutor-top-content g-0">
                    <div className="tutor-top-banner">
                        <div className="tutor-top-banner-text">
                            Achieve your goals with a Strive tutor.
                        </div>
                    </div>
                    
                    <div className="tutor-top-profile container">
                        <div className="tutor-top-profile-left">
                            <div className="tutor-top-avatar-container">
                                <img 
                                    src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" 
                                    alt="Tutor avatar" 
                                    className="tutor-top-avatar"
                                />
                                <div className="tutor-top-status">Available</div>
                            </div>
                            
                            <div className="tutor-top-info">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <h1 className="tutor-top-name m-0">Enola Holmes</h1>
                                    <span className="tutor-top-badge">Gold (30$/h)</span>
                                </div>
                                <button className="tutor-top-contact" onClick={handleOpenContact}>Contact Me</button>
                            </div>
                        </div>
                        
                        <div className="tutor-top-profile-right mb-3">
                            <div className="tutor-top-rating">
                                <span className="tutor-top-score">94.27</span>
                                <span className="tutor-top-label">ATAR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <TutorContact 
                isOpen={showContactModal}
                onClose={handleCloseContact}
                tutorName="Enola Holmes"
                tutorSubjects={[
                    "IB Chemistry HL Year 11-12",
                    "IB Biology HL Year 11-12",
                    "IB Biology SL Year 11-12",
                    "Maths Year 5-10",
                    "Science Year 5-10",
                    "Maths Year 1-4",
                    "Mathematics Applications Year 11-12"
                ]}
            />
        </section>
    );
}

export default TutorTop;