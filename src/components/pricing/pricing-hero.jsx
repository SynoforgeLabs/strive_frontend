import React, { useState } from 'react';
import "../../css/pricing/pricing-hero.css";
import "../../css/pricing/pricing-c-selector.css";

function PricingHero() {
    const categories = [
        {
            label: 'Private Tutoring',
            sub: 'One to one lessons',
        },
        {
            label: 'Bring a Friend',
            sub: 'Save 12.5% on lessons',
        },
        {
            label: 'Bring 2 Friends',
            sub: 'Save 25% on lessons',
        },
        {
            label: 'Bring 3 Friends',
            sub: 'Save 37.5% on lessons',
        },
    ];
    const [selected, setSelected] = useState(0);
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
                <section className="row container-fluid section d-flex g-0 z-index-0 pricing-c-selector-main" id="pricing-c-selector">
            <div className="row col-lg-9 col-md-12 d-flex pricing-c-selector-sec">
                <div className="pricing-c-selector-wrapper g-0 col-md-12 align-items-center">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.label}
                            className={`pricing-c-selector-btn btn ${selected === idx ? 'pricing-c-selector-btn-active' : ''}`}
                            onClick={() => setSelected(idx)}
                            type="button"
                        >
                            <div className="pricing-c-selector-label fw-bold">{cat.label}</div>
                            <div className="pricing-c-selector-sub">{cat.sub}</div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
            </div>
        </section>
    );
}

export default PricingHero;
