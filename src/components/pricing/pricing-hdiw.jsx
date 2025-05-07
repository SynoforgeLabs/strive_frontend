import React from 'react';
import "../../css/pricing/pricing-hdiw.css";

function PricingHdiw() {
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
                                            Fill out <a href="#" className="fw-bold pricing-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
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
            </section>
        </>
    );
}

export default PricingHdiw;
