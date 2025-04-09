import React from 'react';
import '../../css/become-tutor/become-tutor.css';

const Perks = () => {
  return (
    <div className="become-tutor-perks">
      <div className="container">
        <h2>Perks of Tutoring at Strive Academics</h2>
        <div className="perks-container">
          <div className="perk-card">
            <div className="perk-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="perk-content">
              <h3>Join a Tutor-Friendly Community</h3>
              <p>We get it. Balancing tutoring with uni, work, and life can be tough. At Strive Academics, we're here to support you every step of the way. Need help juggling commitments? Just reach out to our team!</p>
            </div>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <i className="fas fa-badge-check"></i>
            </div>
            <div className="perk-content">
              <h3>We Handle the Hassle</h3>
              <p>No more payment headaches or advertising stress. Our secure system and expert marketing team take care of those details, so you can focus on delivering excellent tutoring.</p>
            </div>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="perk-content">
              <h3>Unlock Career Opportunities</h3>
              <p>Mistakes happen, and that's okay. We're committed tAs you grow with Strive Academics, so do your opportunities. We offer stellar references, support for rental applications, and exciting opportunities to join our management team.</p>
            </div>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <i className="fas fa-users-class"></i>
            </div>
            <div className="perk-content">
              <h3>Join a Thriving Team</h3>
              <p>Be part of a supportive community of tutors. Enjoy team events, grow your leadership skills, and earn higher rates as you progress.</p>
            </div>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <div className="perk-content">
              <h3>We're Here to Support You</h3>
              <p>Mistakes happen, and that's okay. We're committed to backing our tutors and helping you improve.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks; 