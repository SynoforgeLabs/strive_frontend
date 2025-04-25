import React, { useState, useEffect } from 'react';
import '../../css/snippets/navbar.css';

function Navbar() {

  return (
    <div className="row w-100 d-flex nav-main g-0">
      <div className="col-lg-8 col-md-12 col-sm-12 g-0 nav-sec">
        <nav className="navbar navbar-expand-lg mt-lg-4 mt-md-0 mt-md-0">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="/">Logo</a>
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
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/aboutus">About us</a></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/reviews">Reviews</a></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/faq">FAQ</a></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="#">Contact US</a></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/join-us">Become Tutor</a></li>
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
                    <li><a className="dropdown-item nav-item-drop-down-item" href="#">Private Tutoring</a></li>
                    <li><a className="dropdown-item nav-item-drop-down-item" href="/bring-a-friend-and-save">Bring a Friend and save</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/ucat">UCAT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/pricing">Pricing</a>
                </li>
                <a href='/find-a-tutor' className="btn btn-outline-primary nav-item nav-f-t-btn">
                  Find a Tutor
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
