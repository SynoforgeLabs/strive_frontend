import React, { useState, useEffect } from 'react';
import "../../css/pricing/pricing-hdiw.css";

function PricingHdiw() {  
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 pricing-hdiw-main" id="pricing-hdiw">
                <div className="row col-lg-9 col-md-12 d-flex pricing-hdiw-sec">
                    <div className="container-fluid pricing-hdiw-container">
                        <div className="row justify-content-center">
                    <div className="col-12 text-center mb-5">
                                <h2 className="fw-bold pricing-hdiw-title">How do I sign up?</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10 col-sm-12">
                                <div className="pricing-hdiw-steps">
                                    <div className="pricing-hdiw-step">
                                        <div className="pricing-hdiw-step-number">1</div>
                                        <div className="pricing-hdiw-step-content">
                                            <h3 className="pricing-hdiw-step-title">Find the Right Tutor for You</h3>
                                            <p className="pricing-hdiw-step-text">
                                            <a className="pricing-hdiw-link" href="/find-a-tutor">Find a Tutor</a> by looking through the tutor profiles and finding a suitable tutor. 
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="pricing-hdiw-step">
                                        <div className="pricing-hdiw-step-number">2</div>
                                        <div className="pricing-hdiw-step-content">
                                            <h3 className="pricing-hdiw-step-title">Schedule Your Free Consultation Through Tutor Profiles</h3>
                                            <p className="pricing-hdiw-step-text">
                                            Contact your tutor through their profile, they will contact you to schedule your free Academic Skills Consultation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pricing-hdiw-step">
                                        <div className="pricing-hdiw-step-number">3</div>
                                        <div className="pricing-hdiw-step-content">
                                            <h3 className="pricing-hdiw-step-title">Start Your Personalized Tutoring Journey</h3>
                                            <p className="pricing-hdiw-step-text">
                                            Once the free academic skills consultation is complete, you will start having weekly sessions with you expert tutor! 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
            </section>
        </>
    );
}

export default PricingHdiw;
