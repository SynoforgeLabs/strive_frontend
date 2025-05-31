import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../css/dashboards/tutor/snippets/navbar.css';

function TutorNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`tutor-navbar-main ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Profile Section */}
      <div className="tutor-navbar-profile">
        <div className="tutor-navbar-profile-info">
          <div className="tutor-navbar-avatar">
            {/* Placeholder for profile image */}
            <div className="tutor-navbar-avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="tutor-navbar-user-info">
            <h6 className="tutor-navbar-greeting">Good morning</h6>
            <h5 className="tutor-navbar-username">Tutor Name</h5>
          </div>
        </div>
        <button 
          className="tutor-navbar-collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="tutor-navbar-nav">
        <div className="tutor-navbar-section">
          <ul className="tutor-navbar-menu">
            <li className="tutor-navbar-menu-item">
              <Link to="/tutor/account-settings" className="tutor-navbar-menu-link">
                <i className="fas fa-user-cog"></i>
                <span>Account Settings</span>
              </Link>
              <Link to="/tutor/documents" className="tutor-navbar-menu-link">
              <i class="fa-solid fa-file"></i>
                <span>Documents</span>
              </Link>
              <Link to="/tutor/payment-details" className="tutor-navbar-menu-link">
              <i class="fa-solid fa-wallet"></i>
                <span>Payment Details</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="tutor-navbar-logout">
          <button className="tutor-navbar-logout-btn">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default TutorNavbar;
