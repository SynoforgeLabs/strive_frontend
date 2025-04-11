import React from 'react';
import "../../css/joinus/joinus-hero.css";

function JoinusHero() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 joinus-hero-main" id="joinus-hero">
                <div className="row col-9 d-flex joinus-hero-sec">
                    <div className="joinus-hero-pattern"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <div className="joinus-hero-content container-fluid text-end">
                                    <h1 className="joinus-hero-title display-5 fw-bold text-white mb-4">
                                        Join the Strive Academics Team
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row container-fluid section d-flex g-0 z-index-0 joinus-hero-subtitle-wrapper">
                <h2 className="joinus-hero-subtitle fw-bold text-center">
                    We have set criteria and only hire the best tutors across Australia.
                </h2>                
            </div>
        </>
    );
}

export default JoinusHero;
