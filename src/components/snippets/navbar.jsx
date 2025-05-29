import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/snippets/navbar.css';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate('/');
  };

  return (
    <div className="row w-100 d-flex nav-main g-0">
      <div className="col-12 g-0 nav-sec">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-0 col-9">
            <Link className="navbar-brand" to="/">
              <img src="/Images/logo/logo-h/logo-h-b.svg" alt="" className="nav-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu nav-item-drop-down" id="nav-au-dd">
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/aboutus">About us</Link></li>
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/reviews">Reviews</Link></li>
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/faq">FAQ</Link></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/contact-us">Contact US</a></li>
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/join-us">Become Tutor</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tutoring
                  </a>
                  <ul className="dropdown-menu nav-item-drop-down" id="nav-Tu-dd">
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/find-a-tutor">Private Tutoring</Link></li>
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/bring-a-friend-and-save">Bring a Friend and save</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Medical Entrance
                  </a>
                  <ul className="dropdown-menu nav-item-drop-down" id="nav-me-dd">
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/ucat">UCAT</Link></li>
                    <li><Link className="dropdown-item nav-item-drop-down-item" to="/interview-preperation">Interview Preperation</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                </li>
                <Link to='/find-a-tutor' className="btn btn-outline-primary nav-item nav-f-t-btn">
                  Find a Tutor
                </Link>
                {isAuthenticated() ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser?.first_name || "Account"}
                    </a>
                    <ul className="dropdown-menu nav-item-drop-down">
                      <li><Link className="dropdown-item nav-item-drop-down-item" to="/profile">My Profile</Link></li>
                      {currentUser?.student_profile && (
                        <li><Link className="dropdown-item nav-item-drop-down-item" to="/student/dashboard">Dashboard</Link></li>
                      )}
                      <li><a className="dropdown-item nav-item-drop-down-item" href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item login-signup-links">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>/
                    <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
