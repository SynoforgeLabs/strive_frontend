import React from 'react';
import "../../css/interview/interview-price-grid.css";

function InterviewPriceGrid() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-price-grid-main" id="interview-price-grid">
                <div className="row col-9 d-flex interview-price-grid-sec">

                    <p className="row d-flex fw-semibold interview-price-grid-sub-h">
                    From 2020, over 90% of our students have received offers from medical and dental schools across Australia having completed our interview preparation course. 
                    </p>
                    
                    <h1 className="row d-flex fw-bold interview-price-grid-main-h">
                        Why choose us?
                    </h1>

                    <div className="interview-price-grid d-grid">
                        <div className="col"></div>
                        <div className="col interview-price-grid-header" id='interview-price-grid-gold'>
                            <div className="interview-price-grid-card interview-price-grid-gold text-center p-4 rounded-4">
                                <p className="text-muted mb-3">5 x Interview Workshops</p>
                                <div className="interview-price-grid-price-tag mb-3">
                                    <span className="interview-price-grid-amount">$30</span>
                                    <span className="interview-price-grid-period">/hr</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>
                        <div className="col interview-price-grid-header" id='interview-price-grid-elite'>
                            <div className="interview-price-grid-card interview-price-grid-elite text-center p-4 rounded-4">
                                <p className="text-muted mb-3">Mock Interviews</p>
                                <div className="interview-price-grid-price-tag mb-3">
                                    <span className="interview-price-grid-amount">$120</span>
                                    <span className="interview-price-grid-period">Per mock</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>
                        
                        
                        {/* out tutors */}
                        <div className="col p-3 d-flex">
                            <h4 className="interview-price-grid-feature-title">Our Tutors</h4>
                        </div>
                        
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-gold'>
                                <p className="text-muted small">Top scoring medical students with experience in numerous interviews across Australia</p>
                        </div>
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-elite'>
                                <p className="text-muted small">Top scoring medical students with experience in numerous interviews across Australia</p>
                        </div>
                        
                        {/* Lesson Style */}
                        <div className="col p-3 d-flex">
                            <h4 className="interview-price-grid-feature-title">Lesson Style</h4>
                        </div>
                        
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-gold'>
                                <p className="text-muted small">Interactive small group sessions, both MMI and panel interviews covered</p>
                        </div>
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-elite'>
                                <p className="text-muted small">1-on-1 interview mocks that emulate the real interview, feedback included</p>
                        </div>

                        {/* Duration */}
                        <div className="col p-3 d-flex">
                            <h4 className="interview-price-grid-feature-title">Duration</h4>
                        </div>
                        
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-gold'>
                                <p className="text-muted small">3 hours per workshop</p>
                        </div>
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-elite'>
                                <p className="text-muted small">30 minute mock, 10 minutes of comprehensive feedback</p>
                        </div>

                        {/* Session Times */}
                        <div className="col p-3 d-flex">
                            <h4 className="interview-price-grid-feature-title">Session Times</h4>
                        </div>
                        
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-gold'>
                                <p className="text-muted small">10am – 1pm AEST, dates stated below</p>
                        </div>
                        <div className="col interview-price-grid-feature-content" id='interview-price-grid-elite'>
                                <p className="text-muted small">Flexible scheduling, at a convenient time to you</p>
                        </div>

                        {/* Parent consultations */}
                        <div className="col p-3 d-flex">
                            <h4 className="interview-price-grid-feature-title">Session Times</h4>
                        </div>
                        
                        <div className="col interview-price-grid-feature-content interview-price-grid-feature-content-b" id='interview-price-grid-gold'>
                                <p className="text-muted small">Online, payment following each lesson</p>
                        </div>
                        <div className="col interview-price-grid-feature-content interview-price-grid-feature-content-b" id='interview-price-grid-elite'>
                                <p className="text-muted small">Online, payment following each lesson</p>
                        </div>
                        
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <p className="text-muted small">*please view our payment policy for more information: insert hyperlink to terms and conditions</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InterviewPriceGrid;
