import React from 'react';
import "../../css/tutor/tutor-top.css";

function TutorTop() {
    return (
        <section className="row container-fluid section d-flex justify-content-center g-0 tutor-top-main" id="tutor-top">
            <div className="row col-lg-10 col-md-11 col-sm-12 d-flex tutor-top-sec">
                <div className="tutor-top-content g-0">
                    <div className="tutor-top-banner">
                        <img 
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                            alt="Laboratory equipment" 
                            className="tutor-top-banner-img"
                        />
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
                                <button className="tutor-top-contact">Contact Me</button>
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
        </section>
    );
}

export default TutorTop;