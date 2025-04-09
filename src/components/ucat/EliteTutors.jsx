import React from 'react';
import '../../css/ucat.css';

const EliteTutors = () => {
  return (
    <div className="elite-tutors-section">
      <div className="content-container reverse">
        <div className="text-content">
          <h2>Elite Tutors</h2>
          <p>
            Top-scoring medical students with an average ATAR of 99+ and high 3000+ UCAT scores. 
            They currently study at top universities and have 10,000+ hours of combined tutoring experience.
          </p>
        </div>
        <div className="image-container">
          <img src="/images/ucat/tutors-illustration.svg" alt="Elite Tutors" />
        </div>
      </div>
    </div>
  );
};

export default EliteTutors; 