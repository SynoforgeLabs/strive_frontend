import React from 'react';
import "../../css/interview/interview-hdiw.css";

function InterviewHdiw() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-hdiw-main" id="interview-hdiw">
                <div className="row col-lg-9 col-md-12 d-flex interview-hdiw-sec">
                    <div className="container-fluid interview-hdiw-container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-4">
                                <h2 className="fw-bold interview-hdiw-title">How do I sign up?</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10">
                                <ol className="interview-hdiw-list ps-3">
                                    <li className="mb-4 d-flex align-items-start">
                                        <span className="fw-bold me-2 interview-hdiw-number">1</span>
                                        <span className="interview-hdiw-step-text">
                                            Fill out <a href="#" className="fw-bold interview-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
                                        </span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="fw-bold me-2 interview-hdiw-number">2</span>
                                        <span className="interview-hdiw-step-text">
                                            <span className="fw-bold">Please note:</span> free academic skills consultations are not offered for group interview preparation sessions.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InterviewHdiw;
