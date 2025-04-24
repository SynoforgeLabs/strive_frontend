import React from 'react';
import "../../css/interview/interview-hero.css";

function InterviewHero() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-hero-main" id="interview-hero">
                <div className="row col-9 d-flex interview-hero-sec">
                    <div className="interview-hero-pattern"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <div className="interview-hero-content container-fluid text-end">
                                    <h1 className="interview-hero-title display-5 fw-bold text-white mb-4">
                                        Interview Preparation
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InterviewHero;
