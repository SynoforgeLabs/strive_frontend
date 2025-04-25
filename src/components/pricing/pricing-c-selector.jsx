import React, { useState } from 'react';
import "../../css/pricing/pricing-c-selector.css";

function PricingCSelector() {
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
        <section className="row container-fluid section d-flex g-0 z-index-0 pricing-c-selector-main" id="pricing-c-selector">
            <div className="row col-lg-9 col-md-12 d-flex pricing-c-selector-sec">
                <div className="pricing-c-selector-wrapper g-0 col-md-7 align-items-center">
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
    );
}

export default PricingCSelector;
