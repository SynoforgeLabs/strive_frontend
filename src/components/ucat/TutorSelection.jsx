import React from 'react';
import '../../css/ucat/ucat.css';

const TutorSelection = () => {
  return (
    <div className="tutor-selection-section">
      <div className="content-container">
        <div className="text-content">
          <h2>Rigorous Tutor Selection</h2>
          <p>
            Our tutors are carefully chosen based on tutoring experience, student reviews, 
            academic background, results, and current studies. We only hire the top 3% with a mean ATAR of 
            well above 99. All tutors also have a current Working With Children Check.
          </p>
        </div>
        <div className="image-container">
          <img src="/images/ucat/selection-illustration.svg" alt="Tutor Selection Process" />
        </div>
      </div>
    </div>
  );
};

export default TutorSelection; 