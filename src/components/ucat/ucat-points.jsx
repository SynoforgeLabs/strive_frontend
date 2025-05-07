import React from 'react';
import "../../css/ucat/ucat-points.css";

function UcatPoints() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 ucat-points-main" id="ucat-points">
                <div className="row col-11 col-lg-9 d-flex flex-column ucat-points-sec">
                    {/* First Point */}
                    <div className="row align-items-center svg">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content">
                                <h2 className="ucat-points-title mb-4">Proven Results</h2>
                                <p className="ucat-points-text">
                                    Our students achieve an average UCAT score above <span className="fw-bold">3000</span>, 
                                    with our highest score this year being an impressive <span className="fw-bold">3330</span>!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat1.svg"
                                alt="Students achieving high scores" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                    </div>

                    {/* Second Point */}
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat2.svg" 
                                alt="Exam tested strategies" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content text-start text-lg-end">
                                <h2 className="ucat-points-title mb-4">Exam Tested Strategies</h2>
                                <p className="ucat-points-text">
                                    The strategies we teach are the ones that our tutors used to score well above 3000, 
                                    and many of our students have also received these scores using our strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third Point */}
                    <div className="row align-items-center svg">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content">
                                <h2 className="ucat-points-title mb-4">Interview Success</h2>
                                <p className="ucat-points-text">
                                Over <span className="fw-bold">𝟗𝟎%</span>of our students who received interview preparation secured offers at medical schools across Australia (2020-2024).<span className="fw-bold">3330</span>!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat3.svg" 
                                alt="Students achieving high scores" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                    </div>

                    {/* Fourth Point */}
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat4.svg" 
                                alt="Exam tested strategies" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content text-start text-lg-end">
                                <h2 className="ucat-points-title mb-4">Elite Tutors</h2>
                                <p className="ucat-points-text">
                                Top-scoring medical students with an average ATAR of 99+ and top 5 percentile UCAT scores. They currently study at top universities and have 10,000+ hours of combined tutoring experience
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Fifth Point */}
                    <div className="row align-items-center svg">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content">
                                <h2 className="ucat-points-title mb-4">Rigorous Tutor Selection</h2>
                                <p className="ucat-points-text">
                                    Our team carefully selects tutors based on tutoring experience, student reviews, academic background, results, and current university studies. All tutors are in the top <span className="fw-bold">𝟑%</span>with a mean ATAR of well above 99. All tutors also have a current Working With Children Check.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat5.svg" 
                                alt="Students achieving high scores" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                    </div>

                    {/* Sixth Point */}
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-12 col-lg-6 text-center">
                            <img 
                                src="/Images/site-images/ucat/ucat6.svg" 
                                alt="Exam tested strategies" 
                                className="ucat-points-image img-fluid"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div className="ucat-points-content text-start text-lg-end">
                                <h2 className="ucat-points-title mb-4">Online Small Group Sessions</h2>
                                <p className="ucat-points-text">
                                Learn alongside a small group of like-minded students to keep each other accountable and progress towards a stellar score with the guidance of your expert tutor. With the UCAT exam being a computer based exam, online sessions are the way to go!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UcatPoints;
