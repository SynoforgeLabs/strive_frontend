import React from 'react';
import "../../css/ucat/ucat-hdiw.css";

function UcatHdiw() {
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 ucat-hdiw-main" id="ucat-hdiw">
            <div className="row col-lg-9 col-md-12 d-flex ucat-hdiw-sec">
                
                    <div className="container-fluid ucat-hdiw-container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-4">
                                <h2 className="fw-bold ucat-hdiw-title">How do I sign up?</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10">
                                <ol className="ucat-hdiw-list ps-3">
                                    <li className="mb-4 d-flex align-items-start">
                                        <span className="fw-bold me-2 ucat-hdiw-number">1</span>
                                        <span className="ucat-hdiw-step-text">
                                            Fill out <a href="#" className="fw-bold ucat-hdiw-link">this form</a> individually to confirm your attendance in sessions. Once we establish a group of at least 5, and no more than 8 students, we will get the free academic skills consultation organised!
                                        </span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="fw-bold me-2 ucat-hdiw-number">2</span>
                                        <span className="ucat-hdiw-step-text">
                                            <span className="fw-bold">Please note:</span> free academic skills consultations are not offered for group interview preparation sessions.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="ucat-hdiw-btn-row fluid-container d-flex">
                        <button className='btn btn-primary'>📃  Sign up for UCAT</button>
                    </div>

            </div>
        </section>
    );
}

export default UcatHdiw;
