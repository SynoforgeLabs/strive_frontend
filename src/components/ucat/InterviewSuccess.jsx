import React from 'react';
import '../../css/ucat/ucat.css';

const InterviewSuccess = () => {
  return (
    <div className="interview-success-section">
      <div className="content-container">
        <div className="text-content">
          <h2>Interview Success</h2>
          <p>
            Over <span className="highlight">90%</span> of our students who received interview 
            preparation secured offers at medical schools across Australia (2020-2024).
          </p>
        </div>
        <div className="image-container">
          <img src="/images/ucat/interview-illustration.svg" alt="Interview Preparation" />
        </div>
      </div>
    </div>
  );
};

export default InterviewSuccess; 