import React from 'react';
import '../../css/ucat/ucat.css';

const SmallGroupSessions = () => {
  return (
    <div className="small-group-section">
      <div className="content-container reverse">
        <div className="text-content">
          <h2>Online Small Group Sessions</h2>
          <p>
            Learn alongside a small group of like-minded students to keep each other accountable and 
            motivated. Master the UCAT exam under the guidance of your expert tutor. With the UCAT exam being a 
            computer based test, our sessions are the way to go!
          </p>
        </div>
        <div className="image-container">
          <img src="/images/ucat/group-illustration.svg" alt="Small Group Sessions" />
        </div>
      </div>
    </div>
  );
};

export default SmallGroupSessions; 