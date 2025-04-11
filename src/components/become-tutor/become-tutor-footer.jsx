import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/become-tutor/become-tutor.css';

const Footer = () => {
  return (
    <div className="become-tutor-footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Strive Academics</h3>
            <p>email@gmail.com</p>
            <p>+94 123456789</p>
            <p>221B Baker Street,<br/>London</p>
            <div className="footer-social mt-3">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-center">
            <div>
              <ul className="footer-links">
                <li><Link to="/terms">Terms and Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-right">
            <Link to="/become-tutor" className="footer-button mb-3 d-block">Become a Tutor</Link>
            <Link to="/find-tutor" className="footer-button d-block">Find a Tutor</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 