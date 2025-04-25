import React from 'react';
import "../../css/ucat/ucat-hero.css";

function UcatHero() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 ucat-hero-main" id="ucat-hero">
                <div className="row col-9 d-flex ucat-hero-sec">
                    <div className="ucat-hero-pattern"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <div className="ucat-hero-content container-fluid text-end">
                                    <h1 className="ucat-hero-title display-5 fw-bold text-white mb-4">
                                        Ucat page main heading
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

export default UcatHero;
