import React from 'react';
import "../../css/pricing/pricing-hero.css";

function PricingHero() {
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 pricing-hero-main" id="pricing-hero">
            <div className="row col-9 d-flex pricing-hero-sec">
                <div className="pricing-hero-pattern"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <div className="pricing-hero-content container-fluid text-end">
                                <h1 className="pricing-hero-title display-5 fw-bold text-white mb-4">
                                    Pricing page heading
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingHero;
