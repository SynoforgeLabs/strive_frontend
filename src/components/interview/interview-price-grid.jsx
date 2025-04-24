import React from 'react';
import "../../css/interview/interview-price-grid.css";

function InterviewPriceGrid() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-price-grid-main" id="interview-price-grid">
                <div className="row col-9 d-flex interview-price-grid-sec">

                    <p className="row d-flex fw-semibold interview-price-grid-sub-h">
                    From 2020, over 90% of our students have received offers from medical and dental schools across Australia having completed our interview preparation course. 
                    </p>
                    
                    <h1 className="row d-flex fw-bold interview-price-grid-main-h">
                        Why choose us?
                    </h1>

                    <div className="row col-8 d-grid interview-price-grid">
                        <div className="grid-empty"></div>
                        <div className="d-flex p-3 price-grid-heading-main" id="gold-plan">
                            <span className="interview-price-grid-plan-des">
                            5 x Interview Workshops
                            </span>
                            <h1 className="fw-bold interview-price-grid-plan-price" id="plan-t-gold">
                                $30 <span>/hr</span> 
                            </h1>
                            <button className="btn btn-primary mt-4 p-3 fw-bold plan-gs-btn" id="plan-gs-gold-btn">
                                Get started
                            </button>
                        </div>
                        <div className="d-flex p-3 price-grid-heading-main" id="executive-plan">
                            <span className="interview-price-grid-plan-des">
                            Mock Interviews
                            </span>
                            <h1 className="fw-bold interview-price-grid-plan-price" id="plan-t-executive">
                            $100 <span>Per mock</span>
                            </h1>
                            <button className="btn btn-primary mt-4 p-3 fw-bold plan-gs-btn" id="plan-gs-executive-btn">
                                Get started
                            </button>
                        </div>
                        <div className="d-flex grid-row-start-main">
                            <h1 className="fw-bold interview-price-grid-row-main-h">
                                Our Tutors
                            </h1>
                        </div>
                        <div className="d-flex grid-row-prices" id="gold-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-gold-price-des">
                            Top scoring medical students with experience in numerous interviews across Australia
                            </span>
                        </div>
                        <div className="d-flex grid-row-prices" id="executive-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-executive-price-des">
                            Top scoring medical students with experience in numerous interviews across Australia
                            </span>
                        </div>
                        <div className="d-flex grid-row-start-main">
                            <h1 className="fw-bold interview-price-grid-row-main-h">
                            Lesson Style
                            </h1>
                        </div>
                        <div className="d-flex grid-row-prices" id="gold-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-gold-price-des">
                            Interactive small group sessions, both MMI and panel interviews covered
                            </span>
                        </div>
                        <div className="d-flex grid-row-prices" id="executive-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-executive-price-des">
                            1-on-1 interview mocks that emulate the real interview, feedback included
                            </span>
                        </div>
                        <div className="d-flex grid-row-start-main">
                            <h1 className="fw-bold interview-price-grid-row-main-h">
                            Duration
                            </h1>
                        </div>
                        <div className="d-flex grid-row-prices" id="gold-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-gold-price-des">
                            3 hours per workshop
                            </span>
                        </div>
                        <div className="d-flex grid-row-prices" id="executive-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-executive-price-des">
                            20 minute mock, 10 minutes of comprehensive feedback
                            </span>
                        </div>
                        <div className="d-flex grid-row-start-main">
                            <h1 className="fw-bold interview-price-grid-row-main-h">
                            Session Times
                            </h1>
                        </div>
                        <div className="d-flex grid-row-prices" id="gold-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-gold-price-des">
                            10am – 1pm AEST, dates stated below
                            </span>
                        </div>
                        <div className="d-flex grid-row-prices" id="executive-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-executive-price-des">
                            Flexible scheduling, at a convenient time to you
                            </span>
                        </div>
                        <div className="d-flex grid-row-start-main">
                            <h1 className="fw-bold interview-price-grid-row-main-h">
                            Parent consultations
                            </h1>
                        </div>
                        <div className="d-flex grid-row-prices grid-bottom" id="gold-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-gold-price-des">
                            Online, payment following each lesson
                            </span>
                        </div>
                        <div className="d-flex grid-row-prices grid-bottom" id="executive-plan">
                            <span className="interview-price-grid-row-p-des" id="grid-executive-price-des">
                            Online, payment following each lesson
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InterviewPriceGrid;
