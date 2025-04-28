import React from 'react';
import '../../css/home/home-price-grid.css'

function Pricegrid() {
  return (
    <section className="container-fluid py-5" id="home-pricing-plans">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="homeprice-grid-title mb-4">Pricing Plans</h2>
            <p className="homeprice-grid-subtitle">Choose the perfect plan for your tutoring needs</p>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {/* Gold Tier */}
          <div className="col-lg-4 col-md-6">
            <div className="card homeprice-grid-card homeprice-grid-gold h-100">
              <div className="card-body d-flex flex-column p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="card-title mb-0">⭐ Gold Tier</h3>
                  <div className="homeprice-grid-price">
                    <span className="h3">$60</span>/hr
                  </div>
                </div>
                <p className="card-text mb-4">Hand-picked tutors with strong subject knowledge and a passion for teaching.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">✓ 24/7 Support via Platform</li>
                  <li className="mb-2">✓ Progress Reports</li>
                  <li className="mb-2">✓ Medicine/Dentistry Interview Prep</li>
                </ul>
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="col-lg-4 col-md-6">
            <div className="card homeprice-grid-card homeprice-grid-platinum h-100">
              <div className="card-body d-flex flex-column p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="card-title mb-0">🌟 Platinum Tier</h3>
                  <div className="homeprice-grid-price">
                    <span className="h3">$80</span>/hr
                  </div>
                </div>
                <p className="card-text mb-4">Tutors with a wealth of experience and consistently outstanding student feedback.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">✓ Progress Reports</li>
                  <li className="mb-2">✓ 24/7 Support via Platform</li>
                  <li className="mb-2">✓ Medicine/Dentistry Interview Prep</li>
                </ul>
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          {/* Elite Tier */}
          <div className="col-lg-4 col-md-6">
            <div className="card homeprice-grid-card homeprice-grid-elite h-100">
              <div className="card-body d-flex flex-column p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="card-title mb-0">⚡ Elite Tier</h3>
                  <div className="homeprice-grid-price">
                    <span className="h3">$120</span>/hr
                  </div>
                </div>
                <p className="card-text mb-4">Top-tier tutors with 3+ years experience, glowing reviews, and academic excellence.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">✓ Progress Reports</li>
                  <li className="mb-2">✓ 24/7 Support via Platform</li>
                  <li className="mb-2">✓ Parent Consultations</li>
                  <li className="mb-2">✓ Medicine/Dentistry Interview Prep</li>
                  <li className="mb-2">✓ University/Scholarship Application Support</li>
                </ul>
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricegrid;
