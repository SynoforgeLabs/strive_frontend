import React from 'react';
import '../../css/ucat.css';

const SignUpProcess = () => {
  return (
    <div className="signup-process-section">
      <h2>How do I sign up?</h2>
      
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>
              Fill out <span className="highlight">this form</span> individually to confirm your attendance to sessions. Once 
              we establish a group of at least 3, and no more than 9 students, we will get back to you with available times.
            </p>
          </div>
        </div>
        
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>
              Once the free academic skills consultation is complete, you will start having 
              weekly sessions with your group and expert tutor!
            </p>
          </div>
        </div>
        
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>
              Please note: The free academic skills consultation will not be offered if you 
              are joining an existing group.
            </p>
          </div>
        </div>
      </div>
      
      <div className="cta-buttons">
        <button className="primary-button">Become a Tutor</button>
        <button className="secondary-button">Find a Tutor</button>
      </div>
    </div>
  );
};

export default SignUpProcess; 