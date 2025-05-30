import React from 'react';
import "../../css/pricing/pricing-price-grid.css";

function PricingPricegrid() {
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 pricing-price-grid-main" id="pricing-price-grid">
            <div className="row col-lg-9 col-md-12 d-flex pricing-price-grid-sec">
                
                <div className="pricing-price-grid-main-container d-grid">
                    {/* Header Row */}
                        <div className="col"></div>
                        <div className="col pricing-price-grid-header" id='pricing-price-grid-gold'>
                            <div className="pricing-price-grid-card pricing-price-grid-gold text-center p-4 rounded-4">
                                <h3 className="mb-2">🧑‍🎓 Gold</h3>
                                <p className="text-muted mb-3">Personalised Sessions</p>
                                <div className="pricing-price-grid-price-tag mb-3">
                                    <span className="pricing-price-grid-amount">$52.5</span>
                                    <span className="pricing-price-grid-period">/hr</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>
                        <div className="col pricing-price-grid-header" id='pricing-price-grid-platinum'>
                            <div className="pricing-price-grid-card pricing-price-grid-platinum text-center p-4 rounded-4">
                                <h3 className="mb-2">🧑‍🏫 Platinum</h3>
                                <p className="text-muted mb-3">Experienced Tutor</p>
                                <div className="pricing-price-grid-price-tag mb-3">
                                    <span className="pricing-price-grid-amount">$70</span>
                                    <span className="pricing-price-grid-period">/hr</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>
                        <div className="col pricing-price-grid-header" id='pricing-price-grid-elite'>
                            <div className="pricing-price-grid-card pricing-price-grid-elite text-center p-4 rounded-4">
                                <h3 className="mb-2">🌟 Elite</h3>
                                <p className="text-muted mb-3">Expert Tutor</p>
                                <div className="pricing-price-grid-price-tag mb-3">
                                    <span className="pricing-price-grid-amount">$105</span>
                                    <span className="pricing-price-grid-period">/hr</span>
                                </div>
                                <button className="btn btn-primary w-100">Get Started</button>
                            </div>
                        </div>

                    {/* Tutor Achievements Row */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Tutor Achievements and Experience</h4>
                        </div>
                        <div className="col pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                                <p className="mb-2">Hand-picked tutors with strong subject knowledge and a passion for teaching.</p>
                                <p className="text-muted small">Ideal for students who need structured support from tutors with a solid academic foundation and a proven ability to explain concepts clearly.</p>
                        </div>
                        <div className="col pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                                <p className="mb-2">Tutors with a wealth of experience and consistently outstanding student feedback.</p>
                                <p className="text-muted small">These tutors not only know their subject well, but also have a strong track record of improving student outcomes through engaging and effective teaching strategies.</p>
                        </div>
                        <div className="col pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                                <p className="mb-2">Top-tier tutors with over 3 years of tutoring experience, exceptional student reviews, and a demonstrated history of academic excellence.</p>
                                <p className="text-muted small">Perfect for students seeking expert guidance, exam-focused strategies, and results-driven support from the best in the field.</p>
                        </div>

                    {/* Tutor Selection Criteria Row */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Tutor Selection Criteria</h4>
                        </div>
                        <div className="col pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                                <p className="mb-2">Driven graduates and rising achievers</p>
                                <p className="text-muted small">Hand-selected tutors with strong academic foundations, award recognition, and a passion for helping students thrive.</p>
                        </div>
                        <div className="col pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                                <p className="mb-2">High-performing scholars from top universities</p>
                                <p className="text-muted small">Exceptional academic achievers with a proven ability to teach, mentor, and drive measurable student improvement</p>
                        </div>
                        <div className="col">
                            <div className="pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                                <p className="mb-2">Exceptional tutors, student doctors, scholarship recipients, and professionals with experience across diverse fields</p>
                                <p className="text-muted small">Our most distinguished tutors include future doctors, entrepreneurs, and accomplished individuals selected for their academic excellence, leadership, and real-world impact.</p>
                            </div>
                        </div>

                    {/* Additional Features Section */}
                        <div className="p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Additional Features</h4>
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check"></span>
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check"></span>
                        </div>

                    {/* Progress Reports */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Progress Reports</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check">✓</span>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* Parent consultations */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Parent consultations</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* 24/7 support */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">24/7 support via Platform</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check">✓</span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* Medicine/Dentistry Interview */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Medicine/Dentistry Interview Preparation Workshops</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check">✓</span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* Scholarship Application */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Scholarship Application Support</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check"></span>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* University Application */}
                        <div className="p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">University Application Support</h4>
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check"></span>    
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* Discounted Packages*/}
                        <div className="p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Discounted Packages</h4>
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <span className="pricing-price-grid-check pricing-price-grid-gold-check"></span>    
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <span className="pricing-price-grid-check pricing-price-grid-platinum-check"></span>    
                        </div>
                        <div className="text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <span className="pricing-price-grid-check pricing-price-grid-elite-check">✓</span>
                        </div>

                    {/* Mode of Delivery */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Mode of Delivery</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <p className="text-muted small">Online</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <p className="text-muted small">Online</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <p className="text-muted small">Online</p>
                        </div>

                    {/* Lesson Style */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Lesson Style</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-gold'>
                            <p className="text-muted small">Interactive structured sessions or Q&A style</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-platinum'>
                            <p className="text-muted small">Interactive structured sessions or Q&A style</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content" id='pricing-price-grid-elite'>
                            <p className="text-muted small">Interactive structured sessions or Q&A style</p>
                        </div>

                    {/* Payments */}
                        <div className="col p-3 d-flex">
                            <h4 className="pricing-price-grid-feature-title">Payments</h4>
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content pricing-price-grid-feature-content-b" id='pricing-price-grid-gold'>
                            <p className="text-muted small">Online, payment following each lesson</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content pricing-price-grid-feature-content-b" id='pricing-price-grid-platinum'>
                            <p className="text-muted small">Online, payment following each lesson</p>    
                        </div>
                        <div className="col text-center pricing-price-grid-feature-content pricing-price-grid-feature-content-b" id='pricing-price-grid-elite'>
                            <p className="text-muted small">Online, payment following each lesson</p>
                        </div>
                </div>
        
                {/* Footer */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="text-muted small">*please view our payment policy for more information: insert hyperlink to terms and conditions</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PricingPricegrid;
