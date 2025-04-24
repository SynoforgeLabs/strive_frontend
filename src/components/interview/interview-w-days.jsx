import React from 'react';
import "../../css/interview/interview-w-days.css";

function InterviewWdays() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-w-days-main" id="interview-w-days">
                <div className="row col-9 d-flex interview-w-days-sec">
                    <div className="container interview-w-days-container text-center">
                        <h2 className="fw-bold interview-w-days-title">2024 Workshop Days</h2>
                        <div className="row justify-content-center gy-5 interview-w-days-grid">
                            {/* Workshop 1 */}
                            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center interview-w-days-card">
                                <div className="interview-w-days-date-block mb-2">
                                    <div className="interview-w-days-month fw-bold">AUG</div>
                                    <div className="interview-w-days-day fw-bold">31<span className="interview-w-days-suffix">st</span></div>
                                    <div className="interview-w-days-weekday fw-bold">Saturday</div>
                                </div>
                                <div className="interview-w-days-label fw-bold">Workshop 1</div>
                            </div>
                            {/* Workshop 2 */}
                            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center interview-w-days-card">
                                <div className="interview-w-days-date-block mb-2">
                                    <div className="interview-w-days-month fw-bold">SEP</div>
                                    <div className="interview-w-days-day fw-bold">14<span className="interview-w-days-suffix">th</span></div>
                                    <div className="interview-w-days-weekday fw-bold">Saturday</div>
                                </div>
                                <div className="interview-w-days-label fw-bold">Workshop 2</div>
                            </div>
                            {/* Workshop 3 */}
                            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center interview-w-days-card">
                                <div className="interview-w-days-date-block mb-2">
                                    <div className="interview-w-days-month fw-bold">Sep</div>
                                    <div className="interview-w-days-day fw-bold">28<span className="interview-w-days-suffix">th</span></div>
                                    <div className="interview-w-days-weekday fw-bold">Saturday</div>
                                </div>
                                <div className="interview-w-days-label fw-bold">Workshop 3</div>
                            </div>
                            {/* Workshop 4 */}
                            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center interview-w-days-card">
                                <div className="interview-w-days-date-block mb-2">
                                    <div className="interview-w-days-month fw-bold">OCT</div>
                                    <div className="interview-w-days-day fw-bold">12<span className="interview-w-days-suffix">th</span></div>
                                    <div className="interview-w-days-weekday fw-bold">Saturday</div>
                                </div>
                                <div className="interview-w-days-label fw-bold">Workshop 4</div>
                            </div>
                            {/* Workshop 5 */}
                            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center interview-w-days-card">
                                <div className="interview-w-days-date-block mb-2">
                                    <div className="interview-w-days-month fw-bold">OCT</div>
                                    <div className="interview-w-days-day fw-bold">26<span className="interview-w-days-suffix">th</span></div>
                                    <div className="interview-w-days-weekday fw-bold">Saturday</div>
                                </div>
                                <div className="interview-w-days-label fw-bold">Workshop 5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InterviewWdays;
