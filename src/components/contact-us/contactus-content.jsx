import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/contact-us/contactus-content.css";

function ContactusContent() {
    return (
        <section className="contactus-content-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="contactus-content-box text-center">
                            <div className="contactus-content-text mb-5">
                                <p className="contactus-content-description">
                                    Our support team is available throughout the week to assist you. 
                                    If your question isn't covered in our FAQs, feel free to reach out — we're happy to help!
                                </p>
                            </div>
                            
                            <div className="contactus-content-buttons d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                                <a 
                                    href="mailto:strive.ucat@gmail.com" 
                                    className="btn contactus-content-email-btn"
                                >
                                    <span >
                                    📧
                                    </span>
                                    Email Us
                                </a>
                                <Link 
                                    to="/join-us" 
                                    className="btn contactus-content-tutor-btn"
                                >
                                    <span>
                                    🧑🏻‍🏫
                                    </span>
                                    Become a Tutor
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactusContent;

