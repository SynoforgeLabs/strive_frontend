import React from 'react';
import "../../css/pricing/pricing-hdiw.css";

function PricingHdiw() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 pricing-hdiw-main" id="pricing-hdiw">
                <div className="row col-11 col-lg-9 d-flex pricing-hdiw-sec">
                    <div className="col-12 text-center mb-5">
                        <h2 className="pricing-hdiw-title mb-5">How do I sign up?</h2>
                        <div className="row g-4">
                            <div className="col-12 col-md-4 d-flex">
                                <div className="card pricing-hdiw-step p-4">
                                    <div className="pricing-hdiw-step-number mb-3">1</div>
                                    <h3 className="pricing-hdiw-step-title">
                                        <a href="/find-a-tutor" className="text-decoration-none">Find a Tutor</a>
                                    </h3>
                                    <p className="pricing-hdiw-step-text mb-0">
                                        by looking through the tutor profiles and finding a suitable tutor.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex">
                                <div className="card pricing-hdiw-step p-4">
                                    <div className="pricing-hdiw-step-number mb-3">2</div>
                                    <h3 className="pricing-hdiw-step-title">Contact Your Tutor</h3>
                                    <p className="pricing-hdiw-step-text mb-0">
                                        Contact your tutor through their profile, they will contact you to schedule your free Academic Skills Consultation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex">
                                <div className="card pricing-hdiw-step p-4">
                                    <div className="pricing-hdiw-step-number mb-3">3</div>
                                    <h3 className="pricing-hdiw-step-title">Start Learning</h3>
                                    <p className="pricing-hdiw-step-text mb-0">
                                        Once the free academic skills consultation is complete, you will start having weekly sessions with your expert tutor!
                                    </p>
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
