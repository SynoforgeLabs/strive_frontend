import React from 'react';
import '../../css/ucat.css';

const ProvenResults = () => {
  return (
    <div className="proven-results-section">
      <div className="content-container">
        <div className="text-content">
          <h2>Proven Results</h2>
          <p>
            Our students achieve an average UCAT score above <span className="highlight">3000</span>, 
            with our highest score this year being an impressive <span className="highlight">3330</span>!
          </p>
        </div>
        <div className="image-container">
          <img src="/images/ucat/results-illustration.svg" alt="UCAT Results Chart" />
        </div>
      </div>
    </div>
  );
};

export default ProvenResults; 