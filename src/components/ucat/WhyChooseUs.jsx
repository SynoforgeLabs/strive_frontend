import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ucat/ucat.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-section">
      <h1 className="section-title">Why Choose Us ?</h1>
      
      <div className="pricing-container">
        <div className="labels-column">
          <div className="label">Our Tutors</div>
          <div className="label">Lesson Style</div>
          <div className="label">Duration</div>
          <div className="label">Session Times</div>
          <div className="label">Parent consultations</div>
        </div>

        <div className="pricing-card">
          <div className="card-header">
            <h2>Online Small Group Sessions</h2>
            <div className="price">$30</div>
            <Link to="/find-tutor" className="get-started-btn">
              Get Started
            </Link>
          </div>
          
          <div className="card-content">
            <div className="info-row">
              <div className="value">Top scoring medical students with experience in numerous interviews across Australia</div>
            </div>
            
            <div className="info-row">
              <div className="value">Interactive small group sessions with a focus on question based learning using established questionbanks.</div>
            </div>
            
            <div className="info-row">
              <div className="value">3 hours per week</div>
            </div>
            
            <div className="info-row">
              <div className="value">An agreed weekly recurring time, agreed upon once a group is confirmed.</div>
            </div>
            
            <div className="info-row">
              <div className="value">Online, payment following each lesson</div>
            </div>
          </div>
          
          <div className="card-footer">
            <p className="terms-note">
              *please view our payment policy for more information: insert hyperlink to terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 