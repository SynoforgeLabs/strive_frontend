import React from 'react';
import "../../css/ucat/ucat-price-grid.css";

function UcatPricegrid() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 ucat-price-grid-main" id="ucat-price-grid">
                <div className="row col-11 col-lg-9 d-flex ucat-price-grid-sec">
                    <h3 className="ucat-price-grid-heading">Why Choose Us ?</h3>
                    <div className="ucat-price-grid d-grid">
                        <div className="col"></div>
                        <div className="col ucat-price-grid-header" id='ucat-price-grid-gold'>
                            <div className="ucat-price-grid-card ucat-price-grid-gold text-center p-4 rounded-4">
                                <p className="text-muted mb-3">🧑‍🎓 Online Small Group Sessions</p>
                                <div className="ucat-price-grid-price-tag mb-3">
                                    <span className="ucat-price-grid-amount">$60</span>
                                    <span className="ucat-price-grid-period">/hr</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>

                        <div className="col p-3 d-flex">
                            <h4 className="ucat-price-grid-feature-title">Our Tutors</h4>
                        </div>
                        <div className="col ucat-price-grid-feature-content" id='ucat-price-grid-gold'>
                                <p className="text-muted small">Top scoring medical students with experience in numerous interviews across Australia</p>
                        </div>
                        <div className="col p-3 d-flex">
                            <h4 className="ucat-price-grid-feature-title">Lesson Style</h4>
                        </div>
                        <div className="col ucat-price-grid-feature-content" id='ucat-price-grid-gold'>
                                <p className="text-muted small">Interactive small group sessions with a focus on question based learning using established questionbanks.</p>
                        </div>
                        <div className="col p-3 d-flex">
                            <h4 className="ucat-price-grid-feature-title">Duration</h4>
                        </div>
                        <div className="col ucat-price-grid-feature-content" id='ucat-price-grid-gold'>
                                <p className="text-muted small">3 hours per week</p>
                        </div>
                        <div className="col p-3 d-flex">
                            <h4 className="ucat-price-grid-feature-title">Session Times</h4>
                        </div>
                        <div className="col ucat-price-grid-feature-content" id='ucat-price-grid-gold'>
                                <p className="text-muted small">An agreed weekly recurring time, agreed upon once a group is confirmed.</p>
                        </div>
                        <div className="col p-3 d-flex">
                            <h4 className="ucat-price-grid-feature-title">Payments</h4>
                        </div>
                        <div className="col text-center ucat-price-grid-feature-content ucat-price-grid-feature-content-b" id='ucat-price-grid-gold'>
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

export default UcatPricegrid;
